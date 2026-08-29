# Dossier: Non-Developer Agent Skills Directory

**A directory of agent skills curated for non-dev professions (Excel/BI analysts, PMs, marketers, business analysts) with plain-English descriptions and install walkthroughs — but the "editorial curation + non-dev onboarding" hook is already served by profession-organized skill libraries, use-case-browse directories, and dense per-role listicle content, so scout gate 4 is disproved; confidence: medium.**

## Signal scorecard

**Demand: strong** — the per-profession framing fans out to dozens of non-dev roles in autocomplete, and independent publishers are already building content against those exact queries.
  - Autocomplete (Google, US, `scripts/fanout.py`, this run) on "claude skills for": "…for finance", "…for marketing", "…for financial analysis", "…for financial modelling", "…for equity research", "…for investment research", "…for business analyst", "…for hr" / "…for hr professionals", "…for lawyers" / "…for legal", "…for consulting", "…for market research", "…for lead generation", "…for email marketing", "…for resume" / "…for resume writing", "…for product managers", "…for excel", "…for google sheets" — explicit per-non-dev-role breadth.
  - Autocomplete on "ai agent skills" and "claude skills excel": "ai agent skills excel", "ai agent skills for finance", "ai agent skills for project management", "claude skills for excel analysis", "claude excel finance skills", "how to add excel skills to claude" — office/analyst intent recurs across independent seed stems.
  - Revealed demand via content supply: multiple independent publishers rank dedicated per-role roundups — "25 Best Claude Skills for Marketing in 2026" (get-ryze.ai/blog), "8 Best Claude Skills for Marketing Teams in 2026" (https://lessie.ai/blog/claude-skills-for-marketing), "30+ Best Claude Marketing Skills for Growth Teams" (metaflow.life) — three independent sites building for the same profession query set.

**SERP & competitor weakness: weak** — the profession/use-case queries are owned by mature curated directories, a profession-organized skills library, and a 25k-star multi-role library; there is no thin-content gap to beat.
  - "claude skills for excel" (Bing, this run): an AI/Copilot answer box explaining the official **"Claude for Excel" add-in**, then claudeskills.org's "Xlsx Skill — Build & Analyze Spreadsheets" (https://www.claudeskills.org/docs/skills-cases/xlsx), claudedirectory.org's "Best Excel / Spreadsheets (XLSX) Skill for Claude Code (August 2026)" (https://www.claudedirectory.org/skills/xlsx), and mcpmarket.com's "Excel XLSX Skill for Claude Code | Spreadsheet Automation" (https://mcpmarket.com/tools/skills/excel-spreadsheet-expert) — every top slot is a curated per-use-case skill page or the vendor's own tool, not beatable static filler.
  - "claude skills for marketing business analyst" (Bing, this run): takusaotome "Business Analyst | Claude Skills Library", claudedirectory.org "Best Marketing Skills Skill for Claude Code", get-ryze.ai "25 Best Claude Skills for Marketing", lessie.ai "8 Best Claude Skills for Marketing Teams", metaflow.life "10 Essential Claude Skills Every Marketing Agency Should Build", medium.com "The IT Business Analyst Skill for Claude", plus a GitHub "Awesome Claude Corporate Skills" list and coreyhaines31/marketingskills — the whole first page is profession-cut curation.

**Hook depth: weak** — the differentiator (curate skills by non-dev profession, plain-English pages, filter out dev noise) is not our invention; it already ships as finished, actively-maintained products.
  - takusaotome **Claude Skills Library** (https://takusaotome.github.io/claude-skills-library/en/skills/management/business-analyst/, fetched this run) is organized into exactly the non-dev cuts — "Project & Business", "Operations & Docs", "Finance & Analysis", "Meta & Quality" alongside "Software Development" — with rich plain-English pages (Overview / When to Use / Prerequisites / Usage Examples / Troubleshooting / Related Skills) and one-click ".skill" downloads. Its management section alone covers Business Analyst, Project Manager, Pricing Strategist, Talent Acquisition Specialist, Change Management Consultant, Competitive Intelligence Analyst, Contract Reviewer, KPI Designer, M&A Advisor, Supply Chain Consultant, Executive Briefing Writer — the exact "office worker" audience the idea targets.
  - claudedirectory.org (https://www.claudedirectory.org/skills/claude-skills-marketing-skills, fetched this run) offers "Browse by Use Case" and per-role skill pages (Marketing, Customer Success Manager, Xlsx) with a running newsletter ("Join 1,000+ subscribers"), i.e. the non-dev onboarding layer already exists.
  - The most-cited library, github.com/alirezarezvani/claude-skills (**25k stars**, updated "4 days ago", surfaced via claudedirectory this run), bundles skills by non-dev domain — Marketing (48), C-Level Advisory (68), Project Management (9), Regulatory & QM (19), Finance, Business Operations, Research — with per-domain installers. The curated non-dev cut is saturated, not open.

**Monetization paths: weak** — a route exists but the incumbents in this exact space monetize via audience/newsletter, not a demonstrated display-ad or affiliate pattern, and there's no CPC evidence.
  - claudedirectory.org runs an email capture ("The best new Claude Code prompts, MCP servers, and skills — every week… Free, short, no spam", fetched this run) rather than visible display ads; takusaotome's library is a MIT-licensed GitHub Pages site with no ads (fetched this run). The observed model is audience/lead-gen, not AdSense RPM.
  - No Keyword Planner CSV this run → no top-of-page bid evidence; monetization CPC is unverified.

**Feasibility & maintenance: strong** — a curated static index over public GitHub skill repos is clearly buildable (every incumbent is exactly that), with a real but ~quarterly-manageable refresh burden.
  - takusaotome's library, claudedirectory.org, and alirezarezvani/claude-skills are all static/curated indexes over open-source SKILL.md repos — no backend, no paid APIs — proving the build model. Churn is real (alirezarezvani "Updated 4 days ago"; skill links rot), so refresh must at least keep quarterly pace, consistent with the scout's gate-3 "pass with note".

**Unique-data opportunity: weak** — there is no proprietary or derivable dataset; the underlying skills are public GitHub repos anyone can index, and the only "data" (editorial curation by profession) is already produced better by incumbents.
  - The skill catalogs are open-source (MIT) repos surfaced by every incumbent this run; curation is the sole differentiator and it is not exclusive. No combinable/derivable structure competitors lack was found.

**Confidence: medium** — SERP-weakness and hook-depth are each graded from ≥2 independent incumbents, and demand breadth is evidenced; but there is no Keyword Planner CSV (caps confidence at medium) and monetization CPC + unique-data remain unverified. The verdict (gate-4 disproof) does not hinge on volume, so the missing CSV does not change it.

## SERP snapshot

- **"claude skills for excel" (Bing, 2026-08-29):** Copilot answer box → official "Claude for Excel" add-in (claude.com docs); then claudeskills.org/docs/skills-cases/xlsx (per-use-case skill page), claudedirectory.org/skills/xlsx ("Best Excel / Spreadsheets (XLSX) Skill… August 2026"), mcpmarket.com/tools/skills/excel-spreadsheet-expert, Anthropic docs, GitHub cookbooks. No beatable thin-content gap — the office/Excel query is owned by curated skill pages and the vendor tool.
- **"claude skills for marketing business analyst" (Bing, 2026-08-29):** takusaotome "Business Analyst | Claude Skills Library", claudedirectory.org "Best Marketing Skills Skill for Claude Code", get-ryze.ai "25 Best Claude Skills for Marketing", lessie.ai "8 Best Claude Skills for Marketing Teams", metaflow.life "10 Essential Claude Skills Every Marketing Agency Should Build", medium.com "The IT Business Analyst Skill for Claude", GitHub "Awesome Claude Corporate Skills" + coreyhaines31/marketingskills. Entire first page is profession-cut curation — the proposed hook, already live and multiplied.

## Keyword data

No Keyword Planner export this run (`keyword-planner.csv` absent). Because the dig disproved scout gate 4 (hook already served) before the checkpoint could change the outcome, the idea is rejected rather than parked for CSV — matching the guinea-pig-food-database and xylitol-brand-directory precedents (demand real, no unserved cut). Volume data would not revive an already-served hook. If the idea is ever re-opened on a *narrower* unserved cut, request buckets for: "claude skills for excel", "agent skills for business analyst", "ai agent skills for finance", "claude skills for marketing".

## Monetization sketch

Likeliest route would be display ads on per-role landing pages plus affiliate/lead-gen to skill authors or AI tools — but the incumbents in this exact niche run newsletters and GitHub-star audience instead of visible display ads (claudedirectory's "1,000+ subscribers" capture; takusaotome/alirezarezvani ad-free), and there is no CPC evidence this run. Monetization is the weakest supported path even before the gate-4 problem.

## Risks & unknowns

- **Monetization CPC — unknown:** no Keyword Planner CSV; searched incumbent pages (claudedirectory, takusaotome) for ad/affiliate presence and found newsletter/audience models, not display-ad RPM. Top-of-page bids unverified.
- **Community-pain recurrence — thin:** HN searches ("claude skills excel spreadsheet", "agent skills directory non-developer", "claude skills marketing finance office") returned no recurring "I can't find non-dev skills" complaint; Reddit not reached (DDG `pain-fetch` bot-challenged, as in prior runs). Demand is inferred from autocomplete breadth + content supply, not forum recurrence.
- **Gate-4 (fatal):** the non-dev curation hook is served by ≥3 independent, maintained incumbents; no evidence of an unserved sub-cut was found this run.

## Sources log

- `scripts/fanout.py` (Google autocomplete, US): seeds "agent skills excel", "agent skills power bi", "agent skills business analyst", "agent skills powerpoint", "claude code skills excel", plus alpha fan-out on "claude skills for", "agent skills for", "ai agent skills for", "claude skills excel" — per-profession breadth (finance/marketing/HR/legal/BA/resume/excel/sheets…).
- `scripts/pain-fetch.py hn` — "claude skills excel spreadsheet", "agent skills directory non-developer", "claude skills marketing finance office": no relevant recurring pain (dead ends logged).
- `scripts/pain-fetch.py github` — "agent skills non-developer excel": no relevant complaint (noise/digests).
- `scripts/pain-fetch.py ddg` — "claude skills for excel" / "agent skills for business analyst" / "claude skills for finance" / "ai agent skills for non developers": empty (bot-challenged; switched to Bing).
- Bing SERP (this run): `claude skills for excel` — Claude-for-Excel add-in, claudeskills.org/docs/skills-cases/xlsx, claudedirectory.org/skills/xlsx, mcpmarket.com/tools/skills/excel-spreadsheet-expert.
- Bing SERP (this run): `claude skills for marketing business analyst` — takusaotome BA page, claudedirectory marketing, get-ryze.ai, lessie.ai, metaflow.life, medium.com IT-BA skill, GitHub "Awesome Claude Corporate Skills", coreyhaines31/marketingskills.
- Fetched: https://takusaotome.github.io/claude-skills-library/en/skills/management/business-analyst/ — profession-organized Claude Skills Library (management/finance/ops/dev cuts, plain-English pages, .skill downloads) — the idea, already built.
- Fetched: https://www.claudedirectory.org/skills/claude-skills-marketing-skills — use-case browse + per-role skill pages + newsletter; surfaces alirezarezvani/claude-skills (25k stars) domain bundles (Marketing/C-Level/PM/Regulatory/Finance/Business Ops).
- Fetch attempted: https://github.com/AtaBGrimm/awesome-claude-corporate-skills — 404 (title seen in SERP; not opened).
