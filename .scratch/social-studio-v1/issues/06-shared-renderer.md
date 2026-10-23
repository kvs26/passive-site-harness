# Build the shared renderer + preview sheet

Type: task (AFK)
Status: open
Blocked by: 03

## Question

Using the stack chosen in ticket 03, build the one shared renderer inside `.agents/skills/social-studio/` that every site uses:

- Input: a batch folder (`sites/<slug>/social/batches/<id>/`) whose posts are HTML files (+ optional `image-slot` file and fallback); output: PNGs at the exact platform sizes (per ticket 02), multi-slide carousels as `slide-NN.png`.
- Handles fonts/images/3D ready-wait, image-slot fallback (missing AI image → stock/screenshot fallback, never a broken render).
- Generates `preview.html` — a contact sheet of every post (pins + IG grid mock) for owner review.
- One command to run; documented in the skill folder. No per-site scripts, no changes to site build pipelines.
