# Rendering stack: HTML/CSS (+ Three.js 3D) → PNG in headless Chromium

Type: research
Status: resolved
Blocked by: —

## Question

What is the most reliable way, on the owner's Mac, to render agent-written HTML/CSS designs to PNG at exact sizes (1000×1500, 1080×1350/1440) — including optional **3D** (Three.js/WebGL, CSS 3D transforms) — for the shared renderer?

- Playwright (Chromium already in `~/Library/Caches/ms-playwright`) vs Puppeteer vs Satori/resvg — trade-offs for rich CSS (filters, blend modes, backdrop-filter, gradients, SVG), fonts, and WebGL.
- Does WebGL/Three.js render in headless Chromium here (GPU vs SwiftShader/ANGLE flags)? Wait-for-ready pattern for fonts/images/3D scenes before screenshot.
- Fonts: Google Fonts at render time vs local `@fontsource` files (determinism, offline).
- Device scale factor / output sharpness, PNG vs JPG size limits for each platform.
- Where the renderer's npm deps should live (skill folder `package.json`?) without touching site repos.

**Include a smoke test:** actually render one 1000×1500 test HTML with a web font, a gradient, and a small Three.js scene to `/tmp`, and view the PNG. Output: recommended stack + minimal invocation + gotchas.

## Answer

- **Stack:** Playwright `chromium.launch()` (bundled headless shell, Chromium 141) + `three` loaded from local `node_modules`. Puppeteer has no advantage here, and Satori is rejected: it ignores `<link>`/`@font-face`, uses its own layout, and has no Three.js runtime.
- **Flags:** `args: ['--enable-unsafe-swiftshader']`. Playwright already adds it on macOS, which gives WebGL2 via ANGLE/SwiftShader. Don't add `--use-angle=swiftshader` (4× slower), and don't use `channel:'chromium'` (16 s). The optional GPU path is `--use-angle=metal --enable-gpu --ignore-gpu-blocklist`.
- **Exact pixels:** viewport = target size with `deviceScaleFactor: 1` gives exactly 1000×1500 / 1080×1350 / 1080×1440 (checked from PNG IHDR). Output PNG (~0.9 MB).
- **Ready-wait:** the page sets `window.__ready = true` after the Three.js render (`preserveDrawingBuffer:true`), `document.fonts.ready`, `img.decode()`, and a double rAF. The renderer calls `waitForFunction(__ready)`, then `screenshot({animations:'disabled'})`.
- **Serving:** a fake `http://studio.local` origin via `context.route`, because ES modules don't load from `file://`.
- **Fonts:** local `@fontsource` woff2 by default. Google Fonts CDN with `display=block` also verified. Assert `document.fonts.check`.
- **Deps:** `.agents/skills/social-studio/package.json`; never in site repos.
- **Smoke test PASS** (~0.85–1.5 s per render, +0.6 s per extra slide): `/tmp/ss03/test-1000x1500.png` and `/tmp/ss03/test-1080x1440.png`. Font, gradient, CSS 3D card, SVG and the WebGL torus knot + cubes all rendered.
- Details, script, timings, gotchas and sources: [../research/03-rendering-stack.md](../research/03-rendering-stack.md)
