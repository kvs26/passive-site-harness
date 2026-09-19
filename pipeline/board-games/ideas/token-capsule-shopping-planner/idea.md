# Token Capsule Shopping Planner

Status: validated (confidence: medium)
Origin: ../../runs/2026-09-19-scout.md

## Idea

The user chooses a game, edition, and owned expansions. The tool calculates the capsule inner diameters and quantities needed for each token family, rounds them to real pack sizes, flags unverified/tight fits, and warns when the protected tokens will no longer fit the stock insert.

## Edge

- **Dataset:** per-game token dimensions (diameter/thickness per token type) + real-world capsule pack sizes/diameters (from sellers) + insert clearance data — merged and hand-verified per game/expansion.
- **Compute:** per-user-input calculation — user's specific game + expansions → capsule sizes/quantities rounded to buyable pack sizes, with fit warnings.
- **Long-tail surface:** one page per game/expansion combination.
- **Monetization route:** affiliate — capsule multi-packs on Amazon.

## Hook

The only existing reference (a 2017 BGG geeklist of capsule sizes) is a static, unmaintained list of general sizing guidance — not a per-game/per-expansion calculator that accounts for insert clearance or rounds to real pack sizes.

## Incumbent probe

Dated 2026-09-19. Query: `board game token capsule size calculator fit` (Bing). Top hit: BGG geeklist "Coin Capsules Sizes for Protecting Tokens and Blinging Out Your Game" (2017, static reference). Remaining results were generic capsule/token product listings and image search suggestions (no per-game calculator tool). SERP evidence expires ~2026-10-17.

## AIO probe

Not yet run.

## Gate results

- 1 AIO: pass (predict-from-form; checkpoint owed)
- 2 Static feasibility: pass
- 3 Data moat: pass, but the smallest/most-fragmented dataset of the batch (token dimensions vary per-game and are not always publicly listed)
- 4 Hook served: pass — only a static 2017 reference found
- 5 Legal/policy: pass
- 6 US-market: pass
- 7 Monetization: pass narrowly — lowest ceiling of the five: single accessory category, small basket size (~$10–20 capsule multi-packs), and a niche-within-a-niche (only token-heavy Euro games with round tokens). Long-tail surface is thin — capsule sizing isn't a query people are likely to search per-game on its own.

## Evidence

- BGG geeklist (via Bing SERP, 2026-09-19): "Coin Capsules Sizes for Protecting Tokens and Blinging Out Your Game" (2017)

## History

- 2026-09-19 — candidate (emitted by scout run, user-supplied candidate triage; marked weak due to smallest market size/monetization ceiling of the batch)
- 2026-09-19 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Also owed: manual Google AIO checkpoint (blocked by 429 this run) — prioritize per-game single-fact lookup queries, the highest AIO-risk shape found. Demand and hook came back strong (recurring per-game capsule-size asks + 2 direct insert-fit-clearance threads); monetization/feasibility/moat stay weak per scout's original read. Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. See [dossier.md](dossier.md).
- 2026-09-20 — validated (confidence: medium). SERP/AIO evidence expires 2026-10-17 (unchanged — not re-probed this run); pre-build re-probe mandatory. Keyword Planner CSV top-up: 13 of 17 requested keywords (every per-game/hook-specific phrasing) zero/no-data; the 4 that registered (generic seller-side terms) bottom out at the 50 bucket — no support toward a Demand upgrade per the rubric, but confirms demand is genuinely off-Google (community-thread recurrence, not search volume). Bid data on the 3 generic capsule terms (≈$0.17–$1.37 USD-equiv) is a bonus monetization data point but doesn't resolve the unverified exact Toys & Games commission rate, so Monetization stays weak. No kill-level finding — weak grades don't reject. Confidence capped at medium by the still-unresolved manual AIO checkpoint (owed pre-build). See [dossier.md](dossier.md).
