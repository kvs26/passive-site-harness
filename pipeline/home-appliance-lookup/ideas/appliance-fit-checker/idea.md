# Appliance Fit Checker

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

"Will it fit?" checker: enter appliance model (or its dimensions) + your doorway/hallway/stair measurements → fit verdict, including doors-off and handles-off depths and the turn-radius gotchas that measuring guides bury in prose.

## Hook

The SERP for "will my refrigerator fit through the door" is measuring-guide prose (Home Depot, Whirlpool) and anxious forum threads — no tool computes the verdict from your numbers, and none knows that a specific model's doors-off depth clears a 30" doorway.

## Gate results

1. Answer-it — pass (near-miss): generic advice is answerable by LLM; the verdict computation with model-specific doors-off dimensions is not.
2. Static feasibility — pass: client-side calculator; per-model dims compiled statically from public spec sheets.
3. Unmaintainable data — pass (near-miss): new models ship continuously, but the installed base people move with is static; can launch calculator-first, add models incrementally. Flagged for validate.
4. No specific hook — pass (near-miss): itemfits.com blogs on this topic — must verify at validate whether it has a real per-model tool.
5. Legal/policy — pass.
6. US-market — pass: US door widths/moving scenarios.

## Evidence

- Google SERP (2026-08-29): Reddit "Refrigerator Dimensions vs Doorway : r/Appliances" (8 comments); Quora "Will my refrigerator fit through the door?" (30+ answers); Home Depot measuring guide video (699.6K+ views) — high-anxiety, high-stakes question served only by prose.
- Autocomplete (gl=us): "how big is a 5 cu ft washer", "standard washer size cu ft", "miele washer capacity cubic feet" — adjacent dimension-lookup demand.
- Google Trends (US, 12 mo): "will my fridge fit" ~0 relative vs "washer capacity" — long-tail phrasing; absolute volume unknown.
- Search volume / CPC: unknown (no Keyword Planner CSV this run).

## History

- 2026-08-29 — candidate, marked weak: gate-1/3/4 near-misses; itemfits.com must be inspected at validate (emitted by scout run)
- 2026-08-29 — rejected (validate, medium confidence): gate 4 disproved — the per-model appliance fit verdict with doors-off/handles-off/turn-radius guidance is already served. itemfits.com ships per-model appliance fit pages (Samsung/LG/Whirlpool/GE, "check a specific model"), covers every buried gotcha (doors-off −3–5", handles, water line +2–4", dolly height, hallway turning radius), cites IRC/IBC/ADA, and auto-reads product dims via a Chrome/Shopify extension; the SERP for "will my refrigerator fit through the door" also carries a second calculator (meltflexai, 2026-07-12) + GE's official page. Demand strong but hook occupied. ([dossier](dossier.md) · [run](../../runs/2026-08-29-validate-appliance-fit-checker.md))
