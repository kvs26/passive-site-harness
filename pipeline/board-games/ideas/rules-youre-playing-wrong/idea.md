# Rules You're Playing Wrong

Status: validated (high)
Origin: ../../runs/2026-09-18-scout.md

## Idea

A per-game database of the rules people most commonly play wrong, each verified against the official rulebook + errata + designer clarifications, with an interactive "check your game" checklist so a player can confirm which ones they've been getting wrong.

## Edge

- **Dataset:** per-game list of commonly-misplayed rules — each row citing the correct ruling, the source (rulebook page / official FAQ / designer post), and why it's commonly missed — built by **merging** BGG rules-forum threads + official errata/FAQ + designer clarifications, with **per-row hand-verification** against a primary source and **editorial judgment** on which rules are *commonly* misplayed (not just every rule). Merge + hand-verify + judgment moat.
- **Compute:** interactive per-game checklist — the user ticks how they've been playing and sees which rules they likely have wrong, with the corrected ruling. More than a static dump; a per-user filter over the game's misplay set.
- **Long-tail surface:** one page per game (`/catan/rules-youre-playing-wrong`), plus per-rule pages — thousands of pages.
- **Monetization route:** affiliate — Amazon Associates (US), Toys & Games (buy the game, upgraded/replacement components, or a rules-reference accessory), plus hobby display ads. Exact category rate `unknown`, verify at validate. Documented-only.

## Hook

The "rules everyone gets wrong in [game]" answer is currently scattered across forum threads and YouTube videos — no consolidated, per-game, source-verified database with a checklist to self-audit.

## Incumbent probe

Dated 2026-09-18. Queries: `board game first turn walkthrough common rules mistakes per game database`; `board game teaching guide how to teach per game teach order script`. Top hits: **generic method articles** ("How to Teach Board Games: The Broad-to-Narrow Method", "How to Teach Any Board Game in Under 10 Minutes", "13 Easy Steps"); **scattered forum threads** ("Rules Explanation Scripts : r/boardgames", "Common mistakes in first plays?", "What are some board game rules that people get wrong"); per-game YouTube ("Common Board Game Rule MISTAKES I Have Made"). Confirmed gap: the plain-rules-summary sites (board-game-rules.com, ultraboardgames.com, officialgamerules.org) reprint the *full* rules; none isolates and source-verifies the *commonly-misplayed* subset with a self-audit checklist. SERP evidence expires ~2026-10-16.

## AIO probe

Predict-from-form only (manual checkpoint owed — this is the most AIO-exposed of the three, prioritize its checkpoint). Head queries "[game] common mistakes" / "rules you get wrong in [game]" are question-shaped (≈58–86% AIO trigger) — **watch-item**. The wedge: AIO answers from the same scattered threads this consolidates, but the per-game source-verified checklist and self-audit interaction are what a summary can't reproduce. Must survive the pass-5 manual checkpoint before build; marked as the run's most fragile emit.

## Gate results

- **1 AIO:** pass with caution — question-form head queries carry real AIO risk; the interactive checklist + source-verification is the wedge. **Near-miss flagged; manual checkpoint owed and decisive.**
- **2 Static feasibility:** pass — static dataset + client-side checklist.
- **3 Data moat:** pass — merge forum + errata + rulebook with per-row hand-verification and misplay-judgment; upkeep periodic within cap.
- **4 Hook served:** pass — full-rules dumps and generic method articles exist, not a source-verified commonly-misplayed database (see probe).
- **5 Legal/policy:** pass — cites rules facts/rulings; no reproduction of full copyrighted rulebooks (summary + citation only).
- **6 US-market:** pass.
- **7 Monetization:** pass via **affiliate** (Amazon Toys & Games) + hobby ads. Exact rate to verify.

## Evidence

- SE `boardgames` q/8891 — "How can I teach other people game rules?" https://boardgames.stackexchange.com/q/8891 ("in Dominion, new players often buy too many action cards" — a documented common misplay).
- SE `boardgames` q/25399 — "Are there simplified rules for Race for the Galaxy?" https://boardgames.stackexchange.com/q/25399.
- SE `boardgames` q/18944 — "Can you play a new player game of Carcassonne w/o farms?" https://boardgames.stackexchange.com/q/18944 (the farmer rule as the canonical teach/misplay trap).
- Google SERP 2026-09-18: forum threads "Rules Explanation Scripts", "Common mistakes in first plays?", "What are some board game rules that people get wrong"; video "Common Board Game Rule MISTAKES I Have Made"; generic method articles (Broad-to-Narrow, 13 Easy Steps).
- Amazon Associates Toys & Games rate: `unknown` (verify at validate).

## History

- 2026-09-18 — candidate (emitted by scout run, deeper re-dig pass; most AIO-exposed of the three)
- 2026-09-18 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). AIO near-miss also flagged (rules-misplay phrasing escapes full AIO, but adjacent "[game] common mistakes" phrasing is fully AIO-answered for strategy — re-check at pre-build). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.
- 2026-09-20 — validated (confidence: high). Top-up run ingesting `keyword-planner.csv`: all 18 content-hook keywords (head/variants/hook-specific) absent from the export — no measurable Google search volume; only the 3 generic buy-intent keywords registered (500 bucket each). No support toward a Demand upgrade per the rubric, but a material, dated risk carried into the traffic sanity-check. No kill-level finding. SERP/AIO evidence expires 2026-10-16 (unchanged, not re-probed this run); pre-build re-probe mandatory.
