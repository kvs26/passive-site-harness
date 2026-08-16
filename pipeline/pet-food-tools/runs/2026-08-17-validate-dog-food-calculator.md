# Validate run — 2026-08-17 — dog-food-calculator

## Inputs

Idea: `ideas/dog-food-calculator/` (candidate, from 2026-08-06 scout run). No prior dossier, no keyword-planner.csv, no keywords-request.md. MCP: Playwright available this session and used for the pain + SERP + competitor dig; Brave Search / Fetch MCP not available; DDG helper script bot-challenged (empty), fell back to Playwright browser on duckduckgo.com.

## What was dug

1. **Demand — strong.** Fan-out (`scripts/fanout.py`, question mode) on 5 seeds → dense calculator tail ("by weight and age", "wet and dry", "in grams", "how much to feed my dog calculator by weight", "puppy feeding amount calculator", "dog calorie calculator for weight loss"). Pain dig via Playwright/DDG `site:reddit.com` → recurring overfeeding / "bag misleads" complaints across independent subreddits, re-verified live: r/dogs 17y7gn4 (50 lb dog fed 1–1.5 vs bag's 3 cups), r/dogs kv321q ("use a calorie calculator… daily calories ÷ calories per cup" — the idea's exact formula as folk knowledge), r/Pets 15ur6n0 (overfed for years → 9 lb loss on a real cup), r/puppy101 veww1z, r/DogAdvice 17rep5a, r/dogs 17rektr.
2. **SERP & competitor — not beatable.** "dog food calculator by weight and age" (DDG) returns 8 dedicated interactive RER-based calculators (dogcalculator.net, dogscalculators.com, dogfoodcalculator.net, caninebible.com, petfoodcalculator.com, dogagecalculator.info, pawcalculator.com, dogdatahub.com), several 2026-fresh, one on a high-authority domain (caninebible). No listicle gap to exploit.
3. **Hook depth — disproves scout gate 4.** The scout claimed incumbents are brand-biased or clinical and "none take kcal/cup from the user's own bag." Fetched dogcalculator.net: "asks for the calorie density from the packaging rather than pretending all foods have the same energy per cup." Fetched caninebible.com/dog-food-calculator: also takes the bag's kcal/cup. Two independent incumbents already serve the exact hook; the secondary "bag overfeeds" framing is table-stakes (dogfoodcalculator.net lists "trusting the bag label" as mistake #1).
4. **Monetization — strong (in-space).** caninebible.com/dog-food-calculator runs AdSense + Amazon + Chewy affiliate on the identical format; dogfoodcalculator.net runs none — the profitable pattern exists but the traffic path is owned by incumbents.
5. **Feasibility — strong.** RER/MER formulas public and disclosed by multiple incumbents; pure client-side; kcal density supplied by the user, so no dataset to maintain.
6. **Unique data — weak.** The one "unique" input (bag kcal/cup) is already an incumbent input; pawcalculator.com already brackets life-stage transitions. No moat.

## Keyword Planner checkpoint

Deliberately skipped the keywords-request. The idea exits `rejected` on competitor saturation (gate-4 disproof); volume buckets cannot reverse a hook-already-served verdict, and filing a manual export would burn the human checkpoint on a dead idea (same decision as the 2026-08-17 cat-portion-converter run). Confidence capped at medium accordingly.

## Dead ends

- `scripts/pain-fetch.py ddg` — empty output (bot challenge, as in prior runs); used Playwright browser on duckduckgo.com instead.

## Early-stop decision

None — demand graded strong, so all six signals were dug. The rejection comes from the SERP/hook dig (gate-4 disproof), not from an early stop.

## Outcome

`Status: candidate → rejected` (scout gate 4 disproved: the kcal/cup-from-your-bag hook is already served by ≥2 interactive incumbents — dogcalculator.net and caninebible.com — on a saturated dedicated-calculator SERP). Dossier kept as record. Validated count in niche = 1 (can-my-dog-eat-database) < 3 → no comparison brief.
