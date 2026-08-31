# Spec: passive-site-harness V1

Status: ready-for-agent

## Problem Statement

I want to build a portfolio of small, passive-income static websites as a solo side project. Finding ideas worth building is the hard part: ad-hoc research sessions produce vague, unverifiable ideas, invented numbers, and no memory between sessions. I need a repeatable, evidence-driven way to discover website ideas, validate them against real demand signals, compare the survivors, and turn the one I pick into a build-ready PRD — without paid SEO tools, and with every judgment call left to me.

## Solution

A harness made of **skills + markdown files on disk** (no app, no CLI) covering pipeline stages 1–4:

1. **Discovery** — an `idea-scout` skill runs one bounded research pass per niche, mining free US-market sources for real problem statements, filtering candidates through six hard gates, and writing 3–5 candidate ideas (with raw evidence) to disk.
2. **Validation** — an `idea-validate` skill deep-dives one candidate per run, producing an evidence dossier that grades six signals strong/weak/unknown (never numeric) with real quotes and links.
3. **Comparison & pick** — when ≥3 ideas in a niche are validated, a comparison brief lays them side by side; the human picks.
4. **PRD** — the picked idea goes through the existing `/to-spec` skill with a site-PRD template attached, producing a build-ready `prd.md`.

All state lives in a `pipeline/` directory readable by any future session. Building the sites (stages 5–8) is out of scope; sites will later live at `sites/<slug>/` as independent nested git repos.

## User Stories

1. As a solo builder, I want an `idea-scout` skill I can invoke on demand, so that idea discovery is a bounded session instead of an open-ended rabbit hole.
2. As a solo builder, I want the scout to propose 3–5 candidate niches with one-line rationales when I give no theme, so that I always make the niche choice myself.
3. As a solo builder, I want to optionally pass seed topics to the scout, so that I can steer discovery when I already have a hunch.
4. As a solo builder, I want the scout to run a fixed, demand-first pass order (autocomplete fan-out → pain mining → SERP/competitor scan → Trends/datasets), so that every run gathers the same classes of evidence.
5. As a solo builder, I want the scout to pick 5–8 sources spanning ≥3 signal groups from a published source catalog and justify each pick in the run log, so that runs are broad without any single source being mandatory.
6. As a solo builder, I want discovery bounded at ~25–40 distinct raw problem statements (stopping a pass early when two consecutive sources add nothing new), so that runs end instead of sprawling.
7. As a solo builder, I want six hard gates (answer-it test, static feasibility, maintainable data, specific hook, legal/policy risk, US-market fit) applied to every candidate, so that obviously doomed ideas die early with a recorded reason.
8. As a solo builder, I want gate failures recorded in the run log but never written as ideas on disk, so that the pipeline holds only live candidates.
9. As a solo builder, I want every scout run to end with 3–5 candidate files — weak ones kept and marked — each with a one-line idea, the hook, gate results, and raw evidence, so that nothing is lost between sessions.
10. As a solo builder, I want the scout to degrade gracefully when Reddit or any credentialed source is unreachable (noting the gap in the run log), so that no source is a single point of failure.
11. As a solo builder, I want deterministic fetch scripts for autocomplete fan-out and pain-source fetching with pluggable adapters, so that fragile HTTP work is repeatable and cached.
12. As a solo builder, I want optional credentialed adapters (Reddit OAuth, GitHub PAT, Keyword Planner CSV import) activated by a gitignored `.env`, so that I can upgrade source access without ever committing secrets.
13. As a solo builder, I want an `idea-validate` skill that deep-dives exactly one candidate per run, so that validation depth is never diluted across ideas.
14. As a solo builder, I want validation to re-verify scout evidence rather than trust it, so that dossiers stand on their own.
15. As a solo builder, I want validation to stop early when demand turns out dead, marking the idea rejected with a reason, so that I don't pay for full dossiers on corpses.
16. As a solo builder, I want each dossier to grade six signals (demand, SERP/competitor weakness, hook depth, monetization, feasibility+maintenance, unique data) as strong/weak/unknown, so that judgments are qualitative and comparable.
17. As a solo builder, I want every grade to carry a one-line why plus real quotes/links (≥2 independent, fresh-ish sources for "strong"), so that no grade can exist without evidence.
18. As a solo builder, I want "unknown" to be a first-class grade recording what was searched, so that later passes don't repeat dead ends and no figure is ever invented.
19. As a solo builder, I want a per-dossier confidence grade (high/medium/low = how much digging backs it up), so that I know how far to trust a dossier independent of the idea's merits.
20. As a solo builder, I want dossiers structured in six fixed sections (verdict, scorecard, SERP snapshot, monetization sketch, risks & unknowns, sources log), so that every dossier reads the same way.
21. As a solo builder, I want a comparison brief auto-generated (regenerated, not stacked) once a niche has ≥3 validated ideas, so that I compare ideas at a glance.
22. As a solo builder, I want the brief to contain a one-glance table, per-idea paragraphs, the agent's clearly-labelled opinion, and an explicit "you pick" prompt, so that the final call is unmistakably mine.
23. As a solo builder, I want only picked ideas to get a PRD, produced by `/to-spec` with the site-PRD template attached, so that PRD effort is spent only on winners.
24. As a solo builder, I want the site-PRD template to add seven site-specific sections (core job, data source & update plan, page map, SEO targets, monetization placement, maintenance plan, standing constraints) to the generic spec shape, so that every site PRD is build-ready.
25. As a solo builder, I want all pipeline state under `pipeline/<niche>/` with a canonical `Status:` line in each `idea.md` and a derived global `pipeline/board.md`, so that any future session discovers current state by opening one file.
26. As a solo builder, I want the idea lifecycle candidate → validated → picked → spec'd (plus rejected/parked side-exits, with dated reasons), so that every idea's history is auditable.
27. As a solo builder, I want run logs (`runs/<date>-scout.md`, `runs/<date>-validate-<idea>.md`) recording sources used, dead ends, and gate failures, so that research is never silently repeated.
28. As a solo builder, I want all human checkpoints (niche pick, idea pick, PRD approval, anything spending money) to remain manual prompts, so that the harness never acts on my behalf at a decision point.
29. As a solo builder, I want the harness workspace to become a git repo with `sites/` and `.env` gitignored, so that harness state is versioned while site repos stay independent.

