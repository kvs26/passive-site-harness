# Map: Idea-skills v2

Label: wayfinder:map

## Destination

Updated `.agents/skills/idea-validate/SKILL.md` (v2) with a manual Google Keyword Planner checkpoint in the demand dig, plus adoption (or explicit rejection) of MCP-server integrations for `idea-scout` and `idea-validate`. Skills stay evidence-only: no invented numbers, no paid tools.

## Notes

- Domain: passive-website idea pipeline (`pipeline/`), skills in `.agents/skills/`.
- Consult `/grilling` and `/domain-modeling` for HITL tickets; `/research` subagents for research tickets.
- Decided during charting:
  - Keyword Planner checkpoint lives in **validate only**; scout unchanged by it.
  - Checkpoint artifact: mandatory **Keyword Planner CSV export** (volume ranges, top-of-page bid low/high, competition, 3-mo/YoY trend). Optional extras the skill may suggest: competitor-website keyword discovery, forecast-tab impressions trick.
  - Storage: `pipeline/<niche>/ideas/<idea-slug>/keyword-planner.csv`, agent's requested keyword list as `keywords-request.md` beside it. Missing CSV ⇒ idea `parked` ("waiting on Keyword Planner data").
  - CPC bids feed the **Monetization** signal too (AdSense ≈ 25–40% of advertiser CPC); Google Trends stays automated (already in v1) and corroborates Planner volume.
  - MCP integration is research-first: survey what exists before deciding.

## Decisions so far

<!-- one line per closed ticket -->

- [MCP server survey](issues/04-mcp-server-survey.md) — viable free MCPs exist only for search/fetch (Fetch MCP, Brave Search, Playwright); no credential-free Reddit, Trends, or autocomplete MCPs — those stay scripts.
- [Sample Keyword Planner export](issues/01-sample-keyword-planner-export.md) — real CSV landed at `pipeline/pet-food-tools/ideas/can-my-dog-eat-database/keyword-planner.csv`; it's UTF-16LE tab-separated with a 2-row preamble, bucketed volumes (50/500/5k/50k/500k), bids in account currency (INR), and 12 monthly-searches columns.

## Not yet specified

- Exact SKILL.md wording/diff for the v2 validate skill — waits on the rubric and checkpoint-flow decisions.
- Whether scout's source catalog or helper scripts change at all — depends on the MCP survey outcome.

## Out of scope

- Performance Planner / Reach Planner / Bid Simulator — require live ad spend; ruled out during charting research.
- Automating Keyword Planner via the Google Ads API — needs a manager account; the checkpoint is deliberately manual.
- Changes to `to-spec` or any downstream skill.
