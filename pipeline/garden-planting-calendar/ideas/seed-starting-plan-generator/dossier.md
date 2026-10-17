# Dossier: seed-starting-plan-generator

**ZIP + crops + plant counts → weekly indoor seed-starting plan with tray/light/heat-mat shopping list: no kill-level finding, but the date half of the hook is already served by three free tools, the idea-specific Planner export shows the counts/gear phrasings have no search volume, and the headline tool query is falling; validated at low confidence (demand weak; AIO probed: present on 3/3 queries and fully answers the zone-level variant; off-season for community evidence).**

**Evidence dated 2026-10-17 — SERP/AIO evidence expires 2026-11-14. Pre-build re-probe mandatory regardless.**

*Top-up 2026-10-17: `keyword-planner.csv` ingested (export "Keyword Stats 2026-10-17 at 10_55_31", Oct 2025–Sep 2026) and Amazon linkability partly spot-checked. Same day, the AIO re-probe and a Google SERP check were run through Playwright (see SERP & AIO snapshot), so SERP/AIO evidence is dated 2026-10-17 and the expiry stays 2026-11-14.*

## Signal scorecard

**Demand: weak** — the date problem has 5K-bucket heads, but the idea's own tool query is falling, all community evidence found is old, and it is off-season (Jan–Apr peak).
  - Keyword Planner, idea-specific export (one piece; buckets are order-of-magnitude): date group in the 5000 bucket — when to start seeds indoors, when to start tomato seeds indoors, last frost date, seed starting calculator; 500 bucket — seed starting schedule, seed starting chart, when to start pepper seeds indoors, "… ohio", "… zone 6"; how many weeks before last frost to start seeds 50.
  - Contradicting flags: seed starting calculator 3-mo -99%, YoY -90%; seed starting schedule 3-mo -90%, YoY -90%; how many weeks before last frost to start seeds YoY -100%. The tool-shaped head queries are the ones falling.
  - Not in the export / no data: seed starting calendar by zip code (the idea's own phrasing).
  - r/gardening 2023-01-26: "Is there an app to enter your zip code and seeds of what you want to grow, and it creates a calendar for you of when to plant?" (https://www.reddit.com/r/gardening/comments/10m1u27/) — answered by existing apps (plantbyzip, Farm Your Yard, Seed To Spoon, Johnny's calendar).
  - gardening.SE q/47849 "Should I start seeds early indoors in my zone?": "for peppers and eggplants they should be started 8 weeks before the last front and I started them probably 2-3 weeks before" (https://gardening.stackexchange.com/q/47849).
  - No recent (≤ 6 months) in-season pain post fetched; Reddit dig limited to 1–2 queries and run in October.

**SERP, AIO & competitor weakness: weak** — several working free date tools (two of them ZIP-based), and AIO present on 3/3 queries, fully answering the zone-level one.
  - Johnny's Seed-Starting Date Calculator: "Enter spring frost-free date (include year):" then a generic table (e.g. "Peppers | 8 | 5-Sep | 2 weeks after | 31-Oct") — manual date, no ZIP, no counts, no gear list (https://www.johnnyseeds.com/growers-library/seed-planting-schedule-calculator.html). It links a separate "Seed Quantity Calculator … how many seeds or plants you will need for a given amount of space" (area-based, not trays).
  - whentoplant.net `/seed-starting/` : "Each guide below does that math for all eight USDA zones, built from the same frost data that powers our planting calendars" — per-crop pages ("Start Peppers Indoors 8 weeks before last frost") by zone (https://whentoplant.net/seed-starting/); its Garden Planner also emits START INDOORS / HARDEN OFF / TRANSPLANT rows by ZIP (live run 2026-10-17).
  - Reddit-named apps: Farm Your Yard (iOS) — "You enter all the seeds you have and it shows when you start the seeds, when to put them out, when to harvest… organizes it all in a weekly calendar" (13 pts, same thread); Seed To Spoon — "location based … decently large list of seeds".
  - seedsnow calculator URL returned 404 (https://www.seedsnow.com/pages/seed-starting-calculator); sproutrobot and mylocalplanting not usable.
  - AIO re-probe, google.com/search (hl=en, gl=us), 2026-10-17: present on 3 of 3 queries (details in snapshot). Control with `&udm=14`: no AIO.
  - More incumbents opened 2026-10-17 (via the Google SERP): sowrightseeds.com "Seed Starting Calculator by Zip Code" — "Enter your zip code, and the planting calculator will list the dates for when you should start sowing seeds for vegetables, flowers, and herbs" (https://sowrightseeds.com/blogs/planters-library/planting-calculator-for-sowing-calendar); powersplants.com calculator — "Enter your spring frost-free date:" then a plant table (https://powersplants.com/seed-starting-calculator/); groworganic.com "Seed Planting Calculator" — manual last/first frost dates, "Plan supplies for your schedule" links to a seed-starting supplies collection with no quantities (https://www.groworganic.com/pages/seed-planting-calculator). None computes plant counts → trays/lights. survivalgardenseeds.com returned "Access Denied" (not opened).

**Hook depth: weak** — the counts/gear differentiators have no search volume and no complaint or request found; absence is thin evidence, not disproof.
  - Keyword Planner: no data for how many seed trays do i need, how many seedlings can i grow under a shop light, seed starting supplies list, seed starting setup for beginners; the nearest quantity phrasing, how many tomato plants per person, is 500 bucket (Low competition, no bid data) and is about garden sizing, not indoor gear.
  - Searched without a hit: gardening.SE "is there a tool calculator when to start seeds" (returned q/1498 only); r/gardening thread above (asks for dates only); opened competitors (none offer counts/gear).
  - A later pass should still search tray-count and shelf-space phrasing in communities.

**Monetization: strong** — affiliate route verified (rate, cookie); the two main gear families confirmed linkable on Amazon; the gear queries carry the highest Planner bids of the three ideas' product sets, a bonus data point. Whether the traffic exists is a Demand question, not graded here.
  - "Toys, Furniture, Home, Home Improvement, Lawn & Garden, Pets Products, … 3.00%" (https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ, 2026-10-17); "(x) 24 hours elapse from that click" and "no later than 89 days" (https://affiliate-program.amazon.com/help/operating/policies, 2026-10-17).
  - Linkability spot-check, 2026-10-17 (Amazon search pages via curl): "grow light seed starting" (e.g. B0001WV010) and "seedling heat mat" (e.g. B000E3B8XG) returned ASIN results. "seed starting trays" and "seed starting mix" were rate-limited (empty page) — not confirmed this run.
  - Planner top-of-page bids, INR (low–high) → USD at 95.111965 INR/USD (https://open.er-api.com/v6/latest/USD, 2026-10-17): seedling heat mat 28.39–175.85 → $0.30–$1.85; seed starting trays 30.53–101.60 → $0.32–$1.07; grow lights for seed starting 28.88–85.32 → $0.30–$0.90; seed starting mix 22.24–97.76 → $0.23–$1.03. Date-intent queries bid low (when to start seeds indoors 2.77–26.66 → $0.03–$0.28; when to start tomato seeds indoors 1.99–14.97 → $0.02–$0.16). Supporting-only for an affiliate route. Competition on the four gear queries: High.

**Feasibility & sustainable upkeep: strong** — pure calculation, public data, tiny upkeep.
  - NOAA normals (public; cited on https://whentoplant.net/our-data-sources/) and per-crop start weeks published independently by Johnny's table and whentoplant's seed-starting guides (e.g. Peppers 8 weeks in both).
  - Upkeep estimate (opinion): rows change rarely; yearly review + quarterly link check — well under ~3 hrs/week.

**Data moat: weak** — thin: one calculation on commonly published weeks; incumbent already has per-crop × zone seed-starting pages.
  - Barrier is at most (a) light merge; the counts → tray/light math is the only non-replicated piece and is easy to copy.
  - Surface: crop × zone/state "when to start tomato seeds indoors in Ohio" — already covered at zone level by https://whentoplant.net/seed-starting/.

## SERP & AIO snapshot

Dated 2026-10-17. Google SERPs fetched through Playwright (hl=en, gl=us; no CAPTCHA; one observation per query — AIO text varies by session).

**AIO present: 3 of 3.**
- *seed starting calculator* — AIO: "Use a Seed-Starting Date Calculator to build a custom planting timeline"; lists "Johnny's Seed-Starting Date Calculator", "National Gardening Association Garden Calendar: Enter your zip code or city to generate a regional planting schedule", "Seedtime Garden Planner", then weeks-before-frost rules per crop group. The AIO routes the tool query to existing tools (NGA calendar and Seedtime are incumbents not opened this run).
- *when to start seeds indoors* — AIO: "start seeds indoors 6 to 8 weeks before your local last expected spring frost date", crop-by-crop weeks, points to Johnny's calculator; closes "If you share your location (city or hardiness zone) or what you want to plant, I can give you the exact calendar dates." Hedged.
- *when to start tomato seeds indoors zone 6* — AIO: "start tomato seeds indoors 6 to 8 weeks before your local average last spring frost date", "Ideal Sowing Window: Mid-March to early April", transplant mid-May, grow-light hours. **Fully answers the zone-level variant.**

**&udm=14 control (no AIO on any of the three).** Organic: johnnyseeds.com, awaytogarden.com, sowrightseeds.com, powersplants.com, craftthyme.com, survivalgardenseeds.com, groworganic.com (calculators); almanac.com, lancaster.unl.edu, missouribotanicalgarden.org, extension.illinois.edu, epicgardening.com, motherearthnews.com, thecottagevegetable.com, ocfarmersmuseum.org, northernhomestead.com and r/gardening, r/vegetablegardening threads (guides). The tool query already shows seven calculators on page one.

**Wedge past the AIO:** plant counts → tray/cell/light/heat-mat totals, which none of the AIOs or opened calculators compute. Not kill-level — but the date half and zone-level variants are covered by AIO plus many free tools, so the wedge is the counts/gear piece alone, for which the Planner export shows no search volume.

## Keyword data

Source: `keyword-planner.csv` (export 2026-10-17, window Oct 2025–Sep 2026, bids in INR, read via `scripts/planner-report.py`; fresh). Buckets are order-of-magnitude.

| Group | Keyword (bucket; 3-mo / YoY; competition) |
|---|---|
| Head | when to start seeds indoors (5000; 0% / 0%; Low), last frost date (5000; Low; no bids), seed starting calculator (5000; -99% / -90%; Low; no bids), seed starting schedule (500; -90% / -90%), seed starting chart (500; Low) |
| Variants | when to start tomato seeds indoors (5000; Low), when to start pepper seeds indoors (500; +900% / 0%), when to start seeds indoors zone 6 (500), when to start seeds indoors ohio (500), how many weeks before last frost to start seeds (50; YoY -100%); no data: seed starting calendar by zip code |
| Hook (counts / gear) | how many tomato plants per person (500; Low; no bids); no data: how many seed trays do i need, how many seedlings can i grow under a shop light, seed starting supplies list, seed starting setup for beginners |
| Monetization | seed starting mix (50000; -90% / -90%), grow lights for seed starting (5000), seedling heat mat (5000), seed starting trays (5000) — all High competition; bids in USD under Signal scorecard → Monetization |

Trend flags are bucket-step jumps, not measured percentages. Contradicting flags are listed under Demand.

## Monetization sketch

Affiliate route: Amazon Lawn & Garden 3% (24 h / 89-day cart); a shopping list beside the plan (lights, mats, trays, mix) is the natural placement. Plus Home & Garden ads.

## Digital products (documented, off by default)

Printable seed-starting calendar + shelf-plan PDF. Ships OFF.

## Traffic sanity-check

Opinion. $100/mo needs ≈ 4,300–11,500 visitors/mo blended; ≈ 7.5K pv/mo ads-only at Home & Garden-class RPM (~$13.33) vs ≈ 43K pv/mo at ~$2.33. The date-intent heads (when to start seeds indoors, … tomato seeds indoors, last frost date) sit in the 5K bucket with a Jan–Apr concentration, but the tool-shaped queries (calculator, schedule) are falling and the long tail is already covered at zone level by an incumbent. The 5K-bucket gear queries are shopping searches that a calculator page would not obviously rank for. Plausibly cannot reach the lower bound on the demand shown.

## Risks & unknowns

- Unknown: NGA Garden Calendar and Seedtime (named in the AIO, unopened); trays/mix linkability (Amazon rate-limited); seed-company programs; community demand for the counts/gear hook (query-volume null only).
- Confidence: low — demand is graded weak. Per the rubric that is a confidence statement, not a rejection.
- Weak demand evidence is age, season and a falling tool query, not disproof.
- Kill-level findings: none (Johnny's, whentoplant and apps cover dates only).

## Sources log

- Johnny's calculator (fetched); whentoplant.net /seed-starting/, /tools/garden-planner/ (live); seedsnow 404; sproutrobot/mylocalplanting unusable.
- Arctic Shift r/gardening 10m1u27; gardening.stackexchange.com q/47849 and query for tool/calculator.
- Amazon Associates rates + policies; open.er-api.com.
- Shared screen CSV via `scripts/planner-report.py`; idea-specific `keyword-planner.csv` (top-up) via the same script.
- Amazon search pages (curl, 2026-10-17): grow light and heat mat OK; trays and mix rate-limited.
- Google SERPs + AIO via Playwright (2026-10-17): three seed-starting queries with and without `&udm=14`; opened sowrightseeds, powersplants, groworganic (survivalgardenseeds: Access Denied).
