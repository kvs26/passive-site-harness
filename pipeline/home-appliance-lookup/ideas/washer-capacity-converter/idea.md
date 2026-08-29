# Washer Capacity Converter

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

Washer/dryer capacity tool: convert cu ft ↔ kg ↔ real-world load ("how many towels/jeans/queen comforters"), plus "is X cu ft big enough for a family of N" answers per capacity class.

## Hook

Every SERP result is either a brand blog chart (Tide, TCL, The Spruce) or a confused forum thread — no interactive converter exists that translates cu ft to kg to actual laundry loads, which is exactly the phrasing people search with.

## Gate results

1. Answer-it — pass (near-miss): an LLM gives a rough answer; the tool's edge is the interactive converter + comforter-fit answers per capacity. Weakest gate — flagged.
2. Static feasibility — pass: pure client-side calculator + static tables.
3. Unmaintainable data — pass: conversion heuristics and capacity classes are stable.
4. No specific hook — pass: no dedicated converter tool on SERP fetched this run; incumbents are prose charts and Q&A threads.
5. Legal/policy — pass.
6. US-market — pass: cu ft is the US unit; the confusion is US-specific (imports/rentals listed in kg).

## Evidence

- Autocomplete (gl=us, 2026-08-29): "washer capacity cu ft to kg", "washer capacity cubic feet vs kg", "is 4.5 cu ft washer big enough", "is a 4 cubic foot washer big enough", "how many cubic feet is a large capacity washer", "how big is a 5 cu ft washer", "washer 2.3 cu ft capacity reddit".
- Google SERP (2026-08-29): top results include Reddit "Cubic foot to KG conversion for washer / dryer : r/Appliances" (9 comments), Quora "Why is washing machine capacity measured in Kg in some…" (40+ answers), Houzz "5.5kg- equivalent cu.ft?", r/ thread "How to find the kg size of a washer and dryer?" (20+ comments) — demand phrased as a conversion question with no tool answering it.
- Google Trends (US, 12 mo, UI table): "washer capacity" steady 21–46 relative through winter, peaking 100 (Apr 12, 2026), 56–95 through June — consistent demand. Absolute volume unknown.
- CPC / search volume: unknown (no Keyword Planner CSV this run).

## History

- 2026-08-29 — candidate, marked weak: gate-1 near-miss (LLM approximate answers) (emitted by scout run)
- 2026-08-29 — rejected: gate-1 (answer-it) / gate-4 (hook) disproved on validation. Google AI Overview + AI Mode fully and interactively answer all three hook legs (cu ft↔kg conversion, comforter/family capacity adequacy, real-world load count) across the target SERPs, and cu ft↔kg has no true conversion formula — a static converter only reproduces the public equivalency table Google already shows. Demand strong but hook occupied. ([dossier](dossier.md) · [run](../../runs/2026-08-29-validate-washer-capacity-converter.md))
