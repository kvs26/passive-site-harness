# Agent Skills Paths & Config Reference

Status: rejected
Origin: ../../runs/2026-08-25-scout.md

## Idea

A per-agent reference for where skills/config files live and how they're loaded: directory paths (global vs project), file precedence, frontmatter requirements, and OS quirks for Claude Code, Copilot, Codex, Cursor, OpenCode, Zed, etc.

## Hook

LLMs and blog posts routinely give stale paths for tools that ship weekly; one maintained per-agent page ("Claude Code skills location — macOS/Windows/Linux, global vs project, precedence") beats the fragmented mix of Reddit threads and outdated posts that currently rank.

## Gate results

1. Answer-it test — **near-miss**: LLMs answer this, but frequently wrongly for fast-moving tools; hook rests on freshness + per-OS specificity. Must be validated.
2. Static feasibility — pass: pure reference content from official docs/repos.
3. Unmaintainable data — pass with note: paths change rarely; loading behavior changes more often, still ~quarterly-compatible.
4. No specific hook — pass: no dedicated paths/precedence reference found this run; incumbent SERP is scattered blog posts and docs fragments.
5. Legal/policy risk — pass.
6. US-market mismatch — pass.

## Evidence

- Autocomplete (US): "claude code skills location", "claude code skills directory windows", "agent skills folder structure", "agent skills directory structure", "claude code skills global", "claude code skills path", "agent skills location", "claude code skills how to install"
- GitHub issue (misconfiguration pain): "Claude Code: .claude-plugin/plugin.json missing 'skills': './skills/' → skills never register (only hooks load)" — https://github.com/JuliusBrussee/caveman/issues/569
- GitHub issue: "docs(ai-agent): document buildin/ai-agent-claude-cli's .claude/skills/<name>/SKILL.md install layout" — https://github.com/dicode-ayo/dicode-site/issues/189
- GitHub issue: "Support canonical repository instructions and skills across coding agents" — https://github.com/trytilde/openbot/issues/27
- Search volume: unknown (Google Trends 429; no Keyword Planner this run)

## History

- 2026-08-25 — candidate (emitted by scout run)
- 2026-08-29 — rejected: gate-4 disproved on validation. Per-agent cross-tool paths/precedence/OS reference already served by maintained, freshly-dated incumbents — official docs (code.claude.com/docs/en/claude-directory, cursor.com/docs/skills, VS Code custom-instructions with explicit precedence order) plus multiple independent pages (mdskills.ai/docs/install-skills agent-by-agent path table, bestagent.dev per-agent OS-path table dated 2026-05, agensi.io/promptspace/desastre per-OS Claude pages, ciembor agent-rules-books GitBook). Demand strong but hook occupied; freshness angle contradicted; maintenance burden above quarterly bar. Confidence medium (no CSV; volume wouldn't change a served-hook verdict). ([dossier](dossier.md) · [run](../../runs/2026-08-29-validate-agent-skills-paths-reference.md))
