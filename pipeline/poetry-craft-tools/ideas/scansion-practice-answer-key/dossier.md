# Dossier: Scansion practice answer-key

**A scan-and-check drill with hand-verified keys for the public-domain poems US classes assign — rejected: the exact interactive practice + verified-key hook is already served by *For Better For Verse* (University of Virginia); confidence medium (no Keyword Planner CSV, and none needed for the kill).**

## Signal scorecard

**Demand: strong** — a broad per-poem long-tail ("scan/meter of *this* assigned poem") plus explicit "practice with answers" phrasing, from two independent query families.
  - Per-poem long-tail (Google autocomplete, US, this run): "scan the poem i wandered lonely as a cloud", "scan the poem how do i love thee", "scan the poem on his blindness", "scan the poem stopping by woods on a snowy evening"; "meter of the poem the road not taken / ulysses / ode to a nightingale / the tyger / the lamb"; "what is the meter of the poem annabel lee / caged bird / sailing to byzantium". (`scripts/fanout.py "scan the poem" "meter of the poem"`)
  - Practice-with-answers family (same run): "scansion practice with answers", "scansion practice with answers pdf", "scansion practice worksheet", "scansion practice website", "scansion practice online", "poetry scansion practice worksheet with answers". (`scripts/fanout.py "scansion practice"`)

