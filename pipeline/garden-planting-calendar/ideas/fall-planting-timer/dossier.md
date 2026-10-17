# Dossier: fall-planting-timer

**ZIP → dated fall-planting windows (garlic, spring bulbs, cool-season grass seed, cover crops) with a correct "today is OK / too late" verdict: the one idea of the three whose gap is demonstrably open this run — the closest incumbent (whentoplant.net) answers "too late?" wrongly for tulips and grass seed — and the idea-specific Keyword Planner export now backs it (five 5K-bucket "when to plant" heads; "is it too late to plant grass seed" 500 with +900% YoY). Validated at medium confidence; the AIO probe is now done (present on 6/6 queries, zone/region-level and hedged, not kill-level); lawn-brand incumbents still not opened.**

**Evidence dated 2026-10-17 — SERP/AIO evidence expires 2026-11-14. Pre-build re-probe mandatory regardless.**

*Top-up 2026-10-17: `keyword-planner.csv` ingested (export "Keyword Stats 2026-10-17 at 10_55_01", Oct 2025–Sep 2026) and Amazon linkability spot-checked. Same day, the AIO re-probe and a Google SERP check were run through Playwright (see SERP & AIO snapshot), so SERP/AIO evidence is dated 2026-10-17 and the expiry stays 2026-11-14.*

## Signal scorecard

