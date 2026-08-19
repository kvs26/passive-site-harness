# Dossier: Dog treat-portion calculator (how many of THIS food)

**A per-specific-food "how many can my dog have" calculator (pick a food + dog weight → exact count inside the vet 10%-of-calories treat budget); demand and the target-query SERPs are strong and beatable, and now Keyword-Planner-backed (core per-food group ~13K-bucket total), but a generic interactive incumbent (FurCalc) already does a thin version of the food→count mechanic and "calculator"-branded phrasing itself has almost no search volume — confidence: high.**

## Signal scorecard

**Demand: strong** — the same "how many/how much of food X, and is that too much?" question recurs across independent subreddits over ~9 years, and autocomplete fans out per-food, per-size, and calculator-shaped.
  - Autocomplete (Google, US, `scripts/fanout.py`, this run): "how many blueberries can a dog eat per day calculator", "…per day", "how many blueberries can a small dog eat per day calculator", "how many carrots can a dog eat a day", "how many carrots is too many for a dog", "how much peanut butter can a dog have a day", "how much pumpkin can a dog eat daily", "how many green beans can a dog eat", "how much cheese can a dog eat per day", "how many strawberries can a small dog eat" — explicit per-food × per-size × per-day, incl. the literal word "calculator".
  - "how many carrots are too many for my dog" — r/AskVet, vet replies with kcal math: "5-8 baby carrots are around 35kcal… you can safely give her like 10 a day or more but make sure she's eating a recommended amount" — https://www.reddit.com/r/AskVet/comments/lwi90v/how_many_carrots_are_too_many_for_my_dog/
  - "how many carrots is too many carrots" — https://www.reddit.com/r/dogs/comments/126vydf/how_many_carrots_is_too_many_carrots/ ; "how many baby carrots can I give my puppy" (2024) — https://www.reddit.com/r/DogAdvice/comments/1acrj27/how_many_baby_carrots_can_i_give_my_puppy/ ; "how many carrots is too many" (2015) — https://www.reddit.com/r/puppy101/comments/34ogr0/how_many_carrots_is_too_many/ (independent communities, 9-year span).
  - Keyword Planner export (2026-08-19, US): core per-food head-term group sums well above the 5K bucket — "how many carrots can a dog eat" 5000, "how much peanut butter can a dog have" 5000, plus five 500-bucket foods (blueberries, cheese, strawberries, watermelon, banana) — one independent piece per rubric, corroborating the Reddit recurrence. Caveat: literal "calculator"-branded phrasing has near-zero volume ("how many blueberries can a dog eat per day calculator" 50 bucket, -100% 3-mo/YoY; "dog treat portion calculator" no data) — demand is for the informational question, not the tool name.

**SERP & competitor weakness: strong** — the target per-food queries are owned entirely by static (often AI-spun) articles; the one interactive incumbent that does the mechanic doesn't rank for them and the strongest food-safety DB has no treat-portion tool.
  - "how many blueberries can a dog eat per day calculator" (DDG, this run): luverdog.com, bestpetfacts.com, petmd.com, thefaithfuldog.com, houndsy.com, purepawslife.com, petful.com — 100% static articles, **no calculator despite the query**.
  - "how many carrots can a dog eat per day calculator tool" (DDG, this run): fluffytamer.com, houndsy.com, zoorithm.com, pawsbro.com, thelivinglook.com — all articles; the top "…/carrot-dog-dosage/" result is a static (AI-spun — it says "1/2 clove" of a carrot) article, not a tool.
  - caneat.pet/tools (re-fetched this run): Food Safety Checker, Toxicity Calculator (food+amount+weight → *risk level*), AI Meal Planner, Breed Nutrition DB, Symptom Checker — **none computes a healthy per-food treat serving/count by weight**. Gap holds vs. the strongest incumbent.

