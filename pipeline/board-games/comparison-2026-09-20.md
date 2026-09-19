# Comparison brief: board-games — 2026-09-20

Covers all currently-validated ideas in this niche. Grades are copied from each dossier — the dossier stays the single source of detail; zoom via the links.

## One-glance table

| Idea | Demand | SERP/competitor weakness | Hook depth | Monetization | Feasibility & maintenance | Unique data | Confidence |
|---|---|---|---|---|---|---|---|
| [board-game-expansion-buyers-guide](ideas/board-game-expansion-buyers-guide/dossier.md) | strong | strong (beatable) | strong | strong | strong | strong | high |
| [errata-correction-kit-builder](ideas/errata-correction-kit-builder/dossier.md) | strong | weak (near-miss) | strong | strong | weak | strong | high |
| [companion-app-dependency-checker](ideas/companion-app-dependency-checker/dossier.md) | strong | weak | strong | weak | weak | weak | high |
| [convention-packing-optimizer](ideas/convention-packing-optimizer/dossier.md) | strong | weak | weak | strong | weak | weak | high |
| [rules-youre-playing-wrong](ideas/rules-youre-playing-wrong/dossier.md) | strong | weak-but-open (AIO near-miss) | strong | weak | weak | strong | high |
| [token-capsule-shopping-planner](ideas/token-capsule-shopping-planner/dossier.md) | strong | unknown | strong | weak | weak | weak | medium |
| [legacy-reset-resale-planner](ideas/legacy-reset-resale-planner/dossier.md) | weak | weak | weak | weak | weak | weak | low |

SERP/AIO evidence expires **2026-10-16** (board-game-expansion-buyers-guide) or **2026-10-17** (the other five with a dated read) — pre-build re-probe mandatory on whichever is picked, regardless of age within that window. token-capsule-shopping-planner's SERP/AIO signal is graded **unknown**, not just aging — its manual Google AIO checkpoint has never completed (blocked by a 429 challenge both times attempted); that checkpoint is a hard pre-build requirement for this one specifically, not optional.

## Per-idea read

### [board-game-expansion-buyers-guide](ideas/board-game-expansion-buyers-guide/dossier.md)

Per-game ranked "which expansion should I buy (first)" guide with a base-required + own-what-you-have filter. Strongest of the six on every signal: the named incumbent ("Board Game Expansion Checker") turned out to be a different tool entirely (a release tracker, not a buy-order ranker), and the Keyword Planner CSV independently confirmed two head terms clearing the 5K-bucket-or-higher bar ("catan expansions" 50K, "dominion expansions" 5K — [dossier](ideas/board-game-expansion-buyers-guide/dossier.md)). Amazon Associates Toys rate (3.00%) and the 24hr/89-day cookie window are both verified verbatim. Biggest risk: the manual Google AIO checkpoint has been blocked by a bot-check twice now (2026-09-18 and not re-attempted since) — still owed pre-build.

### [errata-correction-kit-builder](ideas/errata-correction-kit-builder/dossier.md)

Per-edition/per-printing errata lookup + printable correction checklist. Demand is genuinely strong and broad (Reddit/BGG/StackExchange recurrence across a dozen-plus independent games, ≥10 distinct titles in autocomplete alone) and monetization is verified strong (Amazon Associates Toys 3.00% + 24hr/89-day cookie, confirmed linkable outputs). SERP/AIO is a near-miss, not a clean pass: Google's AI Overview fully answers the generic "is there a master errata list" question, but the actual per-title/per-printing lookup escapes it — a real, evidenced wedge. The Keyword Planner CSV was another cold shower here too: every generic errata phrasing came back zero/no-data, and per-title hook keywords that registered at all sit at the bare-minimum 50 bucket — demand stays strong on forum-recurrence evidence, but the traffic sanity-check now rests entirely on breadth-of-catalog across many thin per-title pages, not any head term. Feasibility is weak: no single errata feed exists, so discovery is manual per publisher/title, bounded only if scoped to a curated title list.

### [companion-app-dependency-checker](ideas/companion-app-dependency-checker/dossier.md)

Per-edition checker for whether a board game's companion app is mandatory, and how future-proof it is. Demand and hook are genuinely strong — the future-proofing fear is user-originated on Facebook (160+ comments) and Reddit, independent of this idea — but the Keyword Planner CSV was a cold shower: 17 of 19 requested keywords (every phrasing for both hook halves) came back with zero measurable Google search volume, worsening the traffic sanity-check read considerably. Monetization is the weakest of the batch (most rows have no purchasable "fix" for a discontinued-app fact), and the long-tail surface is bounded to ~10-15 named games.

### [convention-packing-optimizer](ideas/convention-packing-optimizer/dossier.md)

Bin-packing tool for board-game convention bags — will your named games fit in your named bag? Demand for the underlying problem is real and recurring (BGG forum threads, YouTube trial-and-error packing videos), and monetization is the strongest of the batch (dual-sided Amazon Associates: Luggage 4.00% + Toys 3.00%, both linkable). But Google's AI Overview already gives a full formula-based answer to every head query tested, and generic (non-board-game) bin-packing calculators already exist as a commodity tool category — the hook narrows to just the pre-loaded game/bag name catalog. Feasibility is also harder than scout assumed: BGG's API doesn't expose physical box dimensions (a naming collision with its unrelated "weight"/complexity field), so the dataset needs real hand-collection, not a clean API merge.

