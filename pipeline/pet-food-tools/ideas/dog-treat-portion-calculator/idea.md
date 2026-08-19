# Dog treat-portion calculator (how many of THIS food can my dog have)

Status: validated
Origin: ../../runs/2026-08-17-scout.md

## Idea

A searchable catalog of 100+ common healthy human foods (blueberries, baby carrots, cheese cubes, apple slices, plain chicken, pumpkin, peanut butter…) where you pick a food + enter your dog's weight and get an exact count/amount that stays inside the vet 10%-of-daily-calories treat budget — e.g. "a 20 lb dog: ~10 blueberries." Not a daily-meal calculator, not a toxicity verdict — a healthy-serving-size answer per specific food.

## Hook

Every top result for "how many blueberries can a dog eat" is a static article that answers "a few" or "8–10 for a medium dog"; the daily-feeding calculators only size your dog's *kibble*, and even the most complete food-safety DB (caneat.pet) only computes toxic-*risk*, never a healthy treat portion. This is the only tool that converts a specific food into an exact per-treat count for *your* dog's weight.

## Gate results

1. Answer-it — pass (near-miss): a single article gives a vague "a few", but users explicitly search for a *calculator* and the value is computing an exact count per food × per weight across a catalog (kcal lookup + 10% math the user won't do by hand). Hook must stay "exact amount for your dog's weight", not a yes/no.
2. Static feasibility — pass: client-side calc over a static food→kcal/unit table; no backend, accounts, or paid APIs.
3. Data maintainability — pass: per-food kcal from USDA FoodData Central + fixed vet 10% treat rule + fixed RER/MER constants; effectively zero refresh (≤ quarterly).
4. Specific hook — pass: SERP for the exact query is 100% static articles; feeding calculators answer a different question (daily kibble); caneat.pet's tools (safety checker, toxicity calculator, meal planner) do not compute healthy per-food treat portions. Gap confirmed this run against the strongest incumbent.
5. Legal/policy — pass with care: portioning of *non-toxic* foods, not medication/medical dosing; must show "treats ≤10% of calories, rest from complete food" and route any toxic food to vet/ASPCA hotline rather than portion it.
6. US-market — pass: US-locale autocomplete; USDA data is US.

## Evidence

- Autocomplete (Google suggest, US, `scripts/fanout.py`, this run): "how many blueberries can a dog eat per day calculator", "…per day", "how many blueberries can a small dog eat per day calculator", "how many blueberries can a puppy eat per day", "how much cheese can a dog eat", "how much carrot can a dog eat", "how much rice can a dog eat", "how much peanut butter safe for dogs", "how many berries can a dog eat" — explicit per-food, per-size, *calculator*-shaped demand.
- SERP, "how many blueberries can a dog eat per day calculator" (DDG, this run): luverdog.com, bestpetfacts.com, thefaithfuldog.com, petfoodguides.com, houndsy.com, thewellthieone.com, purepawslife.com, roverpet.blog — every result a static article; **no calculator despite the query**.
- SERP, "how much of a food can a dog eat by weight portion calculator tool" (DDG, this run): dogcalculator.net, thepetcalculator.com, dogscalculators.com, dogfoodadvisor.com, miniwebtool.com — all *daily-meal* feeding calculators (how much kibble), none a per-treat-food portion tool.
- Strongest incumbent inspected (caneat.pet/tools, fetched this run): lists "Pet Food Safety Checker" (verdict), "Toxicity Calculator" (food+amount+weight → *risk level*), "AI Meal Planner", "Breed Nutrition Database", "Pet Symptom Checker" — none computes a healthy treat serving of a specific food by weight. Confirmed gap.
- Reddit (quantity pain, via DDG this run): "My dog likes to eat blueberries. Anything to worry about" — https://www.reddit.com/r/dogs/comments/pidua1/my_dog_likes_to_eat_blueberries_anything_to_worry/ ; "Can dogs eat blueberries?" — https://www.reddit.com/r/petknowhow/comments/1ae3ez4/can_dogs_eat_blueberries/ ; "Are rabbiteye blueberries OK for dogs to eat?" — https://www.reddit.com/r/gardening/comments/1csaa52/are_rabbiteye_blueberries_ok_for_dogs_to_eat/
- Monetization: static "how many blueberries" articles run display ads — bestpetfacts.com redirected through an ad-sync/Amazon ad-system exchange on fetch this run (ad-supported), the exact AdSense format this tool would use.
- Data source: USDA FoodData Central (fdc.nal.usda.gov) — free, stable per-food kcal (confirmed available as a source in the prior can-my-dog-eat run).
- Search volume / CPC: unknown (no Keyword Planner CSV this run; none invented).

## Adjacency note

Distinct from the validated can-my-dog-eat-database (that answers "is food X *dangerous* and at what amount"; this answers "how much of *safe* food X is a *healthy* treat"). Different intent, different math (toxic dose vs. 10% calorie budget). Validate should still check for overlap/cannibalization and whether a food-safety DB could bolt this on.

## History

- 2026-08-17 — candidate (emitted by scout run)
- 2026-08-19 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. (Dig graded Demand/SERP/Hook/Monetization/Feasibility strong, Unique-data weak — a generic incumbent, FurCalc, already does a thin food→count version; edge is catalog breadth + long-tail ranking. See [dossier](dossier.md) / [run](../../runs/2026-08-19-validate-dog-treat-portion-calculator.md).)
- 2026-08-19 — validated (CSV top-up): Keyword Planner export ingested — core per-food group sums to ~13K bucket (Demand upgraded to Keyword-Planner-backed strong), per-food bids confirmed < $0.10 (low CPC as expected) with a secondary $0.70+ route on generic treat/calculator terms (Monetization strong). Confidence raised medium → high. Unique-data stays weak (FurCalc precedent unchanged) — not a rejection condition since demand didn't collapse. See [dossier](dossier.md).