**Hook depth: strong** — the "count of a specific food, sized to my dog" framing is exactly how owners and vets already reason; owners are doing the kcal math by hand.
  - "I'm not sure how much is too much. He's not big, weights around 22lbs/10kg. Does 1 big carrot a day count as a lot?" — https://www.reddit.com/r/dogs/comments/e88zrn/discussion_how_many_carrots_is_ok_for_a_dog/ (weight-anchored quantity question — the exact input pair).
  - "I have written down how many calories are in each amount of fruit we give her so she doesn't overeat. As long as you know how much carrot your puppy is eating in regards to his daily food intake…" — https://www.reddit.com/r/puppy101/comments/8vhdep/daily_carrots_for_my_dog/ (owner manually running the tool's exact calc).
  - "My chiweenie loves blueberries. I should probably not give him so much… sometimes is the whole container." — https://www.reddit.com/r/coolguides/comments/fvhbsa/what_fruits_can_dogs_eat/ (small-dog over-portion uncertainty).

**Monetization paths: strong** — the articles that own these exact queries carry display ads; caveat: it's low-CPC display and the *tool*-format incumbents run no ads.
  - bestpetfacts.com/how-many-blueberries-per-day-for-a-dog/ (inspected this run): AdSense (`googlesyndication`) **and** Ezoic **and** Amazon ad-system all present — the exact query, monetized with display + Amazon.
  - fluffytamer.com/carrot-dog-dosage/ (inspected this run): Mediavine **Grow.me** registration/monetization script present on the carrot article.
  - Caveat: FurCalc (the interactive incumbent) and caneat.pet run **no** ads (checked this run) — in this niche the tool format tends to be unmonetized; the ad revenue lives on the article long tail.
  - Keyword Planner bids (2026-08-19 export, INR→USD at 0.010442, fetched from open.er-api.com same day): per-food long-tail top-of-page LOW bids are all **< $0.10** (e.g. "how many carrots can a dog eat" ₹1.91 → $0.02; "how much peanut butter can a dog have" ₹2.38 → $0.02) — confirms the low-CPC caveat, no support for strong on the core hook pages. But generic commercial keywords bid much higher: "best healthy dog treats" ₹70.28 → **$0.73** (High competition), "dog calorie calculator" ₹67.40 → **$0.70**, "dog treats for training" ₹72.34 → **$0.76** (High competition) — one independent CSV-sourced piece supporting a secondary monetization route (comparison/roundup content), pairing with the ad/affiliate evidence above.

**Feasibility & maintenance: strong** — every input is free, static, and authoritative; build is client-side over a fixed table.
  - The 10% treat rule is documented by authoritative free sources: VCA Hospitals (vcahospitals.com/know-your-pet/dog-treats) and AKC (akc.org/expert-advice/nutrition/how-many-treats-can-dog-have/), both surfaced this run; FurCalc attributes it to AAHA guidelines (page text this run).
  - Per-food kcal from USDA FoodData Central (fdc.nal.usda.gov) — re-verified live this run (SPA rendered "Cherries, sour, red, raw" record; note deep-links are client-routed). Free, US, ≤quarterly refresh. Combined with fixed RER/MER constants → fully derivable, no backend/accounts/paid APIs.

**Unique-data opportunity: weak** — the breadth catalog is derivable but not proprietary, and a generic incumbent already ships a thin version of the food→count mechanic, partially disproving the scout's "only tool" premise.
  - furcalc.com/dog/treat-calorie-calculator (inspected this run): a working treat calculator with a food/treat dropdown ("Baby carrot (whole) (4 kcal)", "Apple slice (12 kcal)", "Piece of kibble", plus commercial treats — ~25 kcal-tagged options) that outputs a count ("= 5 Milk-Bone Small"), plus a reference table with "Fresh blueberry (1 kcal)" / "Raw carrot stick (5 kcal)". So food→count already exists for a handful of foods.
  - The differentiator that survives: **breadth** (100+ specific human foods) targeted at the per-food long-tail queries FurCalc doesn't rank for — but that catalog is USDA-derivable by anyone, so it's a coverage/SEO edge, not a data moat.

**Confidence: high** — no signal is unknown; demand and SERP-weakness are each graded from ≥2 independent sources; Keyword Planner CSV present (2026-08-19 export, fresh).

## SERP snapshot

