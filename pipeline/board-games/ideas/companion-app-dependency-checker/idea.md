# Companion-App Dependency & Future-Proofing Checker

Status: validated
Origin: ../../runs/2026-09-19-scout.md

## Idea

The user selects an exact board game edition and the devices/platforms their group owns. The tool reports whether a companion app is mandatory or optional, current platform support, offline/account/server dependencies, the last-verified support state, and the safest fallback if support disappears.

## Edge

- **Dataset:** per-edition companion-app requirement + platform support history (iOS/Android/web, offline mode, account requirement, server dependency) for the bounded set of digital-hybrid games (Alchemists, XCOM: The Board Game, Chronicles of Crime, Detective: A Modern Crime Board Game, Space Cadets, Mansions of Madness 2e, District Noir, Sherlock Holmes Consulting Detective digital companion, etc.) — hand-verified against current app store listings and publisher statements, re-checked periodically.
- **Compute:** per-user-input match — the user's specific edition × their devices → mandatory/optional + current support status + fallback recommendation.
- **Long-tail surface:** one page per digital-hybrid game edition.
- **Monetization route:** affiliate, narrow — links to the base game itself, or to a recommended non-digital-dependent alternative when support is at risk. Weakest of the batch; no clean accessory/replacement purchase most rows.

## Hook

Scattered community lists (e.g. a BGG geeklist of "games with official companion apps") exist but nothing checks mandatory-vs-optional status, current platform support, offline/account/server dependency, and a fallback plan per specific edition and device combination.

## Incumbent probe

Dated 2026-09-19. Query: `board game companion app required optional support checker` (Bing). Top hits were generic companion-app *products* (Board Game Companion tracker apps on Google Play/App Store — these are digital scorekeeping/tracking utilities, not compatibility checkers), an AI-powered GitHub side project, and a BGG geeklist "Games with Official Companion Apps (And Where to Find Them)" — a static, unverified, incomplete community list, not an interactive per-edition checker. No incumbent found on the actual hook. SERP evidence expires ~2026-10-17.

## AIO probe

Not yet run (predict-from-form only). Multi-attribute lookup shape (game/edition × device/platform) — assessed low-moderate AIO risk pending the manual checkpoint.

## Gate results

- 1 AIO: pass (predict-from-form; checkpoint owed)
- 2 Static feasibility: pass
- 3 Data moat: pass, but highest maintenance-risk of the batch — app support status changes on publisher decisions/store delistings; must be scoped to a bounded digital-hybrid-game list to stay within the upkeep cap
- 4 Hook served: pass — only a static, incomplete community list found, not the interactive checker
- 5 Legal/policy: pass
- 6 US-market: pass
- 7 Monetization: pass narrowly — weakest route of the five emitted candidates; flagged weak

## Evidence

- BGG geeklist (via Bing SERP, 2026-09-19): "Games with Official Companion Apps (And Where to Find Them)"
- Google Play/App Store listings (via Bing SERP, 2026-09-19): multiple generic "Board Game Companion" tracker/scorekeeping apps — confirmed these are not compatibility-checker tools.
- Monetization route: `unknown` exact affiliate mechanics for the alternative-recommendation angle — verify at validate; treat as the weakest emitted candidate on this axis.

## History

- 2026-09-19 — candidate (emitted by scout run, user-supplied candidate triage; marked weak on monetization)
- 2026-09-19 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate.
- 2026-09-20 — validated (confidence: high). Top-up on the 2026-09-19 dossier: Keyword Planner CSV ingested — 17 of 19 requested keywords (incl. every Variants/Future-proofing phrasing) came back absent from the export, and the 2 that registered topped out at the 50 bucket; per the rubric this gives no support toward a Demand upgrade, so Demand stays strong on qualitative evidence alone, but the traffic sanity-check now reads worse with real bucket data in hand. No kill-level finding — SERP/AIO, monetization, feasibility, and moat readings are unchanged from 2026-09-19. SERP/AIO evidence expires 2026-10-17; pre-build re-probe mandatory.
