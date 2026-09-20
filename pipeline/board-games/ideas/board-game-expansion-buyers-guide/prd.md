# Board Game Expansion Buyer's Guide — PRD

Source idea: [idea.md](idea.md)
Source dossier: [dossier.md](dossier.md)

## Problem Statement

A visitor who already owns a board game's base set (and maybe one or two expansions) wants to know **what to buy next** — which expansion is worth it, in what order, and whether it needs the base game alone or another expansion first. Today they only find: a bare yes/no "does this need the base game" checker with no ranking or ordering; global "best expansions ranked" listicles that aren't specific to their game; or one-off forum threads and per-game YouTube buyer's guides that answer only a single game, once, with no way to filter by what the visitor already owns.

## Solution

A per-base-game interactive expansion guide. For each supported base game, every expansion is listed with: whether it requires the base game (or another expansion) to play, a one-line "what it adds / what it fixes," a worth-it verdict, and a recommended buy-order position. The visitor can mark which expansions they already own and get a filtered "buy next" ranked list for their group. Each ranked expansion links out to Amazon (Associates, Toys & Games) for purchase.

## User Stories

1. As a visitor who owns only a base game, I want to see every expansion for that game ranked in recommended buy-order, so that I know what to buy first.
2. As a visitor who owns the base game plus some expansions, I want to mark what I already own, so that the guide only shows me what I don't have yet.
3. As a visitor unsure if an expansion is worth it, I want a clear worth-it verdict per expansion, so that I don't waste money on a weak one.
4. As a visitor browsing a specific game, I want to know whether an expansion needs the base game alone or another expansion first, so that I don't buy something I can't use yet.
5. As a visitor deciding for my play group, I want the guide to account for group size/style (e.g. "3 casual players"), so that the recommendation fits how I actually play.
6. As a visitor ready to buy, I want a direct purchase link per expansion, so that I can act immediately without searching Amazon myself.
7. As a visitor landing from a search engine on a specific game's page (e.g. `/catan/expansions`), I want that page to stand alone with full context, so that I don't need to navigate elsewhere to understand it.
8. As a visitor comparing two specific expansions, I want a dedicated comparison page, so that I can decide between them directly.
9. As a visitor who wants to understand the ranking methodology, I want a methodology page, so that I can trust the worth-it verdicts and buy-order.
10. As a visitor on mobile, I want the guide to load fast and be fully usable on a phone, so that I can check it in-store or at a game night.
11. As a visitor who wants to understand the site's affiliate relationship, I want a clear disclosure, so that I know purchase links are monetized.
12. As a returning visitor for a different game, I want each base game to have its own dedicated page, so that I can bookmark or share the specific guide I care about.
13. As a visitor filtering by what I own, I want the filter state to persist without an account (e.g. via local storage or URL state), so that I don't need to sign up or re-enter my collection each visit.
14. As a site maintainer, I want the expansion dataset structured so that new expansions can be added as a data update rather than a code change, so that upkeep stays low-effort.

## Implementation Decisions