**Demand: strong** — recurring seasonal "is it too late?" posts in two independent communities, in the current week, plus 5K-bucket heads.
  - r/lawncare, titles posted 2026-10-04 to 2026-10-15 (8 results returned, limit 8, for title "too late" with after=2025-09-01; fetched via Arctic Shift 2026-10-17): "Too late to Aerate and overseed?" (https://www.reddit.com/r/lawncare/comments/1x57l3m/), "Is it too late to over seed in SE michigan. Also sprinklers are already winterized." (https://www.reddit.com/r/lawncare/comments/1x0rjhy/), "Too late for grass seed? Omaha, NE" (https://www.reddit.com/r/lawncare/comments/1wznjbr/), "Zone 7/8 east coast (mid atlantic) near the ocean. Is it too late to seed fescue?" (https://www.reddit.com/r/lawncare/comments/1x1mkpi/).
  - r/gardening, 2025-11-29: "Is it too late to plant garlic bulbs in zone 7b?" (https://www.reddit.com/r/gardening/comments/1p9y4s9/) and "…zone 7a?" (https://www.reddit.com/r/gardening/comments/1p9xzjq/).
  - Keyword Planner, idea-specific export (one piece; buckets are order-of-magnitude): core "when to plant" group in the 5000 bucket — garlic, tulip bulbs, grass seed, potatoes, daffodil bulbs (5 heads); 500 bucket — garlic in ohio, garlic zone 7, tulip bulbs zone 6, best time to plant grass seed in fall, cover crops, fall planting calendar, first frost date. Hook-specific ("too late?") rows: is it too late to plant grass seed 500 (3-mo +900%, YoY +900%), is it too late to plant garlic 500 (3-mo -90%), is it too late to plant tulip bulbs 500 (no bid data), is it too late to overseed lawn 50 (3-mo ∞). No data for "when to stop planting grass seed in fall" and "last day to plant bulbs".
  - Contradicting flags: "when to plant tulip bulbs" YoY -90% and "is it too late to plant garlic" 3-mo -90% in this export; "when to plant garlic" shows YoY 0% here although the earlier shared screen export showed -90% (the flag is not stable between exports — bucket-step noise). Outweighed by the two recent independent community pieces plus the 5K-bucket group; recorded, not ignored.

**SERP, AIO & competitor weakness: weak** — the organic SERP has no purpose-built per-ZIP verdict tool and the one incumbent family gets "too late?" wrong, but AIO is present on all six fall queries and already answers at zone/region level (including dated Ohio windows).
  - whentoplant.net `/plants/<crop>/<state>/` exists for garlic, tulips, daffodils, grass-seed, potatoes (sitemap https://whentoplant.net/sitemap.xml, 2026-10-17: `/plants/garlic/` has 51 state pages).
  - Live run of https://whentoplant.net/tools/planting-date-finder/ (ZIP 43215, 2026-10-17):
    - Tulips: "Too late this year — In Zone 6B, it is too late to plant tulips this year and still get a harvest before your average first frost. The window closed around May 18."
    - Grass Seed (Lawn): "Too late this year … direct sow seeds outside around April 15 (2 weeks before your last frost)." (on a date when r/lawncare is actively asking about fall overseeding).
    - Garlic: "Yes, the planting window is open … around October 2 (2 weeks before your first frost)."
  - Inconsistency on https://whentoplant.net/plants/garlic/ohio/: "going into the ground 4-6 weeks before the soil freezes, typically mid-October through early November" vs the schedule card "FALL PLANTING 2 wks before first frost".
  - Not opened (flagged scout defect remains): Scotts (`/en-us/library/when-to-plant-grass-seed` returned "Technical Page … Start node not found" in fetch and in the browser; lawn-care calendar page blocked to curl), Pennington and Lawn Starter (fetch failed). Lawn-brand incumbents therefore **unknown**.
  - AIO re-probe, google.com/search (hl=en, gl=us), 2026-10-17: AIO present on 6 of 6 fall queries; none gives a per-ZIP answer; all but the Ohio one hedge to zone/region (details in snapshot). Control with `&udm=14`: no AIO, organic results only.

**Hook depth: strong** — users ask exactly the "too late?" question, and the one incumbent that offers the verdict gets it wrong for two of three fall families.
  - Demand-side quotes above (8 lawn posts in 12 days; 2 garlic posts).
  - Incumbent-side: tulips verdict reasoned as a harvest-before-frost crop; grass seed verdict anchored to spring. Same-page garlic dates disagree (see above).
  - Keyword Planner: the "is it too late to plant grass seed" (500, +900% YoY) and "is it too late to plant garlic" (500) queries exist as searched phrases — the hook is a thing people type, not only post.
  - Risk: a single fix by the incumbent would close this; it is a data-rule gap, not a structural one.

**Monetization: strong** — affiliate route verified (rate, cookie) and all five output families confirmed linkable on Amazon this run; Planner product bids are a bonus data point.
  - "Toys, Furniture, Home, Home Improvement, Lawn & Garden, Pets Products, … 3.00%" (https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ, 2026-10-17).
  - "(x) 24 hours elapse from that click" / "no later than 89 days after their initial click-through" (https://affiliate-program.amazon.com/help/operating/policies, 2026-10-17).
  - Linkability spot-check, 2026-10-17 (Amazon search pages via curl, results with ASINs returned for each): "grass seed tall fescue" (e.g. B000AYFU5Q), "tulip bulbs fall planting" (e.g. B003MRTVUI), "garlic seed bulbs for planting" (e.g. B00J9YNTMO), "broadcast lawn spreader" (e.g. B00002N66D), "bulb planter" (e.g. B0001E3W8W). Garlic seed stock is seasonal.
  - Planner top-of-page bids, INR (low–high) → USD at 95.111965 INR/USD (https://open.er-api.com/v6/latest/USD, 2026-10-17): tulip bulbs 106.52–442.35 → $1.12–$4.65; grass seed 24.68–203.30 → $0.26–$2.14; garlic seed 40.65–173.94 → $0.43–$1.83; bulb planter 20.20–118.57 → $0.21–$1.25; lawn spreader 19.82–66.62 → $0.21–$0.70. The "when to plant" heads themselves bid low (e.g. garlic 2.84–17.53 → $0.03–$0.18). Supporting-only for an affiliate route (low bids never downgrade); seed-company programs unverified.

**Feasibility & sustainable upkeep: weak** — NOAA side is solid; per-plant rule sources not opened this run.
  - NOAA 1991–2020 normals by station are public and are the basis of the incumbent's published data page (https://whentoplant.net/our-data-sources/).
  - Per-plant fall rules (soil-temp targets, weeks before freeze, chill hours for zones 8–10) still need hand-verification against extension pages — none fetched this run (unknown).
  - Upkeep estimate (opinion): rules change rarely; a yearly row review + quarterly link check — likely small once rules are verified.

**Data moat: weak** — barrier (b) per-row verification plausibly holds (the incumbent's rules are visibly generic-offset), but the surface is a few crop families × states/cities.
  - Evidence the barrier isn't replicated: incumbent's single rule "2 wks before first frost" applied to garlic and "1 week before" for tulips (planting-date-finder run); grass seed treated as a spring sow.
  - Surface: plant × state ("when to plant garlic in Ohio" 500 bucket) plus city pages; small relative to the incumbent's 3,338 URLs.

## SERP & AIO snapshot

Dated 2026-10-17. Google SERPs fetched through Playwright (hl=en, gl=us; no CAPTCHA; one observation per query — AIO text varies by session). Earlier in the run only one Brave SERP (planting calendar by zip code) was captured: whentoplant, plantbyzip, planyourhomestead, almanac, garden.org.

**AIO present: 6 of 6.**
- *when to plant garlic* — AIO: "Garlic is best planted in the fall, about 4 to 6 weeks before the ground freezes"; zone bands ("Cold Climates (USDA Zones 3–6): Plant from mid-September through November"; "Mild or Warm Climates (USDA Zones 7–10): Plant later in November or December"); closes "If you share your USDA growing zone or city/region, I can give you the exact ideal planting date for your area." Zone-level, hedged.
- *when to plant tulip bulbs* — AIO: per-zone windows ("Zone 6: Mid-October to early November. Zone 7: Late October to mid-November"); closes "If you share your city or USDA hardiness zone, I can tell you the exact window." Zone-level, hedged.
- *when to plant grass seed* — AIO: cool-season "Late summer to early fall (mid-August to mid-October)", warm-season "March through September"; closes "If you share your region or state and what grass type you want to grow, I can give you the exact target dates." Hedged.
- *when to plant garlic in ohio* — AIO: "typically between mid-October and early November", with sub-regional dated windows ("Central Ohio (Zones 6a–6b): October 10 to November 1"; "Southwest Ohio (Zones 6a–6b): October 15 to November 5"; sources Garlic Gods, Ohio State). **Closest to a full answer — the state-level variant layer (500 bucket) is largely absorbed.**
- *is it too late to overseed lawn* — AIO: "It is generally too late if you have fewer than 4 to 6 weeks before your area's first expected hard frost"; "Current Timing (Early October)" branches by region; suggests dormant seeding. Date-aware but coarse, hedged.
- *is it too late to plant grass seed* — AIO: "Yes, it is often too late for traditional planting, depending on your local climate and grass type, though dormant seeding is still an option"; "Current Status (Mid-October)" branches by region/grass type.

**&udm=14 control (no AIO on any of the six).** Organic results are articles, extension pages and forums, not per-ZIP tools: almanac.com, seedtofork.com, fairfaxgardening.org, cfaes.osu.edu, extension.illinois.edu (garlic); brecks.com, wickedtulips.com, rhs.org.uk, threeacrefarm.net (tulips); lawnstarter.com, extension.umd.edu, corporate.lowes.com (grass seed); garlicgods.com, bjgarlic.com, houzz.com (garlic Ohio); lawnsite.com forum, hambletons.com, jonathangreen.com, canr.msu.edu, familyhandyman.com, greenviewfertilizer.com, K-State extension ("too late"); r/lawncare threads on several. jonathangreen.com returned a Cloudflare 403 in the browser — not opened. Beatable on tool-vs-article shape; no incumbent verdict tool in the top results.

**Wedge past the AIO:** a per-ZIP dated window and an "OK today / too late" verdict computed against today's date and the local frost date. The AIOs above stay at zone/region level and themselves offer to compute the exact date if given a location; every SERP also carries an "AI Mode" entry that could perform that step. Not a kill-level finding (answers are hedged, not per-ZIP), but it puts the zone- and state-level pages at risk and makes the per-ZIP compute the only defensible part.

## Keyword data

Source: `keyword-planner.csv` (export 2026-10-17, window Oct 2025–Sep 2026, bids in INR, read via `scripts/planner-report.py`; fresh). Buckets are order-of-magnitude.

| Group | Keyword (bucket; 3-mo / YoY; competition) |
|---|---|
| Head | when to plant garlic (5000; +900% / 0%; Low), when to plant tulip bulbs (5000; 0% / -90%; Medium), when to plant grass seed (5000; 0% / 0%; Low), when to plant potatoes (5000; Low), fall planting calendar (500; Medium), first frost date (500; Low) |
| Variants | when to plant daffodil bulbs (5000; +900% / 0%; High), when to plant garlic in ohio (500; +900%), when to plant garlic zone 7 (500), when to plant tulip bulbs zone 6 (500; +900%), best time to plant grass seed in fall (500; +900%), when to plant cover crops (500) |
| Hook ("too late?") | is it too late to plant grass seed (500; +900% / +900%), is it too late to plant garlic (500; -90% / 0%), is it too late to plant tulip bulbs (500; no bids), is it too late to overseed lawn (50; ∞ / 0%); no data: when to stop planting grass seed in fall, last day to plant bulbs |
| Monetization | tulip bulbs (50000), grass seed (50000), lawn spreader (50000; YoY -90%), garlic seed (5000), bulb planter (5000) — all High competition; bids in USD under Signal scorecard → Monetization |

Trend flags (3-mo / YoY of +900%, -90%, ∞) are bucket-step jumps, not measured percentages; the seasonal Sep–Nov spike makes the 3-mo column time-of-export dependent. Contradicting flags are listed under Demand.

## Monetization sketch

Affiliate route: Amazon Lawn & Garden 3%, 24 h session / 89-day cart rule; links beside each verdict (grass seed, bulbs, spreaders, bulb planters, garlic seed). Plus Home & Garden ads. Seed-company/bulb-vendor affiliate programs not looked up.

## Digital products (documented, off by default)

Printable fall checklist (garlic + bulbs + lawn) per ZIP. Ships OFF.

## Traffic sanity-check

Opinion. $100/mo needs ≈ 4,300–11,500 visitors/mo blended, or ≈ 7.5K pv/mo ads-only at Home & Garden-class RPM (~$13.33) vs ≈ 43K pv/mo at ~$2.33. Five 5K-bucket "when to plant" heads, a 500-bucket variant layer (state/zone/plant) and a 500-bucket "too late?" layer, plus a visibly seasonal Sep–Nov spike, plausibly support the lower end of that range, but traffic is concentrated in about three months and an incumbent already ranks for plant × state pages. Plausible, not proven.

## Risks & unknowns

- Unknown: lawn incumbents (Scotts and others — pages errored; jonathangreen.com 403); per-plant rule sources; seed-company programs. Risk: Google AI Mode could absorb the per-ZIP compute.
- Confidence stays medium: the Planner CSV lifts the cap and the AIO probe is done, but feasibility rests on unopened rule sources and the lawn incumbents are unopened.
- Seasonality: the build/ranking window for Sep–Nov demand is the *next* fall, ≈ 11 months out; the 4-week evidence clock means a build now would be early.
- Incumbent can fix its verdict logic at any time.
- Kill-level findings: none.

## Sources log

- whentoplant.net: planting-date-finder (live), plants/garlic/ohio, sitemap, our-data-sources, garden-planner (live).
- Arctic Shift (reddit): r/lawncare title "too late" (after 2025-09-01), r/gardening title "garlic" (Sep–Nov 2025).
- Amazon Associates rates + policies; open.er-api.com USD rate.
- Shared screen CSV via `scripts/planner-report.py`; idea-specific `keyword-planner.csv` (top-up) via the same script.
- Amazon search pages (curl, 2026-10-17) for the five product families.
- Google SERPs + AIO via Playwright (2026-10-17): six fall queries with and without `&udm=14`.
- Dead ends: Scotts (2 URLs), Pennington, Lawn Starter (fetch failed); Bing/DDG empty; Brave 429 after one query; gardening.SE "when to plant garlic too late" / "tulip bulbs zone" returned no direct per-ZIP-tool evidence.
