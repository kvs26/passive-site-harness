# Validate run — load-tested-everyday-bag-patterns (2026-10-17)

Niche: crochet-patterns. Idea: [load-tested-everyday-bag-patterns](../ideas/load-tested-everyday-bag-patterns/idea.md). It is the only idea in this niche, so "validate all ideas" covered one record. Output: [dossier](../ideas/load-tested-everyday-bag-patterns/dossier.md), [keywords-request.md](../ideas/load-tested-everyday-bag-patterns/keywords-request.md).

## Outcome

**Updated after the Keyword Planner top-up (same day):** the owner supplied the export (`Keyword Stats 2026-10-17 at 10_47_54.csv`, copied to `keyword-planner.csv` in the idea folder). Cheap top-up per the skill: CSV ingested, Demand and Monetization re-graded, confidence kept at medium, status flipped to **validated**. The original SERP/AIO evidence was not re-probed, so the 2026-11-14 expiry stands.

Validated at **medium** confidence. No kill-level fact found (rejection requires factual disproof; weak grades do not reject).

Grades: Demand **weak** (was strong pre-CSV: head cluster flagged −90% YoY/3-mo, a falling trend counts as contradicting evidence; hook phrasings 50 or zero; paid-intent phrasings 50); SERP/AIO unknown (competitor half favourable, AIO unobserved); Hook depth weak; Monetization weak; Feasibility & upkeep unknown; Data moat weak. Medium confidence = two unknowns with demand evidenced; the CSV removes the "capped at medium for lack of CSV" reason, but the unknowns still cap it below high.

Open items: unresolved trend conflict (earlier niche screen read 0%/0% for `crochet bag pattern`; this export −90%/−90%), manual Google AIO check, pre-build re-probe.

## What was dug

- Planner screen `pipeline/demand-csv/2026-10-09-paid-downloads-screen4.csv` via `scripts/planner-report.py` (no hook-specific keywords in it); INR bids converted at USD→INR 95.111965 (2026-10-17).
- Google autocomplete fan-out, 4 seeds, 310 suggestions.
- Pain: Stack Exchange crafts, HN, Lemmy, Arctic Shift r/crochet and r/CrochetHelp threads (5 threads read).
- SERP/competitors: DDG html (3 queries) and Brave via `fetch_webpage`; opened searchcrochet, crochetlovershub, hodgepodgecrochetcom, MotherBunch Mavis part 2, The Crochet Village (Vicki Bag + stretch post), Payhip/Ravelry Vicki pages, Through the Window Tote, Maria's Cinch Tote, Swecraftcorner.
- Monetization facts: Payhip and Gumroad pricing pages.

## Dead ends and early-stop notes

- Bing via curl: poisoned/unrelated results; Bing in the integrated browser: no results.
- Stack Exchange crafts: nothing relevant. HN: nothing. Lemmy: one comment.
- `pain-fetch.py arcticshift`: HTTP 422; used direct Arctic Shift `title=` queries with sleeps instead.
- Etsy Dash Bag listing: HTTP 403 (fetch and curl); Etsy fee page not attempted. katycraftideas.com: connection reset.
- Payhip/Ravelry pages did not expose prices to a plain fetch; competitor price figures remain scout-time.
- **Google AIO unobserved** (automated Google CAPTCHA-prone, not retried). Brave AI answer recorded only as a proxy.
- Stopped digging hook demand after the MotherBunch comments and the Reddit threads were read; no reader was found asking for a paid tested pattern, so the paid-demand question stays open.

## State change

`Status: candidate` → `parked` (earlier in the run, waiting on the CSV) → `validated` after the CSV top-up. Comparison brief not triggered (1 validated idea in the niche; threshold is 3).

## Hand-off

Evidence clock: SERP/AIO evidence expires 2026-11-14; a pre-build re-probe is mandatory regardless. Still wanted: manual Google AIO observations for `crochet bag pattern`, `crochet tote bag pattern pdf`, `crochet bag pattern stretch tested`, `how to keep crochet bags from stretching`, each compared with `&udm=14`, and a Google Trends look at `crochet bag pattern` to settle the −90% flag.
