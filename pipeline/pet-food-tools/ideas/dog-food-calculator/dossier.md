# Dossier: Dog food calculator (kcal → cups for your actual food)

**A dog/puppy feeding-amount calculator whose hook — take the bag's kcal/cup and convert vet RER/MER math into cups of *your* food — has strong, recurring demand but is already served by multiple dedicated interactive incumbents (dogcalculator.net and caninebible.com both take the bag's calorie density as input); the scout's gate-4 hook is disproved; confidence: medium (no Keyword Planner CSV).**

## Signal scorecard

**Demand: strong** — the feeding-amount / "bag overfeeds" problem recurs across independent subreddits and the query fan-out is broad, all re-verified live this run.
  - Autocomplete (Google, US, this run, `scripts/fanout.py`): dense calculator tail — "dog food calculator by weight and age", "…wet and dry", "how much to feed my dog calculator by weight", "dog feeding guide calculator in grams", "puppy feeding amount calculator", "dog calorie calculator for weight loss / weight gain / puppy", "how to calculate how much to feed your dog".
  - "It says for 50 pound dogs, feed him 3 cups daily. I've been feeding him around 1 to 1.5 cups a day, which is the recommended feeding amount for 10 pound dogs" — https://www.reddit.com/r/dogs/comments/17y7gn4/i_just_noticed_im_feeding_my_dog_a_lot_less_than/ (re-verified live via DDG this run)
  - "Use a calorie calculator and do the math. The calories per cup should be on the back of the bag. Just take the daily calories and divide by number of calories per cup to get how many cups per day" — https://www.reddit.com/r/dogs/comments/kv321q/help_am_i_underfeeding_or_overfeeding_overweight/ (new this run, independent thread — describes the idea's exact formula as folk knowledge)
  - "I have been over feeding my dog for several years and resulted into her weight gain. Now that she has been on a REAL 1 cup, my dog lost 9 pounds… Please double check how much you're really feeding your animals!" — https://www.reddit.com/r/Pets/comments/15ur6n0/please_check_how_much_youre_actually_feeding_your/ (new this run, independent community)
  - "I calculate how much to feed using calories based on her weight. Every bag will have different amounts because of differing calories" — https://www.reddit.com/r/puppy101/comments/veww1z/how_can_you_tell_if_youre_feeding_your_pup_too/ (new this run, independent community)
  - Also fetched this run, same direction: r/DogAdvice 17rep5a ("check for calories per # of grams and check online how many calories he should consume"), r/dogs 17rektr ("double check with your vet, not the bag of dog food, that can be misleading").

**SERP & competitor weakness: weak** — the head-query SERP is saturated with dedicated, interactive, RER-based dog-food calculators, several 2026-fresh and on high-authority domains; it is not beatable on format or authority.
  - "dog food calculator by weight and age" (DDG, this run) top organic: dogcalculator.net/food-calculator, dogscalculators.com, dogfoodcalculator.net, caninebible.com/dog-food-calculator (8 Jul 2026), petfoodcalculator.com/dog-calculator, dogagecalculator.info, pawcalculator.com, dogdatahub.com — eight dedicated interactive calculators, not listicles.
  - dogcalculator.net markets itself as "A better feeding plan than the number on the bag" and "separates body weight, activity, body condition, food density, and treat calories" (fetched this run).
  - caninebible.com/dog-food-calculator is a high-authority incumbent (same domain that ranks the "can dogs eat" head terms) already ranking with a full interactive calculator (fetched this run).

**Hook depth: weak** — the hook genuinely matters to users (see Demand), but it is no longer a differentiator: ≥2 independent incumbents already take the bag's kcal/cup as input, disproving scout gate 4.
  - dogcalculator.net (fetched this run): "That is why this page asks for the calorie density from the packaging rather than pretending all foods have the same energy per cup or per 100g." — the idea's exact hook, live.
  - caninebible.com/dog-food-calculator (fetched this run): page text matches kcal-per-cup / calorie-density-from-bag input (`asksBagKcalPerCup` true on inspection) — a second independent incumbent serving the hook.
  - dogfoodcalculator.net (fetched this run): same calorie-first RER model, lists "Trusting the bag label" as feeding mistake #1 — the "bag overfeeds" framing that was the idea's secondary hook is now table-stakes marketing across the space.

**Monetization paths: strong** — competitors on this exact calculator format run display ads plus dense affiliate.
  - caninebible.com/dog-food-calculator (inspected this run): AdSense/ad-network present, plus Amazon Associates and Chewy affiliate links (`adsense`, `amazon`, `chewy`, generic-affiliate all true on inspection) — display + pet-retail affiliate on the identical page format.
  - Contrast: dogfoodcalculator.net (inspected this run) runs no ads/affiliate — monetization depth varies, but the profitable pattern (caninebible) is proven in-space.
  - Advertiser CPC unknown — no Keyword Planner CSV this run; no numbers quoted.

