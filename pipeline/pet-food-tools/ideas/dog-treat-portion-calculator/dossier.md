# Dossier: Dog treat-portion calculator (how many of THIS food)

**REJECTED on 2026-09-01 re-validation: the hook ("the only tool that converts a specific food into an exact per-treat amount for your dog's weight") is factually disproven — calculatorsfordogs.com ships a purpose-built "Safe Food Portion Calculator for Dogs — Human Foods by Weight" (dog weight + human-food dropdown → safe portion, 30+ foods with prep notes), and the treat-calculator field has filled in around it; demand stays strong and CSV-backed, but the gap is closed — confidence: medium.**

**Evidence dated 2026-09-01 (re-validation; keyword data from the 2026-08-19 CSV, still fresh). No expiry — idea rejected; record kept.**

## Signal scorecard

**Demand: strong** — the same "how many/how much of food X, and is that too much?" question recurs across independent subreddits over ~9 years, and autocomplete fans out per-food, per-size, and calculator-shaped. Re-confirmed 2026-09-01: fresh fan-out is even denser, with explicit per-weight variants ("how many blueberries can a 20 lb dog eat" … 10/12/15/25/30/40/50/60 lb, "how many blueberries can a dog eat a day by weight") and per-age puppy variants — the exact food × weight input pair. The demand is real; the idea dies on the hook/moat, not here.
  - Autocomplete (Google, US, `scripts/fanout.py`, this run): "how many blueberries can a dog eat per day calculator", "…per day", "how many blueberries can a small dog eat per day calculator", "how many carrots can a dog eat a day", "how many carrots is too many for a dog", "how much peanut butter can a dog have a day", "how much pumpkin can a dog eat daily", "how many green beans can a dog eat", "how much cheese can a dog eat per day", "how many strawberries can a small dog eat" — explicit per-food × per-size × per-day, incl. the literal word "calculator".
  - "how many carrots are too many for my dog" — r/AskVet, vet replies with kcal math: "5-8 baby carrots are around 35kcal… you can safely give her like 10 a day or more but make sure she's eating a recommended amount" — https://www.reddit.com/r/AskVet/comments/lwi90v/how_many_carrots_are_too_many_for_my_dog/
  - "how many carrots is too many carrots" — https://www.reddit.com/r/dogs/comments/126vydf/how_many_carrots_is_too_many_carrots/ ; "how many baby carrots can I give my puppy" (2024) — https://www.reddit.com/r/DogAdvice/comments/1acrj27/how_many_baby_carrots_can_i_give_my_puppy/ ; "how many carrots is too many" (2015) — https://www.reddit.com/r/puppy101/comments/34ogr0/how_many_carrots_is_too_many/ (independent communities, 9-year span).
  - Keyword Planner export (2026-08-19, US): core per-food head-term group sums well above the 5K bucket — "how many carrots can a dog eat" 5000, "how much peanut butter can a dog have" 5000, plus five 500-bucket foods (blueberries, cheese, strawberries, watermelon, banana) — one independent piece per rubric, corroborating the Reddit recurrence. Caveat: literal "calculator"-branded phrasing has near-zero volume ("how many blueberries can a dog eat per day calculator" 50 bucket, -100% 3-mo/YoY; "dog treat portion calculator" no data) — demand is for the informational question, not the tool name.

**SERP & competitor weakness: KILL-LEVEL FINDING (2026-09-01)** — the per-food informational SERPs are still all static articles, but the tool-query SERP now surfaces a purpose-built incumbent doing exactly this idea's mechanic, inside a crowded field of treat calculators.
  - calculatorsfordogs.com/health-nutrition-calculators/safe-food-portion-calculator (opened 2026-09-01): "Safe Food Portion Calculator for Dogs — Find out how much of a human food is safe for your dog based on their weight. Covers 30+ foods with preparation notes and warnings." Inputs: "Dog's Weight (lbs)", "Human Food" dropdown, "Purpose / Feeding Context" → "Calculate Safe Portion". Per-food FAQ even outputs counts: "Blueberries are safe for dogs at up to 8g per kg of body weight per day. For a 20 lb (9 kg) dog, that is about 72g (roughly 40–50 blueberries)." Part of a 139-calculator hub with a free offline Android app and a companion Treat Allowance Calculator (opened same day).
  - "dog treat portion calculator by food and dog weight tool" (DDG, 2026-09-01): realdogsrealpeople.com/tools/treat-portion-calculator/, mynubs.com, dogfoodcheck.com/calculators/feeding/treat-calculator, usecalcpro.com/pets/dog-treat-calculator, calculatorsfordogs.com (×2), furcalc.com, doggycalculators.com, dogfluence.com/tools/treat-calculator — the treat-calculator *tool* space has filled in since 2026-08-19; this is no longer articles-only.
  - Still true (2026-09-01): "how many blueberries can a dog eat per day calculator" (DDG) = luverdog, thefaithfuldog, focuspetcare (new), bestpetfacts, thewellthieone, petmd, petfoodguides, alldogsacademy — all static articles; "how many carrots can a dog eat a day by weight" (DDG) = fluffytamer, thelivinglook, petmd, houndsy — all articles. The informational long tail remains article-owned, but that no longer rescues the hook (see below).

