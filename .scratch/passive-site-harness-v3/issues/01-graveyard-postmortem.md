# Gate-4 graveyard postmortem

Type: research
Status: resolved

## Question

Across every `rejected` idea in `pipeline/` (~20 kills, mostly gate-4 "hook already served"), what do the 2 survivors (dog-treat-portion-calculator, can-my-dog-eat-database) share that the dead lack — and for each kill, could scout have predicted it *before* validate ran, with what concrete scout-time check? Output: a findings file proposing specific new scout gates / pass changes (e.g. "SERP incumbent probe at candidate time", "buying-intent present", "interactive/AIO-proof shape"), each grounded in named kills it would have caught, plus which kills nothing could have predicted (incumbent appeared between scout and validate — a freshness problem, not a scout defect).

## Answer

Full findings: [research/01-graveyard-postmortem.md](../research/01-graveyard-postmortem.md).

- True counts: 20 rejected / 4 parked / 2 validated. 18 of 20 rejections were gate-4 hook-served — and 18 of 20 were emitted *already flagged* as gate-4/5 near-misses; a gate-4 near-miss at emission was a near-perfect death predictor ("weak candidates are kept" forwarded corpses).
- Survivors share: incumbent fetched + gap-confirmed at scout time; N-row dataset over stable public data with per-item long-tail pages; per-query computation an article can't replicate; CSV-confirmed head demand; near-misses on gate 1 not gate 4.
- Ranked scout changes (kills prevented): (1) **hook-intent SERP probe** — query the tool/directory intent and fetch top hits before emitting: ~13–14 kills; (2) **"open the named incumbent" rule** — never emit with "validate MUST open X": ~6–7; (3) **shape filter** penalizing single-artifact ideas vs dataset+long-tail+compute: ~8–10 (overlapping); (4) **Google AIO probe** (DDG-based pass 3 is AIO-blind): 1 kill + 1 park; (5) **differentiator-demand fan-out**: 1 unique kill (sticker-pack-preflight).
- Strictly unpreventable: 0–1. But ~8/20 kills involved incumbents ≤8 weeks old → SERP shelf-life is weeks: shrink scout→build latency, re-probe the hook SERP pre-build, prefer shapes that degrade gracefully against a fresh single-page competitor.
