# Dossier: Roti-sabzi pairing matrix

**A two-way, filterable pairing matrix (pick a bread/grain — roti, jowar/bajra/besan/missi roti, paratha, rice — or a sabzi/dal and see what traditionally goes with it) — parked at medium confidence: demand grades strong on broad two-way pairing autocomplete + PAA + a real recurrence thread, but SERP-weakness, hook depth, monetization and unique-data all grade weak because Google's AI Overview already answers the head pairing query directly, and no Keyword Planner CSV exists yet to size the one cut that stays unserved (the per-bread long tail).**

## Signal scorecard

**Demand: strong** — the pairing question recurs in both directions (bread→side and side→bread) as broad structured autocomplete, Google itself promotes it to People-Also-Ask, and it shows up as a real community thread.
  - Autocomplete fan-out (Google suggest, gl=us, this run) — per-bread "what to eat with X roti" long tail: "what to eat with jowar roti", "…bajra roti", "…besan roti", "…missi roti", "…methi roti", "…makki ki roti", "…nachni roti", plus the pairing-direction phrasing "what sabzi to eat with jowar roti", "what sabzi to eat with bajra roti vegetarian".
  - Autocomplete fan-out (second seed set, this run) — the paratha/dal side of the matrix: "side dish for aloo paratha", "side dish for methi paratha", "side dish for paneer paratha", "best side dish for paratha", "what goes best with dal makhani", "what goes best with dal chawal", "what goes best with dal khichdi". Different query family, same pairing intent → independent second piece.
  - Google People Also Ask for "what sabzi to eat with jowar roti" (SERP, this run): "What can we eat with jowar roti?", "Which sabji to eat with roti?", "Which vegetable is traditionally eaten with bajra roti?" — Google curates the pairing question as recurring.
  - Recurrence thread: r/veganrecipes "Tired of eating roti and sabzi every day. any idea for something different…" (fetched this run) https://www.reddit.com/r/veganrecipes/comments/1lo8bt6/tired_of_eating_roti_and_sabzi_every_day_any_idea/ ; r/IndianFood "Accompaniments with aloo paratha?" (Google SERP title/snippet, this run). NB: the veganrecipes thread is variety-fatigue framed (overlaps the sibling rotation idea) more than pure pairing.

