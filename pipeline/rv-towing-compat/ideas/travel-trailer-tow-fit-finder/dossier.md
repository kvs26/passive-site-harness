# Dossier: Travel-trailer tow-fit finder

**Per-floorplan "which trailers fit my truck's sticker numbers" verdict finder — hook is already shipped by a purpose-built, free incumbent (Mint RV, 69,850 RVs × 33,756 vehicles); kill-level finding on scout gates 4 and 3; confidence medium.**

**Evidence dated 2026-10-17 — SERP/AIO evidence expires 2026-11-14. Pre-build re-probe mandatory regardless.** (Idea is `rejected`; expiry recorded for the record only.)

## Signal scorecard

**Demand: weak** — the pain is real and recurs across communities, but the Keyword Planner export contradicts it for the tool's own queries (hook-specific phrasings ≤50 bucket or absent; calculator terms 500 bucket with a falling-YoY flag; the only 5K+ terms are a VIN-lookup term, an explainer term, and a shopping term).
  - Pain recurrence (re-verified 2026-10-17 via Arctic Shift): r/f150 "F150 Tow" (1wn6unq) — "I want to add a hitch to pull a travel trailer and not sure ... if it can pull the trailer thinking a jayco about 5000"; r/f150 "Can this tow" (1wh5k09) — "How big heavy of a camper can this thing do? It's 2023 powerboost"; r/RVLiving 1x4nbai "2012 V8 5.0 F-150 tow a 30ft safely ?" and 1wglnvs "OK tow police, what's your verdict?"; r/ToyotaTacoma 1v4xa9b "Need Tow Advice - Campers" (Arctic Shift listing, 2026-10-17; titles read, bodies not opened except the two r/f150 posts).
  - Autocomplete (fan-out 2026-10-17, Google US): "what travel trailer can a tacoma pull", "what size travel trailer can i pull with my f150", "what travel trailers can a subaru outback tow", "can an suv tow a travel trailer", "travel trailer tow vehicle calculator" — broad per-vehicle phrasing breadth.
  - Contradicting: Planner (US, 2026-10-09 screen, `pipeline/demand-csv/2026-10-09-screen2.csv`) — "travel trailer towing capacity calculator" 50, "best travel trailer for half ton truck" 50, "travel trailer for tacoma" 50; "f150 towing capacity travel trailer", "can my suv tow a travel trailer", "how big a travel trailer can my truck tow", "80 percent towing rule", "gvwr vs dry weight travel trailer" all zero/no-data; "towing capacity calculator" 500 (YoY -90%), "tongue weight calculator" 500 (-90%), "travel trailer weight" 500 (-90%).

