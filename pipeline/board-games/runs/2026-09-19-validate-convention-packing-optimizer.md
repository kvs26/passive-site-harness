# Validate run: convention-packing-optimizer — 2026-09-19

Origin: [2026-09-19 scout](2026-09-19-scout.md). Full dig, all six signals graded. Result: parked at medium confidence (missing Keyword Planner CSV) — no kill-level finding.

## What was dug

- **Demand:** re-confirmed BGG forum threads 3157518 and 3151637 (fetched directly this run, not just SERP snippets) — real, dated, multi-reply manual trial-and-error evidence. Corroborated by the scout run's YouTube finds and Reddit thread titles surfaced via Bing. Graded strong.
- **SERP/AIO:** re-opened both named competitor pages (thewearify.com, boardgamesguide.com) directly — confirmed AI-generated/templated listicles, no computed tool. The AIO re-probe (blocked for automated browsing by a Google CAPTCHA on this session's browser — see dead ends) was handed to the human as a manual checkpoint for 4 head queries, run live on google.com. Result was a genuine surprise: AI Overview is present and gives full, usable, formula-based answers (with reference box sizes and even a specific shopping recommendation) on all 4 queries, ending each with an invitation to continue with the user's specific games for an "exact" calculation. Not a kill (real wedge remains — no persistent tool, no multi-game bin-packing, no named catalog), but downgraded from the idea.md's original "top of the AIO-resistance ranking" prediction to a straight weak grade. The `&udm=14` control comparison wasn't captured — flagged as a gap for the pre-build re-probe.
- **Hook depth:** searched specifically for a board-game-specific packing calculator or explicit tool requests. Found none — but found the compute mechanism itself is already commoditized by several generic (non-board-game) bin-packing calculators (abc.tools, easypacksimulator.com, 3dpack.ing, venator.dev, calcchef.com, dimpack3d.com, boxvolume.com). Downgrades the hook from "no tool computes this" to "the pre-loaded game+bag catalog is the only real differentiator." Graded weak.
- **Monetization:** fetched Amazon Associates' rate table and Operating Agreement directly (primary source, verbatim). Luggage 4.00%, Toys 3.00% — both categories real and standard. Cookie/session window not found verbatim in the pages fetched; flagged as unknown rather than assumed. Graded strong overall (route itself verified) despite the unresolved cookie detail.
- **Feasibility & moat:** attempted a direct BGG XML API2 fetch (blocked by Cloudflare) then searched for whether the API exposes box dimensions/weight at all. Found a Reddit thread revealing a naming collision — BGG's "weight" field is the complexity rating, not physical box weight — and confirmed physical dims/weight live only in inconsistent per-version community fields, not a clean base-game API field. This means the dataset build is more hand-collection-heavy than scout's "merge two API feeds" framing assumed. Both signals downgraded to weak — the moat barrier still holds (not mechanically replicable), but the credible initial long-tail surface is narrower than assumed.

## Dead ends

- `pain-fetch.py ddg` adapter: empty results for every query tried this run (bot-blocked, matches standing memory note).
- `lemmy` adapter: low relevance for board-game-specific queries (matches its own docstring warning).
- `stackexchange` adapter against boardgames.stackexchange.com: weak/irrelevant excerpt matches for packing/bag queries.
- `old.reddit.com` direct thread fetch: hit "Log in to use old Reddit" wall, no content retrieved.
- Direct browser automation (`open_browser_page`) to google.com/search: blocked by a Google CAPTCHA/bot-check interstitial on this session — could not self-serve the AIO checkpoint, handed to the human instead (see above).
- `https://affiliate-program.amazon.com/help/operating/rates` direct fetch: HTTP 400 — worked around via Bing search to find the correct primary rate-table URL (GRXPHT8U84RAYDXZ).
- `boardgamegeek.com/xmlapi2/thing` direct curl: blocked by Cloudflare challenge page.

## Early-stop decisions

None — all six signals were dug to a real evidence-based grade (no dead-idea early stop; demand came back strong so the rest of the dig proceeded in full).

## Outcome

No CSV exists → per the skill's missing-CSV path, finished the full dig and dossier anyway (confidence capped at medium), wrote `keywords-request.md`, and parked the idea. No kill-level finding was surfaced (AIO leaves a real wedge, monetization route survives, data moat barrier holds) — the weak grades on SERP/AIO, hook, feasibility, and moat are recorded as real but non-fatal risks for the next pass.
