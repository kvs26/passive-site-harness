# Dossier: Sabzi-by-vegetable index

**A pick-a-vegetable, filterable sabzi index (every sabzi you can make from bhindi/cabbage/aloo…, tagged dry/gravy · region · effort · roti-vs-rice pairing) — parked at medium confidence: demand, SERP weakness, feasibility and unique-data all grade strong on real evidence this run, but no Keyword Planner CSV exists yet so confidence is capped and the run parks pending the export.**

## Signal scorecard

**Demand: strong** — the "same food / need variety" complaint recurs across independent communities and years, and the by-vegetable browse intent shows up as broad, structured autocomplete demand.
  - Autocomplete fan-out (Google suggest, gl=us, this run) — per-vegetable and "which/what" intent: "which sabzi to make", "which sabzi is easy to make", "sabzi from aloo", "sabzi from palak", "sabzi from besan", "what to make with bhindi", "what goes with bhindi", "what goes well with bhindi", "sabzi ideas when no vegetables are there", "sabzi ideas for lunch/dinner/party".
  - Pain recurrence across independent communities/years: r/IndianTeenagers "Anybody tired of eating the same food?" — "So my mom literally cooks the same damn food everyday. Curry, rice and roti." https://www.reddit.com/r/IndianTeenagers/comments/12jnmdo/anybody_tired_of_eating_the_same_food/ ; NDTV Food "Tired Of Bland Sabzi? 6 Tips To Make Your Meals Exciting" (25 Jul 2024) — a mainstream outlet publishing against the exact "same/boring sabzi" pain https://food.ndtv.com/food-drinks/tired-of-bland-sabzi-6-tips-to-make-your-meals-exciting-6185936 ; r/IndianFood "Some easy ways to cook vegetables" — "I usually only end up making two dishes at a time…" https://www.reddit.com/r/IndianFood/comments/biadsr/some_easy_ways_to_cook_vegetables/ (Bing SERP, this run).

**SERP & competitor weakness: strong** — the front page for both the head query and the per-vegetable long tail is flat blog category lists and single-dish recipe posts; no site lets you pick a vegetable and browse the whole tagged sabzi space.
  - "sabzi ideas" (Bing, this run): spiceupthecurry.com "50+ Indian Sabzi Recipes (Dry Vegetables)", vegrecipesofindia.com "Vegetable Recipes | Sabji Recipes | 150 Veggie Dishes", tarladalal.com "251 Indian Dinner Sabzi", indiancookingrecipes.com "18 Easy Veg Recipes" — all one-dimensional category pages, no vegetable filter/tag facets.
  - "bhindi sabzi ideas different ways" (Bing, this run): top result is vegrecipesofindia.com "Bhindi ki Sabji" — a single-dish recipe page (5/5, 14 ratings, "Category: Side Dish"), not a browsable set of every bhindi sabzi. The per-vegetable query resolves to one recipe, confirming the gap holds at the long-tail level too.

**Hook depth: strong** — the index's tagging axes (by-vegetable, dry/gravy, region, pairing) each surface as real query variants, and incumbents already publish per-axis pages, so the differentiator maps onto demonstrated demand rather than being our invention.
  - By-region axis (autocomplete, this run): "cabbage sabzi punjabi style", "cabbage sabzi maharashtrian style", "cabbage sabzi rajasthani style", "cabbage sabzi gujarati style", "cabbage sabzi south indian style", "cabbage sabzi north indian style"; "gujarati sabzi list", "gujarati sabzi options".
  - Dry/gravy + pairing axes: autocomplete "dry sabzi list", "dry sabzi options", "dry sabzi for roti", "geeli sabzi ideas", "sabzi ideas with roti" (this run); and incumbents monetise these exact cuts as separate pages — spiceupthecurry's "(Dry Vegetables)" category and vegrecipesofindia's bhindi page cross-linking "North Indian sabzi recipes" (Bing SERP, this run). Different sources pointing the same way.

**Monetization paths: weak** — the space is a conventional recipe-content display/affiliate niche, but no CPC data was read this run and no competitor ad unit was fetched, so this can only be graded weak until the CSV lands.
  - The incumbents holding the SERP (vegrecipesofindia, tarladalal, spiceupthecurry, indiancookingrecipes) are ad-supported recipe blogs — the standard AdSense/Mediavine + Amazon-affiliate (cookware/spices) model — which is the plausible route here. But this run did not fetch an ad tag or an affiliate disclosure on those pages, and there is no bid data. Monetization-CPC probes are in `keywords-request.md`; upgrade on CSV.

**Feasibility & maintenance: strong** — one build-time curated JSON (dishes × vegetables × tags); the underlying data is factual dish canon that is openly enumerable and refreshes slower than quarterly.
  - The dish universe is already enumerated in public: spiceupthecurry "50+ … Dry Vegetables", vegrecipesofindia "150 Veggie Dishes", tarladalal "251 Indian Dinner Sabzi" (Bing SERP, this run) — dish names + attributes (region, dry/gravy) are facts, no licence needed, and traditional sabzi canon changes on a multi-year horizon. No backend, no accounts, no per-request compute.

**Unique-data opportunity: strong** — the value is the cross-tab itself: vegetable × dish × dry/gravy × region × effort × roti-vs-rice pairing, a structure none of the incumbents expose.
  - Every competitor surface fetched this run is either a flat single-axis category list ("Dry Vegetables", "150 Veggie Dishes") or a single-dish page ("Bhindi ki Sabji"); the pivot — start from the vegetable in your fridge, filter across all axes — is derivable from the same public facts but published nowhere. That derived structure is the defensible artifact.

