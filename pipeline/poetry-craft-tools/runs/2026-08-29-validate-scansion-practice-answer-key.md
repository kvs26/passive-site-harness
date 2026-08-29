# Validate run — poetry-craft-tools — scansion-practice-answer-key — 2026-08-29

Idea: scan-and-check drill with hand-verified keys for the PD poems US classes assign. One idea, one session. Target market US (niche.md, no override).

Credentials: no `.env` → credential-free adapters only. DDG-HTML returned empty (captcha/block this session) → SERP + pain re-verification done via built-in fetch on Bing and directly on incumbent pages. No Keyword Planner CSV in the idea folder.

## What was dug

1. **Demand (strong).** Two autocomplete fan-outs (`scripts/fanout.py`, hl=en gl=us):
   - `"how to scan a poem" "scansion practice" "scansion of"` → "scansion practice with answers", "…with answers pdf", "…worksheet", "…website", "…online", "poetry scansion practice worksheet with answers", "scansion of sonnet 18", "scansion of the road not taken".
   - `"scan the poem" "meter of the poem" …` → strong per-assigned-poem long-tail: "scan the poem i wandered lonely as a cloud / how do i love thee / on his blindness / stopping by woods on a snowy evening"; "meter of the poem the road not taken / ulysses / ode to a nightingale / the tyger / the lamb"; "what is the meter of the poem annabel lee / caged bird / sailing to byzantium".
   Two independent query families → Demand strong.

2. **SERP + hook (the kill).** Bing "scansion practice with answers poem" surfaced static worksheets/quizzes (Scribd, Study.com, ProProfs, UPenn, TPT) **and** For Better For Verse. Opened For Better For Verse (prosody.lib.virginia.edu, UVA, Herbert Tucker):
   - Home lists a ~100-poem PD corpus filterable **By Difficulty / By Type / By Author**, covering the exact US-assigned canon (Ozymandias, Sonnet 18, The Tyger, Kubla Khan, La Belle Dame sans Merci, Dover Beach, On His Blindness, To Daffodils, Jabberwocky, God's Grandeur).
   - Ozymandias page confirmed the interactive drill: per-line clickable **Stress / Foot division / Meter / Caesura** markers + broom-to-clear, checked against a hand-verified key.
   → This is the idea's exact hook (practice + verified key over the assigned canon), from a trusted academic source, and it answers the scout's reliability wedge (hand-authored keys, not auto-guessing). **Scout gate 4 (no specific hook) disproved.**

3. Remaining signals graded from evidence in hand (per the demand-first rule, once the hook kill was established): Monetization unknown (no CSV, no ad/affiliate inventory verified; incumbents are non-commercial/UVA + free PDFs + TPT marketplace); Feasibility strong (For Better For Verse proves the static poem+key build); Unique-data weak (verified keys for the head canon already exist free in FBFV).

## Dead ends / inconclusive

- DDG-HTML adapter empty this session (captcha) — no fresh Reddit pain re-verified; scout's r/Poetry threads left as demand context, not this run's evidence.
- pedagogy-toolkit.org/tools/betterverse.html redirects to a YouTube demo embed (no text), only corroborates FBFV's identity.

## Early-stop decision

Demand came out strong, but the SERP/hook pass disproved scout gate 4 outright, so I did not dig deep on monetization/unique-data — the kill stands regardless. No CSV requested: a Keyword Planner export cannot reopen a served hook.

## Outcome

**Rejected** — gate 4 disproved: the interactive practice + verified-answer-key scansion drill over the assigned PD canon is already served by For Better For Verse (UVA). Confidence medium (no CSV; not needed for the kill). Dossier written; idea.md advanced to rejected; board regenerated.
