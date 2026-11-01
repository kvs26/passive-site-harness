# Build the shared renderer + preview sheet

Type: task (AFK)
Status: resolved
Blocked by: 03

## Question

Using the stack chosen in ticket 03, build the one shared renderer inside `.agents/skills/social-studio/` that every site uses:

- Input: a batch folder (`sites/<slug>/social/batches/<id>/`) whose posts are HTML files (+ optional `image-slot` file and fallback); output: PNGs at the exact platform sizes (per ticket 02), multi-slide carousels as `slide-NN.png`.
- Handles fonts/images/3D ready-wait, image-slot fallback (missing AI image → stock/screenshot fallback, never a broken render).
- Generates `preview.html` — a contact sheet of every post (pins + IG grid mock) for owner review.
- One command to run; documented in the skill folder. No per-site scripts, no changes to site build pipelines.

## Answer

Built in `.agents/skills/social-studio/`: [render.mjs](../../../.agents/skills/social-studio/render.mjs), [package.json](../../../.agents/skills/social-studio/package.json), [README.md](../../../.agents/skills/social-studio/README.md). Run: `node render.mjs <batch-dir> [--only <slug>]`.

- Layout: `pinterest/<slug>.html` (1000x1500), `instagram/<slug>.html` single or `instagram/<slug>/slide-NN.html` carousel (1080x1440); PNG written beside each HTML.
- Fake-origin server: `/node_modules/` (skill), `/kit/` (`social/style-kit`), `/batch/` (batch folder).
- Ready-wait: slides with `window.__ready` wait on it; plain slides get fonts + image decode + 2 frames automatically.
- Image slot: `<img data-slot data-fallback>`; slot wins, else fallback, else the render fails.
- Fails loudly on: wrong PNG size, content overflow, broken image, page errors, `__info.error`, non-webgl2, unloaded fonts listed in `__info.fonts`.
- Writes `preview.html`: Pinterest masonry + Instagram 3-column grid mock with carousel strips; failures shown in red.
- Tested with fixtures in /tmp: WebGL2 box, missing-slot fallback, 2-slide carousel, deliberate failure (exit 1). Note: current Playwright (1.5x latest) needed `npx playwright install chromium-headless-shell`.
