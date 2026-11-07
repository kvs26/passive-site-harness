# Produce and review the first complete guide and public preview

Type: task
Label: wayfinder:task
Status: claimed
Blocked by: 03

## Question

Use the new skill end to end for the selected game and edition, producing the first complete research-backed PDF and its separate HTML preview for the owner's review.

## Acceptance criteria

- Demonstrate that the chosen game passes the evidence gate before drafting the full guide. Resolve source-access gaps through the agreed owner handoff rather than claiming to have watched/read unavailable material.
- Keep the owner updated during research, drafting and rendering. Preserve research sources, claim references, provided transcripts/screenshots and decisions in the agreed working location so another session can resume.
- Deliver the agreed how-to-play, beginner, intermediate and advanced tactics tiers, with base-game-only scope for CATAN's latest version. Use original worked examples/diagrams and distinguish conditional advice from rules.
- Produce the full PDF, HTML preview, editable source and research record in a nonpublic location. Inspect every rendered page and check example logic; no unreviewed draft sections disguised as complete content.
- Ask the owner to review the teaching clarity, strategic usefulness and final presentation. Record genuine feedback and revise. Do not invent an approval or claim external expert validation.
- Fold small, observed workflow problems back into the skill within this ticket. If a material new decision arises, record it and discuss it instead of expanding the backlog automatically.
- Completion is a guide accepted by the owner as the pilot product, not a public launch or proof of revenue.

## Completion

Under `## Answer`, link the artifacts, evidence/QA record, owner feedback and any skill fixes. Mark resolved only after the owner review is actually complete, then add the map pointer.

## Comments

2026-11-07: Claimed. Edition verified from the publisher: CATAN base game, 6th Edition, 3-4 players, rulebook CN3081 (v6.250401). Working folder: `sites/board-game-expansion-buyers-guide/guides/catan/` (research/source-log.md, notes/ with transcripts, Reddit comments and extracted rulebook text). Source sweep done: official rulebook read in full; 12 YouTube strategy videos found, 10 transcripts read, 2 unreadable (YouTube HTTP 429); one Reddit thread read (17 comments); official FAQ and two BGG threads are lead-only. Checkpoint 1 sent to the owner; waiting for their call before scaffolding and drafting.

2026-11-07: First draft built (32-page PDF, preview HTML), `check.mjs` all PASS (links checked earlier, all 200). Skill fixes so far: (1) guide dir is now `sites/board-game-expansion-buyers-guide/guides/<slug>/` in SKILL.md and references/source-format.md; (2) `build.mjs` contents-link list now only expects chapters for tier sections and quick-reference; (3) `check.mjs` counts contents links across every contents page; (4) `check.mjs` hidden-content test now matches real HTML tags only, not the word "hidden" in prose; (5) `base.css` contents spacing tightened so a long contents fits one page. Not resolved: waiting for the owner's real review.
