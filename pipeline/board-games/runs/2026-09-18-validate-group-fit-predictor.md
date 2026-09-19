### Validate run: group-fit-predictor

Niche: board-games. US market, no override.

### Demand pass

- `scripts/fanout.py` question-mode on `is wingspan good for`, `is catan good for`, `is codenames good for`, `will my kids like` — confirmed recurring "is [specific game] good for [my constraint]" autocomplete shape across 3 unrelated games (age, player count, beginners). `will my kids like` fanned out into an unrelated (baby-appearance-prediction) query cluster — noise, discarded.
- Stack Exchange `boardgames`, 3 queries (`will this game work for my group`, `good game to teach new players first game`, `complexity too high for casual players`) — direct hits: q/4193 (Agricola 2-player evaluation), q/2281 (Axis & Allies teach difficulty), plus gateway-game concept threads (q/6785, q/7399).
- HN Algolia: `board game recommendation for my group` — generic recommendation-thread noise, no direct hit; not pursued further (cheap source, but returned nothing this pass).
- Reddit `search.rss` (1 query, throttle-rationed): `is this game good for my group` on r/boardgames — direct hit, "Is brass Birmingham a good introduction for my friend group into heavier board games?" (verbatim hook match) plus corroborating teach-burden threads.
- Verdict: demand strong, ≥3 independent sources (autocomplete + SE + Reddit), consistent with scout's own Facebook/BGG-group and 17-post Reddit findings.

### SERP, AIO & competitor weakness — the dig-ending finding

Ran the manual AIO checkpoint early (constraint-count ladder: 1 → 2 → 3 → 4 stacked inputs) specifically because scout flagged this as the highest-uncertainty gate for a "multi-input calculator" idea. All four fetched live via browser, dated 2026-09-18:

1. `is brass birmingham good for beginners` (1 input) — AIO gives a full verdict + complexity/time/economy caveats, ends with a clarifying follow-up.
2. `is wingspan good for 2 players and a 9 year old` (2 inputs) — AIO gives a full verdict **including the exact age-vs-real-play caveat class** the idea's Edge block names as its moat ("box says 10+, but many 9-year-olds play with coaching").
3. `is carcassonne good for a first game night with coworkers who hate conflict` (3 inputs) — AIO gives verdict + a "Small Caveats" section + a ratings table (complexity/conflict/downtime) — structurally identical to the site's planned output.
4. `is catan good for 4 adult beginners who dislike trading negotiation games` (4 inputs, `&udm=14` control run to confirm AIO attribution) — AIO gives a full verdict ("No... likely a poor fit") **and proactively recommends 4 alternative games with a comparison table**, out-scoping the tool's planned upsell.

All four were fully answered, at every constraint count tested, with no compute left over for a site to add. This meets the hard-rule bar for a kill-level finding on gate 1 ("a head-query set fully answered by AIO with no per-query-compute wedge past it"). Stopped digging further per the dig-order rule — remaining signals (monetization, feasibility, moat) graded from what's already in hand rather than pursued deeper, since a kill-level finding was already confirmed.

### Not pursued (moot given the kill)

- Amazon Associates Toys & Games exact commission rate (attempted fetch, 404, not retried).
- Keyword Planner checkpoint / `keywords-request.md` — not written; a kill-level finding doesn't require exhausting every signal.
- Traffic sanity-check — not reached (comes after full six-signal grading, run stopped at signal 2).

### Outcome

**Rejected** — gate 1 disproved: AI Overview fully answers the multi-input head queries this idea's compute would perform, verified across 4 independent constraint-count levels and 4 different games, with no wedge left. Dossier written for the record. Confidence: medium (demand well-evidenced from 3 independent sources; AIO finding evidenced from 4 independently varied live queries; monetization/moat left unverified since moot).
