# Dossier: zip-planting-schedule

**ZIP + risk level + crop list → dated, printable, .ics-exportable planting schedule: REJECTED on a kill-level finding — whentoplant.net's free Garden Planner already ships the core of the hook (ZIP → pick crops → one dated schedule → Print plan + .ics, no account), on the same NOAA 1991–2020 station data, with a 3,338-URL page surface; confidence: medium (no idea-specific Keyword Planner CSV; AIO checkpoint pending).**

**Evidence dated 2026-10-17 — SERP/AIO evidence expires 2026-11-14. Pre-build re-probe mandatory regardless.**

## Signal scorecard

**Demand: strong** — the same ask recurs across independent communities, and the head terms sit in the 5K bucket.
  - Keyword Planner shared screen export (one piece; not idea-specific, see Keyword data): planting calendar 5000, last frost date 5000, garden planner 5000, seed starting calculator 5000, vegetable planting calendar by zip code 500 (`pipeline/demand-csv/2026-10-09-demand-screen.csv`).
  - Reddit r/gardening: "Is there an app to enter your zip code and seeds of what you want to grow, and it creates a calendar for you of when to plant?" (16 pts, 18 comments, posted 2023-01-26) (https://www.reddit.com/r/gardening/comments/10m1u27/ — read via Arctic Shift API 2026-10-17). Reply: "I found it. It's called Farm Your Yard on ios. You enter all the seeds you have and it shows when you start the seeds, when to put them out, when to harvest…" — demand is already being met by several products.
  - Gardening StackExchange: "What are some resources for region-dependent planting schedule/calender?" (https://gardening.stackexchange.com/q/1498).
  - Hacker News: three separate Show HN builds in this exact space — "Show HN: Leaftide – Garden planner with climate-aware scheduling" (https://news.ycombinator.com/item?id=46631182), "Show HN: Garden Planting Reminders via Email" (https://news.ycombinator.com/item?id=39629718), "Show HN: I built a hyperlocal garden almanac" (https://news.ycombinator.com/item?id=43462709).

**SERP, AIO & competitor weakness: weak** — the SERP is occupied by purpose-built free tools, not thin pages; AIO is unprobed (human checkpoint pending).
  - Brave SERP for "planting calendar by zip code" (2026-10-17; one query before rate-limit) listed: almanac, garden.org/apps/calendar, survivalgardenseeds, mylocalplanting.com, planyourhomestead.com/tools/planting-calendar, plantbyzip.com/planting-calendar, plantingcalculator.saferbrand.com, whentoplant.net (tools/garden-planner, planting-calendar-generator).
  - whentoplant.net sitemap (https://whentoplant.net/sitemap.xml, fetched 2026-10-17): 3,338 `<loc>` entries — 2,110 `/plants/…`, 404 `/grow/…`, 404 `/frost-dates/…`, 128 `/plant-in/…`, 62 `/harvest/…`, 58 `/pruning/…`, 51 `/states/…`.
  - Other opened incumbents: planyourhomestead.com (ZIP → month timeline, print), plantbyzip.com (ZIP + date → what to plant; Reddit users recommend it), rootedreminders.com (ZIP → crops → email reminders, account, free 10 plants / $40 lifetime), leaftide.com (paid app; Frost Date Finder with Cautious (90%) / Typical (50%) toggle), ultimategardencalendar.com (NOAA frost by ZIP, no crop list).

**Hook depth: weak (kill-level — see Risks)** — the hook is real to users but the gap is closed; what remains is a feature delta, not a product.
  - Live run of https://whentoplant.net/tools/garden-planner/ on 2026-10-17 (ZIP 43215, added Tomatoes, Garlic, Lettuce, Grass Seed (Lawn), Tulips): returned one dated, month-grouped list — "Mar 18 START INDOORS Tomatoes — 6 weeks before your last frost (Apr 29)", "May 6 HARDEN OFF Tomatoes", "May 13 TRANSPLANT Tomatoes", "Jul 25 HARVEST Tomatoes", "Oct 2 PLANT Garlic" — plus "🖨 Print plan" and "📅 Add to calendar (.ics)".
  - Same page: "You can print the whole calendar or export it to Google Calendar, Apple Calendar, or Outlook as reminders." and "✔ This plan is saved in your browser on this device… no account needed."
  - Header of the result: "last frost (36°F, 50%) ~April 29 (safe by May 16, 9-in-10 yrs) · first frost (36°F, 50%) ~October 16 … Data from NOAA station USW00014821, 7 miles away in John Glenn Intl AP, OH, 28-year record (1991-2020 normals, 36°F light frost)" — the exact data merge scout called the moat.
  - What the incumbent does NOT do (observed, same run): no 10/50/90% risk selector or 32°/36° choice driving the schedule (50% is the schedule basis; the 90% date is shown as "safe by"), no succession re-sow rows, no fall cut-off row for warm-season crops.
  - Scout's hook claimed "nobody merges probability frost dates + crop rules + succession + export" — the merge, crop rules and export exist; only the risk toggle and succession remain.

**Monetization: weak** — affiliate rate verified but low; no idea-specific Planner bids; incumbent proves the ad route works for this niche.
  - "Toys, Furniture, Home, Home Improvement, Lawn & Garden, Pets Products, … 3.00%" (https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ, fetched 2026-10-17).
  - Cookie/session: "(x) 24 hours elapse from that click" and cart-add "no later than 89 days after their initial click-through of the Special Link" (https://affiliate-program.amazon.com/help/operating/policies, fetched 2026-10-17).
  - Incumbent monetization: whentoplant.net discloses Mediavine ads plus Amazon affiliate links (https://whentoplant.net/how-we-make-money/, fetched this run).
  - Shared-screen bids (INR, top-of-page low): planting calendar 50.87, garden planner 55.57 → at 1 USD = 95.11 INR (https://open.er-api.com/v6/latest/USD, 2026-10-17) ≈ $0.53 and ≈ $0.58 — below the ~$1.00 high-RPM bar. Seed-company affiliate programs not verified.

**Feasibility & sustainable upkeep: strong** — static build is feasible and upkeep is small.
  - Source: NOAA 1991–2020 normals (decadal) per station; incumbent publishes its own data-sources page citing the same normals (https://whentoplant.net/our-data-sources/). Scout already located the NCEI files (scout run 2026-10-09).
  - Upkeep estimate (opinion): data changes decadally; per-crop rows change when a source catalog changes (~yearly, ~1 hr per touch); quarterly Amazon link check. Plausibly well under ~3 hrs/week.

**Data moat: weak (kill-level — see Risks)** — barrier (a) merge is demonstrably replicated by an incumbent.
  - whentoplant.net's data page + planner output show NOAA station-level 50% and 10% dates mapped from ZIP, plus extension-derived crop offsets, across 3,338 URLs (crop × state, frost-dates by city, zone pages).
  - Remaining unreplicated barrier: per-row hand-verification (b) and judgment (c) for succession/fall cut-off — not evidenced as a differentiator users ask for.

## SERP & AIO snapshot

Dated 2026-10-17.
- SERP: see scorecard. Top results are free purpose-built ZIP tools plus almanac/garden.org. Not thin, not stale (whentoplant.net garlic/Ohio page shows "Last reviewed: October 16, 2026").
- AIO: **not probed** — manual checkpoint outstanding. Predicted by query form: "planting calendar" and "vegetable planting calendar by zip code" (tool-style, low risk); "when to plant tomatoes" (question-form, high risk, likely location-hedged); "last frost date" (low–moderate). Queries for the human: planting calendar · vegetable planting calendar by zip code · when to plant tomatoes · last frost date · when to plant vegetables zone 7, each with a `&udm=14` control. Not needed to decide this idea, since rejection rests on the incumbent finding.

## Keyword data

No idea-specific `keyword-planner.csv`. The shared screen export (`pipeline/demand-csv/2026-10-09-demand-screen.csv`, window Sep 2025–Aug 2026, 8 days old, bids in INR) read via `scripts/planner-report.py`:

| Keyword | Bucket | 3-mo | YoY | Bid low–high (INR) |
|---|---|---|---|---|
| planting calendar | 5000 | 0% | 0% | 50.87–201.26 |
| last frost date | 5000 | 0% | 0% | — |
| garden planner | 5000 | 0% | 0% | 55.57–271.97 |
| seed starting calculator | 5000 | 0% | 0% | — |
| planting zone by zip code | 50000 | 0% | 0% | 3.06–7.38 |
| when to plant tomatoes | 5000 | 0% | 0% | 2.71–57.18 |
| first frost date | 500 | 900% | 0% | 1.93–3.66 |
| frost dates by zip code | 500 | 0% | 0% | 2.91–4.51 |
| vegetable planting calendar by zip code | 500 | 0% | 0% | 8.47–607.13 |

Buckets are order-of-magnitude, not counts. Not used to flip status (rejection is independent of it).

## Monetization sketch

Route per idea.md: high-RPM Home & Garden ads + Amazon Lawn & Garden affiliate (3%, 24 h session). Outputs of the tool (seed trays, row cover, grow lights) are linkable Amazon products. Placement would be below the schedule and on crop pages. Moot while the idea is rejected.

## Digital products (documented, off by default)

Printable season-plan PDF per crop list (the incumbent gives printing free, so willingness to pay is doubtful). Ships OFF.

## Traffic sanity-check

Opinion. Bar: $100/mo → ≈ 4,300–11,500 visitors/mo blended; ads-only ≈ 7.5K pv/mo at Home & Garden-class RPM (~$13.33) vs ≈ 43K pv/mo at pets/reference-class RPM (~$2.33). Demand heads are in the 5K–50K buckets and a crop × state/city surface is plausible, so the *category* clears the bar. But a late entrant would be competing with an incumbent that already holds 3,338 URLs and a purpose-built tool; the evidence does not show a reachable share.

## Risks & unknowns

- **Kill-level finding (scout gate 4, "not served well" / purpose-built incumbent found and opened):** whentoplant.net's Garden Planner delivers ZIP → crop list → dated start/harden-off/transplant/sow/harvest schedule → print + .ics, free, no account (live run 2026-10-17). Backup: plantbyzip.com, planyourhomestead.com, rootedreminders.com.
- **Also touches scout gate 3b (moat):** merge of NOAA station normals + extension crop offsets is already done and published at scale.
- Residual wedge, for the record only (not enough to keep the idea): selectable 10/50/90% risk, succession re-sows, fall cut-off row. A narrower idea built only around these would be a feature, not a site; the fall half is carried by `fall-planting-timer`.
- Unknown: AIO behaviour on head queries; seed-company affiliate programs; Reddit recurrence beyond one thread (Arctic Shift limited to 1–2 queries).
- Could not open: gardenate.com home (empty), mylocalplanting.com, sproutrobot.com (not usable).

## Sources log

- https://whentoplant.net/tools/garden-planner/ (live Playwright run, ZIP 43215) — decisive.
- https://whentoplant.net/tools/planting-date-finder/ (live run: garlic/tulips/grass seed), /our-data-sources/, /how-we-make-money/, /about/, /plants/garlic/ohio/, /seed-starting/, /sitemap.xml.
- https://planyourhomestead.com, https://plantbyzip.com, https://rootedreminders.com, https://leaftide.com, https://ultimategardencalendar.com (fetched).
- https://www.johnnyseeds.com/growers-library/seed-planting-schedule-calculator.html (manual frost date entry, generic table).
- Brave SERP (one query, then 429/PoW); Bing and DDG empty/challenged; Google not attempted (CAPTCHA risk).
- Arctic Shift: r/gardening 10m1u27 thread + comments.
- gardening.stackexchange.com (queries on planting schedule, succession, frost date probability — q/1498 cited); HN Algolia (3 Show HN threads).
- https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ and /help/operating/policies; https://open.er-api.com/v6/latest/USD.
- Dead ends: Scotts (technical page / blocked), seedsnow calculator URL (404), gardenate.com home (empty).
