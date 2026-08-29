# Validate run — 2026-08-29 — ai-employee-bundle-catalog (agent-skills-hub)

Idea: role-based agent-skill bundle catalog ("AI marketing assistant", "AI QA engineer", "AI bookkeeper"). Origin: 2026-08-25 scout, emitted `candidate (weak)` on a gate-4 near-miss vs analoghq.ai.

Outcome: **rejected** — gate 4 (specific hook) disproved on evidence. Confidence: medium (no Keyword Planner CSV).

## What was dug

- **Demand (pass 1).** Autocomplete fan-out on 10 seeds. Two findings: (a) "ai employee" phrasing is owned by SaaS agents/HR-monitoring (ghl, artisan, builder, monitoring software), not downloadable bundles; (b) "claude code skills for <role>" is an enormous surface (marketing, lawyers, finance, managers, copywriting, excel, sales…). Bundle/pack phrasing ("agent skills bundle", "skill kit", "agent zero skills pack") exists but is thin/tail. HN shows the underlying role-skill need recurs (multiple "Claude Skills for Marketing" posts). Demand for the *category* graded strong; but it's directory/category demand, not demand for a new catalog.
- **SERP + hook depth.** Bing SERP for "claude skills for marketing bundle install" is fully saturated with the exact product: aiskill.market (paid bundle marketplace, incl. "2,350+ Skills… in One Package"), analoghq.ai (curated installable Sets), claudeskills360.com ("42 AI Marketing Skills" bundle), claudedirectory.org ("All Marketing Skills"), marketing-skills.com, plus coreyhaines31/marketingskills and alirezarezvani/claude-skills (205+). The idea's differentiators — per-job-function, curated, install-in-one-sitting, storefront-for-a-paid-bundle-later — are each already implemented.
- **Feasibility/maintenance + unique data.** HN teardown (item 48383439) confirms the artifact is commodity markdown ("Notion template, not a moat"; "diffed and ported in an afternoon") and that incumbents already carry the verification/refresh moat (analoghq dated Verified/Secure badges). No unique dataset surfaced that incumbents or the sibling compat-matrix idea don't already target.

## Early-stop decision

Applied the demand-first rule loosely inverted: demand was fine, but the SERP/hook pass conclusively disproved gate 4 early, so remaining signals (monetization, feasibility, unique-data) were graded from evidence already in hand rather than dug deep on a dead idea.

## Keyword Planner checkpoint

Skipped — no CSV written and none requested. A served hook can't be un-served by search volume, so a Planner export wouldn't move the verdict. Confidence stays capped at medium per rule; verdict is rejection regardless.

## Dead ends / inconclusive

- DDG adapter returned empty/bot-challenge on all three queries (same as scout run) — Bing via Playwright used instead.
- HN item 48373037 ("way to find and install Claude skills") returned HTTP 429; not fetched. Corroborating incumbents already sufficient.
- Reddit not attempted (no OAuth creds; HN + SERP + incumbent pages already gave ≥2 independent pieces per graded signal).