**Hook depth: KILL-LEVEL FINDING (2026-09-01)** — the user pain is real (evidence below, 2026-08-19), but the idea's stated differentiator — "the only tool that converts a specific food into an exact per-treat count for *your* dog's weight" — is now factually false: calculatorsfordogs.com computes food × weight → safe portion (g/oz + counts in per-food FAQs) as a dedicated tool, and FurCalc still does food → count for ~25 options. The incumbent gap the hook depended on is closed *this run*.
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

**Data moat: KILL-LEVEL FINDING (2026-09-01)** — the claimed replication barrier (per-row serving-unit judgment + catalog breadth) has been demonstrated **not to hold**: it's been replicated twice, independently.
  - furcalc.com/dog/treat-calorie-calculator (re-opened 2026-09-01): ~25 kcal-tagged options ("Raw carrot stick | 5 | 20", "Fresh blueberry | 1 | 100"), counts per treat, AAHA-cited 10% rule, updated 2026-05-16.
  - calculatorsfordogs.com safe-food-portion-calculator (opened 2026-09-01): 30+ human foods with per-food g/kg safe limits ("blueberries … up to 8g per kg", "green beans … Up to 15g per kg", "yogurt … Limit to 5g per kg"), preparation notes, and contraindication warnings — exactly the per-row hand-verified judgment this idea named as its moat, already shipped and bundled into a 139-calculator suite with an app.
  - The only surviving edge is out-breadth (100+ foods vs 30+) on a USDA-derivable catalog — a coverage/SEO race against an established multi-tool incumbent, not a barrier. Fails replication tests (a)/(b)/(c).

**Confidence: medium** — AIO re-probe not run this pass (kill-level finding on hook/moat made the manual checkpoint moot), so signal 2's AIO half is unknown; demand evidenced from ≥2 independent sources; Keyword Planner CSV present (2026-08-19, fresh).

## SERP snapshot

### Re-probe, 2026-09-01 (re-validation)

- **"dog treat portion calculator by food and dog weight tool" (DDG, 2026-09-01):** realdogsrealpeople.com (Treat Portion Calculator), mynubs.com, dogfoodcheck.com, usecalcpro.com, **calculatorsfordogs.com/safe-food-portion-calculator** ("Human Foods by Weight … 30+ foods"), furcalc.com, doggycalculators.com, dogcalculator.net, dogfluence.com, calculatorsfordogs.com/treat-allowance-calculator — a full field of interactive treat tools, including the purpose-built per-food × weight portion calculator. **Not beatable on "first/only tool" grounds anymore.**
- **"how many blueberries can a dog eat per day calculator" (DDG, 2026-09-01):** luverdog.com (2026/05), thefaithfuldog.com, focuspetcare.com ("Safe Amounts by Size (2026)" — static size buckets), bestpetfacts.com ×2, thewellthieone.com, petmd.com, petfoodguides.com ("2026 Safety & Feeding Guide"), alldogsacademy.com — still 100% static articles.
- **"how many carrots can a dog eat a day by weight" (DDG, 2026-09-01):** fluffytamer.com/carrot-dog-dosage/, thelivinglook.com ×2 ("1-2 baby carrots (or ¼ cup chopped) per 10 lbs"), petmd.com, houndsy.com + zendesk mirror — all articles.
- **AIO re-probe:** not run (manual user checkpoint skipped — kill-level finding already established). Unknown, recorded as such.

### Original snapshot, 2026-08-19

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

