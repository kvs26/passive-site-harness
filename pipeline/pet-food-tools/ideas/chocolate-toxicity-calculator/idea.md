# Chocolate toxicity calculator (weak)

Status: rejected
Origin: ../../runs/2026-08-06-scout.md

## Idea

Chocolate-type (dark/milk/baking) + amount eaten + dog weight → theobromine dose estimate and a clear "monitor at home / call vet now" banding, using published mg/kg thresholds.

## Hook

The #1 panic question requires arithmetic (theobromine mg/kg by chocolate type × dog weight) that static "chocolate is toxic" pages never compute; incumbents force panicked owners to do the math themselves.

## Gate results

1. Answer-it — pass: genuine computation, not a lookup.
2. Static feasibility — pass: client-side JS with published theobromine constants.
3. Data maintainability — pass: toxicity thresholds are stable published values.
4. Specific hook — pass: quantity math absent from top static results.
5. Legal/policy — **near-miss**: poisoning triage borders medical advice. Kept weak; viable only with aggressive vet/ASPCA-poison-line routing and conservative banding. Validate legal posture before build.
6. US-market — pass.

## Evidence

- Reddit: "amount of chocolate they ate to see if it is toxic levels. If it is, immediately go to the vet" — https://www.reddit.com/r/dogs/comments/o6qohb/help_my_dog_ate_chocolate/
- Reddit (dose-by-weight arithmetic being done by hand in comments): hydrogen peroxide "1 teaspoon per 5 pounds of the dog's body weight" — https://www.reddit.com/r/dogs/comments/yy6fm7/my_dog_ate_gum_we_are_already_at_the_emergency/
- Trends: single sharp spike in "can dogs eat" 12-mo curve consistent with a holiday chocolate event (UI observation). Volume: unknown.
- Existing competitor calculators: not observed in the SERPs fetched this run — presence unknown.

## History

- 2026-08-06 — candidate, marked weak (emitted by scout run)
- 2026-08-17 — rejected on validation: scout gate 4 disproved. Demand is strong and explicit ("my dog ate chocolate calculator" is a real query), but the quantity × weight × chocolate-type hook is already served by authoritative interactive calculators — PetMD/Chewy, Omni Calculator, Merck Vet Manual, Vets Now — plus a saturated SERP of dedicated tools. Scout gate-5 legal near-miss also remains unresolved. Dossier kept as record. See ../../runs/2026-08-17-validate-chocolate-toxicity-calculator.md.
