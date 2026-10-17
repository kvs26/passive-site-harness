# Dossier: Bear Canister Trip Fit Planner

**Pick an area, nights, party size and food plan; get "is a canister required here", which approved models hold the food, how many, and the carried weight. The hook is open on every incumbent opened this run, the merge-plus-hand-verify moat holds, and the AI Overview answers rules, generic size-by-days, model comparisons and packing but not the combined per-trip compute. Confidence: medium (idea-specific Planner CSV now in; held at medium because every fit-intent phrasing shows no Planner volume, AIO now also answers generic sizing, and the incumbent SERP sweep is still partly unread).**

**Evidence dated 2026-10-17 — SERP/AIO evidence expires 2026-11-14. Pre-build re-probe mandatory regardless.**

## Signal scorecard

**Demand: strong** — the same "will my food fit / is it required here" problem recurs across Reddit (several subs and years), Outdoors.SE and Google autocomplete, and the Planner screen shows a 50K head term plus a ~8.8K-bucket tail. Fit-specific phrasings are at or near zero in the Planner, so the volume sits in the head and in model/area terms.
  - Autocomplete fan-out run 2026-10-17 returned dense area- and size-specific completions: "are bear canisters required in yosemite / sequoia national park / desolation wilderness / the adirondacks / the white mountains / indian peaks wilderness / wind river range / on the pct", "what size bear canister for 5 days / jmt / pct / appalachian trail / 2 people", "how many days of food can you fit in a bear canister", "how to fit bear canister in a backpack" (source: Google suggest via `scripts/fanout.py`).
  - Reddit r/Ultralight, "5-days of food into a BV425?" (https://www.reddit.com/r/Ultralight/comments/1jdjxos/5days_of_food_into_a_bv425/) and "How do you carry your large bear canister?" (https://www.reddit.com/r/Ultralight/comments/1bz5bdm/how_do_you_carry_your_large_bear_canister/) — thread titles via Reddit search.rss. Older threads show the same recurring question: "Packs that fit a bear canister" (https://www.reddit.com/r/Ultralight/comments/2ddf6h/packs_that_fit_a_bear_canister/), "PCT bear canister question" (https://www.reddit.com/r/Ultralight/comments/9kxxil/pct_bear_canister_question/).
  - Reddit r/backpacking, "How I repackage freeze dried meals so I can fit more in my bear canister" (https://www.reddit.com/r/backpacking/comments/1v80d55/how_i_repackage_freeze_dried_meals_so_i_can_fit/).
  - Outdoors.SE q/25975: "Your bulkiest single item will be your bear canister… maybe 300-400 cubic inches" (https://outdoors.stackexchange.com/questions/25975); q/4006: "in many Parks you will be fined if a Ranger catches you backpacking without an approved canister" (https://outdoors.stackexchange.com/questions/4006).
  - Google SERP 2026-10-17 for "how many days of food fit in a bearvault bv500" ranks a r/JMT thread "Fitting 9 days worth of food into BV500 (VVR resupply)" and "JMT bear canister capacity question" in the top 8 titles (browser read, google.com `hl=en&gl=us`).
  - Keyword Planner screen, `pipeline/demand-csv/2026-10-09-screen2.csv` (US, Sep 2025–Aug 2026; shared niche screen, not idea-specific; read via `scripts/planner-report.py`): `bear canister` 50,000 bucket, High competition; `bearikade` 5,000; `bear canister rental` 500 (YoY −90%); `bear canister size`, `igbc approved bear canister`, `best bear canister`, `garcia bear canister`, `ursack vs bear canister`, `bear canister yosemite` 500 each; `bear canister requirements`, `bear canister required areas`, `bear canister weight`, `how to pack a bear canister` 50 each; `bear canister capacity days`, `bear canister fit in backpack`, `how many days food bear canister` zero/no data.

  - Idea-specific Keyword Planner export, `keyword-planner.csv` (Keyword Stats 2026-10-17 at 11_12_37, US, Oct 2025–Sep 2026, read via `scripts/planner-report.py`): `bear canister` 50,000 bucket (High competition). 500 bucket: `bear canister size`, `best bear canister`, `bearvault bv450`, `bearvault bv500`, `garcia bear canister`, `ursack major`, `bearikade weekender`, `bear canister rental`, `igbc approved bear canister`. 50 bucket: `are bear canisters required in yosemite / the adirondacks / olympic national park`, `how to pack a bear canister` (YoY +900% off a 50 base), `bv450 vs bv500`. No data: all fit-intent phrasings (`what size bear canister for 5 days / jmt / 2 people`, `how many days of food fit in a bear canister`, `bear canister size calculator`, `bear canister required`, `…requirements by park`). Bucket sum 50,000 + 9×500 + 5×50 = 54,750. Falling flags: `igbc approved bear canister` −90% YoY and 3-month; `bear canister rental` −90% 3-month (non-core terms). The 50K head term plus independent Reddit and Outdoors.SE evidence keeps Demand strong, but the hook phrasings themselves register no Planner volume.

**SERP, AIO & competitor weakness: weak** — no incumbent combines rules + approved models + fit, but an AI Overview fired on all 13 bear-canister queries probed (5 first pass, 8 on the re-probe) and fully answers the single-fact area-rule queries, gives a generic size-by-days answer with product cards, a BV450-vs-BV500 spec table and a packing walkthrough, so the wedge is only the combined per-trip compute (nights × people × real food list × approved models) and dated per-area sources.
  - AIO fired 13/13 on 2026-10-17 (see SERP & AIO snapshot). For "are bear canisters required in olympic national park" it states "Yes, bear canisters… are required for all overnight backpacking… throughout Olympic National Park", citing NPS.
  - Incumbents opened, all static:
    - BearVault requirements page (https://bearvault.com/pages/canister-requirements): map plus park dropdown (~28 parks) and PCT/AT/CDT list, no date; "This list covers many, but not all, national parks… If your park isn't listed here, do not assume there are no rules."
    - BearVault size article (https://bearvault.com/blogs/articles/what-size-bear-canister-do-i-need): "A BV425 can typically fit about 2 days… BV475… up to 6 days… BV500… up to 7 or more days"; "one day's worth of food takes up about 100 cubic inches or 1.6L"; "this can vary A LOT".
    - Banner Gear Co 2026 guide (https://www.bannergearco.com/blog/bear-canister-required-locations-2026, Apr 19 2026): 42 locations with season windows and map filters, no compute, no affiliate links; "Rules change, sometimes mid-season."; "Approved ≠ Universal".
    - Outdoor Herbivore (https://blog.outdoorherbivore.com/camp-tips/where-bear-canisters-are-mandatory-in-the-us-parks-forest/): ~22 areas, "as of 2025", already stale versus other sources (Olympic, Rocky Mountain start date).
    - Prime Hiking (https://primehiking.com/articles/bear-canister-requirements-by-national-park/): 8-park static table, Amazon tag; its best-canister page says "Do not convert a nominal volume into a guaranteed number of complete days."
    - bearcanisters.com: 20-product static catalog with Amazon and REI buy links.
  - The three area lists disagree (42 vs ~22 vs ~28 parks; Rocky Mountain May 1 vs April 1), which is the reconciliation gap the tool fills.
  - Not verified: the BearVault "Quiz: Find Your Canister" could not be opened; the SERP-level sweep via Bing/DDG/Brave was blocked, so only the Google top titles below were seen.

**Hook depth: strong** — the differentiator (fit by nights × people × food, per area, with approved models) is what users ask for in threads and autocomplete, and no opened tool answers it; even the official per-model figure is thin.
  - r/Ultralight "5-days of food into a BV425?" (https://www.reddit.com/r/Ultralight/comments/1jdjxos/5days_of_food_into_a_bv425/) is a per-model, per-nights fit question; Outdoors.SE q/4006 and q/7706 show the approved-model constraint binds ("Ursack… not legally approved for use in many areas which require bear canisters", https://outdoors.stackexchange.com/questions/7706).
  - The only official per-model person-days figure found: SEKI rentals "BV450 Solo… suitable for 6 person-days of food"; "Garcia Backpackers Cache 812 will hold 6 person-days of food" (https://www.nps.gov/seki/planyourvisit/food-storage-containers-for-rent.htm, Nov 29 2024). BearVault's own article says a BV450 holds about 4 days, so sources conflict.
  - Yosemite lists allowed canisters as bullets with no capacity or weight (https://www.nps.gov/yose/planyourvisit/containers.htm, updated July 10 2026); IGBC list has no capacity data: "IGBC certification does not imply that products have automatically been approved for use on all public lands." (https://igbconline.org/bear-resistant-products/).

**Monetization: strong** — affiliate route verified: Amazon Associates pays on the exact product the page recommends, and BearVault runs a direct program; commissions are small per sale.
  - Amazon Associates rate table (https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ), verbatim row: "Toys, Furniture, Home, Home Improvement, Lawn & Garden, Pets Products, Headphones, Beauty, Musical Instruments, Business & Industrial Supplies, Outdoors, Tools, Sports, Baby Products, Amazon Coins | 3.00%".
  - Amazon policies (https://affiliate-program.amazon.com/help/operating/policies, "Updated: April 14, 2026"): 24-hour session cookie, and "adding a Product to his or her shopping cart and completing the order… no later than 89 days after their initial click-through". Same page: "your Site must not have price tracking and/or price alerting functionality" — do not display prices.
  - BearVault program (https://bearvault.com/pages/affiliate-program): "8% base commission • 30-cookie window • Average order $85+"; "We choose up to 10 collaborators per year" (curated, not guaranteed).
  - REI (https://www.rei.com/help/affiliates.html): "Competitive commission rate…", "Average order value of $160+", via Impact; no numeric rate or cookie stated.
  - Outputs are linkable: every recommended canister (BV450/475/500, Garcia, Bear Boxer, Ursack, etc.) exists in Amazon/REI catalogs (bearcanisters.com and primehiking.com already link them). Arithmetic: at a $75–$100 canister, 3.00% is $2.25–$3.00 per sale (inputs: price assumption, Amazon rate).
  - Planner bids are supporting only: `bear canister` top-of-page low–high 20.12–61.00 INR = $0.21–$0.64 USD; `bearikade` 64.45–299.85 INR = $0.68–$3.15 USD (rate 0.010514 USD/INR, https://open.er-api.com/v6/latest/INR, updated 2026-10-17). Affiliate route, so low bids do not downgrade.

**Feasibility & sustainable upkeep: strong** — client-side compute over JSON, a finite area set, and dated agency pages that are fetchable; steady-state upkeep estimate fits the cap (estimate, inputs stated).
  - Sources located and open: NPS pages for Yosemite (https://www.nps.gov/yose/planyourvisit/bearcanisters.htm, https://www.nps.gov/yose/planyourvisit/containers.htm), SEKI (https://www.nps.gov/seki/planyourvisit/bear_bc.htm, June 14 2025), Olympic (https://www.nps.gov/olym/planyourvisit/wilderness-food-storage.htm, July 7 2026: "required in all wilderness areas of the park"), Rocky Mountain (https://www.nps.gov/romo/planyourvisit/frequently-asked-questions-for-wilderness-camping.htm, June 27 2026), Denali (https://www.nps.gov/dena/planyourvisit/brfc.htm, May 5 2026), IGBC certified list PDF (https://igbconline.org/wp-content/uploads/260731_Certified_Products_List.pdf, current as of July 31 2026, ~20 backpacking entries). NPS content is US-government public information.
  - Not read this run: the Sierra Wild SIBBG list (sierrawild.gov down for maintenance) and the Pemigewasset Forest Service page (HTTP 403); both need a re-visit before build.
  - Upkeep estimate (opinion; assumptions): ~40 areas × a check each season change and twice a year otherwise ≈ 2–3 touches/area/year × ~10 min = about 15–20 hours/year of rules review; IGBC/SIBBG list diff twice a year ≈ 2 hours each; quarterly affiliate-link check ≈ 1 hour. That is on the order of half an hour a week averaged, well under the ~3 hrs/week cap, but seasonal spikes (April–June start-date changes) and mid-season closures are the risk Banner Gear itself notes ("Rules change, sometimes mid-season.").
  - Liability mitigation required: per-row source link + verified-on date + "confirm with the land manager" line (scout gate 5).

**Data moat: strong** — the merge and per-row hand-verify barriers both hold against real sources, and the page set is large.
  - Merge barrier: the three public area lists disagree (42 vs ~22 vs ~28 areas; Rocky Mountain May 1 vs April 1), and no single source covers NPS + USFS + SIBBG + IGBC (IGBC list: "does NOT determine if bear-resistant products can be used to meet food or garbage storage regulations", https://igbconline.org/bear-resistant-products/; its list also omits Garcia, Bare Boxer, Bearikade, Lighter1 as confirmed entries).
  - Hand-verify barrier: per-model usable capacity and approvals appear only in manufacturer pages and sporadic agency pages; BearVault's own capacity figures conflict internally and with SEKI's.
  - Long-tail surface: area pages × canister model pages × nights/people combinations; ~22–42 areas × ~10–20 models gives hundreds of pages.
  - Weakness: the food packed-volume table (bars, tortillas, dehydrated meals) is hand-measured and unproven; initial values come from BearVault's 1.6 L/day rule of thumb plus measurements.

## SERP & AIO snapshot

Dated 2026-10-17. Google, `hl=en&gl=us`, read in a browser; the `&udm=14` control run for four of the queries showed no AIO (as expected).

| Query | AIO present | Full answer or hedge | Wedge past it |
|---|---|---|---|
| are bear canisters required in sequoia national park | yes | Answers: "Bear canisters are required only in specific designated wilderness zones… recommended everywhere else"; lists Dusy Basin, Rae Lakes Loop, North Dome with "May 1 through October 31" | partial: does not give approved models, rental options, or per-area date verification |
| are bear canisters required in olympic national park | yes | Full answer: "Yes… required for all overnight backpacking… throughout Olympic National Park", cites NPS | none for a bare yes/no; value is combining it with a model and food fit |
| bear canister required areas map | yes | Answers with regional list (Yosemite, SEKI zones, Inyo, …), names the Sierra Wild map and BearVault page | partial: a regional list, not a verifiable single dated table |
| how many days of food fit in a bearvault bv500 | yes | Answers "approximately 7 days… 5 to 6 [bulky meals]… 8 to 10 [compact]" | yes: generic one-person figure, no party size, food mix, scented-items allowance or other models |
| bear canister size calculator | yes | Gives the 100 cu in / 1.6 L per day rule and a BearVault size table (BV425 1–2 days; BV450 3–4; BV475 5–6; BV500 7+) | yes: the AIO sums by hand ("Quick Calculation Tips") — no area, no approved list, no weight penalty |

Re-probe, later 2026-10-17 (Playwright, `hl=en&gl=us`, 8 s wait, page text read; no CAPTCHA on these 8):

| Query | AIO present | Full answer or hedge | Wedge past it |
|---|---|---|---|
| are bear canisters required in yosemite | yes | Full answer: "Yes, bear-resistant canisters are legally required for all overnight backpacking… in Yosemite"; covers day hikes, campgrounds, lockers; cites NPS | none for the yes/no |
| are bear canisters required in the adirondacks | yes | Full answer: mandatory in the Eastern High Peaks Wilderness April 1 – November 30; cites NY DEC | none for the yes/no |
| what size bear canister for 5 days | yes | Answers "about 9 to 12 liters", names BV475-Trek, BV500-Journey and Bearikade Weekender with price cards | yes: generic solo figure, no food list, party size or approval check |
| what size bear canister for 2 people | yes | Answers with the 100 cu in/person/day rule and "two BV500s" for longer trips | yes: still a rule of thumb, no per-trip compute |
| bv450 vs bv500 | yes | Full spec table (weight, volume, days, dimensions, price) | partial: no approval or area context |
| best bear canister | yes | Ranked list led by BearVault BV ONE, with prices | partial: no per-trip fit |
| bear canister requirements by park | yes | Regional summary with map cards (Yosemite, Olympic, …) | yes: undated, not a verified table |
| how to pack a bear canister | yes | Full packing walkthrough | none: but outside the tool's wedge |

Top organic results (udm=14 control, titles seen): for "bear canister size calculator": "What Size Bear Canister Do I Need?" (BearVault), a forum thread "Wife and I are trying to decide which bear canister size we…", "Buyers guide: Bear canisters || Comparison of volume per…", "Best Bear Canisters for Backpacking of 2026". For "are bear canisters required in sequoia national park": the two NPS SEKI pages, a r/SEKI thread, the SEKI rentals page. These are static articles, forum threads and agency pages; none is an interactive calculator. All incumbents behind these results are listed under Signal 2.

Read: AIO suppresses the single-fact head queries. I read this as opinion: lead with the combined per-trip compute and the model comparison, not area-by-area FAQ pages, and expect AIO to take some area-rule traffic. This is not a kill-level finding: none of the 13 probed AIOs answered nights × people × real food mix × approved model, and every sizing answer is a generic rule of thumb. But the re-probe widens what AIO covers (rules, generic sizing, comparisons, packing, best-of), so the page set must rank on the per-trip compute, not on any of those query shapes. No CAPTCHA on the 8 re-probe queries.

## Keyword data

Idea-specific export: `keyword-planner.csv` in this folder (Keyword Stats 2026-10-17 at 11_12_37, US, Oct 2025–Sep 2026; 25 requested keywords, 14 with data, 11 with none). Bids are INR, converted at 0.010514 USD/INR (https://open.er-api.com/v6/latest/INR, updated 2026-10-17 00:02 UTC). Affiliate route, so bids are supporting only: `bear canister` 22.63–68.56 INR = $0.24–$0.72; `best bear canister` 10.66–98.16 = $0.11–$1.03; `bearvault bv450` 29.80–69.47 = $0.31–$0.73; `bearvault bv500` 28.11–67.55 = $0.30–$0.71; `garcia bear canister` 30.32–103.79 = $0.32–$1.09; `ursack major` 31.30–108.87 = $0.33–$1.14; `bearikade weekender` 76.24–343.61 = $0.80–$3.61; `bear canister rental` 39.79–362.45 = $0.42–$3.81; `bear canister size` 17.31–78.15 = $0.18–$0.82; `igbc approved bear canister` 14.36–81.41 = $0.15–$0.86. Bucket and trend flags are in the Demand bullet under Signal 1. Everything below this paragraph is the earlier shared screen, kept for the record where the CSV above does not cover a term.

Source: shared niche screen, `pipeline/demand-csv/2026-10-09-screen2.csv` (US, Sep 2025–Aug 2026), not an idea-specific export; bucket totals are order-of-magnitude. Sum of listed buckets ≈ 58.8K, of which 50K is the bare head term; remainder ≈ 8.8K across bearikade 5K, ~500-bucket model/rules terms, and 50-bucket long-tail terms. Zero/no-data: `approved bear canisters list`, `bear canister capacity days`, `bear canister fit in backpack`, `bear canister sierra`, `how many days food bear canister`, `pack for bear canister`. YoY flag: `bear canister rental` −90%. Top-of-page bids (INR to USD at 0.010514, source and date above): `bear canister` $0.21–$0.64; `bearikade` $0.68–$3.15; `bear canister rental` 31.94–143.80 INR = $0.34–$1.51; `igbc approved bear canister` 16.53–71.32 INR = $0.17–$0.75; `bear canister size` 14.41–66.00 INR = $0.15–$0.69.

Idea-specific CSV now present. Confidence is held at medium by evidence, not by the cap: fit-intent phrasings are all no-data, the AIO now covers sizing queries, and the SERP-level incumbent sweep and BearVault quiz remain unread.

## Monetization sketch

Affiliate. Recommend canisters inline on every area and trip result: Amazon Associates (3.00% Outdoors/Sports row, 24-hour cookie, 89-day cart extension), BearVault direct (8%, 30-day cookie, curated) if accepted, REI via Impact (rate unstated). Do not show prices (Amazon price-tracking prohibition). Ads secondary.

## Digital products (documented, off by default)

Optional: a printable "canister packing + area checklist" PDF per trip. Ships OFF; enabling checkout is a manual per-site act.

## Traffic sanity-check

Opinion. Bar: $100/mo blended needs ≈ 4,300–11,500 visitors/mo (reference table). Evidence: one 50K-bucket head term plus ~8.8K of model/rules terms and a finite long-tail (hundreds of pages), against AIO answering single-fact area queries. Canister purchases are a high-intent, required product, so a small visitor base with a 3.00% commission and ~$75–$100 ticket is the weak link: roughly $2–3 per sale. I read the check as plausibly clearable only if the page set ranks for the model and size head terms (`bear canister size`, `best bear canister`, `bearikade`), not on area FAQs alone. Directionally borderline, not failed. After the idea-specific CSV: the demand that exists is in model and head terms (50K + nine 500-bucket terms, ≈54.7K bucket total), which AIO answers partially; the tool's own phrasings show no volume. That does not change the borderline read.

## Risks & unknowns

- AIO shows no hedging on single-fact area queries; the tool's value depends on queries past the AIO. Pre-build re-probe is mandatory.
- Incumbent SERP sweep partly blocked (Bing blank, DuckDuckGo CAPTCHA, Brave 429); Google titles only. BearVault's "Find Your Canister" quiz not opened.
- Rules change seasonally and sometimes mid-season; liability if a row is wrong.
- Official per-model capacity data is rare; capacity rests on manufacturer claims and a 1.6 L/day rule of thumb; sources disagree.
- SIBBG list and Sierra Wild map unread (site down); Pemigewasset Forest Service page 403.
- BearVault program is curated and capped; Amazon commission is low per sale.
- Fit-intent phrasings (`what size bear canister for 5 days`, `how many days of food fit in a bear canister`, `bear canister size calculator`) return no Planner data while AIO answers them generically; the tool may rank for them with little volume behind them.
- Dossier staleness: fresh until 2026-11-14.

## Sources log

- Autocomplete fan-out (`scripts/fanout.py`), 2026-10-17; saved to `/tmp/bp_fan_*.txt` (scratch).
- Outdoors.SE API (q/19877, q/7706, q/4006, q/25975, q/13812, q/6026, q/225); HN and Lemmy digs (no relevant hits).
- Reddit search.rss (r/Ultralight, r/backpacking) with realistic UA, spaced ~50s; later queries hit 429.
- BearVault pages, bannergearco.com, outdoorherbivore.com, primehiking.com, bearcanisters.com (all opened).
- NPS pages: Yosemite ×3, SEKI ×3, Olympic, Rocky Mountain, Denali; IGBC pages and certified-products PDF.
- Keyword Planner export `keyword-planner.csv` (Keyword Stats 2026-10-17 at 11_12_37), supplied by the site owner.
- Google AIO re-probe via Playwright, 2026-10-17 (8 queries, results in the SERP & AIO snapshot).
- Amazon Associates rate table and policies; BearVault, REI affiliate pages.
- Google SERP + AIO probe, 2026-10-17, queries in the snapshot table (`hl=en&gl=us`; `udm=14` control).
- Planner screen: `pipeline/demand-csv/2026-10-09-screen2.csv`; FX: https://open.er-api.com/v6/latest/INR (rate 0.010514 on 2026-10-17).
- Dead ends: Bing SERP blank or oversized, DuckDuckGo CAPTCHA, Brave 429, sierrawild.gov down for maintenance, Pemigewasset Forest Service 403, BearVault quiz unopened, Reddit rate limits.
