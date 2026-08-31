# 04 — MCP server survey

Type: research
Status: resolved

## Question

Survey MCP servers that could strengthen `idea-scout` and/or `idea-validate` under the hard rules (free, no paid APIs/SEO tools, credential-optional). Candidates to investigate: web-search MCPs (e.g. DuckDuckGo/Brave/SearXNG), Reddit MCPs, Google Trends MCPs, fetch/scrape MCPs, HN/GitHub MCPs. For each viable server report: what it provides, cost/credential requirements, maintenance health, and which skill pass it would slot into. Output: a shortlist with a recommendation per skill.

## Answer

Survey run 2026-08-15 via research subagent. Findings by capability:

- **Web/SERP search — available.** Best options: **Brave Search MCP** (github.com/brave/brave-search-mcp-server; actively maintained by Brave; free API key tier, no CC), **Fetch MCP** (official, modelcontextprotocol/servers `src/fetch`; credential-free URL→Markdown, robots.txt-aware), **Keenable Web Search** (remote, zero-auth, new/unproven). SearXNG MCP exists but stale (~1 yr, public instances flaky).
- **Reddit — no credential-free MCP.** All Reddit MCPs (reddit-growth-mcp, adhikasp/mcp-reddit) require OAuth and are thinly maintained. Keep the existing access ladder.
- **Google Trends — no MCP exists** (Trends blocks automation; no official API). Keep current UI/CSV approach.
- **Google autocomplete — no MCP.** Keep `scripts/fanout.*`.
- **HN / GitHub issues / app-store reviews — no viable free MCP.** GitHub MCP archived; app-store review MCPs are paid (Glama gateway). Fetch MCP can hit hn.algolia.com etc. directly.
- **Heavy scraping:** **Playwright MCP** (microsoft/playwright-mcp, free, strong maintenance) for JS-heavy competitor sites; ScrapeGraph MCP exists but marginal.

**Recommendation (conservative, fits hard rules):** adopt **Fetch MCP** (credential-free, both skills) + optionally **Brave Search MCP** (free key in `.env`, degrade to DDG when absent) + optionally **Playwright MCP** for validate's SERP/competitor deep-dives. Everything else stays scripts. Full details in the charting session's research output.

