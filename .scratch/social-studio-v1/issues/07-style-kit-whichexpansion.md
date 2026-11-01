# Style kit for whichexpansion.com — 5–6 directions, owner picks

Type: prototype (HITL)
Status: resolved
Blocked by: 01, 04, 06

## Question

What should whichexpansion.com look like on Pinterest + Instagram? This also prototypes the skill's style-kit step and the kit's file format.

- Research the board-game niche's current winning visuals (per ticket 01's access route) and `/frontend-design` rules.
- Render **5–6 distinct directions** (e.g. 3D game pieces, vintage game-poster, dark neon tabletop, editorial magazine, playful illustrated…), each as: a **hero** sample (pin + carousel cover) and an **info** sample (tip/checklist slide) — one theme, two intensities. Include AI-image-slot prompts (per ticket 04) where a direction uses them.
- Owner reviews the preview sheet, picks (or mixes) one; iterate.
- Save the chosen kit to `sites/board-game-expansion-buyers-guide/social/style-kit/` (palette, fonts, 4–6 signature layouts, AI-prompt style) with all directions kept under `directions/`. Record the kit's file shape as the format the skill will use.

## Comments

2026-11-01 — Round 1 rendered, awaiting owner pick. Trend check: Pinterest Trends home (fetched today) is fashion/seasonal-led (Halloween, "Neo Deco", "Poetcore" in Predicts 2026), no board-game-specific signal; tabletop directions rely on niche conventions + `/frontend-design`.
- Prototype generator (throwaway): `.scratch/social-studio-v1/prototype/gen-directions.mjs <batch-dir>`
- Output: `sites/board-game-expansion-buyers-guide/social/batches/00-style-kit-proto/` — open `preview.html`; per direction a pin hero, IG cover, IG info slide.
- Directions: A Box Lid (1960s box lid, screenprint) · B Neon Felt (3D Three.js dice, dark) · C Editorial (Bodoni magazine) · D Sticker Pop (meeples) · E Score Pad (ledger paper, ballpoint) · F Punchboard (kraft + die-cut tokens).
- Copy is sample only (Catan Seafarers vs Cities & Knights); real batches fact-check every claim.

## Round 2 (user kept A Box Lid + D Sticker Pop; asked for researched new directions)
- Sources: Pinterest Predicts 2026; GDJ 4 Oct 2026 trend article. Trends are fashion/home-led; tabletop fit is inference.
- New: G Neo Deco (Neo Deco), H Big Top (FunHaus), I Airmail (Pen Pals), J Jelly (Gimme Gummy), K Field Guide (Khaki Coded).
- Output: sites/board-game-expansion-buyers-guide/social/batches/01-style-kit-round2/preview.html (21/21 render clean).
- Next: user picks/mixes, then build kit into social/style-kit/ and close.

## Round 3 (user likes A, I, D; wants less reading, more gamified; plus 2-3 crazy new)
- Gamified: A2 Box Lid Versus (stat-bar duel), D2 Sticker Pop Quiz (A/B/C quiz), I2 Airmail Stamps (collect a stamp).
- New: L Arcade (character select), M Trading Card (holo cards, pick a card), N Group Chat (the argument, then the answer).
- Stat ratings and chat lines are sample copy; fact-check in real batches.
- Output: sites/board-game-expansion-buyers-guide/social/batches/02-style-kit-round3/preview.html (18/18 render clean).

## Round 4 (user: A2 + I2 good, wants more gamified ideas; group chat idea liked but needs real design)
- Kept A2, I2. N2 Group Chat redesigned as iOS dark mode (status bar, header, tails, tapbacks, link preview).
- New gamified: O Scratch Card, P Match Day (scoreboard), Q Tier List.
- Output: sites/board-game-expansion-buyers-guide/social/batches/03-style-kit-round4/preview.html. Ratings, scores, chat lines are sample copy.

## Resolution (2026-11-01)
- Owner kept 5 styles, dropped P: N2 Group Chat, A2 Box Lid Versus, Q Tier List, O Scratch Card, I2 Airmail Stamps.
- One style per theme, rotated per 2-week season; mapping of style to post type is in the kit README.
- Kit saved to `sites/board-game-expansion-buyers-guide/social/style-kit/` (kit.json, README.md, samples/, directions/src/). This file shape is the format the skill uses.
