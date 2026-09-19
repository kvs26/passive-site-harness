# Dossier: Rules You're Playing Wrong

**Per-game database of commonly-misplayed rules, hand-verified against rulebook/errata/designer clarifications, with an interactive self-audit checklist — real, independently-evidenced community demand across 8+ games, but Keyword Planner data (ingested 2026-09-20) shows *none* of the 18 requested content-hook keywords carry measurable Google search volume, only the 3 generic buy-intent keywords do. Confidence: high.**

**Evidence dated 2026-09-18 — SERP/AIO evidence expires 2026-10-16. Pre-build re-probe mandatory regardless. (Keyword Planner CSV ingested 2026-09-20 as a top-up; SERP/AIO not re-probed this run, so the original expiry stands.)**

## Signal scorecard

**Demand: strong** — the exact misplay pattern recurs across independent games and independent threads, not one game's quirk.
  - "Orléans: endgame - beneficial deeds... they told me got the rules wrong the first time" — https://boardgames.stackexchange.com/q/32906
  - "Topping up fields in agricola: That's how we've been playing it, but rereading the rules I cannot find a mention..." — https://boardgames.stackexchange.com/q/30217
  - "One Night Ultimate Werewolf: If your card is moved, whose team are you on?... I'm afraid we've been doing it wrong" — https://boardgames.stackexchange.com/q/45147
  - "Less treasure cards in Dungeon! board game: We also misplayed this until I deeply read the booklet" — https://boardgames.stackexchange.com/q/13644
  - Reddit r/Catan "Common rules that people misplay? I've been playing..." — 50+ comments, 4 years old (via Google SERP, 2026-09-18)
  - Reddit r/Catan "Compilation of every error/mistake/contradiction/etc..." — 40 posts (via Google SERP, 2026-09-18)
  - **Keyword Planner top-up (ingested 2026-09-20, `scripts/planner-report.py`):** of the 22 requested keywords, only **3 registered any measurable volume**, and all 3 are the generic Monetization-CPC group ("buy catan", "buy monopoly board game", "board game replacement pieces" — all 500 bucket). **Every one of the 18 content-hook keywords** — all 4 Head queries, all 10 per-game Variants, and all 4 Hook-specific queries — came back **absent from the export (zero/no measurable data)**. Per the rubric, a ≤50-bucket/absent result gives **no support toward a Demand upgrade**, so the grade stays **strong** on the qualitative evidence above — but this is the cleanest zero-volume result of the niche's batch so far (18/18 content keywords, vs. siblings' 17/19), and it bears directly on the traffic sanity-check below.

**SERP, AIO & competitor weakness: weak-but-open (near-miss on AIO)** — dated 2026-09-18. Two distinct query shapes behave differently, and that split *is* the finding:
  - `catan common mistakes` → **full AIO answer**, but it answers **strategy** mistakes (port placement, wheat neglect, trading with the leader), not rules-misplay. Off-hook for this idea's actual phrasing.
  - `catan rules everyone gets wrong` → **no AI Overview rendered**; organic results are scattered Reddit threads (the two above) and unrelated strategy/critique YouTube videos. No consolidated, source-verified database occupies this exact phrasing.
  - `board game rules everyone gets wrong` (generic head query) → AI Mode panel showed a "Thinking/Searching" placeholder rather than a resolved AI Overview card; organic results below were a single comedy short and a 2022 YouTube video ("Common Board Game Rule MISTAKES I Have Made"), not a database.
  - Wedge past AIO: rules-misplay phrasing ("rules everyone gets wrong", "rules you're playing wrong") is distinct enough from strategy-mistake phrasing that it currently escapes full AIO capture — but "[game] common mistakes" (a very plausible entry query) does not. This is the fragile boundary flagged in the idea's own AIO probe; **the pass-5 manual checkpoint result is a near-miss, not a clean pass** — see Risks & unknowns.

**Hook depth: strong** — the hook (per-game, source-verified, checklist-shaped) is evidenced as unserved, not invented:
  - The SE questions above are literally people trying to verify a specific misplay against the rulebook (Orléans, Agricola, Dungeon!) — the exact hook.
  - Reddit's own 50+-comment and 40-post threads on Catan misplays show real appetite for exactly this content, currently living only as unstructured, unverified forum discussion — no checklist, no citation to rulebook/errata.

