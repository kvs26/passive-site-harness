# Cat food portion & unit converter

Status: rejected
Origin: ../../runs/2026-08-06-scout.md

## Idea

Cat feeding portion converter: cat weight/age + food kcal density → daily portion, with first-class unit conversion (cups ↔ grams ↔ ml ↔ kcal, wet + dry mixed feeding).

## Hook

Feeding guides mix cups, grams, kcal/kg and kcal/cup with no conversion path — owners are literally measuring kibble in vases with ml marks; this does the unit math no bag chart or brand tool does, including wet+dry split days.

## Gate results

1. Answer-it — pass: multi-unit conversion with kcal density is real computation.
2. Static feasibility — pass: client-side JS.
3. Data maintainability — pass: conversion math + stable RER factors; optional food-density table grows slowly.
4. Specific hook — pass: autocomplete shows demand for grams/portions ("cat food portion in grams") that incumbents don't serve interactively.
5. Legal/policy — pass: general care, disclaimer suffices.
6. US-market — pass.

## Evidence

- Autocomplete (Google, US): "cat food portion size calculator", "cat food portion in grams", "cat food portions by weight", "canned cat food amount per day", "calculate cat food amount", "best wet cat food small portions".
- Pets StackExchange: Kirkland guide in cups, owner has only ml marks; "4008 kcal/kg (443 kcal/cup), which yields 110 grams per cup" confusion — https://pets.stackexchange.com/questions/21833/feeding-guides-help-kirkland-for-cats
- Pets StackExchange: "whether by percentage of weight or volume (aka % or cups) or something else" — https://pets.stackexchange.com/questions/15061/how-much-food-should-i-feed-my-cat
- Pets StackExchange: homemade food, no grams/calorie guidance — https://pets.stackexchange.com/questions/34259/how-much-cooked-homemade-food-do-i-feed-my-cat
- SERP: no dedicated interactive converter observed in fetched results. Search volume: unknown.

## History

- 2026-08-06 — candidate (emitted by scout run)
- 2026-08-17 — rejected: validate run disproved scout gate 4 — the hook (kcal-density unit math incl. wet+dry split) is already served by a saturated field of dedicated 2026-fresh calculators (expertcatcare, thepetcalculator, crittercalcs, pawsandpounds et al.) and kcal-density databases (catfooddb, catinfo.org); demand itself graded strong. See [dossier](dossier.md) and [run log](../../runs/2026-08-17-validate-cat-portion-converter.md).
