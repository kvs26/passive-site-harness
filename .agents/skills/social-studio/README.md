# social-studio renderer

One shared renderer for every site. HTML/CSS (+ optional Three.js) -> exact-size PNGs via Playwright's headless Chromium, plus a `preview.html` contact sheet. No per-site scripts.

## Run

```sh
cd .agents/skills/social-studio
npm install                                   # once (playwright, three)
npx playwright install chromium-headless-shell # once, if the browser is missing
node render.mjs ../../../sites/<slug>/social/batches/<date>-NN
node render.mjs <batch-dir> --only <post-slug> # re-render one post (preview not rewritten)
```

Exit code is non-zero if any post fails; failures are listed per file and shown in red in `preview.html`.

## Batch layout

```
sites/<slug>/social/
  style-kit/                       served at /kit/...
  batches/<id>/                    served at /batch/...
    pinterest/<slug>.html          -> <slug>.png      1000x1500
    instagram/<slug>.html          -> <slug>.png      1080x1440 (single)
    instagram/<slug>/slide-NN.html -> slide-NN.png    1080x1440 (carousel)
    images/                        AI / stock / screenshot files
    preview.html                   generated
```

## Slide HTML contract

- Body is exactly the target size (1000x1500 Pinterest, 1080x1440 Instagram); overflow fails the render.
- Reference shared assets by absolute path: `/kit/fonts.css`, `/batch/images/x.png`, `/node_modules/three/build/three.module.js` (use an importmap for `three`).
- Fonts: `@fontsource` packages or Google Fonts CDN. List `window.__info.fonts = [['900 40px Fraunces', document.fonts.check('900 40px Fraunces')]]` to fail on silent fallback fonts.
- Ready-wait: plain slides need nothing (the renderer waits for fonts, image decode, 2 frames). Slides with scripts/WebGL set `window.__ready = false` first and `true` last; on a Three.js failure set `window.__info.error`, and set `window.__info.webgl = 'webgl2'`. Use `preserveDrawingBuffer: true`, one static frame, no animation loop.
- Image slot: `<img data-slot="/batch/images/hero.png" data-fallback="/batch/images/hero-fallback.jpg">`. The owner's file wins if present; otherwise the fallback is used; if neither loads the render fails (never a broken image).

Details and measurements: `.scratch/social-studio-v1/research/03-rendering-stack.md`.
