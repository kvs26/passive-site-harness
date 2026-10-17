# travel-trailer-tow-fit-finder

## Status
rejected

## Origin
Scout 2026-10-09 (`runs/2026-10-09-scout.md`). Strength: **weak** (strong demand, but incumbents unverified and AIO/dealer content risk).

## Idea
Enter your truck/SUV sticker payload, tow rating, GCWR, hitch class/receiver limit, passengers + cargo → browse a curated per-floorplan travel-trailer catalog (GVWR, UVW, hitch weight, length) with verdicts: fits at 80% rule / tight / over, and which limit binds first (usually payload via tongue weight). Reverse: pick a floorplan → which vehicle configs tow it.

## Edge
- **Dataset**: hand-verified per-floorplan specs from manufacturer pages (e.g. Jayco lists per-line weight ranges like Jay Feather Air SL "2,515 - 2,920 lbs."; floorplan pages carry GVWR/UVW/hitch), starting with small/light brands that drive model queries (Casita, Oliver, Jay Feather, Airstream Basecamp).
- **Compute**: tongue weight (actual hitch + loaded estimate) vs remaining payload, GVWR vs tow rating, GCWR, receiver class; binding-limit explanation.
- **Long-tail pages**: per floorplan ("Jay Feather 22RB tow vehicle"), per vehicle class ("travel trailers a Tacoma can tow", "best travel trailer for F-150").
- **Monetization**: WD hitches, sway control, brake controllers, tongue-weight scales (Amazon/etrailer affiliate); high-RPM auto/RV ads.

## Hook
"What trailer can I tow with *my* truck's sticker numbers?" with a per-floorplan verdict list.

## Incumbent probe (2026-10-09)
- rvlife, camperreport (403 Cloudflare), rvtrader (403), mortons-on-the-move, changingears, towingplanner (timeouts/unextractable), etrailer (Cloudflare 403): **unverified**. Believed formula calculators, not catalog-wide verdicts — must be confirmed manually.
- Ram towing guide (ramtrucks.com/towing.html, 200 but redirected on fetch): OEM truck-side only.
- Jayco floorplan pages: specs, no tow-vehicle compute; Jayco's buyer's guide is preference-based.

## AIO probe
Predicted: generic "what size travel trailer can I tow" → AIO formula answer (kill risk for generic pages). Model-pair queries ("can a 2023 f150 powerboost tow a 7000 lb travel trailer") likely partial AIO. **Manual checkpoint required.**

## Gate results
1. AIO — at risk (generic) / pass for per-floorplan pages (predicted)
2. Static feasibility — pass
3. Data moat — weak (manufacturer specs public; moat = curation across brands + verification)
4. Hook served — unknown (incumbents not verifiable this run)
5. Legal — pass (disclaimer)
6. US — pass
7. Monetization — pass

## Evidence
- Autocomplete: "what travel trailer can i tow", "what size/weight/length travel trailer can i tow", "travel trailer tow vehicle calculator", "best travel trailer to tow with f150", "best travel trailer to tow with a tacoma", "casita travel trailer tow vehicle", "oliver travel trailer tow vehicle", "can a tiguan tow a camper trailer", "easiest travel trailer to tow"
- r/f150 "F150 Tow" (1wn6unq): "2020 3.5 V6 xlt ... pull a travel trailer ... jayco about 5000 any advice?"
- r/f150 "Can this tow" (1wh5k09): "How big heavy of a camper can this thing do? It's 2023 powerboost"
- mechanics.SE q/69582 (GVWR minus curb vs tow rating), q/43698 (tongue weight limit 250), q/94228 (tongue weight 10% hitch classes)
- Search volume: unknown

## History
- 2026-10-09: created by scout.
- 2026-10-17 — rejected (confidence: medium). Gate 4 + gate 3 disproved: MintRV (mintrv.com) already ships the vehicle -> fitting-RV match over 69,850 RVs / 33,756 vehicles with per-RV pages, from OEM towing guides, free; Tow Genius is building per-trailer tow-vehicle pages. Planner also shows hook-specific queries at <=50 bucket. See dossier.md and runs/2026-10-17-validate-travel-trailer-tow-fit-finder.md.


## Demand (Keyword Planner 2026-10-09, screen 2, US)

Upgraded weak -> moderate. 20-keyword total ~67.8K/mo, but 50K is 'lightweight travel trailer' (shopping head). Tool-intent: towing capacity by vin 5K, payload vs towing capacity 5K, travel trailer under 5000 lbs 5K, towing/tongue-weight/GCWR calculators ~500 each. Real demand for 'my vehicle -> which trailers fit' exists; generic towing calculators are crowded, so the hook must be the vehicle-to-trailer-model match list.
CSV: pipeline/demand-csv/2026-10-09-screen2.csv
