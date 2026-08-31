# Sabzi-by-vegetable index

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

A browsable "what sabzi should I make?" index: pick the vegetable in your fridge (bhindi, cabbage, aloo, baingan, capsicum…) → get every sabzi you can make from it, tagged dry/gravy, region (Punjabi/Gujarati/South), effort, and roti-vs-rice pairing.

## Hook

The incumbent SERP for "bhindi/cabbage/aloo sabzi ideas" is recipe-blog category pages, one vegetable per page; no site lets you pick a vegetable and browse the whole sabzi space in one structured, filterable index.

## Gate results

1. Answer-it — pass: an LLM can list sabzis, but the recurring daily "what's in the fridge" use case rewards a persistent, filterable, browsable index over a one-shot answer.
2. Static feasibility — pass: one curated JSON of dishes × vegetables × tags; no backend.
3. Maintainable data — pass: traditional dish canon is stable; less than quarterly refresh.
4. Specific hook — pass: SERP has only blog category pages (vegrecipesofindia, tarladalal, spiceupthecurry, archanaskitchen); no vegetable-picker tool found.
5. Legal/policy — pass: recipes/dish names, no advice risk.
6. US market — pass: autocomplete fan-out ran gl=us and returned dozens of per-vegetable "X sabzi ideas" phrasings; diaspora demand real, India upside.

## Evidence

- Autocomplete (gl=us): "aloo sabzi ideas", "baingan sabzi ideas", "beans sabzi ideas", "bhindi sabzi ideas", "cabbage sabzi ideas", "capsicum sabzi ideas", "dry sabzi ideas", "geeli sabzi ideas", "gujarati sabzi ideas", "daily sabzi ideas", "different sabzi ideas", "evening sabzi ideas" (scout run, fanout.py).
- Pain: "So my mom literally cooks the same damn food everyday. Curry, rice and roti." — https://www.reddit.com/r/IndianTeenagers/comments/12jnmdo/anybody_tired_of_eating_the_same_food/
- Pain: "I find myself cooking the same meals over and over and it's starting to get way too repetitive." — https://www.reddit.com/r/recipes/comments/2yv16y/im_tired_of_eating_the_same_meals_for_dinner/
- SERP gap: top results for by-vegetable queries are category pages only — https://www.vegrecipesofindia.com/recipes/indian-vegetable-recipes/, https://www.tarladalal.com/recipes-for-quick-subzis-332, https://www.archanaskitchen.com/collection/quick-and-easy-to-make-north-indian-sabzi-recipes-under-30-minutes
- Search volume / CPC: unknown (no Keyword Planner this run; Google Trends returned 429).

## History

- 2026-08-29 — candidate (emitted by scout run)
- 2026-08-29 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. ([dossier](dossier.md) · [run](../../runs/2026-08-29-validate-sabzi-by-vegetable-index.md))
- 2026-09-01 — rejected on v3 re-triage (harness-v3 ticket 11): fails v3 gate 7 "No monetization fit" on both routes — (a) affiliate: the tool surfaces recipes, not affiliate-linkable products via a named program; (b) high-RPM: Food sits at the ~$2.33–2.67 low-RPM baseline (monetization was already graded weak at validate, no CPC read). Edge also shaky: multi-constraint finder with thin per-query compute. Strongest of the parked ideas on demand/feasibility, but structurally dead under the v3 monetization gate.
