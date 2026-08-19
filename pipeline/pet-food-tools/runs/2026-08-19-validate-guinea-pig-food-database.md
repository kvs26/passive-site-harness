# Validate run — 2026-08-19 — guinea-pig-food-database

One idea, one session. Outcome: **rejected** (gate-4 hook disproved). Dossier written; confidence medium (no Keyword Planner CSV).

## Inputs read

- idea.md (candidate, weak, scout-flagged gate-4 near-miss).
- Origin: runs/2026-08-17-scout.md (one hop) — scout already saw guineapigtube + NibbleCheck; validation re-verified live and added Guinea Lynx.
- niche.md — US target; niche note already says the "can X eat" DB space is crowded (caneat.pet, NibbleCheck, guineapigtube).
- No prior dossier; no keyword-planner.csv / keywords-request.md in the folder.

## What was dug

- **Demand (strong):** fan-out on 6 seed groups → 240+ suggestions; huge food tail + a distinct vitamin-C / high-calcium / printable-chart / feeding-schedule hook tail. Reddit r/guineapigs via search.json (Playwright): "is this safe to eat" recurs as independent dated threads 2024/2025/2026; daily fruit/veg + picky-eater diet confusion threads; one user hand-compiled their own chart from "a few different sources."
- **SERP & competitor (weak):** 3 Bing SERPs. "vitamin c" query returns Guinea Lynx's ordered VITAMIN C CHART at #1; "high calcium" query returns Guinea Lynx CALCIUM CHART; "food chart" returns DVM-reviewed guineapigtube A-Z. Fetched all three incumbents.
- **Hook depth (weak):** the proposed differentiators — vitamin-C filter, low-calcium/oxalate filter, per-food frequency — are each already served: Guinea Lynx ranked charts (vit C, calcium, Ca:P, oxalic) **plus an Excel Ca:P calculator**; guineapigtube per-food frequency verdicts; NibbleCheck interactive filtering.
- **Monetization (strong):** guineapigtube runs AdSense + Mediavine + Amazon on the identical format.
- **Feasibility (strong):** static, stable nutrient data (Guinea Lynx tables) — ≤quarterly refresh confirmed.
- **Unique data (weak):** Guinea Lynx already publishes the ranked/derived data + a calculator; guinea-pig portions are qualitative so no per-weight compute moat.

## Dead ends / inconclusive

- scripts/pain-fetch.py ddg — bot-challenged, empty. html.duckduckgo.com and duckduckgo.com/html (both fetch and Playwright) — "select all squares containing a duck" anomaly challenge. Switched to Reddit search.json + Bing via Playwright (both worked).
- HN/Trends not run (demand already conclusive from autocomplete + live threads).

## Keyword Planner checkpoint

Skipped deliberately (no park). The reject is on gate 4 — the hook is served three ways by credible incumbents — a verdict search-volume cannot reverse. Wrote no keywords-request.md because parking on CSV would misrepresent the reason the idea fails. Confidence noted as medium accordingly.

## Decision

**Reject.** Demand and monetization are real, but this is the same death shape as the niche's cat-database and rabbit-database rejections: the interactive-checker slot (NibbleCheck) and the authoritative-data slot (Guinea Lynx charts + calculator) and the DVM content slot (guineapigtube) are all already filled for guinea pigs. Scout's weak gate-4 call is confirmed with fresh evidence. Dossier kept as the record.
