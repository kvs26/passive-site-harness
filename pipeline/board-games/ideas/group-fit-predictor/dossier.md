# Dossier: Group-Fit Predictor

**A per-game "will this land with my group?" verdict tool with real, recurring demand — but Google's AI Overview already performs the exact multi-input compute the site would sell, fully and repeatedly, across every tested query shape. Confidence: medium.**

**Evidence dated 2026-09-18 — SERP/AIO evidence expires 2026-10-16. Pre-build re-probe mandatory regardless.**

## Signal scorecard

**1. Demand: strong** — the per-game × group-fit question recurs across independent communities and autocomplete, not invented.
  - Autocomplete (Google suggest, this run): `is wingspan good for 2 players` / `... for beginners` / `... for kids`; `is catan good for kids` / `... for beginners` / `... with 5-6 players`; `is codenames good for 2 players` / `... for kids` — the exact "is [specific game] good for [my situation]" shape recurs across 3 unrelated games, not a one-off phrasing.
  - Stack Exchange `boardgames`: [q/4193](https://boardgames.stackexchange.com/q/4193) "Evaluating Agricola as a 2 player game: how long would it take, how competitive is it, complexity, etc." and [q/2281](https://boardgames.stackexchange.com/q/2281) "How difficult is Axis and Allies to learn and teach new players?" — both are a person asking, in their own words, exactly the idea's hook for one specific game.
  - Reddit r/boardgames (search.rss, this run): ["Is brass Birmingham a good introduction for my friend group into heavier board games?"](https://www.reddit.com/r/boardgames/comments/149ot0m/is_brass_birmingham_a_good_introduction_for_my/) — a direct, verbatim hit on the idea's exact reverse-fit hook (specific game + specific group → verdict).
  - Corroborates the scout run's Facebook/BGG-group thread (10+ comments) and 17-post Reddit "is there any website to tell you the best game for X" thread.

**2. SERP, AIO & competitor weakness: kill-level finding** — Google's AI Overview already performs the tool's exact job, on demand, for arbitrary per-game × per-group combinations, including the specific caveat the idea's Edge block calls its moat.
  - Dated 2026-09-18, all fetched live via browser this run (no `&udm=14` control needed to prove presence — presence confirmed directly; control run once for contrast):
    - `is brass birmingham good for beginners` → AIO: "generally not recommended... but manageable... if you have an experienced player to teach you," with complexity/time-commitment/economy caveats, then asks a genuine follow-up ("what are your previous experiences... solo, partner, or group?").
    - `is wingspan good for 2 players and a 9 year old` (2-input) → AIO: "Yes... great fit... as long as the child enjoys matching themes," **including the exact caveat class the idea's hook claims as its differentiator** ("Age Rating: box says 10+, but many 9-year-olds play successfully with a little coaching").
    - `is carcassonne good for a first game night with coworkers who hate conflict` (3-input: occasion + group type + preference) → AIO: full verdict + why-it-fits + a "Small Caveats" section (accidental road/city sharing) + a ratings table (complexity/conflict/downtime), i.e. the *exact* fit-score-plus-caveat shape the idea proposes to build.
    - `is catan good for 4 adult beginners who dislike trading negotiation games` (4-input, control-verified: AIO absent under `&udm=14`, present without it) → AIO: "No, Catan is likely a poor fit... trading and negotiation are its core mechanisms... playing with 4 players makes the board incredibly cramped," **then proactively recommends 4 concrete alternative games with a comparison table** — i.e. it out-scopes the planned site by also doing the cross-game recommendation the tool would sell as an upsell.
  - Four independent multi-input queries, spanning 4 different games and 1–4 stacked constraints, were **all fully answered** — verdict, the specific per-game caveat, and (twice) unprompted alternatives — with no unresolved compute left for a site to perform. Per the hard rule, "a head-query set fully answered by AIO with no per-query-compute wedge past it is a kill-level finding." This is that finding, not a single-query fluke: the pattern held at every constraint count tested (1, 2, 3, 4 inputs).
  - No incumbent-SERP dig was needed to reach the kill (AIO alone disproves the gate), but for the record the scout run's incumbents (Find Me a Boardgame, The Dice Drop, Game Guru) remain catalog-direction finders, not reverse-fit tools — the gap those leave open is moot now that AIO fills it directly on the SERP.

**3. Hook depth: strong (moot)** — the hook (per-game + per-group verdict with the specific caveat) is real and matters to users (see Demand evidence), but signal 2 shows Google's own AIO already delivers that exact hook inline, which is what makes this a kill rather than a weak grade.

**4. Monetization: unknown (not pursued)** — per the dig-order rule, once a kill-level finding lands the remaining signals are graded from what's already in hand rather than dug further. The Amazon Associates Toys & Games rate remains unverified this run (sibling idea `board-game-expansion-buyers-guide` flagged the same gap); moot given the gate-1 kill.

**5. Feasibility & sustainable upkeep: strong (moot)** — static per-game attribute dataset + client-side calculator is clearly buildable within the upkeep cap; not the failure point here.

**6. Data moat: weak-to-unknown (moot)** — the idea's moat rested on "per-row editorial judgment" correcting BGG's unreliable age/weight fields. The AIO evidence above shows Google is already synthesizing exactly that kind of judgment call live (age-rating vs. real-world play, complexity vs. group tolerance) from web sources including Reddit/BGG threads — the correction the idea proposed to hand-curate is being performed generically, on the fly, by the AIO itself. Not independently dug further (moot given the gate-1 kill).

## SERP & AIO snapshot

Dated 2026-09-18. See signal 2 above for the four fetched queries and quotes. Summary: AIO trigger rate and full-answer rate were both 4/4 on queries deliberately constructed to match the site's planned page shape (`/[game]/is-it-right-for-my-group`, stacked with player-count/age/experience/preference constraints). The `&udm=14` control on the 4-input Catan query confirmed AIO is what's supplying the answer, not an unrelated snippet.

## Keyword data

No Keyword Planner CSV requested or run — the dig reached a kill-level finding (signal 2) before the checkpoint, and per the hard rules a kill-level finding doesn't require exhausting every signal. `keywords-request.md` not written for this run.

## Monetization sketch

Not verified this run (see signal 4). Sibling idea in this niche (`board-game-expansion-buyers-guide`) carries the same open item (Amazon Associates Toys & Games exact rate `unknown`, verify at its own validate pass).

## Digital products (documented, off by default)

None apparent — the idea's output (a fit verdict + caveat) isn't a natural printable/PDF product distinct from the on-page tool itself.

## Traffic sanity-check

Not reached — the sanity-check step comes after the six-signal dig, and this run stopped digging once the kill-level finding on signal 2 was confirmed (four independent, deliberately varied test queries). Opinion: even if demand volume were later confirmed via Keyword Planner, a hook this thoroughly pre-empted by AIO would very plausibly fail to draw click-through traffic from the SERP regardless of ranking, since the AIO answers the query inline above any organic result.

## Risks & unknowns

- Amazon Associates Toys & Games exact commission rate — unverified, moot given the kill.
- Whether AIO's per-game caveat accuracy holds up under adversarial/rare game+constraint combinations (e.g. very obscure games with thin web coverage) was not tested — a long-tail-only positioning (extremely niche games AIO has little training signal on) was not explored as a pivot, since the scout run's emitted hook was the general/popular-game case.

## Sources log

- `scripts/fanout.py` (Google suggest, question-prefix mode) on `is wingspan good for`, `is catan good for`, `is codenames good for`, `will my kids like`, plus earlier generic seeds — confirms recurring "is [game] good for [constraint]" autocomplete shape.
- Stack Exchange `boardgames` search (`scripts/pain-fetch.py stackexchange`): queries `will this game work for my group`, `good game to teach new players first game`, `complexity too high for casual players` — surfaced q/4193 (Agricola), q/2281 (Axis & Allies), q/6785, q/7399 (gateway game).
- HN Algolia (`scripts/pain-fetch.py hn`): `board game recommendation for my group` — low signal, generic recommendation threads, no direct hit.
- Reddit `search.rss` (`scripts/pain-fetch.py reddit`, 1 query per throttle): `is this game good for my group` on r/boardgames — surfaced the direct-hit Brass Birmingham thread plus corroborating teach-burden/understanding-gap threads.
- Google web search (browser, live, 2026-09-18): 4 head queries at increasing constraint count (1/2/3/4 inputs) across Brass Birmingham, Wingspan, Carcassonne, Catan — all AIO-answered in full; 1 `&udm=14` control run to confirm AIO attribution.
- Amazon Associates rate page fetch attempted — 404, not pursued further (moot).
