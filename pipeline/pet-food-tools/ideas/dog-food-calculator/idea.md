# Dog food calculator (kcal → cups for your actual food)

Status: rejected
Origin: ../../runs/2026-08-06-scout.md

## Idea

Static dog/puppy feeding-amount calculator: weight + age + activity + the food's kcal/cup (from the bag) → cups/grams per meal and per day.

## Hook

Bag charts and brand calculators overfeed and confuse (per-day vs per-meal, current vs adult weight); this converts vet-standard RER/MER formulas into cups of *your* food, with the puppy/adult-weight ambiguity handled explicitly.

## Gate results

1. Answer-it — pass: requires multi-input computation (weight × life stage × kcal density), not a one-line answer.
2. Static feasibility — pass: pure client-side JS; formulas are published constants.
3. Data maintainability — pass: RER/MER factors are stable veterinary formulas; no refresh needed.
4. Specific hook — pass: incumbents are brand-biased (Purina) or clinical (petnutritionalliance); none take kcal/cup from the user's own bag.
5. Legal/policy — pass with care: feeding-amount guidance is general-care, not medical dosing; disclaimer required.
6. US-market — pass: all evidence US-locale.

## Evidence

- Autocomplete (Google, US): "best dog food calculator by breed and weight", "best free dog calorie calculator by breed", "dog feeding amount calculator", "dog calorie calculator for weight loss", "calculate puppy food amount".
- Reddit: owner fed 1–1.5 cups/day to a 50 lb dog for years vs bag's 3 cups — https://www.reddit.com/r/dogs/comments/17y7gn4/i_just_noticed_im_feeding_my_dog_a_lot_less_than/
- Reddit: "the calculator linked I should be feeding her 4 cups per day which is way too much" — https://www.reddit.com/r/dogs/comments/993wgq/help_how_much_do_you_feed_your_dog_based_on_the/
- Reddit: bag amounts made both dogs overweight — https://www.reddit.com/r/WiggleButts/comments/1d08zw9/how_much_do_you_guys_feed_your_dogs/
- Reddit: per-meal vs per-day and puppy-weight ambiguity — https://www.reddit.com/r/puppy101/comments/7k9bju/confused_as_to_how_much_i_should_be_feeding_my/
- SERP incumbents (Google, US): dogfoodadvisor.com, purina.com, purinainstitute.com, petnutritionalliance.org — brand or clinical tools.
- Search volume / CPC / difficulty: unknown (no free source this run).

## History

- 2026-08-06 — candidate (emitted by scout run)
- 2026-08-17 — rejected: scout gate 4 disproved on validation. The kcal/cup-from-your-bag hook is already served by ≥2 interactive incumbents (dogcalculator.net asks for the packaging calorie density; caninebible.com's calculator does the same) on a saturated dedicated-calculator SERP. Demand is strong but the differentiation is gone. Dossier kept as record. See ../../runs/2026-08-17-validate-dog-food-calculator.md
