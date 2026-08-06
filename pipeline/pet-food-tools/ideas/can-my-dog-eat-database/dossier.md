# Dossier: Can-my-dog-eat searchable database

**Searchable "can dogs eat X" database whose hook — verdicts adjusted for quantity eaten and dog size — is strongly demanded and absent from every competitor found, including two existing interactive lookups; confidence: high.**

## Signal scorecard

**Demand: strong** — huge query fan-out plus recurring panic threads across independent subreddits, re-verified live this run.
  - Autocomplete (Google, US, this run): long "can dogs eat X" tail (mango, pineapple, watermelon, chocolate…), plus quantity-shaped queries "how much chocolate is toxic to dogs", "dog ate grapes and is fine", "dog ate grapes 24 hours ago", "my dog ate a grape/onion/banana peel".
  - "Google results are mixed, some info says to just watch him and other info says it can be toxic" — https://www.reddit.com/r/DogAdvice/comments/194h1eu/help_my_dog_ate_silica_gel_does_he_need_first_aid/ (re-verified live via DDG this run)
  - "My dog just ate half of one of these bars, are these [toxic]" — https://www.reddit.com/r/DogAdvice/comments/13q5q8y/my_dog_just_ate_half_of_one_of_these_bars_are/ (new this run, independent thread)
  - "My dog ate one or two of these, I can't find a whole lot of…" — https://www.reddit.com/r/mushroomID/comments/1ddrx8l/my_dog_ate_one_or_two_of_these_i_cant_find_a/ (new this run, independent community)

