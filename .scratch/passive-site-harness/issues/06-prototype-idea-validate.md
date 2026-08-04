# Prototype: idea-validate SKILL.md + comparison brief draft

Type: prototype
Status: resolved
Blocked by: 03, 04

## Question

Draft `.agents/skills/idea-validate/SKILL.md` and the comparison-brief template as prototypes to react to: dossier build process per the rubric from ticket 03, state transitions per ticket 04, and the ≥3-ideas presentation trigger. Link drafts as assets.

## Answer

Drafted both assets; user reviewed and accepted as-is, deferring further feedback until first real use of the skill.

**Assets:**

- [prototypes/idea-validate-SKILL.md](../prototypes/idea-validate-SKILL.md)
- [prototypes/comparison-brief-template.md](../prototypes/comparison-brief-template.md)

**Key design choices baked into the drafts** (accepted for now, revisit after first run):

- **One idea per run** — mirrors scout's one-niche-per-run; a deep six-signal dig doesn't fit multiple ideas in one session.
- **Scout evidence must be re-verified** — it seeds the dig but only counts in the dossier once re-checked this run; dossiers are self-standing.
- **Early-stop on dead demand** — if demand grades weak/unknown after a genuine dig, remaining signals are graded from what's in hand; yields a low-confidence dossier, which the rubric permits.
- **Validation bar** — `validated` = dossier complete and demand not unknown-at-low-confidence; `rejected` = a scout gate disproved or demand collapsed (reason in History, dossier kept); `parked` = inconclusive with a stated unpark condition.
- **Brief trigger** — counts all `Status: validated` ideas in the niche (across runs); regenerates an existing brief rather than stacking one per session.

