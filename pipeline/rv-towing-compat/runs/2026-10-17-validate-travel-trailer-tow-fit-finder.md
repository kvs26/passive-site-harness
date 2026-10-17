# Validate run — travel-trailer-tow-fit-finder — 2026-10-17 (US)

Scope note: the request was "validate all the ideas inside rv-towing-compat". The niche holds exactly one idea (`travel-trailer-tow-fit-finder`); `truck-camper-payload-match` was removed on 2026-10-09 (see `niche.md`). So this is a one-idea run.

## Outcome
`rejected` — kill-level finding on scout gate 4 (hook already served) and gate 3 (data moat replicated). Dossier: `ideas/travel-trailer-tow-fit-finder/dossier.md`. No comparison brief (0 validated ideas in niche).

## What was dug
- Planner: read `pipeline/demand-csv/2026-10-09-screen2.csv` via `scripts/planner-report.py` (no idea-folder CSV existed). INR→USD at 95.111965 (open.er-api.com, 2026-10-17).
- Demand: Google autocomplete fan-out (9 seeds), mechanics/outdoors SE, HN, Lemmy, Reddit RSS (429), Arctic Shift re-verification of scout's two r/f150 threads plus `title=tow` listings in r/RVLiving, r/TravelTrailers, r/ToyotaTacoma, r/Ram1500.
- SERP: Bing for two head queries; opened Mint RV, Tow Genius, RV TowCalc.

## Decisive finding
Mint RV (mintrv.com) ships the exact hook: vehicle → every RV from a 69,850-RV database that fits tow + payload, with per-RV pages, from OEM towing guides, free, with Amazon Associates links on hitch gear. Tow Genius is building per-trailer "compatible tow vehicles" pages. Scout recorded these as "unverified/blocked"; opening them this run disproved the gate.

## Dead ends / inconclusive
- Lemmy, HN, outdoors.SE: off-topic or empty. Reddit RSS rate-limited (429). rvcalcs.com HTTP 400.
- Not tested: whether Mint RV's RV-search filter accepts raw sticker payload numbers (JS-gated); whether its compatibility results are indexable.
- Not run (early stop after kill-level finding): Google AIO manual checkpoint, Amazon Associates terms fetch, feasibility/upkeep estimate. Remaining signals graded from what was in hand.
- The `fanout.py --mode plain` call with multiple seeds emitted junk "plain ..." suggestions (flag parsed as a seed); ignored.