### [rules-youre-playing-wrong](ideas/rules-youre-playing-wrong/dossier.md)

Per-game database of commonly-misplayed rules, hand-verified against rulebook/errata/designer clarifications, with an interactive self-audit checklist. Demand and data moat are the strongest of the batch — misplay recurrence is documented across 8+ independent games (StackExchange) plus two 40–50+ post Reddit r/Catan threads, and no structured source for "commonly misplayed rules" exists anywhere (a genuine merge+hand-verify+judgment barrier). AIO is a near-miss, not a clean pass: "rules everyone gets wrong" phrasing escapes full AI Overview capture, but the adjacent "[game] common mistakes" phrasing is fully AIO-answered (scoped to strategy, not rules) — a real on-page-targeting risk to manage. The Keyword Planner CSV delivered the starkest zero-volume result in the niche: all 18 content-hook keywords tested (head, 10 per-game variants, hook-specific) are absent from the export — only 3 generic buy-intent terms ("buy catan", etc.) registered, at the lowest measurable bucket. Monetization and feasibility stay weak (commission rate login-gated; hand-build-heavy with no aggregated source).

### [token-capsule-shopping-planner](ideas/token-capsule-shopping-planner/dossier.md)

Per-game/expansion coin-capsule sizing + pack-quantity calculator with an insert-clearance warning. Demand and hook both came back stronger than scout's original framing — 6 independent per-game "what size capsule" threads plus 2 direct insert-clearance-fit threads, none of it invented. But the Keyword Planner CSV is the thinnest of the niche's seven: 13 of 17 requested keywords (every per-game/hook-specific phrasing) zero/no-data, the 4 that registered bottom out at the 50 bucket — confirming this demand is genuinely off-Google (community threads, not search). SERP/AIO is the batch's one true **unknown**, not just weak: the manual Google AIO checkpoint has never completed (429-blocked both attempts), and this idea's core query shape (a single-fact mm lookup) is a materially higher AIO-risk profile than the other six's multi-input calculators. Monetization/feasibility/moat all stay weak — smallest basket size (~$10–20 multi-packs) and most fragmented dataset of the batch.

### [legacy-reset-resale-planner](ideas/legacy-reset-resale-planner/dossier.md)

Reset-eligibility + official-reset-kit router for legacy/campaign board games, paired with a resale-completeness report. The weakest of the seven, and the CSV top-up confirmed rather than rescued it: every reset-kit head term with any measurable volume at all tops out at the bare-minimum 50 bucket, and every resale/completeness phrasing (the idea's actual differentiator) is zero/no-data. Monetization is fragmented per-game — the highest-demand title (Pandemic Legacy) has only a free fan-made reset kit with no commercial product, while Gloomhaven/Jaws of the Lion's genuine official reset pack has no known affiliate program — and the one keyword with real commercial volume (`card sleeves board game`) is a generic accessory, not the reset-kit product itself. No kill-level finding surfaced, so it validates per the rubric, but at low confidence and with every signal weak.

## Agent's read (opinion, not a score)

1. **board-game-expansion-buyers-guide** — the only one with a fully strong scorecard across all six signals, a verified incumbent-gap, and a CSV that independently confirms real head-term volume on two of what would be hundreds of eventual pages. Lowest execution risk of the seven.
2. **errata-correction-kit-builder** — the broadest, most independently-corroborated demand of the batch (a dozen-plus games across three separate communities) and verified strong monetization, but the near-miss AIO wedge is narrower than the buyer's-guide's and feasibility genuinely requires ongoing manual per-title polling.
3. **rules-youre-playing-wrong** — the strongest data moat and demand-recurrence story of the batch, and the only one where the *hook itself* still shows an open AIO wedge on its primary phrasing — but the CSV's total absence of content-hook search volume (18/18) is the starkest traffic-risk finding in the niche, and monetization's exact rate is still unverified (unlike errata's, which is confirmed).
4. **convention-packing-optimizer** — real demand and the best-verified monetization route, but the hook is thin (compute is commoditized, AIO already answers the generic case) and the dataset needs real hand-collection labor before the long-tail surface can grow past a narrow starting catalog.
5. **companion-app-dependency-checker** — the most genuine, least-served underlying fear (the "future-proofing" half survives AIO contact untouched), but the CSV's near-total zero-volume result is a real warning sign that this demand mostly doesn't route through Google search, and the smallest bounded page-count of the batch caps its ceiling regardless.
6. **token-capsule-shopping-planner** — demand and hook are real (community-thread recurrence, not invented), but it carries the batch's only genuinely unresolved AIO risk (never checked, and its single-fact-lookup query shape is the most AIO-vulnerable of the seven) plus the smallest monetization ceiling and most fragmented dataset. Would not build this before resolving the AIO checkpoint.
7. **legacy-reset-resale-planner** — the weakest by a clear margin: no signal graded strong, the CSV confirmed thin volume on both halves of the hook, and monetization is genuinely fragmented per-game rather than just under-verified. Validated on a technicality (no kill-level finding), not a recommendation to build next.

## Your pick

**Picking is your checkpoint — nothing proceeds without it.** Reply with the idea to advance (`Status: picked`) and it goes to `/to-spec` for its PRD. You can also park or reject any of the above; say why and it goes in the idea's History.
