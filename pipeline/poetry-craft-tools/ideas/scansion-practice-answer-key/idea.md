# Scansion practice answer-key

Status: rejected
Origin: ../../runs/2026-08-29-scout.md

## Idea

A scan-and-check practice drill: pick a public-domain poem your class actually assigns, mark the stressed/unstressed syllables and feet yourself, then reveal a *hand-verified* scansion key to check your answer — plus a few practice lines per meter.

## Hook

Every incumbent is a paste→auto-guess scanner (poemanalysis, poemfolio, simpleonline) that students say is unreliable; this flips it to a *practice + verified answer-key* for the exact poems taught in US AP/HS English — you check *your* scansion against a trusted key, not a tool's guess.

## Gate results

- Answer-it: PASS (borderline) — a self-scoring drill with hidden verified keys over a curated set isn't a single LLM answer; noted as a near-miss.
- Static feasibility: PASS — static poem+key JSON, client-side reveal/scoring.
- Unmaintainable data: PASS — public-domain poems + one-time verified scansion keys.
- No specific hook: PASS — "practice + verified answer key" is a distinct interaction from paste→output checkers.
- Legal/policy: PASS — public-domain texts; no advice.
- US-market: PASS — US AP Lit / high-school English.

## Evidence

- Pain (r/Poetry, links): un0j69 "[RESOURCE] Tool to identify word meters?", hhehaw "App for identifying meter", 1d54tke "[HELP] Dealing with meter in poems?", 10l2o9n "[HELP] Syllable stress detection?", b5xxae "Can't find a scanner online that tracks word stress", 5bve5w "Meter helper Poetry Tool"; r/AskLiteraryStudies j0a1lk "Resources for analyzing meter".
- Reliability gap in incumbents (b5xxae complaint) = the wedge for a verified answer-key vs auto-scan.
- OSS confirms scansion is hard/imperfect to automate (github.com/quadrismegistus/prosodic), supporting the "verified key beats auto-guess" premise.
- Volume/CPC: `unknown` (no Keyword Planner CSV this run).

## History

- 2026-08-29 — candidate (emitted by scout run), marked weak (answer-it borderline; depends on curated key quality)
- 2026-08-29 — rejected on validation: scout gate 4 (no specific hook) disproved. The interactive practice + hand-verified answer-key scansion drill over the assigned public-domain canon is already served by *For Better For Verse* (prosody.lib.virginia.edu, University of Virginia / Herbert Tucker) — per-line clickable stress/foot/meter/caesura marking checked against verified keys, corpus filterable by difficulty/type/author, covering exactly the US-assigned poems (Ozymandias, Sonnet 18, The Tyger, Kubla Khan, Dover Beach, On His Blindness, To Daffodils, Jabberwocky). Its hand-authored keys also answer the scout's "auto-scanners are unreliable" wedge; static practice-with-answers (Scribd/Study.com/ProProfs/UPenn/TPT) is saturated too. Demand strong, hook served. Confidence medium (no CSV; not needed for the kill). See dossier.md · ../../runs/2026-08-29-validate-scansion-practice-answer-key.md