**SERP & competitor weakness: weak** — head-term SERPs are static listicles, but they belong to high-authority sites, and two small interactive lookup competitors already exist (contradicting the scout's "no interactive lookup" note).
  - "can dogs eat grapes" (DDG, this run): Petful, WebMD, CanineBible, RubyVet, OutwardHound, Purina, AKC, Dogster — all static articles, no tool; but WebMD/AKC/Purina are hard to outrank on authority.
  - "what foods can dogs eat searchable list checker" (DDG, this run): "168 Human Foods…", "94 Things…", "50 Human Foods…" — pure listicles.
  - Interactive incumbents found this run: https://dogtoxic.com ("Instantly find out if a food is safe or toxic… Backed by ASPCA data", 75 foods) and https://canmydogeat.org ("fast, searchable directory of foods rated for dog safety"). Both are flat per-food verdicts; neither ranks on the head queries checked.

**Hook depth: strong** — quantity × dog-size is exactly what users and vet staff say matters; no competitor (static or interactive) computes it.
  - "I work in a vets and we often have people ringing saying their dog ate a small piece of chocolate… it depends on your dogs weight, the cacao % in the chocolate and how much of it they ate" — https://www.reddit.com/r/LifeProTips/ (LPT: chocolate toxicity calculators; via DDG this run)
  - "It really depends on the size of the dog and how much chocolate they ate, and the type of chocolate" — https://www.reddit.com/r/Pets/ (my dog ate chocolate chip cookies; via DDG this run)
  - "Chocolate meter for dogs. Type in the dog's weight and type of…" — dedicated Reddit thread sharing such a calculator (via DDG this run)
  - dogtoxic.com and canmydogeat.org inspected this run: neither takes quantity or dog weight as input — verdicts are flat per food.

**Monetization paths: strong** — competitors in this exact space run ads and dense affiliate programs.
  - caninebible.com/can-dogs-eat-grapes/ (fetched this run): Chewy in-article affiliate banners (chewy.sjv.io), pet-insurance guide affiliate, Dutch vet-telehealth affiliate (dutchpetinc.pxf.io), The Vets (the-vets.sjv.io), Embark, Amazon Associates disclosure.
  - dogtoxic.com (fetched this run): cookie banner states "we use cookies to improve your experience and serve relevant ads" — display ads on an interactive lookup, our exact format.

**Feasibility & maintenance: strong** — free, stable, authoritative dose data exists; a competitor proves the static build.
  - Merck Vet Manual "Food Hazards" (fetched this run, last updated May 2026): explicit dose thresholds — "more than one grape or raisin per 4.5 kg (10 pounds) of body weight may contain enough tartaric acid to pose a risk"; "One ounce of milk chocolate per pound of body weight is a potentially fatal dosage in dogs." https://www.merckvetmanual.com/special-pet-topics/poisoning/food-hazards
  - dogtoxic.com is a live static-style site (75 entries, client-side search, category pages) citing ASPCA — proves build shape and ≤quarterly refresh cadence.

**Unique-data opportunity: strong** — a structured dose-per-body-weight dataset is derivable from free references and no competitor has it.
  - Merck gives per-weight thresholds (grapes, chocolate by type ordering: cocoa powder > baker's > semisweet > milk) usable to compute verdicts from quantity + dog weight (fetched this run).
  - Confirmed gap: dogtoxic.com and canmydogeat.org (both inspected this run) serve only flat verdicts — the derived quantity model would be data they don't have. USDA FoodData Central remains available for per-food nutrient/serving-size grounding.

**Confidence: high** — no signal unknown; demand and SERP weakness each graded from ≥2 independent sources fetched this run.

## SERP snapshot

- **"can dogs eat grapes" (DDG, 2026-08-06):** petful.com ("Dog Ate a Grape? 3 Steps… [2026]"), webmd.com, caninebible.com ("Toxic Dosage & Vet-Advice"), rubyvet.com, outwardhound.com, purina.com, akc.org, dogster.com ×2. All articles; caninebible is the only one leading with dosage, and even it concludes "no safe quantity" prose rather than computing anything. Beatable on format (instant verdict + quantity input), not on raw authority — traffic path is the long tail ("dog ate grapes 24 hours ago", "…and is fine") rather than the head term.
- **"what foods can dogs eat searchable list checker" (DDG, 2026-08-06):** "168 Human Foods…", "94 Things…", AKC "People Food…", "40 Vet-Reviewed…", healthline "Can My Dog Eat This?" — every result a static listicle; beatable with an actual lookup.
- **"can my dog eat app OR database OR tool lookup" (DDG, 2026-08-06):** canmydogeat.org and dogtoxic.com surface at top — the interactive niche exists but is thin (75 foods, flat verdicts, no quantity/size context, no symptom-timeline detail). Beatable on the hook.

## Monetization sketch

Display ads (AdSense) on food entry pages — proven by dogtoxic.com running ads on the identical format. Secondary: pet-insurance and vet-telehealth affiliate placements on toxic/caution verdict pages (the exact placements caninebible monetizes), sitting below the emergency-hotline callout, never replacing it.

## Risks & unknowns

- No signal graded unknown this run.
- Absolute search volume: unknown (numbers policy — no free source).
- Interactive incumbents exist (dogtoxic.com, canmydogeat.org): differentiation now depends entirely on the quantity × dog-size hook plus food coverage depth (75 foods vs. planned 200+). If they add quantity inputs, the moat shrinks.
- Grape/raisin toxicity is idiosyncratic per dog (Merck: "variable effects"); the quantity model must present risk thresholds, not safety guarantees, and always route toxic + significant amount to vet/poison hotline (dogtoxic's ASPCA hotline pattern confirms this posture is standard).
- aspca.org people-foods page could not be fetched this run (redirect to ad-tracker); Merck substitutes fine, but ASPCA as a named source is unverified this run.

## Sources log

- Google autocomplete fan-out (scripts/fanout.py, US locale): seeds "can dogs eat", "can my dog eat", "can cats eat", "my dog ate", "how much chocolate", "dog ate grapes" — rich tail incl. quantity phrasing.
- DDG HTML endpoint (scripts/pain-fetch.py): bot-challenged again mid-run — dead end; switched to integrated browser on duckduckgo.com.
- DDG browser: `site:reddit.com "my dog ate" google says toxic conflicting` — re-verified r/DogAdvice 194h1eu, r/dogs orevs3; new r/mushroomID 1ddrx8l, r/DogAdvice 13q5q8y.
- DDG browser: `can dogs eat grapes` — SERP snapshot 1.
- DDG browser: `what foods can dogs eat searchable list checker` — SERP snapshot 2.
- DDG browser: `"can my dog eat" app OR database OR tool lookup` — found dogtoxic.com, canmydogeat.org.
- DDG browser: `site:reddit.com dog ate chocolate "how much" weight toxic calculator` — hook-depth quotes (vet-staff LPT, r/Pets, chocolate-meter thread, r/DogAdvice).
- Fetched: https://dogtoxic.com (75 foods, flat verdicts, ads, ASPCA hotline pattern).
- Fetched: https://canmydogeat.org (searchable directory, flat Safe/Caution/Unsafe verdicts).
- Fetched: https://www.merckvetmanual.com/special-pet-topics/poisoning/food-hazards (dose thresholds; updated May 2026).
- Fetched: https://www.caninebible.com/can-dogs-eat-grapes/ (monetization inventory).
- Dead end: https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets — redirected to ad-tracker, content not retrieved.
- Dead end: https://www.merckvetmanual.com/toxicology/food-hazards/food-hazards-in-animals — 404; correct URL found via DDG.
