# Drywall Order and Access Planner

Status: validated
Origin: ../../runs/2026-10-17-scout.md

## Idea

Enter rooms, openings, ceiling, framing, sheet options, the narrowest door/stair turn, vehicle dimensions/payload, and a delivery quote. Get a wall-by-wall sheet layout, purchasable panel list, and a comparison of which sheet sizes can actually reach the room and whether pickup, rental, or delivery is practical.

## Demand

The user's Google Keyword Planner US export (2026-10-17): `drywall calculator` is a rounded **50,000 average monthly searches** bucket. Search volume for `drywall sheet layout`, `drywall delivery calculator`, and fit/access phrases is **unknown**. The 50K belongs to a broad head with strong incumbents and cannot be counted as traffic for this hook. Episodic DIY use; contractors and renovators may repeat, unverified. Demand grade: **weak** until a focused Planner export.

## Edge

- **Dataset:** bounded US drywall panel catalog, with manufacturer-published dimensions, nominal weight, board type and installation restrictions hand-checked against [USG sheets](https://www.usg.com/content/dam/USG/pdpmovedocuments/sheetrock-ultralight-panels-submittal-en-wb2501.pdf) and another manufacturer plus retailer listing per product. Separate vehicle cargo openings and payload from official manuals where available; allow measured overrides. Each row records source and checked date. Manufacturer/retailer merge and physical access judgment are the replication barrier. Catalog scope must be limited enough for monthly refresh below three hours a week.
- **Compute:** compare real sheet layout/waste/seams across available sizes, then reject panels that cannot traverse the measured access path or fit the vehicle and calculate pickup trips versus entered delivery/rental costs. Output numbered cuts and a printable purchase/transport plan.
- **Long-tail surface:** per panel size/type/model pages, e.g. 4×12 lightweight versus 4×8 standard, with verified weights and an embedded planner prefilled for that panel.
- **Monetization route:** [Home Depot affiliate program](https://www.homedepot.com/c/SF_MS_Affiliate_Program_FAQs), 1% on eligible products, linked from purchasable panel/accessory outputs; Home & Garden ads as a secondary route. SKU eligibility needs verification.

## Hook

The opened free layout tool optimizes sheets without access/delivery, and the opened delivery tool explicitly omits vehicle/stair fit; this tool turns the same room into a *reachable, transportable order* in one free flow.

## Incumbent probe

2026-10-17 searches: `drywall sheet layout planner vehicle fit stairs delivery calculator`, `drywall calculator transport stair fit`, `drywall sheet layout access vehicle stairs planner`. Opened [DrywallPlanner layout](https://drywallplanner.com/layout), [DrywallScalculator delivery/lift](https://drywallscalculator.com/planning/delivery-and-lift-planner/), [UC layout planner](https://www.uc2.ca/tools/drywall-sheet-layout-calculator), [ItemFits lumber fit](https://itemfits.com/fit/lumber), and [DIY Layout Planner](https://diylayoutplanner.com/tools/drywall-sheet-layout/). The UC planner advertises access length in search but opens to member access with a seven-day trial. Follow-up search also surfaced [DrywallScalculator's sheet-size optimizer](https://drywallscalculator.com/sheets/sheet-size-optimizer/), which takes the longest sheet that can enter the room; this narrows the access novelty. Its separate delivery tool says it does not check vehicle/stair fit. The free integrated hook remains plausible, not proven durable.

## AIO probe

Predict-from-form only. `drywall calculator` can return a formula or calculator link; room geometry, offcut reuse, stair/vehicle fit, and delivery comparison require user inputs. A standalone Playwright request for `drywall calculator` on 2026-10-17 was redirected to Google's unusual-traffic challenge; a separate pool query was challenged too. No AIO content was visible, so actual AIO remains **unknown**, not absent. The connected browser also reported no available session. Manual check owed.

## Gate results

1. **AIO:** provisional pass by multi-input computation; manual Google check owed.
2. **Static feasibility:** pass; client-side layout/fit and static JSON.
3. **Data moat:** plausible pass with manufacturer + retailer cross-check and per-row hand verification; second manufacturer and vehicle rows still need sourcing. Feasibility weak.
4. **Hook already served:** provisional pass on fetched free tools; UC account-gated overlap is the biggest risk.
5. **Legal/policy:** pass for material estimates; results must cite panel specifications and avoid certifying framing, fire rating or safe loading.
6. **US-market:** pass; US Planner and USG/Home Depot sources.
7. **Monetization:** pass via eligible Home Depot panels/accessories (1%); weak economics.

## Evidence

- [Home Improvement Stack Exchange](https://diy.stackexchange.com/q/8523) asks how to estimate drywall needs, showing that sheet count is a real decision.
- [DrywallPlanner](https://drywallplanner.com/layout) lays out sheets, accounts for openings and reuses offcuts; it says stairs and broken corners may warrant spares, but does not select based on carried length.
- [DrywallScalculator](https://drywallscalculator.com/planning/delivery-and-lift-planner/) says its planner “does not check that long sheets fit your vehicle or your stairs.” It already calculates sheet weight, trips, delivery and lift days.
- [USG UltraLight submittal](https://www.usg.com/content/dam/USG/pdpmovedocuments/sheetrock-ultralight-panels-submittal-en-wb2501.pdf) publishes 8–16 ft lengths, 4 ft/54 in widths, and nominal 1.25 lb/sq ft weight, demonstrating accessible primary data.
- [Drywall transport discussion](https://www.reddit.com/r/drywall/comments/1ime3g9/) discusses cutting sheets to fit a car versus renting a truck and accepting more seams.

## History

- 2026-10-17 — candidate (scout run); weak demand confidence. No build recommendation until hook-specific Planner and Google AIO checks.
- 2026-10-17 — retained as the sole home-project candidate at the user's request. Playwright Google AIO request hit an unusual-traffic challenge; AIO unknown. A newer sheet-size optimizer partially overlaps with the access feature.
- 2026-10-17 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.
- 2026-10-17 — validated (confidence: low; Keyword Planner top-up). Hook phrasings are all at the 50 bucket or no-data, so Demand is weak and the traffic sanity-check fails; no kill-level finding. SERP/AIO evidence expires 2026-11-14; pre-build re-probe mandatory.
