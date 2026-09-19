### Niche + idea

`board-games` — top-up validate run on **companion-app-dependency-checker**, parked 2026-09-19 waiting on the Keyword Planner CSV (see [ideas/companion-app-dependency-checker/keywords-request.md](../ideas/companion-app-dependency-checker/keywords-request.md)). The human supplied `Keyword Stats 2026-09-20 at 01_00_37.csv`; this run is a cheap top-up per the skill's checkpoint rules — ingest the CSV, upgrade Demand/Monetization and confidence, flip status. No fresh SERP/AIO/pain-mining dig this run.

### What was done

1. Copied the human-supplied export to `pipeline/board-games/ideas/companion-app-dependency-checker/keyword-planner.csv`.
2. Ran `scripts/planner-report.py` on it. Result: of the 19 keywords requested in `keywords-request.md`, only 2 registered any measurable volume — "board game companion app" (50 bucket, 0%/0% trend, Competition Low, no bid data) and "xcom the board game price" (50 bucket, YoY -100%, no bid data). The other 17 — including every "Variants" and "Future-proofing" phrasing, the two query groups the request flagged as the actual hook halves — came back absent from the export (zero/no measurable data).
3. Applied the rubric's bucket rules: a ≤50 bucket / absent-from-export result gives no support toward a Demand upgrade, so Demand stays graded **strong** on the 2026-09-19 qualitative evidence (autocomplete, StackExchange, Reddit, Facebook) — the CSV neither corroborates nor overturns that grade per the mechanical rule, but it is real, dated negative evidence on query-level search volume that materially changes the Traffic sanity-check read (previously opinion-only, now backed by actual bucket data pointing further downward).
4. Checked Monetization: the one monetization-CPC keyword with data ("xcom the board game price") had no bid figures. Per the rubric, blank/low bids never downgrade an affiliate-route idea — Monetization stays weak on program-fact grounds, unchanged.
5. Re-evaluated confidence against the rubric: no signal graded unknown (all six are strong/weak), Demand has ≥2 independent sources, SERP/AIO has ≥2 independent sources (BGG geeklist, workswithchecker.com, multiple dated AIO checks) — confidence upgrades from medium to **high** now that the CSV requirement is satisfied.
6. No kill-level finding produced by the CSV (it isn't one of the listed kill-level facts) — status flips from `parked` to `validated`, not `rejected`. SERP/AIO was not re-probed this run, so the original 2026-10-17 expiry date stands unchanged (per the skill's rule that only a fresh SERP/AIO re-probe restarts the clock).

### Dead ends / no fresh dig

None attempted this run by design — this is a CSV-only top-up per the skill's checkpoint shortcut, not a full re-validation.

### Outcome

`companion-app-dependency-checker` → **validated**, confidence high. Six signals unchanged from 2026-09-19 (Demand strong, SERP/AIO weak, Hook strong, Monetization weak, Feasibility weak, Data moat weak) — no kill-level finding at any point across both runs. The idea clears the bar for `validated` but is a candidate to treat cautiously: real community demand exists but doesn't show up as Google search volume, and it remains the weakest-monetization, thinnest-long-tail idea of the 2026-09-19 batch. Dossier and idea.md updated; `pipeline/board.md` regenerated. Board-games niche now has 2 ideas at `validated` (board-game-expansion-buyers-guide, companion-app-dependency-checker) — below the ≥3 threshold, so no comparison brief triggered this run.
