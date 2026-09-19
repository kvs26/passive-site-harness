# Legacy Campaign Reset / Resale-Readiness Planner

Status: validated (confidence: low)
Origin: ../../runs/2026-09-19-scout.md

## Idea

The user chooses an exact legacy/campaign game and describes what their group altered, opened, wrote on, stickered, or discarded. The tool determines whether the copy can be reset, identifies the correct official recharge/reset product, and generates either a replay checklist or a transparent resale/completeness report.

## Edge

- **Dataset:** per-game legacy-alteration mapping (what's permanently destroyed vs. resettable, which official reset/recharge kit applies, what a resale listing must disclose) — hand-built from publisher reset-kit documentation and community teardown reports (e.g. Pandemic Legacy's official reset kit).
- **Compute:** per-user-input branch — user's specific alterations → reset-feasibility verdict + correct official product OR a structured resale-completeness disclosure.
- **Long-tail surface:** one page per legacy/campaign game.
- **Monetization route:** affiliate — official reset/recharge kit or replacement components.

## Hook

General AI collectible-scanner apps (valueidentifier.app, minti-app.com) now do "scan, identify edition, completeness assessment, resale value" as a broad multi-category feature — but neither identifies the *correct official reset/recharge product* for a specific legacy game or produces a *replay-readiness* verdict; they only estimate resale value generically.

## Incumbent probe

Dated 2026-09-19. Query: `legacy board game reset kit resale completeness checker` (Bing). Top hits: BGG filepage "Pandemic Legacy Reset Kit" (single-game official product page, not a general tool), **valueidentifier.app** — "Board Game Price Scanner | Instant AI Board Game Valuation... instant identification, price estimation, completeness assessment, and edition..." and **minti-app.com** — "Board Game Value Checker & Scanner | Minti... Scan any game with AI to identify the title, edition, and printing, then check recent resale values" (both general multi-category collectible scanners, not legacy/reset-specific), and a Scribd upload of official Pandemic Legacy restart instructions. This is a **partial overlap, not a clean gate-4 pass**: the resale/completeness half of the hook is drifting toward being served by fast-moving general AI-scanner apps; the reset-kit-identification + replay-checklist half remains unserved. SERP evidence expires ~2026-10-17.

## AIO probe

Not yet run.

## Gate results

- 1 AIO: pass (predict-from-form; checkpoint owed)
- 2 Static feasibility: pass
- 3 Data moat: pass on the reset/reissue-routing half; weaker on the resale-completeness half (see probe)
- 4 Hook served: **near-miss** — partial/diluted overlap on one half of the hook only (general AI scanner apps), not the full hook; judged as clearing gate 4 narrowly since the reset-kit-routing half is unserved, but flagged weak per the near-miss handling for this reason. Competitive exposure risk: general AI collectible-scanner apps are a fast-moving adjacent category likely to expand into more specificity over time.
- 5 Legal/policy: pass
- 6 US-market: pass
- 7 Monetization: pass — affiliate (official reset kits/replacement components)

## Evidence

- valueidentifier.app (via Bing SERP, 2026-09-19): "Scan your board games with Value Identifier's AI to get instant identification, price estimation, completeness assessment, and edition..."
- minti-app.com (via Bing SERP, 2026-09-19): "Scan any game with AI to identify the title, edition, and printing, then check recent resale values."
- BGG filepage (via Bing SERP, 2026-09-19): "Pandemic Legacy Reset Kit" — "So the reset kit for me allows me to actually get full use out of the game I paid for..."

## History

- 2026-09-19 — candidate (emitted by scout run, user-supplied candidate triage; marked weak due to partial overlap with general AI collectible-scanner apps)
- 2026-09-19 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. See [dossier.md](./dossier.md) — all six signals graded weak; no kill-level finding.
- 2026-09-20 — validated (confidence: low). Keyword Planner CSV top-up ingested: every reset-kit head term tops out at the bare-minimum 50 bucket and every resale/completeness phrasing is zero/no-data — confirms rather than rescues the weak Demand grade; Monetization stays weak too (one supporting keyword, `card sleeves board game`, at 500 bucket / ~$0.38–$0.98 USD-equiv bid, doesn't close the per-game affiliate-linkability gap). No kill-level finding. SERP/AIO evidence expires 2026-10-17; pre-build re-probe mandatory.
