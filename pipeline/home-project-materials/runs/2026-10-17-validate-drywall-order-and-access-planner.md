# Validate run: drywall-order-and-access-planner (2026-10-17)

Result: **validated (low confidence)** after the same-day Keyword Planner top-up (initially parked at medium confidence, no CSV). No kill-level finding. No comparison brief (fewer than 3 validated ideas in the niche).

Outputs: [dossier](../ideas/drywall-order-and-access-planner/dossier.md), [keywords-request](../ideas/drywall-order-and-access-planner/keywords-request.md), `idea.md` Status/History, `pipeline/board.md`.

## Grades

| Signal | Grade |
|---|---|
| Demand | weak after CSV (was strong on recurrence before it) |
| SERP/AIO/competitors | weak |
| Hook depth | weak |
| Monetization | weak |
| Feasibility and upkeep | weak |
| Data moat | weak |

## What was dug

- Demand: Google autocomplete fan-out, Home Improvement SE (API), r/drywall and r/DIY via Arctic Shift and SERP, HN, Lemmy, forum threads surfaced by Google.
- SERP and AIO: Playwright MCP Google, 8 AIO queries (7 captured, 1 unknown) plus `&udm=14` controls.
- Incumbents opened: DrywallScalculator (delivery planner, sheet-size optimizer), DrywallPlanner, UC (gated), DIY Layout Planner, ItemFits, CertainTeed, National Gypsum.
- Monetization: Home Depot affiliate FAQ (1%, 1-day cookie, special-order exclusion), 4x12 product page ("Special Order").
- Feasibility: USG UltraLight submittal PDF (lengths 8-16 ft, nominal 1.25 lb/sq ft, approximate-weight footnote). Vehicle cargo source not located in primary form (Toyota full-specs page present but not extracted; Ford page SSO redirect).

## Dead ends and problems

- Corporate browser isolation blocked drywallscalculator.com and drywallplanner.com in the browser, curl and the page fetcher; read through the r.jina.ai text reader instead.
- `fetch_webpage` on diy.stackexchange.com returned Forbidden; SE API used for dates/views/bodies.
- HN, Lemmy, Arctic Shift: no relevant tool requests.
- drywall101.com and harth.build guessed URLs returned 404; their Google snippets were used and not counted as opened.
- Shared Playwright browser was contaminated by a parallel session (a re-run of `drywall delivery calculator` returned DeWalt fan text); that capture was discarded and the query graded AIO unknown.
- Vehicle payload/cargo source unresolved.
- No early stop: no kill-level finding.

## Unknowns carried forward

AIO on `drywall delivery calculator`; UC tool internals; vehicle data source; Home Depot affiliate eligibility of 10-12 ft special-order panels; repeat usage by contractors. (Hook-term volume resolved by the CSV: negligible.)

## Clock

SERP/AIO evidence dated 2026-10-17, expires **2026-11-14**. Pre-build re-probe is mandatory regardless.

## Top-up (same day): Keyword Planner CSV ingested

The user supplied `Keyword Stats 2026-10-17 at 22_46_45.csv` (US, Oct 2025 – Sep 2026), saved as `keyword-planner.csv`. Result: of 25 requested keywords, 13 sit at the 50 bucket, 3 at 0, 9 no-data; nothing above 50; every bid blank. Hook-specific group is one 50 (`how to transport drywall`) plus seven no-data. Demand downgraded strong -> weak (recurrence contradicted on breadth), confidence medium -> low, traffic sanity-check fails. Monetization unchanged (bids blank, affiliate route not downgraded). No kill-level finding, so status flips `parked` -> `validated` (low). SERP/AIO was not re-probed, so the 2026-11-14 expiry stands. No comparison brief (1 validated idea in niche).

## Next step

Validated at low confidence; the human decides whether to pursue. The traffic check fails, so dropping it is reasonable. The evidence clock is running (expires 2026-11-14).
