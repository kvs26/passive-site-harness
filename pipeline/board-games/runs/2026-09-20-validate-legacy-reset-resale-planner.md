# Validate top-up run: legacy-reset-resale-planner

**Date:** 2026-09-20
**Type:** Keyword Planner CSV top-up on the 2026-09-19 dossier (idea was `parked` waiting on the export).

## What happened

1. User supplied the Keyword Planner historical-metrics export (`Keyword Stats 2026-09-20 at 01_08_28.csv`); copied to `pipeline/board-games/ideas/legacy-reset-resale-planner/keyword-planner.csv`.
2. Normalized via `python3 scripts/planner-report.py` (UTF-16LE, tab-separated, 2-row preamble).
3. Fetched a live INR\u2192USD rate (api.frankfurter.app, 1 INR = 0.01043 USD, 2026-09-20) to convert the one bid-bearing keyword.
4. No full re-dig \u2014 per the skill's cheap-top-up path, only Demand and Monetization were re-checked against the new data; SERP/AIO/hook/feasibility/moat carry forward unchanged from the 2026-09-19 dossier (expiry unchanged: 2026-10-17).

## Result: CSV corroborates weak, doesn't upgrade

- **Reset-kit half** (the idea's stronger half on autocomplete): every head/variant term that returned any data at all sits at the bare-minimum **50 bucket** (`pandemic legacy reset kit`, `gloomhaven reset kit`, `how to reset gloomhaven`, `aeon's end legacy reset pack`, `betrayal legacy reset pack`, `charterstone reset pack`). Per the rubric, \u226450-bucket keywords give **no support** toward a Demand upgrade \u2014 Demand falls back to the base rules (weak, as already graded from forum/autocomplete evidence). `risk legacy reset` and `gloomhaven reset pack` came back zero/no-data despite being autocomplete-confirmed.
- **Resale/completeness half** (the idea's actual differentiator): every phrasing tried came back zero/no-data \u2014 exactly what `keywords-request.md` predicted would corroborate (not contradict) the existing weak grade.
- **Monetization-CPC keywords:** only `card sleeves board game` cleared real volume (500 bucket, Low competition, bid 36.06\u201394.20 INR \u2248 $0.38\u2013$0.98 USD, -90% YoY). It's a generic accessory keyword, not the reset-kit product itself, so it's supporting-only evidence and doesn't close the per-game affiliate-linkability gap already identified (Pandemic Legacy has no commercial reset product at all; Gloomhaven/Jaws of the Lion's official pack has no known affiliate program). Monetization stays weak.

No kill-level finding surfaced (no signal was factually disproven \u2014 the CSV just failed to rescue the already-weak signals). Per the skill, weak grades alone never reject.

## Confidence recompute

Demand is weak (not unknown) \u2192 per the confidence rubric ("Low \u2014 demand is weak/unknown, or \u22653 signals unknown"), confidence is **low**. This differs from this niche's other four top-up'd ideas (all demand-strong \u2192 high confidence) \u2014 the difference is real: this idea's demand evidence is genuinely thinner, not an artifact of missing data now that the CSV is in hand.

## State change

`Status: parked` \u2192 `Status: validated (confidence: low)`. Validated criteria met: dossier complete, no kill-level finding, demand graded weak (not unknown-at-low-confidence). Per the skill this is a legitimate outcome \u2014 rejection requires a factual disproof of a scout gate, which this run didn't find; it found thinner-than-hoped volume, not a dead end.

## Next

Board regenerated; niche now has 5 validated ideas (board-game-expansion-buyers-guide, errata-correction-kit-builder, convention-packing-optimizer, companion-app-dependency-checker, legacy-reset-resale-planner) \u2014 comparison brief regenerated to include all five (it had drifted out of sync, missing errata-correction-kit-builder from an earlier same-day top-up). SERP/AIO evidence still expires 2026-10-17; pre-build re-probe (including the outstanding manual AIO checkpoint) remains mandatory regardless of this run.
