# Re-triage the existing pipeline under v3

Type: grilling
Status: resolved
Blocked by: 08, 09

## Question

The v3 scout gates and validate signals are installed. Decide what happens to every idea currently on `pipeline/board.md`: (a) which `parked`/`candidate` ideas are structurally dead under the new gates (gate 7 already kills occasion-poem-finder and poetry-craft-tools niches per ticket 07; others may fail the edge or the moat) and get `rejected` with a dated reason; (b) which survive as candidates but need their `idea.md` upgraded to the v3 template (Edge block, gate results); (c) whether the 2 `validated` pet-food dossiers — past the 4-week window since ~May 2026 — are re-probed via a lightweight validate top-up or demoted to `candidate` pending a full v3 re-validate. Output: a per-idea disposition list, applied to the `idea.md` files and the board.

## Answer

Grilled 2026-09-01; all six dispositions confirmed by the user and applied to `idea.md` files + `pipeline/board.md`. Scope decision first: **rejected ideas stay rejected** — all 18 prior rejections were factual gate-4/gate-1 kills and v3 only tightened the gates, so re-triage touched only the 4 parked + 2 validated ideas. (No `candidate`-status ideas existed. The ticket's "~May 2026" premise was wrong — the files show the pet-food dossiers were validated 2026-08-06/17 and 2026-08-19.)

**(a) Structurally dead → rejected, dated 2026-09-01:**

1. **poem-by-persona-finder** — v3 gate 7, both routes fail (poems not affiliate-linkable via any named program; poetry/Reference is low-RPM baseline). Ticket 07 killed the niche for low-RPM pure-ads; hook was already weak/contradicted.
2. **roti-sabzi-pairing-matrix** — v3 gates 1+7 (AIO fully answers the head pairing query, confirmed at validate; recipes not affiliate-linkable, Food low-RPM).
3. **sabzi-by-vegetable-index** — v3 gate 7, both routes fail (tool surfaces recipes, not products; Food low-RPM; monetization already graded weak). Strongest parked idea on demand/feasibility — killed on monetization alone; user confirmed no affiliate route exists.
4. **animated-sticker-checker** — v3 gate 7 both routes (file verdicts surface nothing affiliate-linkable; creator-tools not high-RPM) + gate 3(b) moat-free (platform specs scrape-one-source replicable). Strong compute couldn't save it — the edge needs all four parts.

**(b) Survivors needing v3 upgrade:** none among the parked — all four died. The only v3 template upgrade applied was dog-treat-portion-calculator (Edge block added, see (c)).

**(c) The two validated pet-food dossiers — split disposition:**

- **dog-treat-portion-calculator — kept validated.** Evidence dated 2026-08-19 is inside the 4-week window (**expires 2026-09-16**). No probe burned today; the v3-mandatory pre-build re-probe covers it. idea.md upgraded to v3 (Edge block: hand-verified USDA-derived per-food kcal/unit dataset, weight×10%-budget compute, per-food long-tail, affiliate route Amazon Pets/Chewy). Known soft spot for the re-probe: signal-6 data moat vs the FurCalc precedent.
- **can-my-dog-eat-database — demoted to candidate** with a pivot note in idea.md. Fails v3 gate 1 as built (ticket 02: AIO fully answers "can dogs eat X" verdict lookups) and its evidence (2026-08-06/15) is effectively spent. Pivot: quantity × dog-weight **toxicity calculator** hook ("dog chocolate toxicity calculator" 50K, +900% YoY), per-food lookup demoted to long-tail surface. Full v3 re-validate required; it must clear gate 4 vs the incumbents that killed chocolate-toxicity-calculator (pivot lives only if multi-substance × weight is unserved) and the unresolved gate-5 liability.

**Net board state:** 1 validated (dog-treat-portion-calculator, window to 2026-09-16), 1 candidate (can-my-dog-eat-database, pivoted), 24 rejected. Board regenerated 2026-09-01.