- **"how many blueberries can a dog eat per day calculator" (DDG, 2026-08-19):** luverdog.com, bestpetfacts.com, petmd.com, thefaithfuldog.com, houndsy.com, purepawslife.com, petful.com — every result a static article; not one calculator despite "calculator" in the query. Beatable on format for the long tail; petmd is the only high-authority name.
- **"how many carrots can a dog eat per day calculator tool" (DDG, 2026-08-19):** fluffytamer.com/carrot-dog-dosage/ (static, AI-spun — "1/2 clove" per 10 lbs), houndsy.com (+ zendesk mirror), zoorithm.com, pawsbro.com, thelivinglook.com — all articles, no interactive tool. Beatable.
- **caneat.pet/tools (re-fetched 2026-08-19):** five tools, none a healthy per-food treat portion — confirms the gap against the strongest food-safety DB. **But** furcalc.com/dog/treat-calorie-calculator (not ranking on the above queries) already does a thin food→count version — the real competitor to beat on breadth + long-tail ranking, not a blank field.

## Keyword data

Keyword Planner historical-metrics export, 2026-08-19 (fresh; Aug 2025–Jul 2026, bids in INR). Parsed via `scripts/planner-report.py`. USD conversion at 1 INR = 0.010442 USD (open.er-api.com, fetched 2026-08-19). Buckets are order-of-magnitude (50/500/5K/50K/500K), not exact counts.

- **Head terms (per-food):** "how many carrots can a dog eat" **5000**; "how much peanut butter can a dog have" **5000**; "how many blueberries/strawberries can a dog eat", "how much cheese/watermelon/banana can a dog eat" all **500**; "how much pumpkin can a dog eat" and "how many green beans can a dog eat" **50**. Core group sums to ~13,100 — well above the 5K bar.
- **Variants (per-day/per-size):** "how many blueberries can a dog eat per day" 500; "how many carrots can a dog eat a day" 500; "how much peanut butter can a dog have a day" 50; "how many blueberries can a small dog eat" 50; "how many carrots is too many for a dog" 50; "how many treats can a dog have a day" 50.
- **Tool-intent (near-empty):** "how many blueberries can a dog eat per day calculator" **50** bucket, -100% 3-mo/YoY; "dog treat calculator" and "dog treat calorie calculator" 50 bucket, flat; "dog treat portion calculator", "how many treats can a dog have calculator", "how much can my dog eat by weight" — **no data** (absent from the export). The literal calculator/tool phrasing is essentially unsearched — the traffic path is the informational question.
- **Monetization-CPC probes (generic, not core hook):** "best healthy dog treats" 500 bucket, High competition, bid ₹70.28–334.75 → $0.73–$3.50; "dog calorie calculator" 5000 bucket, Low competition, ₹67.40–315.44 → $0.70–$3.29; "dog treats for training" **500000** bucket, High competition, ₹72.34–222.50 → $0.76–$2.32 (but -90% YoY).
- **Per-food long-tail bids (top-of-page LOW, verbatim INR → USD):** all core hook queries convert to **< $0.10** (e.g. "how many green beans can a dog eat" ₹3.18 → $0.03; "how much pumpkin can a dog eat" ₹3.24 → $0.03; "how many carrots can a dog eat" ₹1.91 → $0.02) — confirms the low-pet-CPC pattern from the validated toxicity-DB dossier.
- **Trend flags:** "dog treats for training" YoY -90%; "how many blueberries can a dog eat" YoY -90%; "how many green beans can a dog eat" 3-mo -90% — contradicting evidence on those specific keywords, but the core group total and majority of terms are flat, so Demand stays strong overall. "how much pumpkin can a dog eat" +900% 3-mo/YoY, but off a 50-bucket base.

## Monetization sketch

Display ads (AdSense) on each per-food entry/result page — the format bestpetfacts (AdSense+Ezoic+Amazon) and fluffytamer (Grow.me) already monetize on these exact queries. Play is **volume across the per-food long tail**, not CPC (Keyword Planner confirms per-food bids < $0.10 USD-equiv). Secondary, higher-CPC route: generic "best healthy dog treats" / "dog treats for training" comparison content ($0.70+ USD-equiv bids, though "training" is -90% YoY) sitting alongside the calculator, plus Chewy/Amazon affiliate on "healthy treat" foods. Route any toxic food (grapes, chocolate, xylitol) to a vet/ASPCA callout rather than portioning it.

