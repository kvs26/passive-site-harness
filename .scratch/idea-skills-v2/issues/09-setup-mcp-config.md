# 09 — Set up MCP config (.vscode/mcp.json + Brave key)

Type: task
Status: resolved

## Question

Implement the [MCP adoption decision](05-decide-mcp-adoption.md): create `.vscode/mcp.json` registering the Fetch, Brave Search, and Playwright MCP servers, with the Brave server keyed off `BRAVE_API_KEY` from the gitignored `.env` (server simply absent/unstarted without it). Verify each server starts and responds.

### Checklist for the human (Brave key, free tier, optional)

1. https://api-dashboard.search.brave.com → sign up (free plan, no card)
2. Create an API key
3. Add `BRAVE_API_KEY=...` to `.env` at repo root

Fetch and Playwright MCPs are credential-free — agent handles those alone.

## Answer

Done 2026-08-15:

- Created `.vscode/mcp.json` registering three stdio servers:
  - **fetch** — `uvx --with "mcp<1.10" mcp-server-fetch` (the pin is required: `mcp-server-fetch` breaks against mcp ≥1.10, `ImportError: McpError`)
  - **brave-search** — `npx -y @brave/brave-search-mcp-server` with `envFile: ${workspaceFolder}/.env` so `BRAVE_API_KEY` is picked up when present
  - **playwright** — `npx -y @playwright/mcp@latest`
- Verified via a stdio MCP `initialize` handshake: fetch responded (`mcp-fetch 1.9.4`), playwright responded (`Playwright 1.63.0-alpha`).
- **Brave key not provisioned** — user chose to skip for now. Per the adoption decision the server degrades gracefully: it simply won't start without `BRAVE_API_KEY` in the gitignored `.env`. Add the key later (free at https://api-dashboard.search.brave.com) to activate it; no config change needed.

