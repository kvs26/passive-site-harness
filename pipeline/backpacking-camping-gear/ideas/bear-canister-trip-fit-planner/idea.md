# Bear Canister Trip Fit Planner

Status: validated
Origin: ../../runs/2026-10-09-scout.md

## Idea

Pick a trip (area/wilderness/park, nights, party size, season) and describe the food plan (calories/day plus food mix). The tool returns: (1) is a canister required there, which methods are legal (canister only / hang allowed / Ursack allowed / bear box), (2) liters of food + scented items to store, (3) which approved canisters hold it per person or per group, how many, total carried grams, rental/loaner options, and (4) a pack-the-canister plan by day.

## Edge

- **Dataset:** per-area food-storage rules (NPS parks, USFS wilderness/forests, state lands, Sierra SIBBG zones, IGBC grizzly units) merged from scattered agency pages that change seasonally, plus an approved-container table (IGBC list, SIBBG list) with usable capacity, weight, and per-area approval, plus a food bulk-density table of hand-measured packed volumes (bars, tortillas, dehydrated meals, nuts). Hand-verified against the agency page each row, dated. No single source: IGBC map covers only WA/MT/ID/WY grizzly habitat and was last updated June 2023; Yosemite lists its own allowed canisters.
- **Compute:** food energy -> packed volume (density x packing efficiency x scented-items allowance) -> canister count and model choice per area approval -> weight penalty. Multi-input, non-trivial, per query.
- **Long-tail surface:** one page per area (`/yosemite`, `/sequoia-kings-canyon`, `/maroon-bells-snowmass`...) x per canister model x per nights/people combos. Hundreds to a few thousand pages.
- **Monetization route:** affiliate. Amazon Associates (Sports & Outdoors rate unknown, verify at validate) for BearVault/Garcia/Ursack/Bearikade; REI affiliate terms unknown, verify. Canister is a required purchase on the page the user lands on (high intent).

## Hook

Checklists and listicles say "check the land manager regs and verify the IGBC list" (wild10 opened) and generic food-weight calculators ignore volume. Nothing opened combines "is it required here + legal models here + does my food fit + how many".

## Incumbent probe

Dated 2026-10-09, direct URL opens only (SERPs blocked this session). Opened: wild10 `/tools/bear-country-food-storage` (static printable checklist; tells user to check regs and the IGBC list, no area data, no volume); miniwebtool backpacking food weight calculator (weight only, no volume or canister); IGBC food-storage page (grizzly-state only, map embed, no compute); NPS Yosemite bear canister page (single-park, no compute). No dedicated multi-area rules + capacity tool seen among 10+ calculator farm catalogs opened (tinycalculators, hikecalc, camping-calculator, kitauthority, wild10, gentletools). SERP-level incumbents NOT verified. Manual checkpoint owed.

## AIO probe

Predict only. "Are bear canisters required in [area]" is question-form and likely AIO-prone for the single fact; the compute (volume fit + approved models per area + group count) is the wedge. Manual checkpoint owed.

## Gate results

- **1 AIO:** unverified risk, plausible pass for compute shape. Owed.
- **2 Static feasibility:** pass. Client-side compute over JSON.
- **3 Data moat:** pass (merge + hand-verify). Upkeep risk: rules change seasonally; scope to a bounded list of areas that mandate canisters (finite, a few dozen) to stay under cap.
- **4 Hook served:** pass on opened evidence; SERP unverified.
- **5 Legal/policy:** liability for wrong regs. Mitigate with per-row source link + verified date + "confirm with land manager" line. Validate must resolve.
- **6 US-market:** pass.
- **7 Monetization:** pass on route, rate unknown.

## Evidence

- Outdoors.SE: q/13812 (regulated canister areas), q/19877 (Maroon Bells/Lost Creek, canisters required and picked up at rental), q/7706 (Ursack not approved in many canister-required areas), q/6026, q/225.
- NPS Yosemite page: hanging illegal throughout park; only listed canisters allowed; canister "will always occupy the same amount of space"; "Most people don't pack their bear canisters very efficiently." Last updated May 15, 2018.
- IGBC page: map covers WA/MT/ID/WY; "If you do not see a regulation... contact the land management agency." Certified products list PDF dated 260731.
- Reddit mining failed this session (arcticshift 422); demand strength from autocomplete/SE only.

## History

- 2026-10-09: candidate (scout run).
- 2026-10-17 — validated (confidence: medium). SERP/AIO evidence expires 2026-11-14; pre-build re-probe mandatory. Shared niche Planner screen used (no idea-specific CSV). Demand, Hook, Monetization, Feasibility and Moat strong; SERP/AIO weak (AIO present on 5/5 bear queries, answers single-fact area queries; combined nights x people x food x approved-model compute is the wedge). No kill-level finding. See [dossier](dossier.md) and [run log](../../runs/2026-10-17-validate-bear-canister-trip-fit-planner.md).
- 2026-10-17 (later) — top-up: idea-specific Planner CSV ingested (`keyword-planner.csv`; head 50K, nine 500-bucket model/rules terms, all fit-intent phrasings no-data) and Playwright AIO re-probe (13/13 bear queries show an AIO; area rules, generic sizing, BV450-vs-BV500 and packing answered; per-trip compute still the wedge). Status unchanged `validated`, confidence stays medium. SERP/AIO expiry unchanged (2026-11-14); pre-build re-probe still mandatory.


## Demand (Keyword Planner 2026-10-09, screen 2, US)

Stays lead of niche, moderate. Total ~58.8K/mo, but 50K is the bare head 'bear canister' (shopping/info). Long tail ~8.8K: bearikade 5K, igbc approved / yosemite / size / rental / best ~500 each. Trip-fit intent ('how many days food bear canister', 'capacity days', 'required areas') ~0-50. Demand is for canister buying/rules, not the days-fit math; build as rules + model comparison with the fit calc as feature.
CSV: pipeline/demand-csv/2026-10-09-screen2.csv
