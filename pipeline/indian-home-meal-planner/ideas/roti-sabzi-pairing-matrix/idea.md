# Roti-sabzi pairing matrix

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

A structured pairing reference: pick a bread/grain (roti, jowar roti, paratha, rice, poori) or a sabzi/dal → see what traditionally goes with it, so a plain sabzi becomes a complete, sensible thali.

## Hook

Pairing knowledge lives only in long-form blog prose ("side dishes to serve with roti"); no site offers a two-way, filterable pairing matrix you can query from either direction.

## Gate results

1. Answer-it — near-miss: a single pairing question is LLM-answerable; survives on the browsable whole-matrix use (weakest gate — validate should test AI Overview coverage).
2. Static feasibility — pass: one static pairing table.
3. Maintainable data — pass: traditional pairings are stable.
4. Specific hook — pass: SERP is articles only (eathealthy365 roti-pairings guides, archanaskitchen dal+sabzi combinations, tarladalal category pages); no interactive matrix found.
5. Legal/policy — pass.
6. US market — pass with note: "roti sabzi combination", "roti combination curries", "jowar roti and sabzi combination" surfaced via gl=us fan-out; volume unknown and likely thin.

## Evidence

- Autocomplete (gl=us): "roti sabzi combination", "roti sabji combination", "roti combination curries", "roti combination recipes", "jowar roti and sabzi combination", "chapati sabji ideas".
- SERP (articles, no tool): https://eathealthy365.com/the-definitive-guide-to-roti-pairings-and-side-dishes, https://eathealthy365.com/the-best-side-dishes-to-serve-with-roti-and-chapati, https://www.archanaskitchen.com/collection/6-tasty-comforting-north-indian-dals-sabzi-side-dish-combinations
- Search volume / CPC / trends: unknown (Trends 429; no Keyword Planner). Demand breadth visibly thinner than the sabzi-index long tail — hence weak.

## History

- 2026-08-29 — candidate, marked weak (emitted by scout run; thin demand + gate-1 near-miss)
- 2026-08-29 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. Validate found demand actually strong (broad two-way pairing long tail), but gate-1 near-miss confirmed — AI Overview answers the head "what goes with <bread>" query, so SERP-weakness/hook/monetization/unique-data all grade weak; the only unserved cut is the per-bread long tail the CSV must size. Weaker than sibling sabzi-by-vegetable-index.
- 2026-09-01 — rejected on v3 re-triage (harness-v3 ticket 11): fails v3 gate 1 (AI Overview fully answers the head pairing query — confirmed at validate 2026-08-29, no per-query-compute wedge past it) and v3 gate 7 on both routes (recipes aren't affiliate-linkable outputs; Food is a low-RPM category). Already graded weaker than sibling sabzi-by-vegetable-index, itself killed the same day. Structural kill — no re-probe needed.
