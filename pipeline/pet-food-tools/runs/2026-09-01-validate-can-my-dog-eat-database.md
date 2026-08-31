# Validate run — 2026-09-01 — can-my-dog-eat-database (v3 re-validation of the toxicity-calculator pivot)

**Outcome: rejected.** Gate 4 disproved on the surviving pivot (multi-substance × dog-weight toxicity calculator); the database-as-built remains gate-1-dead (AIO answers verdict lookups). Confidence: high.

## Why this run

The database was demoted `validated → candidate` on the 2026-09-01 v3 re-triage (harness-v3 ticket 11). The idea.md pivot recorded that the only surviving cut is a **quantity × dog-weight toxicity calculator**, and required a full v3 re-validate that clears (a) gate 4 vs the incumbents that killed `chocolate-toxicity-calculator` — the pivot lives *only if multi-substance × weight is unserved* — and (b) gate 5 liability. This run tested (a) and found it disproved.

## What was dug

- **Demand (strong).** Fresh autocomplete fan-out (`scripts/fanout.py`, US, question mode) on six multi-substance quantity seeds. Grape × weight phrasing surfaced directly in Google suggest ("how many grapes are toxic to a 20 pound dog / 70 lb dog / small dog / large dogs") alongside a dense chocolate-calculator tail. Re-parsed the existing 2026-08-15 Keyword Planner CSV via `scripts/planner-report.py`: "can dogs eat grapes" 500K, "dog chocolate toxicity calculator" 50K (+900% 3-mo & YoY). Demand is real but the CSV keyword set was built for the database and does not size the pivot's grape-calculator phrasing (noted as a gap, not a park).
- **SERP dig → kill (gate 4).** DDG for "how many grapes are toxic to dogs calculator by weight" returned a first page that is *entirely* dedicated grape/raisin toxicity-by-weight calculators: a2zcalculators.com, dogscalculators.com "[2026]", calculatorsfordogs.com, mypawsafe.com "(Vet-Backed 2026)", 360calculator.net (20 Aug 2026), calculator.everycalculators.com, caninebible.com (8 Jul 2026) — ≥7 purpose-built incumbents. Opened calculatorsfordogs.com's grape calculator: full weight/product-type/amount/time inputs, g/kg risk-band table, Embed button, GA4, and a Related-Calculators link to a Xylitol calculator — a multi-substance farm (same site served the 2026 chocolate chart in the chocolate-calc kill; the 2026-09-01 dog-treat-portion-calculator re-probe found it is a 139-calculator hub + offline Android app). The pivot's "multi-substance × weight unserved" survival condition is factually false.
- **Hook / moat (both disproved).** The incumbents already compute exactly the grape/raisin g/kg-by-weight model with the correct "no safe dose" framing; the dataset is public veterinary-toxicology thresholds (Merck/USDA) that ≥7 sites have keyed in — mechanically replicable, no merge/hand-verify/judgment barrier; long-tail per-substance surface also occupied.

## Early-stop decisions

- **AIO re-probe not run.** DDG is AIO-blind and the manual Google checkpoint would have burned user effort on an idea already killed on gate 4. The database's gate-1 AIO failure is carried from ticket 02; a fresh AIO probe would only be warranted on a revival with a genuinely new angle.
- **Fresh forum pain dig skipped.** Per the skill's "don't dig deep on a dead idea" rule — demand was already strong from autocomplete + CSV, and the kill is on hook/moat, not demand. Graded remaining signals from evidence in hand.
- **Exchange rate not re-fetched;** USD bid conversions quoted from the prior dossier's 2026-08-16 rate (order-of-magnitude use only).

## Dead ends / not re-verified

- Merck "Food Hazards", caninebible affiliate inventory, dogtoxic.com / canmydogeat.org — cited from the prior dossier, not re-fetched (feasibility/monetization not in question for a gate-4 kill).

## Result

- `dossier.md` rewritten to the rejection (supersedes the 2026-08-06/08-17 validated dossier; kept as the record).
- `idea.md` Status → rejected; History appended.
- `board.md` regenerated.
- No comparison brief: pet-food-tools has zero `validated` ideas.
