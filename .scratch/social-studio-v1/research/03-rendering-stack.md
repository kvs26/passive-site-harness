# 03 — Rendering stack: HTML/CSS (+ Three.js) → PNG

Date: 2026-10-23 · Ticket: [../issues/03-rendering-stack.md](../issues/03-rendering-stack.md)
Machine tested: Apple M3 Pro (arm64), macOS, Node v26.0.0, `playwright` ^1.56.1 (Chromium 141.0.7390.37), `three` ^0.186.1.

## Recommendation

**Playwright + its bundled Chromium headless shell + Three.js from local `node_modules`.**
Use DSF 1 and set the viewport to the exact target size. Launch flag: `--enable-unsafe-swiftshader`.

| Option | Verdict | Why |
|---|---|---|
| **Playwright `chromium.launch()`** (headless shell) | **Use** | Real Blink, so every CSS feature, SVG, web font and WebGL2 works. It renders in ~0.6–1.2 s per slide. The browser is already in `~/Library/Caches/ms-playwright`. |
| Playwright `channel: 'chromium'` (new headless) | Avoid | Same output, but 16.4 s for one render (launch 3.4 s, load 12.4 s). Playwright calls it "more authentic", but we don't need that. |
| Puppeteer | Equivalent, no gain | Its default is new Headless; `headless: 'shell'` = chrome-headless-shell, "more performant for automation tasks". It needs its own Chrome download, and it offers no feature that Playwright lacks for this job. |
| Satori (+resvg/sharp) | Reject | It uses its own layout engine and does "not guarantee that the SVG will 100% match the browser-rendered HTML". It ignores `@font-face`, `@import` and external `<link>`/`<script>`. 3D perspective is approximate. WebGL is experimental only and needs the native `gl` package; there is no Three.js runtime. That's fine for simple OG cards, but wrong for agent-written HTML. |

### WebGL flags (measured, 1000×1500, same page, 2–3 runs each)

| Launch args | WebGL renderer reported | Total ms |
|---|---|---|
| none (default) | ANGLE Vulkan **SwiftShader** (CPU) | 899–1510 |
| `--enable-unsafe-swiftshader` (recommended, explicit) | SwiftShader | 1121 (+593 for a 2nd slide in the same session) |
| `--use-angle=swiftshader --enable-unsafe-swiftshader` | SwiftShader | 3651–4892 ← **4× slower, don't** |
| `--use-angle=metal --enable-gpu --ignore-gpu-blocklist` | ANGLE Metal, Apple M3 Pro | 811–2832 |
| `channel: 'chromium'` | ANGLE Metal | 16409 |

- **Playwright already adds `--enable-unsafe-swiftshader` on macOS.** See `playwright-core/lib/server/chromium/chromium.js` L275-277: `if (os.platform() === "darwin") chromeArguments.push("--enable-unsafe-swiftshader")`. So the default launch gives WebGL2 out of the box here. We pass the flag explicitly so the same script also works on Linux/CI, where Playwright doesn't add it.
- Chromium has deprecated the automatic SwiftShader fallback for WebGL. `--enable-unsafe-swiftshader` is the documented opt-in.
- Metal is the fastest option, but the output depends on the GPU. In this test the sampled WebGL pixel was identical to SwiftShader (`[172,180,243,255]`). Keep Metal as an opt-in env switch only.
- Playwright also always adds `--headless --hide-scrollbars --mute-audio --no-sandbox` and `--force-color-profile=srgb`. sRGB matches the Pinterest sRGB note in [02](02-platform-rules-best-practice.md).

## Working render script (tested)

Tested as `/tmp/ss03/render-min.mjs`. Usage: `node render.mjs 1000 1500 slide1.html slide2.html …`. It runs from the folder that holds `node_modules/` and the slide HTML, and writes `<slide>-<W>x<H>.png`. One browser session renders a whole carousel.