Display ads (AdSense) on each per-food entry/result page — the format bestpetfacts (AdSense+Ezoic+Amazon) and fluffytamer (Grow.me) already monetize on these exact queries. Play is **volume across the per-food long tail**, not CPC (Keyword Planner confirms per-food bids < $0.10 USD-equiv). Secondary, higher-CPC route: generic "best healthy dog treats" / "dog treats for training" comparison content ($0.70+ USD-equiv bids, though "training" is -90% YoY) sitting alongside the calculator, plus Chewy/Amazon affiliate on "healthy treat" foods. Route any toxic food (grapes, chocolate, xylitol) to a vet/ASPCA callout rather than portioning it. *(2026-08-19 facts; not re-verified 2026-09-01 — moot under the rejection.)*

## Risks & unknowns

- **Hook served (2026-09-01 — was "partially served")** — the 2026-08-19 erosion risk materialized: calculatorsfordogs.com now ships the purpose-built per-food × weight portion tool this dossier predicted someone could bolt on. The kill.
- **Hook partially served (FurCalc)** — furcalc.com already converts a food selection into a count for ~25 options. The moat is breadth (100+ foods) + ranking for the per-food long tail, not a novel mechanic. If FurCalc (or caneat.pet) expands its food list and targets these queries, the edge erodes — the same gate-4 pressure that killed the earlier calculator ideas.
- **"Calculator" branding has no search demand** — Keyword Planner shows near-zero volume for the literal tool-name phrasing; the site must rank on the informational per-food question ("how many carrots can a dog eat"), not a "calculator" URL/title strategy, or it risks building for a query nobody types.
- **Tool-format monetization risk** — interactive incumbents in this niche (FurCalc, caneat.pet) run no ads; ad revenue currently sits on the *articles*. A tool must still attract the article-style long-tail traffic to earn display RPM.
- **Legal/policy** — must frame as portioning of non-toxic foods ("treats ≤10% of calories, rest from complete food"), never medical/medication dosing, and route toxic foods to vet/ASPCA (888-426-4435) rather than compute a "safe" amount.
- Searched and came up empty this run: no free source for per-keyword volume/CPC (Keyword Planner is the gap); DDG `pain-fetch.py ddg` adapter bot-challenged (empty) — switched to Playwright browser.
- (2026-09-01) AIO presence on the head queries: **unknown** — manual Google checkpoint skipped once the kill-level finding landed; if the idea is ever revisited in another form, run the AIO probe first.
- (2026-09-01) Monetization & feasibility not re-verified this run (2026-08-19 facts left standing as record) — moot under the rejection.
- (2026-09-01) realdogsrealpeople.com/tools/treat-portion-calculator/ — fetch failed twice (title/SERP snippet confirm a 10%-rule treat portion tool); not needed for the kill.

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

### Re-validation run, 2026-09-01

- `scripts/fanout.py` (Google autocomplete, US): 6 core seeds → dense tail incl. new per-weight variants ("how many blueberries can a 20/30/40/50/60 lb dog eat", "…a day by weight") and per-age puppy variants; several transient connection resets, output complete.
- DDG html: "how many blueberries can a dog eat per day calculator" — SERP re-probe (all static; new entrant focuspetcare.com).
- DDG html: "how many carrots can a dog eat a day by weight" — SERP re-probe (all articles).
- DDG html: "dog treat portion calculator by food and dog weight tool" — surfaced the purpose-built incumbent + crowded tool field.
- Fetched: https://www.calculatorsfordogs.com/health-nutrition-calculators/safe-food-portion-calculator — **the kill**: weight (lbs) + human-food dropdown + feeding context → safe portion; "Covers 30+ foods with preparation notes and warnings"; per-food g/kg limits in FAQs; 139-calculator hub, free offline Android app, Partnerships page.
- Fetched: https://www.calculatorsfordogs.com/health-nutrition-calculators/treat-allowance-calculator — 10%-rule treat allowance calculator (calories + treat type + training frequency → counts).
- Fetched: https://furcalc.com/dog/treat-calorie-calculator — re-opened; ~25-option food/treat dropdown → counts; "Updated: 2026-05-16"; "no outbound affiliate links".
- Fetched: https://caneat.pet/tools — unchanged (five tools, still no per-food healthy-portion tool).
- Fetch failed ×2 (dead end): https://realdogsrealpeople.com/tools/treat-portion-calculator/.