- **Standing constraints** (fixed for every site, restated here): static HTML/CSS/JS only — no accounts, no database, no backend; mobile-first; fast and good Core Web Vitals; crawlable and indexable; cheap to host on static hosting; US market by default.
- Built from the house-template (per the `build-site` skill) as `sites/board-game-expansion-buyers-guide/`.
- **Core job:** given a base game and the expansions a visitor already owns, show a ranked, filtered "buy next" list with worth-it verdicts — a "do it" tool page, not just a reference article.
- **Dataset:** one record per (base game, expansion) pair, with fields: base-game-required (yes/no, or names the specific prerequisite expansion if not the base game alone), what-it-adds, what-it-fixes, worth-it verdict, buy-order position, rough price band. Sourced by merging the official/BGG expansion list (structural facts: names, prerequisites, release order) with BGG community ratings/weight and review-consensus text, plus per-row editorial judgment for the worth-it verdict and buy-order — this judgment layer is the differentiation vs. incumbents and must not be a mechanical pass-through of ratings alone.
- **Ownership filter:** client-side only (no accounts/backend) — visitor toggles which expansions they own; implementation is local storage and/or URL query state so a filtered view is shareable/bookmarkable.
- **Group-size input:** a lightweight client-side input (e.g. player count / casual-vs-serious toggle) that adjusts which rows are surfaced or highlighted as "next buy," driven by per-row metadata already in the dataset (e.g. a recommended player-count/style flag) rather than a separate scoring engine.
- **Page map:**
  - Per-base-game tool page (`/[game]/expansions`) — the core ranked, filterable, own-what-you-have experience. This is the primary tool page per user story 1–7.
  - Per-expansion detail page — what it adds/fixes, prerequisite chain, worth-it verdict, purchase link (supports deep-linking and long-tail search traffic).
  - Buy-order/combo comparison pages (e.g. "expansion A vs expansion B") for head-to-head decisions (user story 8).
  - Methodology page — explains how worth-it verdicts and buy-order are derived (user story 9).
  - Standard supporting pages per house-template convention: about, FAQ, disclosure/affiliate-disclosure, privacy, contact.
- **Monetization:** Amazon Associates (US), Toys & Games category, verified rate 3.00%, 24-hour cookie extendable to 89 days on cart-add (see dossier "Monetization sketch"). Purchase links placed inline per ranked expansion row and on expansion detail pages. Enabling live checkout links is a manual per-site act per the `build-site` skill — links are documented/wired but the decision to go live is not part of this build.
- **Digital product (documented, off by default):** a downloadable per-game buy-order cheat-sheet PDF is noted as a future option but is explicitly out of scope to build/enable now.
- **Data update plan:** dataset stored as structured data files (not hardcoded in page templates) so new expansions or games are additive data changes; upkeep cadence is a quarterly full re-scan plus ad-hoc updates when a publisher/BGG announces a new expansion for an already-covered game (per dossier feasibility assessment).

## Testing Decisions

- Tests should verify external, visitor-facing behavior: given a dataset fixture for a game, the correct ranked/filtered list renders; toggling "owned" for an expansion removes it from the "buy next" list and updates any persisted filter state; base-game-required/prerequisite chains display accurately; purchase links resolve to the correct product per row.
- Cover the dataset-to-page rendering logic (per-game page, per-expansion page, comparison page) as the primary testable seam — prefer testing against static data fixtures over live BGG/Amazon data.
- Follow existing test conventions and structure from `sites/runs-on-your-battery-finder/` (the other live house-template site) for consistency across the codebase.
- Out of scope for testing: visual/design regression, and anything requiring live third-party network calls (BGG API, Amazon) — those should be stubbed with fixtures.

## Out of Scope

- Enabling live/real Amazon Associates checkout links (manual per-site act, per `build-site` skill).
- Building or enabling the downloadable cheat-sheet PDF digital product.
- User accounts, saved collections tied to an identity, or any backend/database.
- Automated live scraping/sync from BGG or publisher sites — initial dataset population is a manual/semi-manual data-authoring pass; live sync automation is a future concern.
- Group-size recommendation as a full scoring/ML system — the group-size input only filters/highlights using existing per-row metadata.
- The manual Google AIO checkpoint and a fresh Google-side SERP re-probe — both are still owed before build per the dossier's risk notes, and are a human/agent pre-build task, not part of this spec's implementation.
- Non-US localization or currency handling.

## Further Notes

- The dossier flags the AIO behavior on head queries as unverified (Google blocked the check with a CAPTCHA) — this should be re-checked immediately before this build starts, since SERP/AIO evidence is dated 2026-09-18 and expires 2026-10-16.
- The differentiation vs. incumbents rests entirely on the per-row editorial judgment (worth-it + buy-order) — this must not be reduced to a mechanical BGG-rating sort during implementation, or the hook is lost.
- Exact page count depends on how many base games are covered at launch; recommend starting with a small set of high-signal games evidenced in the dossier (Catan, Dominion, and a few others with confirmed demand) rather than attempting full BGG coverage on day one.