```js
import { chromium } from 'playwright';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const [W, H, ...slides] = process.argv.slice(2);
const ROOT = process.cwd(), ORIGIN = 'http://studio.local';
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2' };

// headless shell. Playwright already adds this flag on macOS; explicit so it also holds on Linux/CI.
const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const ctx = await browser.newContext({ viewport: { width: +W, height: +H }, deviceScaleFactor: 1 });
// serve the skill folder from a fake http origin (ES-module imports of three don't work from file://)
await ctx.route(`${ORIGIN}/**`, async route => {
  const p = path.join(ROOT, decodeURIComponent(new URL(route.request().url()).pathname));
  if (!p.startsWith(ROOT + path.sep)) return route.abort();           // path-traversal guard
  try { await route.fulfill({ body: await readFile(p), contentType: MIME[path.extname(p)] || 'application/octet-stream' }); }
  catch { await route.fulfill({ status: 404, body: 'not found' }); }
});
for (const slide of slides) {
  const t0 = performance.now();
  const page = await ctx.newPage();
  page.on('pageerror', e => console.error('[pageerror]', slide, e.message));
  await page.goto(`${ORIGIN}/${slide}`);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });
  const info = await page.evaluate(() => window.__info || {});
  const out = slide.replace(/\.html$/, `-${W}x${H}.png`);
  await page.screenshot({ path: out, type: 'png', animations: 'disabled' });
  await page.close();
  const buf = await readFile(out);                                       // PNG IHDR width/height
  console.log(JSON.stringify({ out, px: [buf.readUInt32BE(16), buf.readUInt32BE(20)], ms: Math.round(performance.now() - t0), info }));
}
await browser.close();
```

For the shared skill renderer, add these on top:
- fail when `px` ≠ `[W,H]`
- fail when `info.error` is set or `info.webgl !== 'webgl2'` on a page that has a canvas
- filter out the console noise "GPU stall due to ReadPixels"

## Ready-wait pattern (inside the slide HTML)

The renderer waits on one flag only: `window.__ready === true`. Each slide sets it last:

```html
<script type="importmap">{ "imports": { "three": "/node_modules/three/build/three.module.js" } }</script>
<script type="module">
  window.__ready = false; window.__info = {};
  try {
    const THREE = await import('three');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(devicePixelRatio); renderer.setSize(w, h, false);
    // …build scene… optionally: await renderer.compileAsync(scene, camera);
    renderer.render(scene, camera);                 // one static frame; no setAnimationLoop
  } catch (e) { window.__info.error = String(e?.message || e); }   // WebGL context can fail — record it
  await document.fonts.ready;
  await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
  window.__info.fonts = ['900 40px Fraunces'].map(f => [f, document.fonts.check(f)]);
  requestAnimationFrame(() => requestAnimationFrame(() => { window.__ready = true; }));  // let compositor paint
</script>
```

- Use `preserveDrawingBuffer: true` so the WebGL frame is still in the canvas when the screenshot happens (three's default is `false`).
- Three.js r163+ is WebGL2-only. On a context failure, record the error; the renderer then fails loudly. Don't ship a blank PNG.
- Don't use `waitUntil: 'networkidle'`. Playwright's docs discourage it; the explicit flag is deterministic.
- `animations: 'disabled'` freezes CSS animations and transitions at their end state.

## Font strategy

- **Default: local woff2 via @fontsource**
  - Run `npm i @fontsource/<family>` (static weights) or `@fontsource-variable/<family>` in the skill folder.
  - Link the CSS directly: `<link rel="stylesheet" href="/node_modules/@fontsource/fraunces/900.css">`. The route handler serves the CSS and its relative `files/*.woff2`.
  - Result: offline, deterministic, pinned versions.
  - Fontsource docs assume a bundler. Plain `<link>` to the package CSS works because the route serves real files.
  - Not yet smoke-tested: the test used the CDN. It's low-risk because it's the same mechanism as the three import, which was verified.
- **Fallback: Google Fonts CDN** with `&display=block`. Verified working: `document.fonts.check` returned true for Fraunces 900 and Space Grotesk 700. It needs the network, and the font version can change under us.
- Either way, `await document.fonts.ready`, then assert `document.fonts.check(...)` for every family/weight the design uses. A false result means a silent fallback font, so fail.

## Exact pixels / sharpness

- `viewport = target size` with `deviceScaleFactor: 1` gives exact pixels. Verified: 1000×1500, 1080×1350 and 1080×1440, read back from the PNG IHDR.
- `deviceScaleFactor: 2` gives 2000×3000 (2.94 MB), so you'd have to downscale it. It isn't needed: the platforms specify the 1× sizes (see [02](02-platform-rules-best-practice.md)).
- PNG at 1× is ~0.9 MB for a busy gradient/3D slide. That's far under Pinterest's 20 MB limit (from 02). Pinterest re-encodes to JPEG anyway, so output PNG.

## Where dependencies live

- **`.agents/skills/social-studio/package.json`** holds `playwright`, `three`, and optional `@fontsource/*` packages. Run the renderer with that folder as `cwd`, or point `ROOT` at it, so `/node_modules/...` resolves.
- Playwright reuses the browsers already in `~/Library/Caches/ms-playwright` (chromium-1194 + chromium_headless_shell-1194 for 1.56). If the version is bumped, run `npx playwright install chromium`.
- Don't add anything to any `sites/*/package.json`. Add `node_modules/` to the skill folder's ignore.

## Gotchas

1. **`file://` + ES modules/importmap don't load.** That's why the script serves files from a fake `http://studio.local` origin with `route`. Routing disables the HTTP cache (Playwright docs). That's harmless here.
2. **Don't add `--use-angle=swiftshader`.** It renders the same output but takes 3.6–4.9 s, against ~1 s for the default.
3. **`channel: 'chromium'` is ~16 s per launch+render.** Stay on the headless shell.
4. **DSF > 1 changes the output size.** Keep DSF at 1 for platform-exact images.
5. **Console noise:** "GPU stall due to ReadPixels" comes from `readPixels` sampling and is harmless.
6. `require('three/package.json')` throws because the file isn't exported. Read the version from `package.json` instead.
7. macOS has no `timeout` command. Rely on the `waitForFunction` 30 s timeout.
8. The first-ever launch is cold (~3.2 s total). After that it's ~0.85–1.5 s, plus ~0.6 s for each extra slide in the same session.
9. The default WebGL path is CPU SwiftShader, so heavy scenes (big shadows, post-processing) will be slower. Opt into Metal (`--use-angle=metal --enable-gpu --ignore-gpu-blocklist`) only if that becomes a problem.

