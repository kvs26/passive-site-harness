# Validate run — 2026-09-01 — dog-treat-portion-calculator

One idea, one session. **Re-validation** of an idea validated 2026-08-19 (evidence expiry 2026-09-16; v3 re-triage same day flagged a mandatory pre-build re-probe: fresh gate-4 SERP + AIO check + moat re-read). Outcome: **rejected** — kill-level finding on the re-probe.

## Setup

- Context read: `idea.md` (v3, Edge block), prior `dossier.md` (2026-08-19, high confidence), prior run log `runs/2026-08-19-validate-dog-treat-portion-calculator.md`, `niche.md` (US default). `keyword-planner.csv` present and fresh (2026-08-19, well inside the ~6-month window) — reused silently, no re-export needed.
- Tools: built-in fetch + DDG html endpoint for SERPs/competitors; `scripts/fanout.py` for autocomplete (several transient connection resets, output complete). No MCP servers used.

## What was dug

1. **Demand refresh** — fan-out over 6 core seeds: denser than 2026-08-19, now with explicit per-weight ("…can a 20/30/40/50/60 lb dog eat", "…a day by weight") and per-age puppy tails. Strong, unchanged.
2. **SERP re-dig (gate-4 re-probe)** — per-food informational SERPs ("how many blueberries…calculator", "how many carrots…by weight") still 100% static articles (one new entrant, focuspetcare.com, still static). **But** the tool-shaped query "dog treat portion calculator by food and dog weight tool" surfaced a crowded interactive field that did not exist in the 2026-08-19 snapshots: realdogsrealpeople, mynubs, dogfoodcheck, usecalcpro, doggycalculators, dogfluence, furcalc, and **calculatorsfordogs.com ×2**.
3. **Moat re-read → KILL** — opened calculatorsfordogs.com's **"Safe Food Portion Calculator for Dogs — Human Foods by Weight"**: dog weight (lbs) + human-food dropdown + feeding context → safe portion; "Covers 30+ foods with preparation notes and warnings"; per-food g/kg limits with count conversions in FAQs ("blueberries … up to 8g per kg … For a 20 lb (9 kg) dog, that is about 72g (roughly 40–50 blueberries)"). It sits in a 139-calculator hub with a free offline Android app and a companion Treat Allowance Calculator (also opened). FurCalc re-opened: unchanged (~25 options → counts, updated 2026-05-16). caneat.pet/tools re-fetched: unchanged, still no portion tool.
4. **Remaining signals** — graded from evidence in hand rather than digging deep on a dead idea (per the demand-first early-stop logic, applied to a hook kill): monetization/feasibility facts from 2026-08-19 left standing as record, not re-verified; AIO manual checkpoint **skipped** (moot after the kill) and recorded as unknown — confidence drops high → medium accordingly.

## The kill

Scout gate 4 / the idea's hook — "This is the only tool that converts a specific food into an exact per-treat count for *your* dog's weight" — is **factually disproven**: a purpose-built incumbent (calculatorsfordogs.com safe-food-portion-calculator) computes exactly food × dog-weight → safe portion, with the per-row per-food judgment (g/kg limits, prep notes, contraindications) this idea named as its replication barrier. The 2026-08-19 dossier's logged erosion risk ("if FurCalc or caneat.pet expands its food list… the edge erodes") materialized via a third party inside two weeks. Surviving edge would be out-breadthing 30+ foods with a USDA-derivable catalog — a coverage race, not a moat; fails replication tests (a)/(b)/(c).

## Dead ends / inconclusive

- realdogsrealpeople.com/tools/treat-portion-calculator/ — fetch failed twice; title/snippet confirm a 10%-rule treat tool; not needed for the kill.
- `fanout.py` — repeated `Connection reset by peer` errors on ~7 variants; remaining output ample.
- AIO probe — deliberately not run (see above), recorded as unknown in the dossier.

## Outcome

- Status: validated → **rejected** (gate 4 disproved; purpose-built incumbent found and opened).
- Dossier rewritten in place (2026-09-01 re-probe sections added; 2026-08-19 keyword/monetization record preserved; confidence medium).
- Board regenerated (row updated).
- Comparison brief check: 0 ideas `validated` in pet-food-tools after this change (can-my-dog-eat-database is `candidate`, rest rejected) — below the ≥3 trigger; no brief.
