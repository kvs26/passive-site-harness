# Validate run — 2026-08-29 — non-dev-skills-directory

Niche: agent-skills-hub. Idea: Non-Developer Agent Skills Directory (candidate, weak → **rejected**).
Origin scout: ../runs/2026-08-25-scout.md (gate-4 near-miss flagged; validation confirmed the near-miss).

Credentials: no `.env` for Reddit/GitHub OAuth → credential-free adapters + Bing SERP via Playwright browser. Brave Search MCP configured but not exposed as a tool this session; used `scripts/fanout.py`, `scripts/pain-fetch.py`, `fetch_webpage`, and the shared Bing browser page.

## What was dug

1. **Demand (pass 1):** autocomplete fan-out (plain + alpha) on "claude skills for", "agent skills for", "ai agent skills for", "claude skills excel", plus Excel/PowerBI/PowerPoint/BA seeds. Result: strong per-profession breadth (finance, marketing, HR, legal, business analyst, financial analysis/modelling, equity/investment research, market research, lead gen, email marketing, resume, product managers, excel, google sheets). Pain-source dig (HN ×3 queries, GitHub) found **no recurring "can't find non-dev skills" complaint**; Reddit unreachable (DDG bot-challenged).
2. **SERP & competitor (the decider):** Bing SERPs for "claude skills for excel" and "claude skills for marketing business analyst". Both first pages are dominated by curated per-use-case skill pages, a profession-organized skills library, per-role listicles, and the official Claude-for-Excel add-in — no thin-content gap.
3. **Hook depth:** fetched the strongest incumbent — takusaotome **Claude Skills Library** — which is the proposed idea already built: non-dev category tree (management / finance / ops / meta), rich plain-English per-skill pages, one-click `.skill` downloads. Also confirmed claudedirectory.org (use-case browse + per-role pages + newsletter) and the 25k-star alirezarezvani/claude-skills (Marketing/C-Level/PM/Regulatory/Finance/Business-Ops domain bundles).
4. **Monetization / feasibility / unique-data:** graded from evidence in hand (idea already dead on gate 4). Incumbents monetize via newsletter/audience, not visible display ads; build model is a static curated index (feasible); no proprietary data (skills are public MIT repos).

## Keyword Planner checkpoint

**Skipped as a park trigger.** The checkpoint normally runs after demand pass 1, but the SERP/hook dig disproved scout gate 4 before volume could matter. Per the guinea-pig-food-database / xylitol-brand-directory precedent, a gate-4 disproof is a **rejection**, not a park-for-CSV — so no `keywords-request.md` was written. Volume can't revive an already-served hook.

## Dead ends / inconclusive

- HN Algolia: no relevant non-dev-directory pain across three queries.
- DDG `pain-fetch.py ddg`: bot-challenged (empty) — same as prior runs; switched to Bing browser.
- github.com/AtaBGrimm/awesome-claude-corporate-skills: 404 on fetch (title confirmed in SERP; a "Corporate Skills" list is one more non-dev-cut incumbent).
- No Keyword Planner CSV → monetization CPC unknown (recorded in dossier Risks).

## Outcome

- **Rejected** — scout gate 4 disproved at evidence level: the non-dev curation hook (plain-English, profession-organized, dev-noise-filtered) is already served by ≥3 independent maintained incumbents (takusaotome Claude Skills Library, claudedirectory.org, alirezarezvani/claude-skills), plus dense per-role listicle content. Demand is real (query breadth) but there is no unserved cut — the same failure mode the scout predicted and that killed guinea-pig-food-database.
- Dossier kept as the record. Board regenerated. Comparison-brief trigger not met (0 validated in this niche; parked/rejected never count).
