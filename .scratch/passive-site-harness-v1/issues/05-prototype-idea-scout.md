# Prototype: idea-scout SKILL.md draft

Type: prototype
Status: resolved
Blocked by: 02, 04

## Question

Draft `.agents/skills/idea-scout/SKILL.md` as a rough prototype to react to: run inputs, the checklist from ticket 02, gate handling, candidate output format per the layout from ticket 04, and the "never invent numbers" rules. Link the draft as an asset; the reaction settles the skill's final shape.

## Answer

Draft accepted as-is on 4 Aug 2026: [prototypes/idea-scout-SKILL.md](../prototypes/idea-scout-SKILL.md) is the settled shape of `.agents/skills/idea-scout/SKILL.md`.

Judgment calls included in the accepted draft (user approved pending real-run testing):

- **Seeds input kept** — 3–8 seed terms per run, agreed with the user or read from `niche.md`.
- **Gate results section kept** in each candidate's `idea.md` (per-gate pass notes, near-misses noted).
- **Scout owns state upkeep** — creates `niche.md` on a niche's first run and regenerates `pipeline/board.md` at end of run.
- **Auto-invocable frontmatter description** retained (not manual-trigger-only).

User will revisit after testing the skill on a real run — refinements belong to the "skill refinement loop" fog item, not this ticket.