- **Hook partially served (FurCalc)** — furcalc.com already converts a food selection into a count for ~25 options. The moat is breadth (100+ foods) + ranking for the per-food long tail, not a novel mechanic. If FurCalc (or caneat.pet) expands its food list and targets these queries, the edge erodes — the same gate-4 pressure that killed the earlier calculator ideas.
- **"Calculator" branding has no search demand** — Keyword Planner shows near-zero volume for the literal tool-name phrasing; the site must rank on the informational per-food question ("how many carrots can a dog eat"), not a "calculator" URL/title strategy, or it risks building for a query nobody types.
- **Tool-format monetization risk** — interactive incumbents in this niche (FurCalc, caneat.pet) run no ads; ad revenue currently sits on the *articles*. A tool must still attract the article-style long-tail traffic to earn display RPM.
- **Legal/policy** — must frame as portioning of non-toxic foods ("treats ≤10% of calories, rest from complete food"), never medical/medication dosing, and route toxic foods to vet/ASPCA (888-426-4435) rather than compute a "safe" amount.
- Searched and came up empty this run: no free source for per-keyword volume/CPC (Keyword Planner is the gap); DDG `pain-fetch.py ddg` adapter bot-challenged (empty) — switched to Playwright browser.

## Sources log

- `scripts/fanout.py` (Google autocomplete, US): seeds "how many blueberries/strawberries can a dog eat", "how much cheese/carrots/peanut butter/pumpkin/green beans/watermelon/banana can a dog", "how many treats can a dog have", "how many grapes will hurt a dog" — per-food/per-size/calculator tail.
- `scripts/pain-fetch.py ddg` — bot-challenged, empty output (dead end); switched to Playwright browser on DDG.
- DDG browser: `site:reddit.com how many blueberries can my dog eat too many` — r/dogs pidua1, r/coolguides fvhbsa, r/petknowhow 1ae3ez4, r/dogs mlpf5d (dozen blueberry bagels), r/AskVet dgxp8u.
- DDG browser: `site:reddit.com how many carrots can dog eat too many` — r/AskVet lwi90v (vet kcal math), r/dogs 126vydf, r/DogAdvice 1acrj27, r/dogs e88zrn (22lb weight-anchored), r/DogAdvice 10t07oz + r/AskVet 10t02v6 (too-many-carrots panic), r/puppy101 8vhdep (owner tracks calories) + 34ogr0.
- DDG browser: `how many blueberries can a dog eat per day calculator` — SERP snapshot 1 (all articles).
- DDG browser: `how many carrots can a dog eat per day calculator tool` — SERP snapshot 2 (all articles).
- Fetched: https://fluffytamer.com/carrot-dog-dosage/ — static/AI-spun article ("1/2 clove"), Grow.me monetization, shop.fluffytamer.com merch.
- Fetched: https://caneat.pet/tools — five tools, no treat-portion tool; ad-free.
- Fetched: https://furcalc.com/dog/treat-calorie-calculator — interactive treat calc, ~25-option food/treat dropdown → count; cites AAHA/AKC; **no ads/affiliate**.
- Fetched: https://bestpetfacts.com/how-many-blueberries-per-day-for-a-dog/ — static article; AdSense + Ezoic + Amazon ad-system present.
- DDG browser: `vca akc treats should be 10% of dog daily calories rule` — vcahospitals.com/know-your-pet/dog-treats, akc.org/expert-advice/nutrition/how-many-treats-can-dog-have/ (authoritative 10% rule); also surfaced generic treat-calorie calcs furcalc, mynubs, calculator-cloud.
- Fetched: https://fdc.nal.usda.gov/ (FoodData Central) — live this run (SPA-rendered food record; deep-link path returns 404 status but app renders); free USDA kcal source.
- Ingested (2026-08-19 top-up): keyword-planner.csv (export dated 2026-08-19, Aug 2025–Jul 2026, INR) via scripts/planner-report.py.
- Fetched (2026-08-19): https://open.er-api.com/v6/latest/INR — INR→USD 0.010442.