## Smoke test result — PASS

Test page `/tmp/ss03/test.html` contains:
- Google-Fonts Fraunces + Space Grotesk
- radial mesh gradient + `mix-blend-mode` grain
- `background-clip:text` gradient headline
- CSS 3D card (`perspective` + `rotateX/Y/Z`, `backdrop-filter`, `box-shadow`)
- SVG gradient badge with `drop-shadow`
- Three.js torus knot + 3 cubes (MeshStandardMaterial, 3 lights)

| Output | Pixels | Bytes | Timing (ms) |
|---|---|---|---|
| `/tmp/ss03/test-1000x1500.png` | 1000×1500 | ~0.9 MB | 1121 (render-min, includes launch) |
| `/tmp/ss03/test-1080x1440.png` | 1080×1440 | 945,766 | launch 110 / loadReady 499 / shot 238 / total 847 |
| `/tmp/ss03/slide2-1080x1350.png` (2nd carousel slide) | 1080×1350 | — | 610 |

I viewed the PNGs. Everything rendered correctly:
- serif web font, with gold gradient text
- gradients + grain
- tilted frosted-glass 3D card
- SVG check badge
- lit, specular Three.js torus knot and cubes
- footer in Space Grotesk

`__info`: `webgl2`; SwiftShader renderer; non-zero sample pixel; `fonts.check` true for both families.

## Sources

- Playwright browsers (headless shell vs `channel:'chromium'` new headless, cache location): https://playwright.dev/docs/browsers
- Playwright `page.screenshot` (`animations`, `scale`, `type`), `waitForFunction`, networkidle discouraged, route disables cache: https://playwright.dev/docs/api/class-page
- Local source: `node_modules/playwright-core/lib/server/chromium/chromium.js` L275-277 (darwin → `--enable-unsafe-swiftshader`), L280-288 (headless args, `--no-sandbox`)
- Puppeteer headless modes (v25.16.0): https://pptr.dev/guides/headless-modes
- Chrome old headless → `chrome-headless-shell`: https://developer.chrome.com/docs/chromium/headless
- SwiftShader WebGL fallback deprecation, `--enable-unsafe-swiftshader`, `--use-angle=swiftshader`: https://chromium.googlesource.com/chromium/src/+/main/docs/gpu/swiftshader.md
- Satori README (layout engine, font buffers, ignored `@font-face`/`<link>`, experimental WebGL): https://github.com/vercel/satori
- three.js WebGLRenderer (`preserveDrawingBuffer` default false, `compileAsync`, WebGL1 dropped r163): https://threejs.org/docs/pages/WebGLRenderer.html
- Fontsource install (static vs variable packages, per-weight CSS, unicode-range): https://fontsource.org/docs/getting-started/install
- Platform sizes / file limits: [02-platform-rules-best-practice.md](02-platform-rules-best-practice.md)
- Measurements: `/tmp/ss03/run-variants.log`, `run-final.log`, `run-rerun.log`, `run-min.log`, `run-min2.log`