## Implementation Decisions

- **Form factor:** two project skills — `idea-scout` and `idea-validate` — as SKILL.md files under `.agents/skills/`, plus a standalone site-PRD template at `docs/agents/site-prd-template.md` attached at `/to-spec` invocation (the `/to-spec` skill itself is unmodified). No custom PRD skill. Accepted drafts exist as prototypes: [idea-scout](prototypes/idea-scout-SKILL.md), [idea-validate](prototypes/idea-validate-SKILL.md), [comparison-brief template](prototypes/comparison-brief-template.md).
- **Target market:** US by default (queries, Trends geo, forums, datasets, monetization); a niche may override in `niche.md`.
- **Scout flow:** one niche per run, user-picked from 3–5 agent proposals; fixed pass order autocomplete → pain mining → SERP/competitor → Trends/datasets; passes 1–2 outcome-bounded (~25–40 problem statements), passes 3–4 coverage-bounded (all survivors / shortlist).
- **Source access (research-verified):** reliable free core = Google suggest JSON endpoint, DDG SERPs, HN Algolia API, iTunes review RSS. Reddit via access ladder (DDG `site:reddit.com` → browser → manual checkpoint → OAuth adapter). Trends and Keyword Planner are manual/browser CSV-export passes. Full capability table in [research/01-source-access.md](research/01-source-access.md).
- **Hard gates (scout, pass/fail):** answer-it test; static feasibility (no accounts/DB/backend/paid APIs); maintainable data (≤ quarterly refresh, free public source); specific one-sentence hook; legal/policy risk; US-market fit.
- **Validation rubric:** six signals; strong = ≥2 independent, fresh-ish evidence pieces; independence = different site or different community/thread; evidence >~2 years old counts toward weak unless corroborated; a grade without a link/quote beside it is invalid.
- **Never numeric:** no scores, no invented search volume/CPC/difficulty/traffic/revenue figures anywhere; "unknown" is first-class.
- **State layout:** `pipeline/board.md` (derived, regenerated by any state-changing session) + `pipeline/<niche>/{niche.md, comparison-<date>.md, runs/, ideas/<slug>/{idea.md, dossier.md, prd.md}}`. `Status:` line in `idea.md` is canonical. Scout owns board/niche upkeep for its changes; validate for its own.
- **Helper scripts:** two deterministic fetch scripts (autocomplete fan-out with caching/dedup; pain-source fetcher with pluggable adapters), created by the first scout session if missing. Credentials only via gitignored `.env`; graceful degradation when absent.
- **Monetization:** AdSense is the default assumption in PRDs; a fuller playbook is deferred until validated ideas reveal real paths.
- **Sites layout (for stage 5, decided now):** `sites/<slug>/` inside this workspace, each its own nested git repo with its own GitHub remote; harness repo gitignores `sites/`; site repo creation happens at build time with user confirmation.
- **Build handoff:** picked idea → `/to-spec` (+ template) → optionally `/to-tickets` → `/implement` or `/tdd`.
- **Domain glossary** (niche, dossier, board, lifecycle, run log) recorded in `CONTEXT.md`.

## Testing Decisions

- The harness is skills + conventions, not code, so the test is **behavioral: one full vertical slice** — run scout once on a single niche, validate the survivors, human picks one, `/to-spec` + template produces its PRD. That pass is the V1 acceptance test.
- Good "tests" here check external behavior only: files land where the layout spec says, `Status:` lines transition legally, every grade has evidence beside it, run logs record sources and gaps, and human checkpoints actually stop for input.
- The two fetch scripts are the only conventional code; they should be small, deterministic, and testable by running against live endpoints with cached fixtures (prior art: probe results in [research/01-source-access.md](research/01-source-access.md)).
- Skill refinement is an explicit post-slice loop: whatever the first real run teaches becomes edits to the SKILL.md files.

## Out of Scope

- Paid SEO tools/APIs (DataForSEO, Ahrefs, SEMrush, Keywords Everywhere).
- Harness machinery for stages 5–8 (build, SEO testing, preview, deploy) — per-site work using existing skills; possible V2.
- Automating any human checkpoint: deployment, domain purchase, community posting, AdSense signup, spending money.
- Scheduled/automatic discovery runs — all V1 runs are manually triggered.
- Multi-site scale/factory features (dashboards, portfolio analytics).
- A `built` lifecycle state (extends later with stages 5–8).
- Monetization playbook detail (deferred until first validated ideas).

## Further Notes

- Wayfinder map and full decision history: [map.md](map.md); each decision's detail lives in its ticket under [issues/](issues/).
- First implementation step: install the two prototype SKILL.md files into `.agents/skills/`, init the harness git repo with `.gitignore` (`sites/`, `.env`), then run the vertical slice.
- Reddit is first-class but optional; a Reddit-free run must still succeed.
