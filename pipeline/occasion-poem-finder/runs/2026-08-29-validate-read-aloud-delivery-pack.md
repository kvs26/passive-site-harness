# Validate run — read-aloud-delivery-pack — 2026-08-29

Niche: occasion-poem-finder (US). Idea: read-aloud-delivery-pack (candidate, weak). No prior dossier; no `keyword-planner.csv`.

## What was dug

1. **Demand (pass 1)** — US-locale autocomplete fan-out (`fanout.py`, gl=us) on delivery/timing/emotional-difficulty seeds. Confirmed real recurring demand: "how long should a funeral reading/poem be", "how to read a poem at a funeral without crying", "how to read a eulogy without crying / without breaking down", "how to get through a reading at a funeral". Corroborated by independent community threads (Mumsnet "without sobbing", r/AskUK, r/Poetry). Pronunciation facet ("pronounce poem funeral") returned nothing.
2. **SERP & competitor** — web-fetch DDG SERPs (pain-fetch DDG captcha-blocked, as scout flagged) for the two key delivery queries + a tool-existence query. Opened the top bundle-competitor (writoryofficial) in full.
3. **Hook depth** — checked whether the delivery bundle's facets are unserved. They are not.

## Key findings

- **Hook is served editorially.** writoryofficial.com "Reading a Poem at a Funeral: What No One Tells You" covers the *entire* proposed bundle in one article: large-print ("eighteen point or more … on card"), reading-time ("under two minutes aloud"), pacing ("half the speed that feels natural"), and the emotional-difficulty flag as an explicit step ("The choke point test. Find the line most likely to break your voice").
- **Reading-time is a commodity + gate-1.** Generic read-aloud calculators saturate the space (calculatereadingtime.com, reading-time.utils.com, readtime.io, convixy, scrivy — all "speak aloud / out-loud" timers over any pasted text), and the words÷pace formula is published on every eulogy-length blog. A funeral-scoped timer adds nothing.
- **Pronunciation facet has no demand** — our invention.
- **Feasibility strong** (static PD corpus + client-side), but that's the only strong non-demand signal.

## Early-stop / verdict

Demand graded strong, but the dig disproved scout **gate 4** (no specific hook) at evidence level: the delivery differentiator is already delivered by an editorial long-read plus commodity read-aloud tools, and the tool-able core (reading-time) is a gate-1 commodity. No point soliciting a Keyword Planner CSV — volume cannot rescue a served hook. Graded remaining signals from evidence in hand.

**Status → rejected.** Confidence medium (no CSV; not needed for the kill). Dossier kept as the record.

## Dead ends / inconclusive

- `pain-fetch.py ddg` — empty (captcha); used web-fetch SERP instead.
- Monetization left **unknown** — competitor blogs show funeral-home/printing ads but no CPC/volume read (no CSV); moot given rejection.
- Community-thread evidence skews UK (Mumsnet, r/AskUK, davidlevansandson.co.uk); US-locale autocomplete still carries the demand.
