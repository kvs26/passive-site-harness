# Dossier: Trail Menu Optimizer (real products, weight and volume constrained)

**Build a menu from real branded foods under calorie, weight and canister-volume limits; the scout hook ("no opened tool builds a constrained menu from real SKUs") is disproved by PackByte and Backcountry Foodie, so the idea is rejected as a standalone site. Confidence: medium (shared niche Planner screen only).**

**Evidence dated 2026-10-17 — SERP/AIO evidence expires 2026-11-14 (record only; idea is rejected).**

## Signal scorecard

**Demand: weak** — planner/calculator intent is small and the big buckets are brand and recipe intent.
  - Planner screen, `pipeline/demand-csv/2026-10-09-screen2.csv` (US, Sep 2025–Aug 2026; shared niche screen): `mountain house meals` 50,000 (brand); `backpacking food`, `backpacking breakfast`, `backpacking meals` (3-mo +900%), `dehydrated backpacking meals` 5,000 each (recipe/listicle intent); `backpacking meal planner`, `backpacking food list`, `calorie dense backpacking food`, `ultralight backpacking food` 500 each; `backpacking food calculator`, `backpacking food per day`, `calories per day backpacking` 50 each; zero: `backpacking meal plan 5 days`, `calories per ounce backpacking food`, `thru hike resupply food`.
  - Outdoors.SE shows real but old demand: "What is the most efficient food to take a for a 12-15 day hiking trip?" (https://outdoors.stackexchange.com/questions/45, score 127, 67,541 views, 2012); "Designing a sustainable and portable high-energy diet" (https://outdoors.stackexchange.com/questions/13953, 2016); "How can I pack my food so it doesn't smell?" (https://outdoors.stackexchange.com/questions/22895, 8,041 views, 2019).
  - Autocomplete (2026-10-17) is dense: "backpacking food calculator", "backpacking meal planning spreadsheet", "how many calories per day backpacking", "how much food for 3 day backpacking trip", "backpacking food weight per day".

**SERP, AIO & competitor weakness: weak** — AIO fires on both meal-planner queries probed and the SERP lists planner tools.
  - AIO present 2026-10-17 on "backpacking meal planner" ("A solid backpacking meal plan targets 2,500 to 4,500 calories per day… Breakfast (Quick & Warm)…") and "how much food per day backpacking" ("You should pack 1.5 to 2 pounds… of food, or roughly 2,500 to 4,500 calories per person per day"); `udm=14` control for "backpacking meal planner" showed no AIO.
  - Organic results (udm=14 control): "How to Plan Backpacking Meals as a Total Beginner", "Backpacking Food Ideas & Meal Planning", "Completely free backpacking meal planner tool (feedback…", "Guthook's Backpacking Food Planner", "5-Day Ultralight Backpacking Meal Plan…". Tools are already in the SERP.

**Hook depth: weak** — kill-level finding below; the unserved angle left is canister volume.
  - **Kill-level:** PackByte (https://packbyte.app/, opened) is a purpose-built constrained planner over real products: "200+ verified items from a curated trail catalog. No hallucinated brands or made-up nutrition."; "We balance calories per ounce, weight, and your daily mileage."; "Cal-optimized meals + shopping list in ~60s"; "Consolidated shopping list with buy links"; $9.99 one-time Trail Pass; FAQ (https://packbyte.app/faq): "Every item you can plan from records the date it was last verified against a primary source, and the catalog is re-audited in rolling batches each quarter." Trips are planned "up to six nights at a time."
  - Backcountry Foodie planner (https://backcountryfoodie.com/backpacking-meal-planner/, opened): "mix and match over 250+ recipes, 1,000+ commercial foods, and your own meal ideas. Plus, it auto-generates nutrition info and shopping lists!"; paid at $9/$12/$16 per month; "TRUSTED BY OVER 3,000 ACTIVE MEMBERS ACROSS 20 COUNTRIES".
  - Free tools also opened: backpackingmealplanner.com (31 generic foods; "Sample values—verify each package label"), https://goodgearonly.com/mealplanner ("Search for real trail food, or add your own items with the numbers straight off the package."), https://gentletools.com/tools/backpacking-food-optimizer/ (manual entry, "Stored locally in this browser only."), Lengthy Travel resupply sheet (https://www.lengthytravel.com/free-long-distance-hiking-resupply-tool/, about 1,300 items, Feb 8 2021), FarOut/Guthook (https://faroutguides.com/guthooks-backpacking-food-planner/, weight only).
  - Remaining gap (opinion): none of the opened tools sets bear-canister volume as a hard constraint; Montana Trail Briefs (https://www.montanatrailbriefs.com/backpack-weight-calculator) gives a heuristic only ("A standard BV500 holds roughly 7 person-days."). This lives in the bear-canister planner, not as a standalone site.

**Monetization: weak** — Amazon Grocery pays 1%; brand programs are partly unconfirmed.
  - Amazon Associates (https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ), verbatim: "| Amazon Fresh, Physical Video Games & Video Game Consoles, Grocery, Health & Personal Care | 1.00% |"; freeze-dried meals sit in Grocery. Price tracking prohibited by Amazon policy (https://affiliate-program.amazon.com/help/operating/policies).
  - Good To-Go first-party (https://goodto-go.com/pages/affiliate-program): "Competitive commission for sales you generate… 30-day cookie duration"; no numeric rate. Mountain House first-party affiliate page redirects to a retailer page; third parties claim 10% with a 30-day cookie (https://getlasso.co/affiliate/mountain-house/, "Updated October 12, 2026") — unconfirmed at the source. REI (https://www.rei.com/help/affiliates.html): "Competitive commission rate…", "Average order value of $160+", no numeric rate.
  - Planner bids not read for this idea; supporting-only anyway.

**Feasibility & sustainable upkeep: weak** — SKU and label churn is constant; PackByte itself reports quarterly re-audits.
  - Static compute is feasible. Data: nutrition labels are public; freezedriedratings.com (https://freezedriedratings.com/freeze-dried-meal-brand-comparison) has brand cal/oz averages for 156 meals but no volume column and some dubious values (e.g. "302 cal/oz"). I found no public packed-volume dataset, so volume would be hand-measured per row.
  - Upkeep estimate (opinion): a few hundred SKUs re-verified quarterly at ~5–10 minutes per row is several hours per quarter on top of reformulation tracking; likely near the cap, not provably over it.

**Data moat: weak** — labels are public; hand-measured packed volume is the only barrier and no source for it exists; incumbents hold larger catalogs (Backcountry Foodie 1,000+, Lengthy Travel ~1,300, PackByte 200+ verified).

## SERP & AIO snapshot

Dated 2026-10-17, Google `hl=en&gl=us`, browser read.

| Query | AIO present | Full answer or hedge | Wedge past it |
|---|---|---|---|
| backpacking meal planner | yes | Gives a daily meal structure and a calorie range | none for generic plans; a constrained SKU plan is what PackByte already sells |
| how much food per day backpacking | yes | Full answer: "1.5 to 2 pounds… roughly 2,500 to 4,500 calories" | none: the single-fact head is answered |

Beatable? No: paid and free incumbents rank alongside Reddit and blog content. Opinion: the head queries are AIO-exposed and the tool space is occupied.

## Keyword data

Shared niche screen as above (not idea-specific); no idea-specific `keyword-planner.csv`, so confidence is capped at medium.

## Monetization sketch

Affiliate route only (Amazon Grocery 1.00%, brand programs); route survives but yields little per sale.

## Digital products (documented, off by default)

None apparent.

## Traffic sanity-check

Opinion. Bar ≈ 4,300–11,500 visitors/mo for $100/mo blended. Planner/calculator intent is ≈ 650/mo in total, the rest is brand/recipe intent; with AIO on the head queries and occupied SERPs, the check directionally fails. Not by itself a kill; the kill is the occupied hook.

## Risks & unknowns

- Backpacker's Pantry, Peak Refuel, Harmony House, Heather's Choice, Packit Gourmet affiliate terms unconfirmed or unopened.
- backpackmeals.app, backpacker.com and hikinggear.forum could not be opened.
- Reddit r/Ultralight thread URLs not verified.
- No idea-specific Planner CSV.

## Sources log

- Autocomplete fan-out 2026-10-17; Outdoors.SE API; Reddit RSS (one usable response, later empty).
- PackByte (home, FAQ, terms), Backcountry Foodie, backpackingmealplanner.com, GoodGearOnly, GentleTools, Montana Trail Briefs, FarOut, Lengthy Travel, MTNMetrics (all opened).
- freezedriedratings.com; Amazon Associates rate table and policies; REI, Good To-Go, Packit Gourmet, Backpacker's Pantry, Mountain House pages.
- Google SERP + AIO probe 2026-10-17; Planner screen.
- Dead ends: backpackmeals.app (JS-only), backpacker.com (login), hikinggear.forum (403), Heather's Choice (no response), Bing/DDG/Brave blocked.
