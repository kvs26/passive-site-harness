# Validate run — 2026-08-17 — cat-portion-converter

## Inputs

Idea: `ideas/cat-portion-converter/` (candidate, from 2026-08-06 scout run). No prior dossier, no keyword-planner.csv, no keywords-request.md. MCP servers configured (.vscode/mcp.json) but not available this session — helper scripts + built-in fetch used.

## What was dug

1. **Demand** — fan-out (scripts/fanout.py, question mode) on 6 seeds → ~130 deduped suggestions with a specific unit-math tail ("cat food grams to ml", "10/30/50/65/80/90 grams cat food to cups", "cat food calculator wet and dry"). Pain dig via DDG site-search on Reddit → recurring portion/unit confusion across r/Pets, r/CatAdvice, r/cats, r/catfood (grams-vs-cups discrepancy, kcal label confusion, wet+dry split ambiguity). **Graded strong.**
2. **SERP** — 3 queries on DDG lite: "cat food portion calculator" (10/10 dedicated interactive calculators, several 2026-fresh, vet-authored or WSAVA-based), "cat food grams to cups converter" (2 dedicated converters), "cat food kcal per cup database by brand" (≥5 existing kcal databases). **This disproved scout gate 4** — the scout's Aug-06 note "no dedicated interactive converter observed in fetched results" no longer holds (or held only for the queries the scout checked).
3. **Hook depth** — inspected expertcatcare.com (kcal/kg inputs, wet/dry % split, embedded kcal-per-can and kcal/100g converters, RER formula disclosed), thepetcalculator.com (cups/grams/cans, mixed feeding), pawsandpounds.com (cups↔grams↔kcal converter, WSAVA/AAHA-cited). The idea's exact math is live in multiple incumbents. Residual ml-conversion gap noted but its only pain evidence couldn't be re-verified.
4. **Monetization** — Amazon affiliate inventory confirmed on thepetcalculator.com and expertcatcare.com (identical format to ours). CPCs unknown.
5. **Feasibility / unique data** — formulas public (WSAVA RER/MER); kcal-density-by-brand data already served by catfooddb.com (3000+ products), catinfo.org, thepickykitty.com, comparecatfoods.com — no unique-data moat.

## Keyword Planner checkpoint

Deliberately skipped the keywords-request: the idea exited **rejected** on competitor saturation (gate-4 disproof), and volume buckets could not reverse that verdict. Filing a manual-export request would burn the human checkpoint on a dead idea. Confidence capped at medium accordingly.

## Dead ends

- scripts/pain-fetch.py ddg adapter — empty output (bot challenge, same as scout run); DDG html/lite via built-in fetch worked instead.
- pets.stackexchange.com q/21833 — Forbidden; scout's ml/Kirkland evidence unverified this run.

## Early-stop decision

None — demand graded strong, so all six signals were dug in full. The rejection comes from the SERP/hook dig, not from an early stop.

## Outcome

`Status: candidate → rejected` (scout gate 4 disproved: hook already served interactively by ≥3 inspected incumbents plus a saturated calculator SERP). Dossier kept as record. Validated count in niche = 1 (< 3) → no comparison brief.
