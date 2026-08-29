# Validate run — 2026-08-29 — washer-capacity-converter

Idea: [washer-capacity-converter](../ideas/washer-capacity-converter/idea.md) (candidate, weak). One idea, one session.
Origin scout: [2026-08-29-scout.md](2026-08-29-scout.md). Niche target market: US (default).

## Outcome

**Rejected** — gate 1 (answer-it) / gate 4 (hook served) disproved at evidence level. Google's AI Overview + AI Mode fully and *interactively* answer all three legs of the hook (cu ft ↔ kg conversion, capacity adequacy for comforters/families, real-world load count), and cu ft ↔ kg has no true conversion formula, so a static converter can only reproduce the public equivalency table Google already shows. Demand is strong; hook is occupied. Confidence: medium (no CSV).

## What was dug

- **Demand (strong):** two autocomplete fan-outs (`scripts/fanout.py`) — all three hook legs surface as real query variants (kg conversion, comforter/family adequacy, towel count), fanning out per-cuft-value and per-brand. Reddit recurrence across r/Appliances, r/HomeImprovement, r/laundry-area, r/clothdiaps over a 5-yr span, including Dec 2025 and Jan 2026 threads (surfaced via Google SERP). Trends context from scout: steady with an Apr 2026 peak.
- **SERP & competitor weakness (weak / served):** fetched three target SERPs. Every one leads with an AI Overview that answers the question and offers interactive personalization ("tell me the material/thickness…", "front-load or top-load?… I can give a more precise count"). Maintained prose guides beneath (The Spruce Apr 2026, TCL, Wayfair, Whirlpool, Tide). No dedicated interactive converter ranks — but the AI Overview is itself the interactive converter.
- **Hook depth (weak):** the interactive-converter differentiator is real in user phrasing but occupied by the AI Overview; the AI Overview's own "you cannot directly convert cubic feet to kilograms with a simple formula" line undercuts the converter premise.
- **Feasibility (strong):** pure client-side calc over stable static tables (formula + capacity classes published verbatim by TCL/Tide/Spruce). Confirmed in hand.
- **Monetization (weak) / Unique data (weak):** graded from hand once the gate-1 disproof was clear — display-ad route plausible but unverified and eroded by zero-click AI Overview; conversion heuristics are public/derivable, no moat.

## Dead ends / inconclusive

- `scripts/pain-fetch.py ddg` — bot-challenged/empty again (matches scout). HN Algolia thin. Direct Reddit search fetch blocked (image-only response) — same Reddit ladder failure the scout hit; Reddit evidence gathered via Google SERP instead.

## Keyword Planner checkpoint

Skipped deliberately — no CSV, and none requested. The rejection rests on a SERP/hook gate that search volume cannot reopen (high volume on an AI-Overview-answered question is not a tool opportunity), mirroring how this pipeline's other gate-4 rejections (dog-food-calculator, cat-portion-converter) were closed without Planner artifacts. No `keywords-request.md` written, to avoid implying a park/top-up path that doesn't exist.

## Early-stop note

Demand came out strong, so all six signals were dug/graded. The decisive evidence was the three fetched SERPs showing interactive AI Overview coverage of every hook leg — once that was in hand, monetization and unique-data were graded from what was already gathered rather than dug deeper on a rejected idea.