**SERP & competitor weakness: weak** — the interactive "mark-and-check against a verified key" drill is owned by an established trusted incumbent, and the static "practice with answers" cut is saturated.
  - *For Better For Verse* — prosody.lib.virginia.edu (University of Virginia, "authored by Herbert Tucker, John C. Coleman Professor of English"): interactive drill where each line has clickable **Stress / Foot division / Meter / Caesura** markers plus a broom-to-clear, checked against a verified key, over a ~100-poem PD corpus filterable **By Difficulty / By Type / By Author**. (https://prosody.lib.virginia.edu/prosody_poem/ozymandias/ , https://prosody.lib.virginia.edu/)
  - Static practice-with-answers is saturated on the same head query "scansion practice with answers poem": Scribd "Scansion Practice with Examples and Answers", Study.com "Quiz & Worksheet — Scansion in Poetry", ProProfs "Scansion In Poetry: Trivia Quiz", UPenn English scansion page, plus TPT worksheets. (https://www.bing.com/search?q=scansion+practice+with+answers+poem)

**Hook depth: weak (served)** — the scout's differentiator ("practice + *verified* answer key for the exact poems taught, beating unreliable paste→auto-guess scanners") is precisely what For Better For Verse is. Its keys are hand-authored by a UVA English professor (not auto-scanned), so the "auto-scanners are unreliable" wedge is already answered by a trusted source, and its corpus is exactly the US-assigned canon (Ozymandias, Sonnet 18, The Tyger, Kubla Khan, La Belle Dame sans Merci, Dover Beach, On His Blindness, To Daffodils, Jabberwocky, God's Grandeur). (https://prosody.lib.virginia.edu/)

**Monetization: unknown** — no CPC read (no Keyword Planner CSV this run) and no ad/affiliate inventory verified on competitors. The dominant incumbents are non-commercial (UVA academic tool; free worksheet PDFs; Study.com/ProProfs quiz sites), and the paid-worksheet demand routes to Teachers Pay Teachers rather than a display-ad site — so even the likeliest route is occupied by a marketplace, not open display. Not graded further because the hook kill stands.

**Feasibility & maintenance: strong** — static poem+key JSON with client-side reveal/scoring; PD texts + one-time hand-verified keys, near-zero refresh. Feasibility is proven by the incumbent itself: For Better For Verse ships exactly this as a static WordPress corpus. (https://prosody.lib.virginia.edu/) The same fact that confirms feasibility is what kills the hook.

**Unique-data opportunity: weak** — the defensible asset was "hand-verified scansion keys for the assigned canon," but those keys already exist, free and authoritative, in For Better For Verse for the head poems. No public dataset or derivable structure gives a cut competitors lack; broadening to poems FBFV omits is thin and unverified. (https://prosody.lib.virginia.edu/)

## SERP snapshot

- **"scansion practice with answers poem"** (Bing, this run): organic results are Scribd "Scansion Practice with Examples and Answers" (PDF worksheet), Study.com "Quiz & Worksheet — Scansion in Poetry", ProProfs "Scansion In Poetry: Trivia Quiz", **For Better For Verse** ("interactive website that teaches scansion and allows students to mark stress, feet, and meter"), UPenn English scansion page, plus TPT scansion-practice worksheets and a clipart-library gallery of worksheet answer keys. The exact "practice + answer key" intent is answered by both static worksheets and one interactive trusted tool — not beatable.
- **For Better For Verse poem pages** (e.g. /prosody_poem/ozymandias/, /prosody_poem/sonnet-18/, /prosody_poem/the-tyger/): each renders the full poem with per-line clickable stress/foot/meter/caesura markers and checks the learner's marks — i.e. the proposed drill, already live and free, for the assigned canon.

## Keyword data

Awaiting Keyword Planner export — none produced this run. A CSV was **not** requested: the idea is rejected on hook-served (SERP/hook), which the CSV cannot rescue. Confidence is therefore capped at medium, which is sufficient for a gate kill.

## Monetization sketch

Likeliest route would have been AdSense on per-poem practice pages (education long-tail). But the head "scansion practice … answers" intent is held by a non-commercial academic tool and free worksheet PDFs, and the buyer intent for practice material routes to Teachers Pay Teachers (a marketplace), leaving no defensible display-ad position. Not pursued past the hook kill.

## Risks & unknowns

- **Monetization: unknown** — searched competitor pages for ads/affiliate inventory only incidentally; the incumbents surfaced (UVA, Scribd, Study.com, ProProfs, TPT) are non-display or marketplace, so no CPC/route was established. A Keyword Planner CSV would size demand but cannot reopen the hook.
- **CPC / search volume: unknown** — no CSV this run; buckets and top-of-page bids not read.

## Sources log

- `scripts/fanout.py "how to scan a poem" "scansion practice" "scansion of"` — autocomplete; hit "scansion practice with answers (pdf)", "scansion practice worksheet/website/online", "scansion of sonnet 18", "scansion of the road not taken".
- `scripts/fanout.py "how to scan poetry" "scan the poem" "meter of the poem" "iambic pentameter examples in"` — autocomplete; hit per-poem long-tail (i wandered lonely as a cloud, how do i love thee, on his blindness, stopping by woods; road not taken, ulysses, ode to a nightingale, the tyger, the lamb, annabel lee, caged bird, sailing to byzantium).
- `scripts/pain-fetch.py ddg …` — DDG HTML returned empty (captcha/block this session); pain re-verification degraded to Bing/fetch.
- Bing SERP "scansion practice with answers poem" (https://www.bing.com/search?q=scansion+practice+with+answers+poem) — Scribd, Study.com, ProProfs, UPenn, TPT worksheets, and For Better For Verse.
- For Better For Verse home (https://prosody.lib.virginia.edu/) — corpus list (~100 poems), "By Difficulty / By Type / By Author" filters, authored by Herbert Tucker (UVA).
- For Better For Verse — Ozymandias (https://prosody.lib.virginia.edu/prosody_poem/ozymandias/) — confirmed interactive per-line Stress/Foot division/Meter/Caesura marking with verified key.
- pedagogy-toolkit.org/tools/betterverse.html — redirects to a YouTube demo embed of For Better For Verse (dead end for text, corroborates the tool's identity).
- Origin scout run (../../runs/2026-08-29-scout.md) — prior r/Poetry pain threads (un0j69, hhehaw, 1d54tke, b5xxae, etc.); not re-fetched this run (DDG/Reddit blocked), so counted as demand context, not this run's evidence.