**Monetization: weak** — route confirmed to exist, exact rate not verified this run.
  - Fetched the live Amazon Associates Operating Agreement (https://affiliate-program.amazon.com/help/operating/agreement, updated Oct 15 2025) — confirms the program mechanism and that commission rates live in the "Associates Program Commission Income Statement," which is **login-gated** (not fetchable without an Associates account this run).
  - Toys & Games category commission rate: `unknown` this run — same caveat scout carried forward; must be read from Associates Central (logged-in) before build, not estimated.
  - Route logic otherwise holds: outputs (games, replacement components, rulebook-adjacent accessories) are ordinary Amazon-linkable products, so fit isn't in question — only the exact rate is open.
  - **Keyword Planner top-up:** the 3 Monetization-CPC keywords with data all carry real (if modest) bids — "buy catan" 13.60–170.08 INR (≈$0.14–$1.77 at the 2026-09-18 INR→USD rate of 0.01043, api.frankfurter.app), "board game replacement pieces" 21.94–66.53 INR (≈$0.23–$0.69), "buy monopoly board game" 9.59–62.34 INR (≈$0.10–$0.65). Per the rubric these are supporting-only for an affiliate-route idea — real evidence that buy-intent Amazon queries carry commercial value, but they don't touch the still-unverified commission rate, so Monetization stays weak.

**Feasibility & sustainable upkeep: weak** — no primary aggregated source exists; this is a hand-build, not a scrape.
  - No API or feed of "commonly misplayed rules" exists (confirmed by the SERP dig above — this is scattered across forum threads, not a structured dataset anywhere).
  - Realistic upkeep is **build-heavy, not maintenance-heavy**: per-game entries require reading the official rulebook + hunting errata/FAQ/designer clarifications (BGG forums, publisher FAQ pages) and hand-verifying each misplay claim — likely 30–60 min/game for a first pass across dozens of games to reach a usable catalog size, then low-touch (occasional errata updates, rare rule changes on reprints). Steady-state upkeep after initial build plausibly clears the ~3 hrs/week cap, but the **initial build cost per game is high and per-row**, which is a different risk than ongoing upkeep and is not fully evidenced this run (no publisher-errata source was spot-checked for structure/frequency).

**Data moat: strong** — replication barrier + long-tail surface both hold on inspection of the sources found this run.
  - Barrier = **merge + hand-verify**: sources are structurally disjoint (rulebook PDF, publisher FAQ/errata page, scattered forum threads/designer posts) and none of them is machine-readable or pre-merged; assembling a per-game "misplay list" requires reading all three and cross-checking, which is exactly the (a) merge / (b) hand-verify pattern scout's gate 3 asks for.
  - Long-tail surface: the SE evidence alone spans 8+ distinct games (Orléans, Agricola, Uno, Catan, Zombicide, Gloom, One Night Ultimate Werewolf, Dungeon!) from a handful of queries — a full build against BGG's top-N-by-popularity games would yield hundreds of per-game pages, each source-cited.

## SERP & AIO snapshot

Dated 2026-09-18 (expires 2026-10-16):
- `catan common mistakes` — AI Overview present, **full answer**, but scoped to strategy (port placement, wheat neglect, trading, longest-road chasing), not rules misplay. Sources cited by the AIO itself: Reddit r/Catan, a Medium strategy guide.
- `catan rules everyone gets wrong` — no AI Overview card rendered. Top organic: two Reddit r/Catan threads (50+ comments; 40 posts), strategy/critique YouTube videos (off-topic).
- `board game rules everyone gets wrong` — AI Mode panel stalled at "Thinking/Searching" (no resolved AIO card observed); organic results were a comedy short and a single 2022 YouTube video, not a database.
- `&udm=14` (AIO-free) control not separately run this pass — the phrasing-level A/B above (strategy vs. rules-misplay query) already isolates the wedge; recommend running the control on the exact production-page query set at the pre-build re-probe.

## Keyword data

Ingested 2026-09-20 via `scripts/planner-report.py` (export window: September 1, 2025 – August 31, 2026; bids in INR). Of 22 requested keywords:

- **"board game replacement pieces"** — 500 bucket, 0% 3-mo, 0% YoY, Competition Low, bid 21.94–66.53 INR (≈$0.23–$0.69).
- **"buy catan"** — 500 bucket, 0% 3-mo, 0% YoY, Competition High, bid 13.60–170.08 INR (≈$0.14–$1.77).
- **"buy monopoly board game"** — 500 bucket, 0% 3-mo, YoY **+900%**, Competition High, bid 9.59–62.34 INR (≈$0.10–$0.65).
- **18 of 22 keywords absent from the export (zero/no measurable data)** — every Head query ("board game rules you're playing wrong", "rules everyone gets wrong", "common mistakes playing board game", "board game common mistakes"), every per-game Variant (catan/carcassonne/agricola/monopoly/uno/ticket to ride/7 wonders/pandemic/risk/clue rules mistakes), every Hook-specific query ("rules you've been playing wrong board game", "board game rules checklist", "am i playing board game wrong", "board game teaching mistakes"), and 1 monetization-CPC term ("board game rulebook replacement").

INR→USD conversion at 0.01043 (rate dated 2026-09-18, api.frankfurter.app), raw INR figures quoted verbatim above. Per the rubric's bucket rules, the absent content-hook keywords give **no support toward a Demand upgrade** — Demand stays strong on the qualitative evidence — but this is a real, dated negative signal on query-level search volume for the idea's actual on-page hook phrasing; see Traffic sanity-check.

## Monetization sketch

Route: **affiliate**, Amazon Associates (US) — Toys & Games category (buy the game / correct replacement components / rulebook-adjacent accessories) + hobby display ads as a secondary layer. Program mechanism confirmed live via the Operating Agreement; exact commission % is `unknown` (login-gated Commission Income Statement) — must be read from Associates Central before build, not estimated or carried over from other niches' rates. Keyword Planner top-up confirms real (if modest) commercial bid value on the buy-intent terms (≈$0.10–$1.77 USD-equiv) — supporting-only per the rubric, doesn't change the grade.

## Digital products (documented, off by default)

A printable "house rules corrected" PDF cheat-sheet per game (the checklist + citations, formatted for print) is a plausible Gumroad-style add-on. Ships off; enabling checkout is a manual per-site act, not part of this build.

## Traffic sanity-check

Viability bar: ≈4,300–11,500 visitors/mo (blended ads+affiliate, $100/mo) per the standing reference figures, quoted from the ticket-03 reference table, not recomputed. **With the CSV now in hand, this reads considerably worse than the pre-CSV opinion did.** Every one of the 18 requested content-hook keywords — the idea's actual on-page phrasing, across head terms, 10 per-game variants, and hook-specific phrasing — returned no measurable Google search volume at all; only the 3 generic buy-intent keywords ("buy catan", etc.) registered, and only at the 500 bucket. The long-tail page surface (per-game misplay pages, potentially hundreds once scaled) has real qualitative demand behind it (8+ games surfaced from a handful of SE/Reddit queries, two Catan threads with 50+ and 40 posts), but zero of that demand shows up as detectable query volume for the phrasing this tool would actually rank for. A dataset whose entire content-hook keyword universe is absent from Keyword Planner plausibly cannot reach the 4,300+ visitor/mo floor through organic search on that phrasing alone — the demand documented here appears to route through forums/threads/direct-experience rather than deliberate Google search. This is a directional read (labelled opinion per the rubric), not a kill-level finding, but it's now the same pattern seen across this niche's batch (companion-app-dependency-checker's 17/19 absent) and is the dossier's single biggest risk to weigh against the strong qualitative-demand and data-moat signals.

