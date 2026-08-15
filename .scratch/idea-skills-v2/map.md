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
- [Demand & monetization rubric with Planner data](issues/02-planner-grading-rubric.md) — CSV is one independent evidence piece: ≥5K bucket feeds Demand-strong, low bid ≥~$0.50 USD-equiv (live-rate converted) feeds Monetization-strong; no CSV caps confidence at medium; "never invent numbers" amended to allow verbatim quoting with source.
- [Checkpoint flow in the validate run](issues/03-checkpoint-flow.md) — request written after demand pass 1 (~15–25 grouped keywords); existing fresh CSV used silently, soft 6-month staleness flag; missing CSV ⇒ finish the full dig then park (dossier at medium confidence); parked ≠ validated, so no comparison-brief credit until the CSV-backed re-run.
- [Decide MCP adoption](issues/05-decide-mcp-adoption.md) — adopt Fetch, Brave Search, and Playwright MCPs, all optional with graceful degrade and no prescribed fallback order; config in `.vscode/mcp.json` + gitignored `.env`; Fetch+Brave in both skills, Playwright only in validate's competitor deep-dive; scout gets a mention-only note.
- [Write the v2 skill edits](issues/06-write-v2-skill-edits.md) — destination reached: idea-validate v2 shipped (checkpoint, rubric, dossier "Keyword data" section, park wording, MCP notes) and idea-scout got its mention-only MCP note.
- [Keyword Planner CSV parsing helper?](issues/08-csv-parsing-helper.md) — yes: `scripts/planner-report.py` prints a normalized stdout table (buckets, trends, competition, account-currency bids; zero-volume keywords listed apart); no USD conversion in the helper; skill's format note now points at it. Built and verified this session.
- [Set up MCP config](issues/09-setup-mcp-config.md) — `.vscode/mcp.json` created; fetch (pinned `mcp<1.10`) and playwright verified via stdio handshake; brave-search wired to `.env` but dormant until the user adds a `BRAVE_API_KEY` (user skipped for now — graceful absence by design).

## Not yet specified

<!-- empty — the remaining tickets cover the way to the destination -->

## Out of scope

- Performance Planner / Reach Planner / Bid Simulator — require live ad spend; ruled out during charting research.
- Automating Keyword Planner via the Google Ads API — needs a manager account; the checkpoint is deliberately manual.
- Changes to `to-spec` or any downstream skill.
