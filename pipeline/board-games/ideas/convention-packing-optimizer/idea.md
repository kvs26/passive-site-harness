# Convention Carry-Bag / Game-Load Packing Optimizer

Status: validated
Origin: ../../runs/2026-09-19-scout.md

## Idea

The user selects the exact game editions they plan to carry and a real bag/case model. The tool computes whether the games fit, proposes an orientation-aware arrangement, totals carrying weight, warns about lid/corner/component crush risk, and suggests the smallest matching bag or a two-bag split.

## Edge

- **Dataset:** game box dimensions + weight (from publisher listings, BGG's own "Dimensions & Weight" field, retailer specs) merged with bag/case interior dimensions and capacity (manufacturer specs) — two independently-sourced, hand-verified datasets merged into one fit-computation table.
- **Compute:** a geometry/bin-packing calculation on the user's specific game list × bag model — orientation, stacking order, weight total, and risk flags a static list can't produce.
- **Long-tail surface:** per-bag-model pages (which combinations of games fit in this exact bag) and per-large-game pages (which bags fit this box).
- **Monetization route:** affiliate — travel/storage bags & cases (Amazon, or gaming-specific case brands) plus the games themselves; travel/storage is a reasonable-RPM-adjacent category.

## Hook

People currently solve this by physically trial-and-error packing and filming it for YouTube ("Packing 16 Games for BGG.CON — Will They Fit?"); no tool computes the fit from box + bag dimensions before the user leaves the house.

## Incumbent probe

Dated 2026-09-19. Query: `board game convention bag packing optimizer which games fit` (Bing). Top hits: BGG blog "How to Pack Games at a Convention" (manual advice, no calculator), multiple YouTube videos of manual test-packing ("Packing 16 Games for BGG.CON (Will They Fit?)" — 657 views, "10 Travel Board Games in One Tiny Case? | Ultimate Cruise Game Packing Hack" — 9.8K views, "TOP 5 UKGE 2026 Convention bag ESSENTIALS"), and a generic packing-list blog (uberstrategist.com). No computed optimizer tool found — every hit is manual advice or a demonstration video. SERP evidence expires ~2026-10-17.

## AIO probe

Run at validate depth 2026-09-19 (manual checkpoint, human-run on google.com). AI Overview is present and fully answers all 4 head queries tested with a generic formula + reference box sizes (and, for "best bag for carrying board games to a convention", an actual shopping recommendation) — downgraded from the scout-stage "top of the AIO-resistance ranking" prediction. Real wedge survives: no persistent tool, no named game/bag catalog, no multi-game bin-packing, no orientation/crush-risk output. See [dossier.md](dossier.md) for full detail.

## Gate results

- 1 AIO: pass (predict-from-form; checkpoint owed)
- 2 Static feasibility: pass — client-side geometry calculation over two merged datasets
- 3 Data moat: pass — dimensions/weight data is stable and public; merge of publisher + BGG + retailer + bag-manufacturer sources; low incremental upkeep (add new boxes/bags as released)
- 4 Hook served: pass — no computed tool found; demand confirmed by manual-packing video genre existing at all
- 5 Legal/policy: pass
- 6 US-market: pass
- 7 Monetization: pass — affiliate (bags/cases + games)

## Evidence

- BGG blog (via Bing SERP, 2026-09-19): "How to Pack Games at a Convention"
- YouTube (via Bing SERP, 2026-09-19): "Packing 16 Games for BGG.CON (Will They Fit?) | Table Scraps" — 657 views, 10 months old, "attempting to pack 16 board games into one bag... The big questions: Will..."
- YouTube (via Bing SERP, 2026-09-19): "10 Travel Board Games in One Tiny Case? | Ultimate Cruise Game Packing Hack" — 9.8K views, 3 months old
- Amazon Associates rate for luggage/storage category: `unknown` — verify at validate.

## History

- 2026-09-19 — candidate (emitted by scout run, user-supplied candidate triage)
- 2026-09-19 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.
- 2026-09-20 — validated (confidence: high). Keyword Planner CSV ingested (top-up, no fresh SERP/AIO dig): head terms thin (two 500-bucket, one 50-bucket), every hook-specific/calculator phrasing zero-volume — corroborates existing Demand-strong and Hook-weak grades rather than overturning them. No kill-level finding. SERP/AIO evidence expires 2026-10-17 (unchanged, not re-probed this run); pre-build re-probe mandatory.