## Risks & unknowns

- **AIO near-miss, not clean pass**: "[game] common mistakes" phrasing (a very plausible entry point for this content) is fully AIO-answered for at least one popular game (Catan) — just scoped to strategy, not rules-misplay. If users searching that phrasing expect *rules* content, there's a real risk the AIO satisfies enough of the intent to blunt traffic on the most obvious query shape. The "rules everyone gets wrong" / "rules you're playing wrong" phrasing is the safer wedge and should be the primary on-page target, not "[game] mistakes."
- **Monetization exact rate unknown** — Amazon Associates Toys & Games % not verified (login-gated). Do not build assuming a specific number.
- **Feasibility upkeep evidenced for steady-state only** — the per-game *initial build* cost (reading rulebook + hunting errata + hand-verifying) was reasoned from the SE evidence's texture, not measured against an actual publisher errata page this run. Recommend a timed pilot on 3–5 games before committing to full catalog scope.
- **Keyword Planner top-up shows zero content-hook search volume** — all 18 requested rules-misplay/checklist keywords (every Head, Variant, and Hook-specific query) are absent from the export; only the 3 generic buy-intent terms registered, at the 500 bucket. This doesn't downgrade Demand per the rubric's mechanical rule, but it's a material, dated risk to the traffic sanity-check that a pre-build re-probe should re-examine (e.g. broader autocomplete fan-out on additional per-game phrasing, to see if this is a query-list-scope artifact or a genuine ceiling).
- Searched and found nothing: no structured/API source for "commonly misplayed rules" exists (confirmed via the SERP dig — only forum threads and video content occupy this space).

## Sources log

- https://boardgames.stackexchange.com/q/32906 (Orléans)
- https://boardgames.stackexchange.com/q/30217 (Agricola)
- https://boardgames.stackexchange.com/q/45147 (One Night Ultimate Werewolf)
- https://boardgames.stackexchange.com/q/13644 (Dungeon!)
- https://boardgames.stackexchange.com/q/61688 (Exploding Kittens)
- https://boardgames.stackexchange.com/q/39230 (Catan — Commercial Harbor misplay)
- Google SERP `catan common mistakes` (2026-09-18) — AI Overview + Reddit/Medium sources
- Google SERP `catan rules everyone gets wrong` (2026-09-18) — Reddit r/Catan threads, no AIO
- Google SERP `board game rules everyone gets wrong` (2026-09-18) — stalled AI Mode panel, YouTube/comedy organic
- HN Algolia `board game rules mistakes` — dead end, no relevant results (generic programming/rules-engine discussion only)
- https://affiliate-program.amazon.com/help/operating/agreement (fetched 2026-09-18) — confirms program mechanism; Commission Income Statement (rate card) is login-gated, not fetched
- https://affiliate-program.amazon.com/help/node/topic/GRZC2SXVYCZZG5UY — 404, dead end
- `keyword-planner.csv` (human-provided Keyword Planner export, ingested 2026-09-20) via `scripts/planner-report.py` — 22 requested keywords, 3 with measurable volume (all 500 bucket, all Monetization-CPC), 18 absent from the export — see Keyword data section above.
- https://api.frankfurter.app/latest?amount=1&from=INR&to=USD (fetched 2026-09-20) — INR→USD rate 0.01043 (dated 2026-09-18), used for the bid conversions above.
