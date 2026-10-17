# Backpack Model Fit Finder (load-aware)

Status: validated
Origin: ../../runs/2026-10-09-scout.md

## Idea

Enter torso length, hip circumference, trip type, and a gear list or base weight plus consumables (food/water/fuel by trip length). The tool computes starting carry weight and volume, then returns specific pack models and sizes whose torso range, hip belt range, load rating, and liters actually match, flagging models that fit the body but fail at the load.

## Edge

- **Dataset:** per-model, per-size table (torso range, hip belt range, volume per size, rated load, weight) merged from manufacturer sizing charts, hand-verified. Hundreds of model-size rows with annual model-year churn.
- **Compute:** body fit interval match + load-rating margin + volume check against computed gear volume. Multi-input.
- **Long-tail surface:** `/pack/<model>/<size>`, torso-length pages, "best pack for 5'4" 18-inch torso" combos.
- **Monetization route:** affiliate. Amazon Associates / REI affiliate rate unknown, verify.

## Hook

Generic pack-size calculators give a liter range; none opened map body measurements to model/size and load rating.

## Incumbent probe

Dated 2026-10-09. Opened farm catalogs only (wild10, kitauthority, hikecalc, tinycalculators): generic pack liters/weight formulas. REI/brand fit guides and retailer fit tools NOT opened, SERP blocked. Weak: brand and retailer fit guides likely serve part of the hook; needs manual checkpoint.

## AIO probe

Predict only. Query form "what size backpack for 18 inch torso" is likely AIO-prone for the size letter; the model-level mapping is not. Owed.

## Gate results

- **1 AIO:** unverified.
- **2 Static feasibility:** pass.
- **3 Data moat:** weak-pass (public brand charts, only merge+verify). Replicable by anyone with the same charts.
- **4 Hook served:** unverified; high risk from retailers and brand fit tools.
- **5 Legal:** pass.
- **6 US-market:** pass.
- **7 Monetization:** pass on route, rate unknown.

## Evidence

- Outdoors.SE q/5120 (novice: let salesperson fit the bag).
- No dedicated demand numbers; `unknown`.

## History

- 2026-10-09: candidate (scout run). Weak, flagged.
- 2026-10-17 — validated (confidence: medium). SERP/AIO evidence expires 2026-11-14; pre-build re-probe mandatory. Shared niche Planner screen used (no idea-specific CSV). Hook and Monetization strong; Demand, SERP/AIO (AIO present on both fit queries), Feasibility and Moat weak. No kill-level finding. See [dossier](dossier.md) and [run log](../../runs/2026-10-17-validate-backpack-model-fit-finder.md).
- 2026-10-17 (later) — top-up: idea-specific Planner CSV ingested (`keyword-planner.csv`; two 50K head terms with `ultralight backpack` falling −90% YoY, five 5K model/educational terms, all 11 hook phrasings no-data). Playwright AIO re-probe cut short by a Google CAPTCHA: 1 query answered (full AIO on `how to measure torso length`), 3 unknown, 2 not run. Status unchanged `validated`, confidence stays medium; weak signals unchanged. SERP/AIO expiry unchanged (2026-11-14).


## Demand (Keyword Planner 2026-10-09, screen 2, US)

Upgraded weak -> moderate. Total ~78.2K/mo; 'ultralight backpack' 50K head. Model terms 5K each (osprey exos, atmos ag 65, gossamer mariposa, best backpacking backpack), how to measure torso length 5K. Fit-calculator terms ~50. Demand is product/affiliate-driven (REI/Amazon); incumbents (REI, OutdoorGearLab, CleverHiker) strong.
CSV: pipeline/demand-csv/2026-10-09-screen2.csv
