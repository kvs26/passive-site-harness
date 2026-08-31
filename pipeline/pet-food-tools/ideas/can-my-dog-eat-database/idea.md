# Can-my-dog-eat searchable database

Status: rejected
Origin: ../../runs/2026-08-06-scout.md

## Idea

Searchable "can dogs/cats eat X" database of ~200+ common foods with a safe/caution/toxic verdict, quantity-and-size context, and symptoms to watch — instant-answer lookup instead of a listicle.

## Hook

Google's incumbent results are static listicles that give conflicting yes/no answers with zero quantity context ("one grape probably won't hurt a 50 lb dog"); this gives one consistent verdict per food, adjusted for the amount eaten and dog size.

## Gate results

1. Answer-it — pass (near-miss): a single food query is LLM-answerable, but the panic use case ("results are mixed") + quantity context + browsable database beats one-shot answers. Hook must stay quantity-focused.
2. Static feasibility — pass: static pages + client-side search index.
3. Data maintainability — pass: food-safety facts are stable (ASPCA/Merck references); rare additions only.
4. Specific hook — pass: no interactive lookup in top SERP; all listicles.
5. Legal/policy — pass with care: informational food-safety, not treatment advice; must always route "toxic + significant amount" to vet/poison hotline.
6. US-market — pass.

## Evidence

- Autocomplete (Google, US): "can dogs eat calculator", "what can dogs eat and not eat", "can dogs eat mango/pineapple/watermelon/…" (long fan-out tail), "10 toxic foods for dogs".
- Reddit (conflicting-SERP pain): "googles telling me it's definitely not okay? Can someone lmk" — https://www.reddit.com/r/PetAdvice/comments/1ct7w6o/my_dog_ate_pepperoni_im_defo_just_over_panicking/
- Reddit: "Google results are mixed, some info says to just watch him and other info says it can be toxic" — https://www.reddit.com/r/DogAdvice/comments/194h1eu/help_my_dog_ate_silica_gel_does_he_need_first_aid/
- Reddit (quantity context): "If you have a large dog over 50 pounds one grape probably won't hurt him" — https://www.reddit.com/r/dogs/comments/orevs3/my_dog_ate_something_toxic/
- SERP incumbents (Google, US): whole-dog-journal, healthline, aspca.org, consumerreports — static articles only; USDA FoodData Central (fdc.nal.usda.gov) available as free nutrient data source.
- Trends (geo=US, 12 mo, UI): "can dogs eat" stable ~55–100 relative interest year-round. Absolute volume: unknown.

## Pivot (v3 re-triage, 2026-09-01)

As built, the database fails v3 gate 1: "can dogs eat X" head queries are fully answered by AI Overviews (harness-v3 ticket 02 analysis) — a verdict lookup has no per-query-compute wedge. The surviving cut is a **quantity × dog-weight toxicity calculator** ("dog chocolate toxicity calculator" 50K bucket, +900% YoY per the 2026-08-15 CSV): user enters food + amount eaten + dog weight → severity verdict the AIO can't compute. The per-food safe/caution/toxic lookup demotes to the long-tail page surface under that calculator hook. A full v3 re-validate must clear: gate 4 vs. the incumbents that killed chocolate-toxicity-calculator (PetMD/Chewy, Omni, Merck, Vets Now serve *chocolate*; the pivot lives only if multi-substance × weight is unserved) and gate 5 (toxicity-advice liability, unresolved in that kill).

## History

- 2026-08-06 — candidate (emitted by scout run)
- 2026-08-06 — validated (dossier complete, confidence high; demand strong across fresh fan-out + 4 live Reddit threads; hook quantity × dog-size confirmed user-demanded and absent from the two interactive competitors found, dogtoxic.com and canmydogeat.org — see dossier.md and ../../runs/2026-08-06-validate-can-my-dog-eat-database.md)
- 2026-08-17 — validated (Keyword Planner top-up: CSV ingested (2026-08-15 export); demand corroborated — "can dogs eat grapes" 500K bucket, "dog chocolate toxicity calculator" 50K YoY +900%; monetization note added — top-of-page LOW bids mostly < $0.10 USD-equiv, lean affiliate over display; confidence high now CSV-backed — see dossier.md and ../../runs/2026-08-17-validate-can-my-dog-eat-database.md)
- 2026-09-01 — demoted to candidate on v3 re-triage (harness-v3 ticket 11): fails v3 gate 1 as built (AIO fully answers the verdict-lookup head queries — ticket 02); evidence past useful life (validated 2026-08-06, CSV 2026-08-15 — expired ~2026-09-14, spent before any build). Pivot recorded above (toxicity-by-weight calculator hook, per-food lookup as long-tail surface); full v3 re-validate required before any status change.
- 2026-09-01 — rejected on v3 re-validation of the pivot: gate 4 disproved. The pivot's survival condition ("multi-substance × weight unserved") is false — DDG for "how many grapes are toxic to dogs calculator by weight" returns a first page of ≥7 dedicated grape/raisin toxicity-by-weight calculators (a2zcalculators, dogscalculators "[2026]", calculatorsfordogs, mypawsafe "Vet-Backed 2026", 360calculator 20 Aug 2026, everycalculators, caninebible 8 Jul 2026); calculatorsfordogs.com opened this run is a multi-substance farm (grape + raisin + xylitol + chocolate × weight, Embed feature, 139-calculator hub + offline Android app). Same disproof that killed chocolate-toxicity-calculator, now confirmed for grapes. Moat also mechanically replicable (gate 3b — public Merck/USDA g/kg thresholds); DB-as-built stays gate-1-dead (AIO). Demand strong & CSV-backed — the kill is hook/moat, not demand. Confidence high. Dossier kept as record. See dossier.md and ../../runs/2026-09-01-validate-can-my-dog-eat-database.md.
