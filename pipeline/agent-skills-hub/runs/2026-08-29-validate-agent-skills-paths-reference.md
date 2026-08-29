# Validate run — 2026-08-29 — agent-skills-paths-reference

Idea: Agent Skills Paths & Config Reference (per-agent skills/config paths, precedence, frontmatter, OS quirks). Status before run: candidate. Origin scout: 2026-08-25 (gate-1 near-miss: "LLMs answer, often stale — freshness + per-OS is the hook").

Credentials: no `.env` → credential-free adapters only (HN Algolia, DDG via browser, unauthenticated GitHub).

## What was dug

- **Demand (strong):** `fanout.py --mode=all` on six location/path seeds returned dense per-agent × per-OS × global/local breadth ("claude code skills location/path/where to put/windows/global/local/folder location/file location/hierarchy", "codex skills location windows", "codex global/project skills location", "cursor rules/user rules file location", "agent skills folder structure", and per-agent folder queries for codex/cursor/copilot/vscode/antigravity/hermes/pi). `pain-fetch.py github` surfaced the same theme as filed bugs across independent repos: claude-code #80289 (project-scoped skills not loaded from new dir), #87590 (project scope still loads ~/.claude memory), opencode #41213 (.claude/.agents discovery finds nothing global+project), Morrison-Lab/ai-config #2530 (hard-coded ~/.claude/skills paths), dicode-site #189, caveman #569, dreb #393, cherry-studio #19349. Two independent evidence types → Demand strong.
- **SERP & competitor weakness (weak / not beatable):** two DDG SERP pulls. The Claude location query is owned by the official ".claude directory" doc plus ~9 dedicated, freshly-dated (2026-02 → 2026-07) per-OS / global-vs-project pages (mdskills.ai, agensi.io, promptspace.in, desastre.app, computingforgeeks, deepwiki, claudedirectory.org, raythanni). The cross-agent query is owned by side-by-side install guides and per-agent path references (mdskills.ai/docs/install-skills, bestagent.dev/what-ai-agents-write-to-disk-2026, ainative side-by-side, ciembor agent-rules-books GitBook, deployhq).
- **Hook depth (weak):** fetched the strongest incumbents — mdskills.ai/docs/install-skills is a maintained agent-by-agent path table (Claude/Cursor/Copilot/Codex/Gemini project+personal paths, `.agents/skills/` cross-agent, `chat.agentSkillsLocations`, per-agent official-doc links); bestagent.dev is a dated (May 24 2026) OS-specific per-agent path table for 8 agents; ciembor is a GitBook with a Compatibility page. The scout's freshness/per-OS/cross-agent differentiator is already shipped, fresher than assumed.
- **Monetization (weak):** competitor monetization visible (bestagent.dev affiliate + own product + ko-fi; mdskills.ai Advertise/marketplace) but low-intent dev-reference traffic and no CPC data.
- **Feasibility & maintenance (weak):** trivial to build, but paths/loading rules change per release across 8+ agents (Cursor marketplace Feb 2026, Codex `.agents/skills/` "early 2026", VS Code `chat.agentSkillsLocations`) — refresh burden above the ~quarterly bar, corroborated by the churn in the scope/precedence bugs above.
- **Unique data (weak):** no proprietary layer; the normalized cross-agent path/precedence table is already assembled by mdskills.ai and bestagent.dev.

## Keyword Planner checkpoint

Skipped — idea rejected on the SERP/hook gate. No `keyword-planner.csv` and no `keywords-request.md` written: search-volume/CPC numbers cannot rescue a hook that official docs plus multiple maintained independent incumbents already serve. Confidence therefore capped at medium; the verdict does not depend on volume.

## Dead ends / inconclusive

- HN Algolia for a distinct "where do skills live" pain thread returned mostly Show HN product launches (askill, SkillForge, Agensi, UberSKILLS) — no new location-reference quote (dead end).
- `docs.claude.com/en/docs/claude-code/skills` and the Anthropic overview both redirect (to code.claude.com / platform.claude.com) — couldn't fetch directly, but confirms the official skills surface is live and recently reorganized.
- OpenCode/Zed/Antigravity single-agent path pages not individually SERP-checked; autocomplete shows demand but the cross-agent collations already fold the long tail in.

## Decision

**Rejected.** The dig disproves scout gate-4 (no specific hook): the per-agent, cross-tool paths + precedence + per-OS reference is already served by maintained, freshly-dated incumbents — including official docs (code.claude.com/docs/en/claude-directory, cursor.com/docs/skills, VS Code custom-instructions with an explicit precedence order) and multiple independent pages (mdskills.ai/docs/install-skills, bestagent.dev, agensi.io, ciembor agent-rules-books). Gate-1 (answer-it) also holds against it: LLMs answer, and where they'd be stale, fresh dedicated pages already fill the gap. Demand is strong but the hook is occupied; feasibility's maintenance burden compounds the problem. Dossier kept as the record.
