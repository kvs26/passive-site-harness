# Dossier: Lifted-Truck Tire Fit Verdict

**A multi-platform (non-Tacoma) "will size X fit my truck at my lift and offset, and what do I trim?" verdict tool. Pain recurs across three independent owner communities and the Tire Rack 6% affiliate route is verified, but the Keyword Planner CSV shows the fit-verdict query surface is a fragmented long tail of 50-bucket or zero-volume phrasings; the volume-bearing terms are commercial ("leveling kit for f150" 5K, "all terrain tires 275 65r20" 5K, "33 inch tires for f150" 500), not the verdict hook. The hook is also only partly open: overlanding.tools already ships a per-vehicle verdict calculator for ~19 platforms. The traffic case rests on many long-tail pages each ranking, plus shopping-intent landing pages. The Google AIO checkpoint (2026-10-17) found an AI Overview on all four verdict queries, each giving a per-vehicle size answer with offset bands and a trim caveat; it hedges and asks for year, trim and wheel specs, so a narrow cited per-setup wedge remains, but it is thin. Confidence: low (demand graded weak; rubric floor).**

**Evidence dated 2026-10-17 (Planner CSV ingested 2026-10-17, same day) — SERP/AIO evidence expires 2026-11-14 (+4 weeks). Pre-build re-probe mandatory regardless.**

## Signal scorecard

