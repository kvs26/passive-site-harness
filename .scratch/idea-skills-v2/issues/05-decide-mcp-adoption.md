# 05 — Decide MCP adoption

Type: grilling
Status: resolved
Blocked by: 04

## Question

From the MCP survey shortlist, decide which servers (if any) to adopt, for which skill/pass, and how skills reference them (required vs optional adapter alongside `scripts/pain-fetch.*`). Includes deciding where MCP config lives and how absence degrades gracefully.

## Answer

Decided 2026-08-15 via grilling session:

- **Adopt all three from the survey**: Fetch MCP, Brave Search MCP, Playwright MCP.
- **All optional** — none is a hard prerequisite for a scout/validate pass. Skills say "use if available"; absence degrades gracefully to existing scripts and built-in fetch/search tools.
- **No prescribed fallback order** for search-type steps — the skill doesn't rank MCPs vs built-ins; the agent uses whatever is available.
- **Config lives in `.vscode/mcp.json`** (committed), with `BRAVE_API_KEY` in a gitignored `.env`. Brave MCP simply isn't started without the key.
- **Skill-pass mapping as surveyed**: Fetch + Brave slot into both skills' source-gathering passes; Playwright only into validate's competitor/SERP deep-dive.
- **idea-scout changes are mention-only**: a short "available MCP tools" note; its source catalog and helper scripts are unchanged.

Downstream: config/key setup is covered by ticket 07 (setup env & credentials); skill wording lands in ticket 06 (write v2 skill edits).
