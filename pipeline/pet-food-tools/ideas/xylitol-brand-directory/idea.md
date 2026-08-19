# Xylitol / birch-sugar brand directory — is THIS product safe to share? — **weak**

Status: rejected
Origin: ../../runs/2026-08-17-scout.md

## Idea

A searchable directory of named consumer products (peanut butters, gums, mints, protein/sugar-free baked goods, candies) tagged for xylitol / "birch sugar" content, so an owner can look up "Jif creamy" or "Great Value natural" and get a safe / contains-xylitol / reformulated-check verdict + a safe-alternative suggestion.

## Hook

The panic query is brand-specific ("does Jif have xylitol", "is Great Value peanut butter safe for dogs"), but the SERP is single-brand blog posts and one-off listicles; the dose calculators answer "how much is toxic" (not "does my jar contain it"), and the ingredient-paste checker (chewinspector) needs you to have the label in hand. A branded lookup answers the actual question fastest.

## Gate results

1. Answer-it — pass (near-miss): one brand is Google-able, but the value is a maintained, browsable brand list you can trust at a glance mid-panic.
2. Static feasibility — pass: static brand→status table + client-side search.
3. Data maintainability — **pass, weak / near-miss**: xylitol is added/removed as brands reformulate, and "birch sugar" relabeling changes; a trustworthy directory needs periodic re-verification (plausibly > quarterly for the volatile SKUs). This is the main risk.
4. Specific hook — pass: brand-name SERP is listicles only; the *dose* calculator niche is saturated but is a different question.
5. Legal/policy — **pass, weak / near-miss**: telling an owner a product is "safe" carries liability if a brand quietly reformulates; must state "verify the label; formulations change" and route ingestion to vet/hotline.
6. US-market — pass: US brands (Jif, Skippy, Great Value, Orbit, Trident) dominate the fan-out.

## Evidence

- Autocomplete (Google suggest, US, this run): "does jif/skippy/orbit/trident/extra/equal/5 gum have xylitol", "is great value (creamy/crunchy/natural) peanut butter safe for dogs", "is jif peanut butter safe for dogs", "peanut butter safe for dogs brands".
- SERP, "is jif peanut butter safe for dogs xylitol" (DDG, this run): thegrubbypuppy.com, seniordogdays.com ("We Vet 28 Brands for Xylitol"), fluffytamer.com, outwardhound.com ("4 Dog Safe Peanut Butter Brands"), roverpet.blog, learnaboutpet.com — all static articles; only seniordogdays is a multi-brand list, and it's prose, not searchable.
- Reddit (panic + label pain, via DDG this run): "PSA: Check Labels on Peanut Butter Before Giving It to Dogs. Some [contain xylitol]" — https://www.reddit.com/r/dogs/comments/rfgz1o/psa_check_labels_on_peanut_butter_before_giving/ ; "Is this peanut butter safe for dogs?" — https://www.reddit.com/r/PeanutButter/comments/qh77pk/is_this_peanut_butter_safe_for_dogs/ ; "[Help] My dog ate wet xylitol-containing gum" — https://www.reddit.com/r/dogs/comments/g9x3e7/help_my_dog_ate_wet_xylitolcontaining_gum/ ; "My Pomeranian ate one piece of xylitol gum. We rushed him" — https://www.reddit.com/r/Pomeranians/comments/1dmbd6j/my_pomeranian_ate_one_piece_of_xylitol_gum_we/
- Adjacent incumbent (chewinspector.com, fetched this run): an ingredient-list *paste/scan* analyzer that "explicitly flags all known synonyms for Xylitol" — but it needs the pasted label and is **"100% Ad-Free"**; it holds no searchable *brand* directory. Leaves the brand-lookup format open.
- Competing angle already saturated (DDG this run, "xylitol product checker dogs"): crittercalcs, petcalculate, dogscalculators, dvmready, dogcalculator.net, breedtools — all *dose* toxicity calculators, not brand directories.
- CPC/volume: unknown (no CSV; none invented).

## Why weak (kept per gate list, not killed)

The brand-directory format is genuinely unserved, but gates 3 and 5 both sit at near-miss: brand reformulation makes the data volatile and the "safe" claim carries liability. Kept as weak — validate should stress-test refresh cadence and the safe-claim disclaimer posture before any build.

## History

- 2026-08-17 — candidate (emitted by scout run; marked weak — gate-3 maintenance + gate-5 liability near-miss)
- 2026-08-19 — rejected on validation: gate 4 disproved. Demand is strong (dense per-brand autocomplete + multi-community recurrence 2015→2024), but the searchable brand/product xylitol directory is already served by a maintained authority incumbent — Preventive Vet's 700+ product list (searchable, per-product last-verified dates, crowdsource intake, ranks #1 for the directory query; dogsafer.com + FDA reinforce). The scout missed it (only saw chewinspector's paste analyzer + dose calculators). The lone remaining differentiator (explicit "SAFE" allowlist verdicts) is the unresolved gate-5 liability. Dossier kept. ([dossier](dossier.md) · [run](../../runs/2026-08-19-validate-xylitol-brand-directory.md))
