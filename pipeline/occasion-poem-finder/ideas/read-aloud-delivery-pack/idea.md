# Read-aloud delivery pack

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

For each curated occasion poem, a "read it aloud" delivery view: reading-time when spoken, a large-print lectern layout, pronunciation notes for archaic/tricky words, and an emotional-difficulty flag ("hard to finish without breaking down"), so a grieving reader can rehearse and deliver it.

## Hook

Every incumbent hands you the poem *text*; none help you *deliver* it — reading-time, large-print podium view, pronunciation, and a "will I get through this" flag are what a nervous funeral/wedding reader actually needs.

## Gate results

- Answer-it: NEAR-MISS (gate 1) — reading-time alone is words÷pace, but the bundle (large-print view + pronunciation + difficulty over a curated set) is not a single answer. Marked weak.
- Static feasibility: PASS — static poem corpus + client-side timer/print view.
- Unmaintainable data: PASS — public-domain poems + one-time delivery metadata.
- No specific hook: PASS — delivery-focused, orthogonal to poem-text listicles.
- Legal/policy: PASS — PD / free-to-use poems.
- US-market: PASS — US funerals/weddings.

## Evidence

- Demand context (autocomplete, this run): "poems to read at a funeral", "a poem to read at a wedding", "best poems to read at a celebration of life" — the intent is *reading aloud*, not just finding text.
- Gap (Bing, this run): finders (griefandsympathy, familyfriendpoems) and generators (aipoemgenerator.co) output text only — no reading-time / large-print / pronunciation / difficulty layer observed.
- Volume/CPC: `unknown` (no Keyword Planner CSV this run).

## History

- 2026-08-29 — candidate (emitted by scout run), marked weak (gate-1 near-miss on the timer facet; strength is the bundled delivery view)
- 2026-08-29 — rejected: gate 4 disproved on validation. Demand strong (US-locale autocomplete "how long should a funeral reading be" / "how to read a eulogy without crying/breaking down" + Mumsnet/r/AskUK/r/Poetry recurrence), feasibility strong (static PD corpus + client-side), but the delivery hook is already served — writoryofficial.com "Reading a Poem at a Funeral" covers the whole bundle (18pt-on-card large print, "under two minutes aloud", pacing, choke-point/difficulty), and reading-time is a saturated gate-1 commodity (calculatereadingtime.com / reading-time.utils.com / convixy / scrivy read-aloud timers); pronunciation facet has no demand. Confidence medium (no CSV — not needed for the kill). See [dossier](dossier.md) · [run](../../runs/2026-08-29-validate-read-aloud-delivery-pack.md)