**Demand: weak** — the fit/rub/trim pain recurs in three independent communities and autocomplete shows a per-year × model × lift long tail, but the Planner CSV measures that long tail at the 50 bucket or zero. Qualitative recurrence is strong; measured search volume for the hook is small. Graded weak because the quantitative check does not support the qualitative signal.
  - r/f150 "Will 35x12.50r20 fit on stock 23' king ranch wheels (+44) on a 2.5-3in level?" (https://www.reddit.com/r/f150/comments/1x7wsu2/will_35x1250r20_fit_on_stock_23_king_ranch_wheels/); "Will 35' rub this kit? 2022 4x4 F150." (https://www.reddit.com/r/f150/comments/1jo5xnz/will_35_rub_this_kit_2022_4x4_f150/); "3" front level will I rub with 22x14's?" (https://www.reddit.com/r/f150/comments/1q7dlzi/3_front_level_will_i_rub_with_22x14s/)
  - r/Ram1500 "2021 ram 1500. 2 inch level with 20x9 stock wheels and 33x12.50 tires... wanting to... clear and not rub" (https://www.reddit.com/r/Ram1500/comments/1sxkp87/); "Looking at leveling it and putting 33x12.50s on the stock 20 inch rims. Anybody have any issues with rubbing or needing wheel spacers?" (https://www.reddit.com/r/Ram1500/comments/1svxg6y/); "MotoFab 3/2 inch level kit ... will it give enough clearance for 35's?" (https://www.reddit.com/r/Ram1500/comments/1r36rtp/)
  - r/4Runner "07 4runner best tire size w/o body modifications ... 2 inch lifted ... avoid body modifications but also dont want any rubs on tight turns" (https://www.reddit.com/r/4Runner/comments/wvtc1m/07_4runner_best_tire_size_wo_body_modifications/); "what size tires can i run on a 2004 without rubbing with a 2 inch lift?" (https://www.reddit.com/r/4Runner/comments/zojil5/wheel_fitment_question/)
  - Google autocomplete fan-out (`scripts/fanout.py --mode=plain`, US, 2026-10-17): "2016 f150 max tire size with leveling kit", "2021 ram 1500 leveling kit tire size", "2018 silverado max tire size with leveling kit", "2020 ford ranger biggest tire size with leveling kit", "2016 chevy colorado max tire size with leveling kit", "5th gen 4runner 3 inch lift tire size", "f150 tire size with 2 leveling kit 20 inch wheels", "does a leveling kit allow bigger tires".
  - **Keyword Planner CSV (2026-10-17, US, Oct 2025–Sep 2026):** the platform × lift fit-verdict phrasings measured at the **50 bucket**: "f150 leveling kit tire size", "2021 ram 1500 leveling kit tire size", "2016 chevy colorado max tire size with leveling kit", "4runner 3 inch lift tire size", "5th gen 4runner 3 inch lift tire size", "4runner tire size with leveling kit", "silverado leveling kit tire size", "f150 tire size with 2 leveling kit 20 inch wheels", "35 inch tires 3 inch lift", "will 33 inch tires fit f150 with leveling kit" — all 50, mostly Low competition, no bids. **Zero/no data:** "2016 f150 max tire size with leveling kit", "2018 silverado max tire size with leveling kit", "2020 ford ranger biggest tire size with leveling kit", "biggest tire on stock wrangler jl", "biggest tires on ram 1500 with leveling kit", "bronco tire size with 2 inch lift", "do i need to trim for 33 inch tires", "tire size after leveling kit", "what size tires fit with a 3 inch lift", "wheel offset leveling kit 33 inch tires", "will 35s rub f150 with leveling kit", "does a leveling kit allow bigger tires".
  - **Volume-bearing terms are commercial, not verdict:** "leveling kit for f150" 5,000; "all terrain tires 275 65r20" 5,000; "33 inch tires for f150" 500 — all High competition. The earlier 2026-10-09 screen put the generic head "tire size calculator" at 500K (not this idea) and "what size tires fit my car" at 5K.
  - StackExchange (outdoors, mechanics) and HN returned nothing relevant this run (scout's mechanics q/79564 and q/86248 are the only thin pieces).

**SERP, AIO & competitor weakness: weak** — Google AI Overview (checked 2026-10-17) answers all four checkpoint queries with a per-vehicle verdict, including the long-tail "2021 ram 1500 leveling kit tire size". It is generic on offset (gives bands), ends by asking for year/trim/wheel specs, and carries "AI responses may include mistakes". Organic below it is forums, YouTube, retailer/vendor fitment guides; overlanding.tools did not appear on page 1 of the AIO-free control. One incumbent is purpose-built for the verdict and recently updated. Near-kill but not kill-level: the AIO does not give a cited, exact-setup (platform × lift × offset × tire) verdict, which is the only wedge left.
  - **overlanding.tools/calculators/lift-tire-clearance/** (last updated July 17, 2026) — inputs vehicle, target tire, lift height; output "VERDICT Fits with trimming ... MAX CLEAN TIRE ... MINIMUM LIFT". Curated chart of ~19 platforms at 3 lift tiers (Tacoma 3rd/4th gen, 4Runner 5th gen, Tundra, Land Cruiser 200, GX 470/460, Wrangler JK/JL/Rubicon, Gladiator, Bronco/Sasquatch, F-150 2015+, Ranger, Colorado, Ram 1500 DT, Frontier, Xterra; no Silverado/Sierra). Quotes: "The fitment chart assumes a typical aftermarket wheel offset for each platform." and "The preset fitment figures are curated from platform-specific fitment guides and long-running owner-forum consensus, and they carry roughly ±0.5 inch of build-to-build variance". Sources are generic (Tacoma World, IH8MUD), no per-row citations. Amazon affiliate lift-kit links and an embed option. (https://overlanding.tools/calculators/lift-tire-clearance/)
  - truckbedcoverfinder.com lift-kit calculator — generic geometry. "A geometry-based starting point — real fitment also depends on wheel offset/backspacing, tire width, suspension uptravel and trimming, and varies by truck." (https://truckbedcoverfinder.com/lift-kit-calculator/)
  - tubetyre.com 4Runner chart (updated Jul 7, 2026) — static lift → size table; "Always check the manufacturer's true diameter and section width before buying." tiresize.app pickup calculator — generic table ("Ignoring wheel offset: Stock wheels won't clear 35"+ tires").
  - Bing SERPs (2026-10-17) for "will 33 inch tires fit f150 with leveling kit calculator" and "what size tires fit 4runner with 2 inch lift calculator": static blog posts (liftprocustoms 19 Mar 2026, threepiece.us 21 Mar 2026, attuaro 25 Mar 2026, tirecalculatorhub F-150 guide 6 Oct 2026, Torq Engineering 6th-gen 4Runner guide 1 May 2026) plus generic calculators (tiremath, tiresize.app, truckbedcoverfinder) and overlanding.tools. Bing's AI summary cited tubetyre/tiremath and hedged.
  - Scout-opened, not re-opened: tacotires.com (Tacoma-only; serves the hook well; excluded), tirecalculatorhub.com (OEM sizes + speedo, no fitment claims), wheel-size.com (OEM DB, no lift data).
  - Unopened named incumbents: joteo.net lift-kit-tire-clearance calculator, Torq Engineering guide, liftprocustoms, motoristcare.

**Hook depth: weak** — owners clearly want an exact-setup verdict, but one calculator already gives a coarse verdict for most of the target platforms. The open space is offset-aware, cited, per-platform depth.
  - Owner questions are setup-specific in ways the incumbent's inputs do not capture: "stock 23' king ranch wheels (+44)", "22x14's", "20x9 stock wheels", "needing wheel spacers" (Reddit titles above). overlanding.tools has no offset input and states its chart "assumes a typical aftermarket wheel offset".
  - Blog consensus is coarse and contradictory by design: "On the majority of F150, Ram 1500, and Silverado 1500 trucks, a leveling kit allows you to run up to a 33 inch tire" (liftprocustoms, 19 Mar 2026); "A 2-3" leveling kit opens up the holy grail: 33x12.50 tires on 17x9 -12mm to +12mm wheels" (threepiece.us, 21 Mar 2026). A single-sentence rule does not answer "my stock +44 wheels on a 2.5in level".
  - Against the hook: overlanding.tools' own ±0.5in note and "Fits with trimming" verdict already serve the casual "will 33s fit my 4Runner/F-150/Ram at 3 inches" phrasing.

**Monetization: strong** — verified commission on a >$400 average order, and every verdict resolves to a linkable purchase.
  - Tire Rack affiliate (fetched 2026-10-09 and re-checked 2026-10-17), verbatim: "Earn 6% commission on every sale you generate. Tire Rack's average order value is more than $400. That's over $20 in commission per order!" (https://www.tirerack.com/affiliate)
  - Tire Rack has vehicle/size search, so a verdict (e.g. "LT285/70R17 on a leveled 4Runner") can deep-link to a size result.
  - Secondary: Amazon lift/leveling kits and wheels — competitors run it (overlanding.tools tag `overlandingtools-20` on lift-kit links); rate not re-verified this run.
  - Cookie window **unknown**: the affiliate FAQ page loads but its answers are collapsed, and the policy pages are blocked to curl. Discount Tire via CJ appears only in an unverified Bing summary (4% / 30-day) — not relied on.

**Feasibility & sustainable upkeep: strong** — static build is simple; the cost is the per-row research, which is front-loaded.
  - Build: Astro house template + client-side compute over a JSON matrix (platform/generation × lift tier × offset band × size → clean/trim/no-fit + citation) plus speedo/gearing/load math. No server.
  - Sources exist: kit-maker fitment charts, owner's manuals (OEM sizes/offsets), documented owner builds (Reddit/forums). Reddit fetch is rate-limited (per-thread RSS 429 after 1–2 requests), so owner-build gathering is manual and slow.
  - Upkeep estimate (bottom-up, labelled estimate, no traffic/revenue figures): rows are stable once verified; churn is new model-year generations and new kit releases a few times a year. Rough load: initial build is the heavy part; steady state is a quarterly sweep plus affiliate link check, plausibly well under the ~3 hrs/week cap.
  - Shaky part: per-row verification quality. "No source, no verdict" rule means coverage grows slowly.

**Data moat: strong** — a named replication barrier plus a real long-tail page surface; but see the owner-expansion risk.
  - Barrier (b) per-row hand-verification + (c) judgment: no single source publishes platform × lift × offset × size → verdict with trim steps. It has to be reconciled from kit-maker charts, manuals and owner builds, and every row cited. overlanding.tools' chart is the thin version (generic sources, ±0.5in, no citations), which shows the shape is copyable but the cited deep version is costly.
  - Long-tail surface (from the fan-out): year × model × lift × size pages ("2021 ram 1500 leveling kit tire size", "5th gen 4runner 3 inch lift tire size", "f150 tire size with 2 leveling kit 20 inch wheels").
  - Risk: tacotires.com (Tacoma-only) and overlanding.tools both show owners can expand; nothing here prevents a better-resourced clone.

## SERP & AIO snapshot

Dated 2026-10-17. Google checked in an automated browser (US, `hl=en&gl=us`, signed out, no CAPTCHA). Bing via fetch earlier the same day.

- **Incumbent SERP:** static blog posts + generic calculators + one purpose-built verdict calculator (overlanding.tools, ~19 platforms, updated July 2026). No offset-aware, cited, per-platform page surfaced. Details and quotes above.
- **AIO (Google), per query:**

| Query | AIO | Full answer or hedge | Cited |
|---|---|---|---|
| "will 33 inch tires fit f150 with leveling kit" | Yes | Opens "Yes, 33-inch tires will easily fit a Ford F-150 equipped with a leveling kit." Gives offset bands (+18 to +44mm stock-ish zero rub; 0 to -24mm on 33x12.50 needs minor trimming), speedometer note, then asks for year/trim, wheel size and width, stance. Mostly a full answer with an offset hedge. | f150forum, AmericanTrucks YouTube, Reddit r/f150, Atturo |
| "what size tires fit 4runner with 2 inch lift" | Yes | Size ladder: 265/70R17 no risk, 275/70R17 "sweet spot", 285/70R17 "may experience minor rubbing" with mud flap, liner and caster fixes; asks for generation, wheels, trim tolerance. Full answer with a hedge. | r/4thGen4Runner, 4Runner Lifestyle, Facebook |
| "biggest tire on stock wrangler jl" | Yes | Rubicon 35s "with minor rubbing"; Sport/Sahara 33s; spare-carrier weight, splash-guard and backspacing notes; asks for trim and year. Full answer with caveats. | 4 Wheel Parts, r/Wrangler, ExtremeTerrain YouTube |
| "2021 ram 1500 leveling kit tire size" | Yes | Three tiers (275/65R20 on stock wheels no rub; 295/60R20 on 20x9-10 mild offset; 305/55R20 or 33x12.50 on negative offset needs minor trim), air-ride kit caveat; asks wheel size and width. The long-tail platform query is answered. | Rough Country, National Tire & Wheel, Facebook, 5thGenRams |

- **Control (`&udm=14`):** query 1 organic page 1 is f150forum, customwheeloffset "Ford F-150 33 Inch Tire Height", Reddit r/f150 threads, Atturo lifted-F-150 guide, a Facebook group, AmericanTrucks YouTube. Query 4 is Ram forums/Reddit, a leveling-kit maker page and two fitment guides. No overlanding.tools or other per-vehicle verdict calculator on page 1 of either.
- **Wedge past the AIO:** the AIO gives size ladders and offset bands but not a citation per setup, not an exact (trim × lift × offset × tire) verdict, and it ends by asking for the same inputs the tool would take. It also makes contestable claims (e.g. Rubicon 35s on stock suspension). The wedge is a cited, deterministic exact-setup verdict. It is narrow.
- **Pass condition (set before the check):** the long-tail platform × lift query is not fully answered, and AIO on 1–3 hedges on offset/trim. Result: partly failed. Query 4 is answered at the band level; AIO on 1–3 does hedge on offset/trim. Not judged kill-level because the exact-setup compute is not performed by the AIO, but this is the closest call in the dossier.

## Keyword data

Keyword Planner CSV ingested 2026-10-17 (`keyword-planner.csv`; US, Oct 2025–Sep 2026; bids in INR account currency; run through `scripts/planner-report.py`). Buckets are order-of-magnitude (50/500/5k/50k), not exact counts. INR → USD at 1 USD = 95.111965 INR (open.er-api.com, 2026-10-17).

| Keyword | Avg searches | YoY | Comp. | Top-of-page bid low–high (INR → USD) |
|---|---|---|---|---|
| leveling kit for f150 | 5,000 | 0% | High | ₹33.24–₹138.37 → $0.35–$1.45 |
| all terrain tires 275 65r20 | 5,000 | 0% | High | ₹52.91–₹293.85 → $0.56–$3.09 |
| 33 inch tires for f150 | 500 | 0% | High | ₹40.76–₹378.04 → $0.43–$3.97 |
| f150 leveling kit tire size | 50 | 0% | Low | — |
| will 33 inch tires fit f150 with leveling kit | 50 | 0% | Low | — |
| 2021 ram 1500 leveling kit tire size | 50 | 3-mo ∞ | Low | — |
| silverado leveling kit tire size | 50 | 3-mo ∞ | Low | — |
| 4runner 3 inch lift tire size | 50 | 0% | High | — |
| 5th gen 4runner 3 inch lift tire size | 50 | 0% | Medium | — |
| 4runner tire size with leveling kit | 50 | −100% | — | — |
| 35 inch tires 3 inch lift | 50 | ∞ | Medium | — |
| 2016 chevy colorado max tire size with leveling kit | 50 | ∞ | Low | — |
| f150 tire size with 2 leveling kit 20 inch wheels | 50 | ∞ | Low | — |

Zero/no-data (15): 2016 f150 max tire size with leveling kit · 2018 silverado max tire size with leveling kit · 2020 ford ranger biggest tire size with leveling kit · 33x12 50 on stock 20 inch wheels ram 1500 · biggest tire for stock wheels with leveling kit · biggest tire on stock wrangler jl · biggest tires on ram 1500 with leveling kit · bronco tire size with 2 inch lift · do i need to trim for 33 inch tires · does a leveling kit allow bigger tires · tire rack lt285 70r17 · tire size after leveling kit · what size tires fit with a 3 inch lift · wheel offset leveling kit 33 inch tires · will 35s rub f150 with leveling kit.

Generic context from the 2026-10-09 screen (`pipeline/demand-csv/2026-10-09-demand-screen.csv`): "tire size calculator" 500K (not this idea), "what size tires fit my car" 5K.

**Read:** the hook phrasings are a fragmented 50-bucket / zero long tail; the only volume is in product-shopping queries (lift kit, tire size for a truck) that are High competition. Route is affiliate, so bids are supporting-only — they show live commercial intent on the shopping terms ($0.35–$3.97 range), nothing about the verdict hook.

## Monetization sketch

Affiliate route (primary): Tire Rack, 6% verified verbatim, AOV >$400 (≈$20+ per order by their own arithmetic). Each verdict ends in a buy-intent step: "tires in this size for your truck" deep-linked to Tire Rack's size/vehicle search. Secondary: Amazon lift/leveling kits (rate not re-verified; competitors already run it). Display ads are a secondary layer on the platform/lift guide pages; no RPM figure asserted here. Cookie window unknown — verify in the program terms before build.

## Digital products (documented, off by default)

A printable per-platform "what fits at each lift" cheat sheet is conceivable but low-value against a free live tool; owners want the verdict and the link. None compelling. Ships off.

## Traffic sanity-check

Labelled opinion. The viability bar ($100/mo within 9–12 months) implies, per the ticket-03 reference table (quoted, not recomputed): blended ads+affiliate ≈ 4,300–11,500 visitors/mo; ads-only ≈ 43K pv/mo at pets-class RPM vs ≈ 7.5K pv/mo at Home & Garden RPM. The directional test is a 5K+ head plus a multi-hundred-page long tail. Here the verdict-hook queries are 50-bucket or zero, so the traffic would have to come from hundreds of platform × lift × size pages each ranking for a tiny query, and the 5K-bucket terms ("leveling kit for f150", "all terrain tires 275 65r20") are shopping SERPs where the verdict tool is not the natural result. The long-tail surface is large and the order value is high ($400+ at 6%), which favors affiliate, but the measured volume per page is small and one incumbent already serves the casual question. My read: does not clearly clear the bar; plausible only with deep platform coverage and strong ranking on many small queries. Opinion, not a number.

## Risks & unknowns

- **overlanding.tools** already ships a verdict calculator for ~19 platforms (updated 2026-07-17). Depth (offset, trim ladder, citations, year-level, Silverado/Sierra) is the only open space; a competent update by them narrows it. Highest-impact risk.
- **Hook volume is small** — CSV measured the verdict phrasings at 50 or zero; traffic needs many pages ranking on tiny queries plus shopping-intent terms (High competition).
- **AIO (checked 2026-10-17)** — answers all four verdict queries at the band level, including a platform long-tail query; only the cited exact-setup verdict is left. Nearest-to-kill finding; a stronger AIO or a hedge-free update would make it kill-level at the pre-build re-probe.
- **Per-row verification labor and liability** — a wrong "fits" verdict means wasted money; needs the "verify before buying" disclaimer and a strict no-source-no-verdict rule.
- **Tire Rack cookie window** and Amazon rate unverified this run.
- **Reddit access** — per-thread RSS rate-limits after 1–2 pulls; owner-build mining is slow.
- **tacotires.com expansion** — same shape proven on Tacoma; the owner could widen.

## Sources log

- `scripts/pain-fetch.py reddit` — r/f150, r/4Runner, r/Ram1500 (titles quoted above). Primary demand recurrence evidence.
- `scripts/pain-fetch.py` stackexchange (outdoors, mechanics) and hn — nothing relevant (dead ends).
- `scripts/fanout.py --mode=plain` — Google autocomplete, US (537 lines raw for fit phrasings).
- overlanding.tools lift-tire-clearance — opened, read in full (incumbent + quotes).
- truckbedcoverfinder.com lift-kit-calculator, tubetyre.com 4Runner chart, tiresize.app pickup calculator — opened.
- Bing SERPs (2 queries) via fetch_webpage — incumbent inventory; Bing AI summary noted.
- tirerack.com/affiliate — 6% / AOV >$400 verbatim; /affiliates/faq.jsp loads but answers collapsed (cookie unverified); policy pages blocked.
- `pipeline/demand-csv/2026-10-09-demand-screen.csv` — Planner screen.
- `keyword-planner.csv` (Keyword Stats 2026-10-17 at 10_51_38; US, Oct 2025–Sep 2026) — ingested via `scripts/planner-report.py`.
- open.er-api.com — USD/INR 95.111965 (2026-10-17).
- Google SERP + AI Overview, 4 queries + `&udm=14` control on queries 1 and 4 (2026-10-17, automated browser, US, no CAPTCHA).
- Scout run 2026-10-09 — tacotires.com, tirecalculatorhub.com, tiremath.com, wheel-size.com, mechanics.stackexchange q/79564 and q/86248.
- Dead ends: joteo.net not opened. Google was reachable this time by automated browser (an earlier attempt had been assumed CAPTCHA-blocked).
