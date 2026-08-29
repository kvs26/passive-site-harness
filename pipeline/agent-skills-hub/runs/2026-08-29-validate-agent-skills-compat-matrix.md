# Validate run — 2026-08-29 — agent-skills-compat-matrix

Niche: agent-skills-hub. Idea: agent-skills-compat-matrix (candidate → **rejected**).
Origin scout: ../runs/2026-08-25-scout.md. Target market: US (niche default).
Credentials: no `.env` OAuth for Reddit/Brave; credential-free adapters + Bing/browser + built-in fetch.

## What was dug

Demand-first. Autocomplete fan-out (`fanout.py --mode=plain`) confirmed the compat question fans out per-agent ("do claude skills work in codex/cursor/copilot/antigravity/gemini", "claude code skills in github copilot", "install claude skills in cursor"). GitHub pain dig (`pain-fetch.py github`) surfaced several **independent** repos asking for exactly a host/compat matrix (envskill#6, ai-project-copilot#4, cc-switch#6559, cc-connect#1769, zaq#703). HN surfaced a cross-agent skill-sync Show HN (46469070). Bing PAA showed a recognised question cluster. → **Demand: strong.**

Because demand held, ran the full six-signal dig. The SERP/competitor pass is what flipped the verdict.

## The finding that flipped it (gate 4 disproven)

The scout's whole hook was "the only incumbent is a 0-star GitHub README; a site wins by turning every skill×agent cell into an indexable page a README can never rank for." Re-checking this run, that premise is false:

- **openagentskill.com** — a real per-agent skill directory (9 agents, 1.2K indexed, per-skill "fit" score, /compare, rankings, audits, weekly/monthly reports), 261 GitHub stars. Real indexed site pages, not a README.
- **aipm-registry.com/compatibility** — a maintained config-compat matrix ("last checked 28 Aug 2026") behind a registry/CLI product + large guides hub.
- **vibekk.com** — a thorough four-agent compat guide ("Official Compatibility Matrix as of July 22, 2026" + four-layer model + FAQ).
- **porex-bot/agent-skills-compat-matrix** (the scout's own incumbent) — has grown from "a README" into a real static site: 37×13 matrix, separate agent-capability matrix, docs/agents per-agent deep dives, porting guide, schema+validator, and a **scheduled crawler** auto-updating the data (last crawl 5h before this run). Still 0 stars, but no longer just a README.

The demand that exists lands at the agent/format level, which these already answer; the residual whitespace (SEO static per-(skill,agent) cell pages) targets long-tail combos with no evidence of real volume. Gate-3 (unmaintainable data) near-miss also confirmed: aipm, vibekk and porex-bot all date/crawl their compat data, evidencing fast churn.

## Grades

Demand strong; SERP & competitor weakness **weak** (maintained substantive incumbents); hook depth **weak** (premise disproven, incumbent now a real site); monetization **weak** (product/registry-led niche, no display ads on competitors, no KP CPC); feasibility & maintenance **weak** (build trivial but churn/maintenance real, evidenced by dated+crawled competitor data); unique-data **weak** (all public-docs-derived). Confidence: **medium** (no Keyword Planner CSV).

## Dead ends / inconclusive

- DDG (`pain-fetch.py ddg` + browser) bot-challenged/empty for all four SERP queries → used Bing browser + built-in fetch.
- Google autocomplete throttled when `--mode plain` (missing `=`) fell back to alpha expansion → re-ran `--mode=plain`.
- Second HN query hit a transient SSL error (no retry).
- No Keyword Planner CSV → search volume/CPC unknown; **not** parked, because the verdict is gate-4 rejection (volume can't rescue a served hook), so no `keywords-request.md` written.

## Decision

**Rejected** — dig disproved scout gate 4 (specific hook): the "will this skill work in my agent?" question is already served on the SERP by maintained sites (openagentskill.com per-agent directory + compare, aipm-registry.com config matrix, vibekk.com four-agent guide) and the incumbent it was pitched against is now a real static site with the same data model, capability matrix, per-agent docs and porting guide — plus the gate-3 maintenance near-miss confirmed as a real ongoing burden. Dossier kept as the record.

No comparison brief: 0 validated ideas in agent-skills-hub.