## SERP snapshot

Fetched this run (Bing, gl=us):

- **"sabzi ideas"** → spiceupthecurry.com "50+ Indian Sabzi Recipes (Dry Vegetables)"; vegrecipesofindia.com "Vegetable Recipes | Sabji Recipes | 150 Veggie Dishes"; tarladalal.com "Healthy Indian Sabzi Recipes | 108+ Ideas" and "251 Indian Dinner Sabzi"; indiancookingrecipes.com "18 Easy Veg Recipes Indian – Simple Everyday Sabzis"; ishopdesi.co.uk "Easy Sabzi Ideas with Fresh Vegetables". Every hit is a flat category/listicle page — no vegetable-picker, no dry/gravy or region facets.
- **"bhindi sabzi ideas different ways"** → vegrecipesofindia.com "Bhindi ki Sabji" (single-dish recipe, 5/5 · 14 ratings · "Category: Side Dish") as the lead result, then an image pack and related-searches. A per-vegetable query returns one recipe, not a browsable set.

Why beatable: the incumbents rank flat lists and single recipes; none answer "pick the vegetable in my fridge → show me every sabzi from it, filtered by dry/gravy, region, effort, and what bread/grain it pairs with." The concept has no purpose-built tool on the front page (consistent with the scout's "no tool" finding, re-verified this run).

## Keyword data

Awaiting Keyword Planner export — see `keywords-request.md`. No CSV pulled this run, so search-volume buckets, YoY trend, and top-of-page bids are all `unknown`; confidence is capped at medium until it lands. (Google Trends was 429 at scout and not retried here, so trend direction is also unknown.)

## Monetization sketch

Likeliest route: display ads (AdSense/Mediavine-style) across the high-pageview browse surface — the per-vegetable index page and each filtered view — mirroring how the incumbent recipe blogs monetise, plus Amazon-affiliate placements for cookware (kadai/pressure cooker) and spice kits on individual dish detail rows. The index/browse pages carry the ad load; dish rows carry the affiliate links. CPC viability unconfirmed pending the CSV monetization probes.

## Risks & unknowns

- **Search volume / CPC / YoY trend: unknown** — no Keyword Planner CSV this run; Google Trends 429 at scout, not retried. This is what caps confidence and parks the idea. Resolve via `keywords-request.md`.
- **Monetization CPC: unknown** — graded weak only because no bid data and no competitor ad tag was fetched this run; likely upgrades once the CSV monetization probes come back.
- **Reddit quotes via SERP snippet, not on-page re-fetch** — direct Reddit fetches returned only an image/JS wall this run (login/Cloudflare); demand "strong" rests on live autocomplete breadth + the NDTV article + Bing-surfaced thread titles/snippets rather than an on-page Reddit quote captured this run. DDG (lite + html) was bot-challenged.
- **Diaspora-vs-India split** — several phrasings are India-heavy; per `niche.md` the US diaspora is the qualifying market and India is upside. The US-geo CSV pull is the one that gates.

## Sources log

- scripts/fanout.py — Google autocomplete, gl=us (this run), seeds "sabzi by vegetable", "which sabzi to make", "sabzi from", "bhindi sabzi", "cabbage sabzi": per-vegetable + regional-style + which/what intent. ✅
- scripts/fanout.py — Google autocomplete, gl=us (this run), seeds "sabzi ideas", "aloo sabzi", "what to make with bhindi", "dry sabzi", "gujarati sabzi": "dry sabzi list/options", "gujarati sabzi list/options", "sabzi ideas when no vegetables are there", "what goes with bhindi". ✅
- scripts/pain-fetch.py hn — HN Algolia "bored eating same vegetable" (this run): only generic same-meal/grocery chatter, nothing Indian-specific. ⚠️ (weak)
- scripts/pain-fetch.py ddg — "reddit what sabzi to make everyday bored" (this run): empty (bot-challenged). ❌
- lite.duckduckgo.com — "reddit what sabzi to make everyday repetitive" (this run): CAPTCHA challenge, no results. ❌
- Bing SERP — "reddit tired of making same sabzi everyday" (this run): r/IndianTeenagers same-food thread + NDTV "Tired Of Bland Sabzi? 6 Tips" (25 Jul 2024) + r/nutrition/r/productivity same-meal threads. ✅
- Bing SERP — "reddit run out of ideas what vegetable sabzi to cook" (this run): r/IndianFood "Some easy ways to cook vegetables" ("only end up making two dishes at a time") + spiceupthecurry "50+ … Dry Vegetables" + vegrecipesofindia "150 Veggie Dishes" + tarladalal "251 Indian Dinner Sabzi". ✅
- Bing SERP — "bhindi sabzi ideas different ways" (this run): vegrecipesofindia "Bhindi ki Sabji" single-dish page as lead result. ✅
- reddit.com/r/IndianFood/…/weeknight_vegetarian_indian_ideasrecipes (this run, direct fetch): returned only an image — Reddit HTML blocked, not re-verified on-page. ❌
- NDTV Food "Tired Of Bland Sabzi? 6 Tips…" 25 Jul 2024 (Bing snippet, this run): mainstream coverage of the boring-sabzi pain. ✅