**SERP, AIO & competitor weakness: weak** — incumbent field is deep and fresh: a free 70K-RV matching database, a second per-trailer-page builder, and at least four other calculators on page 1 of Bing. AIO not probed (manual checkpoint not run; see below).
  - Bing 2026-10-17 "what travel trailer can i tow with my truck calculator": Bing's own AI answer block cites RV TowCalc and KamperHub; organic: rvtowingcalc.com, safetowcalculator.com, whetstonetools.com, everycalculators.com, rvsolver.com, towcalc.net, neocalculators.com, towmargin.com, towcapacitycalc.com (https://www.bing.com/search?q=what+travel+trailer+can+i+tow+with+my+truck+calculator).
  - Bing 2026-10-17 "travel trailer tow vehicle calculator by model": towgenius.com/trailers ("Tow Vehicle Finder by Travel Trailer Model"), rvtowingcalc.com, rvcalcs.com, safetowcalculator.com, towgenius.com, RVUniverse towing guide, plus a sponsored dealer ad.
  - **Kill-level (gate 4):** MintRV opened — "We match your truck to 70,000+ RVs instantly. See exactly what fits your capacity — no guessing required." (https://mintrv.com/vehicles); "Enter your vehicle, and we'll show you every RV in our 70,000+ database that fits your towing and payload capacity — with filters for class, features, and price." (same page); "Browse 70,000+ RVs by weight, length, floorplan, and price — and filter to only the units your vehicle can safely tow." (https://mintrv.com/about).

**Hook depth: weak** — users do ask the hook question ("can this tow", "tow police, what's your verdict?"), but the incumbent gap scout assumed is closed this run.
  - Mint RV's stated positioning is the scout hook inverted: "Other sites show towing capacity, but leave you guessing which RVs actually fit." (https://mintrv.com/vehicles). Payload-first framing is also already theirs: "Payload is the real limit — not tow rating" (https://mintrv.com/about).
  - Vehicle step accepts manual entry ("Select Your Tow Vehicle By Vehicle / Enter Manually", https://mintrv.com/tow-calculator), so door-sticker numbers are not an unserved input. Not tested: whether the RV-search filter itself accepts manual sticker values (JS-gated; page body not rendered).
  - r/RVLiving 1w7czdp, "I built TowAtlas to make RV towing weight calculations easier" (Arctic Shift title listing, 2026-10-17) — another entrant exists.

**Monetization: weak** — affiliate route is plausible (outputs are linkable) but program terms were not fetched this run, and the incumbent already occupies the same slots.
  - Mint RV per-RV pages carry Amazon Associates links for Class 4 receiver, distribution/sway hitch, ball mount: "...amazon.com/dp/B076DF1488?tag=rvweb-20" and "As an Amazon Associate, we may earn from qualifying purchases." (https://mintrv.com/rvs/2026-jayco-jay-flight-slx-250bhw-84564) — confirms the output category is linkable.
  - Amazon Associates rate/cookie terms: **not fetched this run** (early stop after kill-level finding) — verify verbatim before any build.
  - Bids (supporting only, affiliate route; see Keyword data).

**Feasibility & sustainable upkeep: unknown** — manufacturer floorplan pages are public (scout: Jayco per-line weight ranges), but no source/licence check or hrs/week estimate was built this run. Searched: none beyond scout's carry-over. Note for any future attempt: Tow Genius states "Specifications can change by model year and production configuration" (https://towgenius.com/trailers/jayco-jay-feather-24bh) — upkeep scales with model-year count.

**Data moat: weak** — kill-level (gate 3): the merge barrier is already crossed at far larger scale.
  - MintRV: "Towing compatibility, payload truth, and axle-ratio reality — for 70,000+ RVs and 40,000+ tow vehicles" ; "We parse every trim, engine, transmission, and hitch type straight from those [OEM towing guide] documents."; 2024 acquisition of RVWeb.com (online since 1996) folded into the DB (https://mintrv.com/about). RV search shows "69,850 results" across 2,794 pages (https://mintrv.com/rv-search); per-RV pages exist (https://mintrv.com/rvs/2026-jayco-jay-flight-slx-250bhw-84564); vehicles: "33,756 vehicles with verified towing specs" (https://mintrv.com/vehicles).
  - Tow Genius runs the same long-tail pattern per trailer ("Find compatible tow vehicles →", 8 pages today, growing) and per vehicle-year (40 year-specific pages) (https://towgenius.com/trailers, https://towgenius.com/tow-vehicles).
  - A hand-verified starter set (Casita/Oliver/Jay Feather/Basecamp) is a strict subset of data these sites already serve.

**Confidence: medium** — one signal unknown (feasibility), monetization terms and the AIO checkpoint not run (early stop on a kill-level finding); demand and incumbent evidence each rest on ≥2 independent sources.

## SERP & AIO snapshot

Dated 2026-10-17 (Bing via fetch; Bing is AIO-blind to Google's AI Overview).

- **"what travel trailer can i tow with my truck calculator"** — top organics are calculator tools (rvtowingcalc.com "Towing Capacity Calculator - Can My Truck Tow This Trailer?", safetowcalculator.com, whetstonetools.com/hitchmath/travel-trailer). rvtowingcalc.com also ranks a guide "What Size Travel Trailer Can My Truck Tow? A Right-Sizing Guide" (80% rule, door-jamb payload, tongue weight). Bing's own AI block answered the question and cited RV TowCalc and KamperHub. Not beatable by a generic page; per-floorplan wedge is exactly where Mint RV/Tow Genius are building.
- **"travel trailer tow vehicle calculator by model"** — towgenius.com/trailers first; then rvtowingcalc.com, rvcalcs.com, safetowcalculator.com. Mint RV's own YouTube "Best Vehicle Towing Calculator" (search 40,000+ trucks and SUVs by year/make/model/trim) is in the video pane.
- **Opened incumbents (all fetched 2026-10-17):** mintrv.com (tow-calculator, vehicles, rvs, rv-search, about, a per-RV page); towgenius.com (trailers, a per-trailer page, tow-vehicles, methodology); rvtowingcalc.com ("100+ vehicles across 12 brands in database"; six-point check; generic tools; "Independent & Unbiased ... We don't sell RVs"). rvcalcs.com fetch returned HTTP 400 (not opened). Scout's earlier-blocked sites (camperreport, rvtrader, etrailer, irv2) were not retried.
- **AIO re-probe (Google):** **not run.** Predicted from query form: "what travel trailer can i tow" / "can my truck tow ..." are question-form (higher AIO trigger rate); "X vs Y"-form higher still. `&udm=14` control not captured. Per-query-compute wedge (per-floorplan verdict) is the same wedge the incumbents are already filling, so a clean AIO result would not have rescued the idea. Left as a mandatory manual checkpoint only if the idea is ever re-opened.

## Keyword data

Source: Keyword Planner export `pipeline/demand-csv/2026-10-09-screen2.csv` (US, Sep 2025–Aug 2026 window; exported 2026-10-09 — fresh, <6 months). This is a multi-niche demand-screen export, not a dedicated per-idea export; no idea-folder `keyword-planner.csv` / `keywords-request.md` exists. Read via `scripts/planner-report.py`. Volume values are order-of-magnitude buckets.

| Group | Keyword | Bucket | YoY | Bid low / high (INR) | Bid low / high (USD-equiv) |
|---|---|---|---|---|---|
| Shopping head | lightweight travel trailer | 50K | 0% | 33.05 / 169.38 | $0.35 / $1.78 |
| Shopping head | travel trailer under 5000 lbs | 5K | 0% | 34.21 / 162.60 | $0.36 / $1.71 |
| Informational / explainer | payload vs towing capacity | 5K | 0% | 9.50 / 1373.77 | $0.10 / $14.44 |
| VIN lookup (killed at scout, gate 2/3) | towing capacity by vin | 5K | 0% | 90.26 / 743.98 | $0.95 / $7.82 |
| Tool/calculator | towing capacity calculator | 500 | -90% | 9.46 / 526.29 | $0.10 / $5.53 |
| Tool/calculator | tongue weight calculator | 500 | -90% | 20.92 / 393.93 | $0.22 / $4.14 |
| Tool/calculator | gcwr calculator | 500 | 0% | — | — |
| Tool/calculator | how much can my truck tow | 500 | 0% | 3.87 / 51.20 | $0.04 / $0.54 |
| Spec lookup | travel trailer weight | 500 | -90% | 38.72 / 241.97 | $0.41 / $2.54 |
| Spec lookup | f250 payload capacity | 500 | 0% | 112.48 / 472.14 | $1.18 / $4.96 |
| Hook-specific | travel trailer for tacoma | 50 | 0% | 29.04 / 133.57 | $0.31 / $1.40 |
| Hook-specific | best travel trailer for half ton truck | 50 | 0% | 4.95 / 184.86 | $0.05 / $1.94 |
| Hook-specific | travel trailer towing capacity calculator | 50 | 0% | — | — |
| Hook-specific | weight distribution hitch calculator | 50 | -90% | — | — |
| Hook-specific | travel trailer for minivan | 50 | -90% | — | — |
| Zero/no-data | f150 towing capacity travel trailer; can my suv tow a travel trailer; how big a travel trailer can my truck tow; 80 percent towing rule; gvwr vs dry weight travel trailer; travel trailer towing rule of thumb | — | — | — | — |

USD conversion: INR 95.111965 per USD (open.er-api.com/v6/latest/USD, last updated 2026-10-17 00:02 UTC); USD = INR ÷ 95.111965, rounded to cents. Raw INR figures verbatim from the export.

Readout: the 50K/5K terms are shopping / VIN / explainer intent, not the tool's own query set; hook-specific phrasing sits at 50 or below. Falling-YoY flags (-90%) on three calculator/weight terms count as contradicting evidence. Bids are supporting-only on the affiliate route.

## Monetization sketch

Affiliate route (as in `idea.md`): tow-hitch accessories on per-floorplan / per-vehicle pages — WD/sway hitches, brake controllers, tongue-weight scales, receivers. Verified this run only that the incumbent links these categories on Amazon Associates (see above). Program rate/cookie verbatim: **not fetched this run.** High-RPM ads (auto/RV) would need the Planner bid bar; head-tool bids converted above are mostly under ~$1.00 low (exceptions: "f250 payload capacity" $1.18, "towing capacity by vin" $0.95 — a VIN-lookup term scout already killed), so no ads-route support.

## Digital products (documented, off by default)

None apparent.

## Traffic sanity-check

Opinion, not a number. The $100/mo viability bar implies ≈ 4,300–11,500 visitors/mo blended, or ≈ 7.5K–43K pageviews/mo ads-only depending on RPM class (reference table). The measurable tool-intent query universe for this hook is a 500-bucket calculator cluster (falling) plus ≤50-bucket model/vehicle phrasings; the 5K–50K terms are shopping/VIN/explainer queries a verdict tool would not own. The long-tail surface (per floorplan × per vehicle) is credible in structure, but it is the surface Mint RV (69,850 RV pages) and Tow Genius already occupy with larger datasets. Plausibly cannot clear the visitors the bar implies.

## Risks & unknowns

- AIO re-probe (Google) not run; `&udm=14` control not captured.
- Amazon Associates rate/cookie for the relevant categories not fetched this run.
- Feasibility/upkeep: no source/licence audit, no hrs/week estimate (stopped after kill-level finding).
- Unverified: whether Mint RV's RV-search filter accepts hand-entered sticker payload values end-to-end (JS-gated); whether any of Mint RV's per-RV compatibility lists are server-rendered/indexable (the per-RV page fetched showed an input widget, not a static list).
- r/RVLiving/r/ToyotaTacoma thread bodies not opened (titles only); r/TravelTrailers and r/Ram1500 searches returned empty (`title=tow`).
- Not opened: rvcalcs.com (HTTP 400), camperreport/rvtrader/etrailer/irv2 (Cloudflare 403 at scout; not retried).
- Searched and came up empty: mechanics.SE ("tool to check trailer fits truck", "travel trailer too heavy for truck payload", "trailer vs truck GVWR GCWR tow rating", "travel trailer tongue weight payload"); outdoors.SE (travel trailer tow vehicle / payload tongue weight); HN (towing capacity trailer calculator / RV towing payload; travel-trailer hits were off-topic EV-towing/general threads); Lemmy (nothing on-topic).

## Sources log

- Scout run `pipeline/rv-towing-compat/runs/2026-10-09-scout.md` (context; claims re-verified only where listed above).
- `scripts/fanout.py` (Google US autocomplete): seeds "what travel trailer can i tow", "travel trailer tow vehicle calculator", "can my truck tow this travel trailer", "best travel trailer to tow with f150", "travel trailer for tacoma", "can an suv tow a travel trailer", "travel trailer payload tongue weight" (the `--mode plain` run also emitted unrelated "plain ..." suggestions — ignored); question mode: "travel trailer tow vehicle", "jay feather tow vehicle".
- `scripts/pain-fetch.py`: stackexchange mechanics (5 queries) and outdoors (2); hn (3); lemmy (2); reddit RSS (429 rate-limited, no data).
- Arctic Shift (curl): posts/ids 1wn6unq, 1wh5k09; posts/search `title=tow` in r/RVLiving, r/TravelTrailers (empty), r/ToyotaTacoma, r/Ram1500 (empty). SE API: mechanics q/69582 (Tesla Model 3 GVWR minus curb weight — only loosely relevant).
- Bing (fetch_webpage): "what travel trailer can i tow with my truck calculator", "travel trailer tow vehicle calculator by model".
- Incumbents opened: https://mintrv.com/tow-calculator, /vehicles, /rvs, /rv-search, /about, /rvs/2026-jayco-jay-flight-slx-250bhw-84564; https://towgenius.com/trailers, /trailers/jayco-jay-feather-24bh, /tow-vehicles, /methodology; https://www.rvtowingcalc.com/.
- Dead end: https://rvcalcs.com/calculators/towing/ (HTTP 400).
- Planner: `pipeline/demand-csv/2026-10-09-screen2.csv` via `scripts/planner-report.py`; FX: https://open.er-api.com/v6/latest/USD (2026-10-17).
