# seed-starting-plan-generator

Status: validated
Origin: ../../runs/2026-10-09-scout.md
Strength: **weak** (Johnny's calculator covers the date half of the hook)

## Idea
ZIP (auto frost date at chosen risk) + crops + plant counts → week-by-week indoor seed-starting plan: start dates, pot-up, harden-off, transplant; tray/cell count, grow-light shelf space and heat-mat needs; printable plan + shopping list.

## Demand
- seed starting calculator 5K; last frost date 5K; when to plant tomatoes 5K (Keyword Planner US, Sep 2025–Aug 2026).
- Frequency: annual, multiple visits Jan–Apr.

## Edge
- **Dataset:** per-crop start weeks, germination temp, days to pot-up — cross-checked vs Johnny's table + extension guides; ZIP→NOAA frost.
- **Compute:** dates + cell/tray/light-space totals from user counts.
- **Long-tail surface:** "when to start tomato seeds indoors in zone 6 / Ohio".
- **Monetization route:** affiliate — Amazon Lawn & Garden 3% (grow lights, heat mats, trays, seed-starting mix); best buying-intent of the three.

## Hook
Johnny's makes you type a date and gives a 100-row table; this gives *your* crops, *your* counts, dated weekly tasks and the gear list.

## Incumbent probe (2026-10-09)
Johnny's Seed-Starting Date Calculator (manual frost date, generic table, no counts/export). Others not probed (seedsnow calculator not opened — validate must open).

## AIO probe
Checkpoint: "seed starting calculator", "when to start seeds indoors", "when to start tomato seeds indoors zone 6". Predicted: calculator query low AIO; "when to start…" high AIO.

## Gate results
1 pass-predicted · 2 pass · 3 pass (moderate) · 4 near-miss-adjacent (Johnny's partial; differentiation = ZIP + counts + printable) · 5–7 pass.

## Evidence
- Johnny's: "ranging anywhere from 2–16 weeks prior to transplanting… based on the frost-free date in your area."
- gardening.SE q/9550 "Advice for late tomato/pepper starts". Reddit: unknown.

## History
- 2026-10-09 — candidate (emitted by scout run)
- 2026-10-17 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. Also outstanding: manual Google AIO checkpoint; demand for the counts/gear differentiator unknown (off-season). No kill-level finding. Dossier: [dossier.md](dossier.md); run: [../../runs/2026-10-17-validate-seed-starting-plan-generator.md](../../runs/2026-10-17-validate-seed-starting-plan-generator.md).
- 2026-10-17 — validated (confidence: low). SERP/AIO evidence expires 2026-11-14; pre-build re-probe mandatory. Keyword Planner CSV ingested (top-up; SERP/AIO not re-probed): demand graded weak (seed starting calculator 3-mo -99% / YoY -90%; counts/gear phrasings have no volume), no kill-level finding. Still open: manual Google AIO checkpoint. Dossier: [dossier.md](dossier.md).
- 2026-10-17 — AIO re-probe done via Playwright (SERP/AIO evidence dated 2026-10-17, expiry unchanged): AIO present on 3/3 queries; fully answers the zone-level variant (tomato seeds zone 6); not kill-level because plant counts → trays/gear is not computed anywhere. New incumbent found: sowrightseeds.com ZIP-based seed-starting calculator.