**SERP & competitor weakness: weak** — beatability splits by query depth: the per-bread long tail is genuinely open (no tool, no AI Overview), but the head pairing terms are already served by Google's AI Overview *and* dedicated listicles.
  - Long-tail, open: "what sabzi to eat with jowar roti" (Google, gl=us, this run) returned **no AI Overview** and no interactive tool — only recipe blogs (vegrecipesofindia.com, lifeisforfood.com), reddit, YouTube and Instagram posts ("Tinde ki sabzi with jowar roti is a great combination", "Discover 8 jowar roti curries").
  - Head term, served: "side dish for aloo paratha" (Google, gl=us, this run) returned a full **AI Overview** listing accompaniments ("A tall, refreshing glass of sweet or salted yogurt drink" (lassi); "(White Butter)"; "Mango, lime, or mixed vegetable pickle adds a sharp, tangy kick"; masala chai; onion-cucumber salad) — plus dedicated pairing listicles indianambrosia.com "25+ Side Dishes for Paratha (What to Eat with Paratha)" and rakskitchen.net. The single-direction pairing answer is already synthesized on the page.
  - Net: the *whole-matrix / two-way filterable* cut has no purpose-built tool (consistent with the scout's "no tool" finding, re-verified), but a searcher's single pairing question increasingly gets answered without a click — so beatability is thin at the head.

**Hook depth: weak** — this is the scout's gate-1 near-miss ("a single pairing question is LLM-answerable"), and the evidence this run confirms rather than dispels it: Google's AI Overview now answers the head pairing question outright, so the differentiator has to rest entirely on the browsable two-way matrix, which no evidence yet shows users want *as a tool*.
  - AI Overview on "side dish for aloo paratha" (this run, quoted above) delivers exactly the "what goes with this bread" answer the matrix would give, for the highest-intent term.
  - The demand that *is* two-directional ("what to eat with jowar roti" AND "side dish for methi paratha") shows people ask from both ends — but every artifact serving them is prose (listicles) or an AI answer, never a query-both-ways matrix; that the matrix *format* is wanted is our hypothesis, not shown. One supporting angle (both-direction autocomplete) + one contradicting angle (AIO serves the single question) → weak.

**Monetization paths: weak** — the space is a conventional recipe-content display/affiliate niche with visible ad networks on competitors, but no CPC/bid data was read this run and the food-recipe vertical is typically low-CPC.
  - Competitor ad/affiliate stacks fetched this run: vegrecipesofindia.com/sabzi-recipes carries **AdThrive/Raptive** display tags and affiliate disclosures (`adthrive`, `raptive`, "Affiliate" ×8 in page source); archanaskitchen.com/roti-recipes carries an **Amazon affiliate** link (`amazon.com/exec/obidos/ASIN/…?tag=`). So the AdSense/display + Amazon-affiliate (atta, kadai, cookware) route is real and in use.
  - But no bid data this run and no CSV → CPC viability unknown; recipe/pairing terms are informational and usually cheap. Monetization-CPC probes are in `keywords-request.md`; upgrade on CSV.

**Feasibility & maintenance: strong** — one build-time curated pairing table (breads/grains × sabzis/dals, tagged for the two-way lookup); the underlying data is stable traditional pairing canon, openly enumerable, no licence, refreshes slower than quarterly.
  - The pairings are already enumerated in public prose this run: indianambrosia.com "25+ Side Dishes for Paratha", the jowar-roti SERP's "Discover 8 jowar roti curries" and "Which vegetable and dal goes best with jowar roti" — dish/pairing facts, no backend, no accounts, no per-request compute. Traditional combinations ("bajra roti + …", "jowar roti + baingan/tinde sabzi") change on a multi-year horizon.

**Unique-data opportunity: weak** — the two-way filterable cross-tab (bread ↔ sabzi/dal) is a structure competitors publish only as one-directional prose, but it is derivable from the same public facts (low defensibility) and, unlike the sibling by-vegetable index, its core value — the single pairing answer — is now being synthesized by AI Overview.
  - Every competitor surface this run is one-directional: listicles keyed to one bread ("25+ Side Dishes for Paratha"), single-dish recipe pages, or an AI Overview answer. The pivot (query from either end, filter by dry/gravy, region) is unserved — but it is reconstructable by anyone from the same prose, and the AIO overlap erodes the derived structure's edge. Real but thin.

## SERP snapshot

Fetched this run (Google, gl=us):

- **"what sabzi to eat with jowar roti"** → no AI Overview; results are recipe blogs (vegrecipesofindia.com, lifeisforfood.com), a reddit thread, and YouTube/Instagram posts ("Jowar Roti and Baingan ki Subzi", "Masala sabzi | Best combo with jowar roti", "Tinde ki sabzi with jowar roti is a great combination"). People Also Ask: "What can we eat with jowar roti?", "Which sabji to eat with roti?", "Which vegetable is traditionally eaten with bajra roti?". No purpose-built pairing tool. **Beatable** — the long tail is open.
- **"side dish for aloo paratha"** → full **AI Overview** enumerating accompaniments (curd/lassi, white butter, mango/mixed pickle, masala chai, onion-cucumber salad); organic leads are dedicated listicles indianambrosia.com "25+ Side Dishes for Paratha (What to Eat with Paratha)" and rakskitchen.net, plus r/IndianFood "Accompaniments with aloo paratha?". **Not beatable at the head** — Google answers on-page and a purpose-built listicle already exists.

Why the split matters: the matrix's value concentrates in the highest-intent, highest-volume pairing terms (paratha/roti), and those are exactly where AI Overview + listicles already sit. The unserved space is the thinner per-bread long tail.

## Keyword data

Awaiting Keyword Planner export — see `keywords-request.md`. No CSV pulled this run, so search-volume buckets, YoY trend, and top-of-page bids are all `unknown`; confidence is capped at medium until it lands. (Google Trends was 429 at scout and not retried here, so trend direction is also unknown.) The gating read the CSV must supply: whether the per-bread long-tail cut (jowar/bajra/besan/missi roti pairings) carries enough volume to justify building around the one cut AI Overview does not serve.

## Monetization sketch

Likeliest route: display ads (AdSense/Mediavine/Raptive-style) across the browse surface — the matrix page and each filtered bread/sabzi view — mirroring how the incumbent recipe blogs monetise (AdThrive/Raptive confirmed on vegrecipesofindia this run), plus Amazon-affiliate placements for atta (jowar/bajra/besan), tawa and cookware on the bread detail rows (Amazon affiliate confirmed on archanaskitchen this run). Browse pages carry the ad load; detail rows carry the affiliate links. CPC viability unconfirmed pending the CSV probes; the recipe vertical is generally low-CPC.

## Risks & unknowns

- **AI Overview cannibalises the head hook** — the single "what goes with <bread>" question, the matrix's highest-value use, is already answered on-page by Google's AI Overview on head terms (verified on "side dish for aloo paratha" this run). This is the scout's gate-1 near-miss, confirmed. The idea survives only on the two-way browsable matrix + the per-bread long tail AIO doesn't yet touch.
- **Search volume / CPC / YoY trend: unknown** — no Keyword Planner CSV this run; Google Trends 429 at scout, not retried. Caps confidence and parks the idea. The CSV must specifically size the *long-tail* cut, not just the head.
- **Monetization CPC: unknown** — graded weak on visible ad/affiliate stacks but no bid data; food-pairing terms are typically cheap.
- **Demand overlaps the sibling rotation idea** — the strongest recurrence quote (r/veganrecipes "Tired of eating roti and sabzi every day") is variety-fatigue, which the sibling `indian-menu-rotation-builder` / `sabzi-by-vegetable-index` serve at least as well; pure pairing-format demand is thinner than raw autocomplete breadth suggests.
- **Diaspora-vs-India split** — several bread phrasings (bajra/missi/nachni roti) are India-heavy; per `niche.md` the US diaspora is the qualifying market, India is upside. The US-geo CSV pull is the one that gates.

## Sources log

- scripts/fanout.py — Google autocomplete, gl=us (this run), seeds "roti sabzi combination", "what to eat with roti", "side dish for roti", "dal and sabzi combination": per-bread "what to eat with jowar/bajra/besan/missi/methi/makki/nachni roti" + "what sabzi to eat with jowar/bajra roti". ✅
- scripts/fanout.py — Google autocomplete, gl=us (this run), seeds "what goes with dal", "side dish for paratha", "what to eat with rice indian": "side dish for aloo/methi/paneer/palak/mooli/gobi paratha", "best side dish for paratha", "what goes best with dal makhani/chawal/khichdi". ✅
- scripts/pain-fetch.py hn — HN Algolia "what to eat with roti sabzi" (this run): one off-topic culinary-knowledge comment, nothing on-point. ⚠️ (dead end)
- scripts/pain-fetch.py ddg — "reddit what sabzi goes with roti dinner" + 3 variants (this run): empty, bot-challenged. ❌ (dead end)
- html.duckduckgo.com via browser — "reddit what sabzi to eat with roti ideas" (this run): "Unfortunately, bots use DuckDuckGo too" CAPTCHA. ❌ (dead end)
- Google SERP via browser — "reddit what sabzi to eat with roti dinner ideas" (this run): surfaced r/IndianFood "Roti, Subzi, and Daal?" (7y), r/veganrecipes "Tired of eating roti and sabzi every day…" (1y), r/IndianFood cauliflower-roti thread (5y). ✅
- reddit.com/r/veganrecipes/…/1lo8bt6 (this run, opened via SERP): title confirms "Tired of eating roti and sabzi every day. any idea for something different…"; comment bodies did not render on-page (Reddit JS/login wall). ⚠️
- Google SERP via browser — "what sabzi to eat with jowar roti" (this run): no AI Overview; recipe blogs + reddit + YouTube/Instagram; PAA pairing questions captured. ✅
- Google SERP via browser — "side dish for aloo paratha" (this run): AI Overview with accompaniment list; indianambrosia.com "25+ Side Dishes for Paratha" + rakskitchen.net + r/IndianFood "Accompaniments with aloo paratha?". ✅
- curl vegrecipesofindia.com/sabzi-recipes (this run): AdThrive/Raptive display tags + affiliate disclosures in source. ✅
- curl archanaskitchen.com/roti-recipes (this run): Amazon affiliate link (`amazon.com/exec/obidos/ASIN/…?tag=`). ✅
- eathealthy365.com roti-pairings guide (this run, direct fetch): HTTP 403 Forbidden — scout's key competitor not re-verifiable on-page this run. ❌ (dead end)