**Feasibility & maintenance: strong** — pure client-side build on stable, published veterinary constants; multiple live incumbents prove the shape and the ≤quarterly (effectively zero) refresh burden.
  - RER/MER formulas are fixed and published: dogcalculator.net and dogfoodcalculator.net both disclose `RER = 70 × (kg)^0.75 × MER factor ÷ food kcal density` (fetched this run) — no proprietary or perishable data.
  - Food kcal density is supplied by the user from their own bag, so there is no per-brand dataset to maintain.

**Unique-data opportunity: weak** — there is no dataset competitors lack; the key input (kcal/cup) comes from the user's bag, and incumbents already ingest it.
  - dogcalculator.net and caninebible.com already take the bag's calorie density (fetched this run) — the one "unique" input is already an incumbent input.
  - The puppy/adult-weight ambiguity the idea would handle explicitly is structure, not data; pawcalculator.com already flags weight-and-age bracket transitions (SERP description this run), so even that framing is partly served.

**Confidence: medium** — demand is evidenced from ≥2 independent sources and only unique-data is thin, but no Keyword Planner CSV exists this run, which caps confidence at medium regardless. The rejection does not turn on volume, so the CSV was not requested (see run log).

## SERP snapshot

- **"dog food calculator by weight and age" (DDG, 2026-08-17):** dogcalculator.net/food-calculator ("daily calories, cups, grams, treats, meal schedule; dry, wet, raw, mixed"), dogscalculators.com ("Dog Food Calculator by Weight [2026]"), dogfoodcalculator.net ("Exact Daily Portions by Weight & Age (2026)… RER formula"), caninebible.com/dog-food-calculator (8 Jul 2026, "daily calories and cups, feeding charts by weight, life stage, activity"), petfoodcalculator.com/dog-calculator, dogagecalculator.info/dog-food-calculator, pawcalculator.com ("life-stage-aware… flags when weight-and-age crosses into a new feeding bracket"), dogdatahub.com/calculators/food-calculator. Every top result is a dedicated interactive calculator, not a listicle — the opposite of a beatable SERP. Several are 2026-fresh, and caninebible is a high-authority pet domain.
- **Verdict:** not beatable on format (interactive calculators dominate), not on the hook (bag kcal/cup already an input at dogcalculator.net and caninebible.com), and hard on authority (caninebible.com). This mirrors the cat-portion-converter and chocolate-toxicity-calculator rejections in this niche.

## Keyword data

Awaiting Keyword Planner export — **deliberately not requested this run.** The idea exits `rejected` on competitor saturation (gate-4 disproof); search-volume buckets cannot reverse a hook-already-served verdict, so filing a manual-export request would burn the human Keyword Planner checkpoint on a dead idea (same call as the 2026-08-17 cat-portion-converter run). Confidence capped at medium accordingly. If the hook is later re-framed into a genuinely unserved angle, build a keywords-request then.

## Monetization sketch

If ever pursued: display ads (AdSense) on the calculator page plus pet-retail affiliate (Chewy/Amazon) and pet-insurance placements below the result — the exact stack caninebible.com/dog-food-calculator already runs. But with the hook already served by higher-authority incumbents, there is no traffic path to monetize.

## Risks & unknowns

- **Unique-data: weak** — searched public angles (bag kcal/cup as user input, puppy/adult-weight bracketing); the kcal/cup input is already ingested by dogcalculator.net and caninebible.com, and pawcalculator.com already brackets life-stage transitions. No moat found.
- **Search volume: unknown** — no Keyword Planner CSV this run and none requested (dead idea); exact/bucketed volume, CPC, and difficulty remain unknown by design. No numbers invented.
- **Monetization depth varies** — caninebible runs a full ad+affiliate stack; dogfoodcalculator.net runs none. Not a blocker to the rejection, just noted.

## Sources log

- `scripts/fanout.py` (Google suggest, US, `--mode=question`) on seeds "dog food calculator", "how much to feed my dog", "puppy feeding amount", "dog calorie calculator", "dog feeding chart" — dense calculator/grams/weight-loss tail.
- `scripts/pain-fetch.py ddg` — bot-challenged (empty output), dead end; switched to Playwright browser on duckduckgo.com.
- DDG browser: `site:reddit.com dog feeding bag calculator too much overfeeding` — re-verified r/dogs 17y7gn4; new r/dogs kv321q, r/Pets 15ur6n0, r/puppy101 veww1z, r/DogAdvice 17rep5a, r/dogs 17rektr.
- DDG browser: `dog food calculator by weight and age` — SERP snapshot (8 dedicated calculators).
- Fetched: https://dogcalculator.net/food-calculator — asks for packaging calorie density; "better feeding plan than the number on the bag"; RER/MER disclosed.
- Fetched: https://dogfoodcalculator.net/dog-food-amount-calculator.html — RER model, food-type kcal/g presets, "Trusting the bag label" = mistake #1; no ads/affiliate.
- Fetched: https://www.caninebible.com/dog-food-calculator/ — interactive calculator, takes bag kcal/cup; AdSense + Amazon + Chewy affiliate present.
- Not opened (SERP-listed, sufficient evidence reached): dogscalculators.com, petfoodcalculator.com/dog-calculator, dogagecalculator.info, pawcalculator.com, dogdatahub.com.
