# Validate run — 2026-08-17 — chocolate-toxicity-calculator

## Inputs

Idea: `ideas/chocolate-toxicity-calculator/` (candidate, marked weak — gate-5 near-miss; from the 2026-08-06 scout run). No prior dossier, no `keyword-planner.csv`, no `keywords-request.md`. MCP: Playwright available this session (used for Reddit search + Bing SERPs); Brave Search MCP not exercised. Helper scripts + built-in fetch used for the rest.

## What was dug

1. **Demand** — fan-out (scripts/fanout.py, question mode) on 5 chocolate seeds → ~80 deduped suggestions with an explicit "calculator" tail ("my dog ate chocolate calculator", "how much chocolate can kill a dog calculator", "dog chocolate toxicity calculator" + free/app/meter/vin/vets-now/uk/au/nz). Pain dig via Playwright Reddit search (DDG/JSON endpoints all blocked) → recurring quantity-math panic across r/DogAdvice, r/AskVet, r/dogs (weight + type + amount is the whole question owners ask). **Graded strong.**
2. **SERP** — 3 queries on Bing (US) via Playwright. "my dog ate chocolate calculator" and "how much chocolate is toxic to a dog" both return a saturated field of dedicated interactive calculators led by Omni Calculator and PetMD/Chewy, plus Vets Now, Merck Vet Manual (surfaced in the pain dig), caninebible, calculatorsfordogs ("…by Weight & Type (2026)"), and ~6 smaller SEO calculators. ("dog chocolate toxicity calculator" misfired to generic dog-breed pages — noted as an engine glitch, not a gap.) **This disproves scout gate 4** — the inferred "quantity math absent from top results" gap does not exist; the top results *are* the calculator.
3. **Hook depth** — inspected PetMD "Dog Chocolate Toxicity Meter": live inputs Weight / Type of Chocolate / Amount Consumed → Get My Results, backed by published theobromine tables and monitor/vet banding. The idea's exact math is live on a top-authority site. Omni Calculator holds the #1 head-term slot; Merck publishes a clinical calculator owners already share. **Hook already served.**
4. **Monetization** — confirmed Chewy vet-telehealth affiliate on PetMD and Amazon-adsystem display ads on Omni Calculator (identical format to ours). CPCs unknown.
5. **Feasibility / unique data** — theobromine constants are public/stable (PetMD tables; USDA FoodData Central per scout) → feasible, low refresh. But the theobromine-per-product table (the obvious unique asset) is already published by PetMD → no data moat.

## Keyword Planner checkpoint

Deliberately skipped the keywords-request, same rationale as the 2026-08-17 cat-portion-converter run: the idea exits **rejected** on hook/competitor saturation, and volume buckets cannot reverse a served-hook verdict. Filing a manual export would burn the human checkpoint on a dead idea. Confidence capped at medium accordingly.

## Dead ends

- scripts/pain-fetch.py ddg adapter — empty (DDG bot challenge).
- lite/html.duckduckgo.com site-searches via built-in fetch — captcha pages.
- reddit.com /search.json via built-in fetch — Blocked. (Playwright browser worked instead.)
- vets-now.com/app/chocolate-calculator — HTTP 403 to direct fetch; calculator presence taken from the Bing SERP listing.

## Early-stop decision

None — demand graded strong, so all six signals were dug. The rejection comes from the SERP/hook dig (gate 4 disproof), not an early stop. The scout gate-5 legal near-miss remains unresolved and is recorded as a compounding risk, not the decisive reason.

## Outcome

`Status: candidate (weak) → rejected` (scout gate 4 disproved: the quantity × weight × type calculator hook is already served by PetMD/Chewy, Omni Calculator, Merck Vet Manual, Vets Now and a saturated SERP of dedicated tools; gate-5 legal exposure unresolved on top). Dossier kept as record. Validated count in niche = 1 (< 3) → no comparison brief.
