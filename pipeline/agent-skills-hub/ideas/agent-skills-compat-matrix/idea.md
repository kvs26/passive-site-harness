# Agent Skills Compatibility Matrix

Status: rejected
Origin: ../../runs/2026-08-25-scout.md

## Idea

A static site answering "will this skill work in my agent?" — a per-skill × per-agent compatibility matrix (Claude Code, Copilot, Codex, Cursor, Windsurf, OpenCode, Zed, Antigravity…) with per-cell sources and long-tail pages per combination.

## Hook

The only incumbent is a 0-star GitHub README (porex-bot/agent-skills-compat-matrix, 37 skills × 13 agents); a site wins by turning every skill×agent cell into an indexable page ("does superpowers work in Copilot?") that a README can never rank for.

## Gate results

1. Answer-it test — pass: LLMs hallucinate on fast-moving per-agent feature support; requires maintained source-backed data.
2. Static feasibility — pass: data curated from public GitHub repos/docs into build-time JSON/markdown.
3. Unmaintainable data — **near-miss**: agent release cadence is monthly-ish; core format-support rows are stabler than per-feature rows. Refresh burden must be validated.
4. No specific hook — pass with near-miss: incumbent exists but is a zero-traction README; Bing answer box already cites it, showing SERP demand with no real site.
5. Legal/policy risk — pass: factual compatibility data, public sources.
6. US-market mismatch — pass: dev-tool market, US-centric.

## Evidence

- GitHub issue: "compatibility: expand and document the Agent Skills host matrix" — https://github.com/buhaistrikalo/envskill/issues/6
- GitHub issue: "[Feature]: Portable Agent Skills / Codex compatibility" — https://github.com/bitwize-music-studio/claude-ai-music-skills/issues/548
- GitHub issue: "No cross-agent-platform compatibility checking, unlike the Swival/skillscheck competitor" — https://github.com/MaximeGaudin/slint/issues/173
- Incumbent's own framing: "One question every AI-coding user asks within a week: 'Will this skill work in my agent?'" — https://github.com/porex-bot/agent-skills-compat-matrix (0 stars, created 2026-07-31)
- Autocomplete (US): "agent skills for antigravity", "claude code skills in copilot", "claude code skills in opencode", "agent skills vs cursor rules", "agents vs skills github copilot"
- Blog demand: "Agent Skills Are Becoming the Portable Layer Between Claude Code, Codex, and Cursor" — https://thelgtm.dev/agent-skills-are-becoming-the-portable-layer-between-claude-code-codex-and-cursor/
- Ecosystem scale: anthropics/skills 171,376 stars (fetched 2026-08-25); vercel-labs/skills 29,586 stars in 7 months
- Search volume: unknown (Google Trends 429; no Keyword Planner this run)

## History

- 2026-08-25 — candidate (emitted by scout run)
- 2026-08-29 — rejected: validation disproved scout gate 4. The "will this skill work in my agent?" question is served on the SERP by maintained sites (openagentskill.com per-agent skill directory + fit + /compare, 261★; aipm-registry.com config-compat matrix, "last checked 28 Aug 2026"; vibekk.com thorough four-agent compat guide), and the 0-star incumbent it was pitched against (porex-bot) has grown into a real static site with a 37×13 matrix, agent-capability matrix, per-agent deep dives, porting guide and a scheduled crawler. Gate-3 maintenance near-miss confirmed as a real burden (competitors date/crawl their data). Demand strong but hook served. See [dossier](dossier.md) · [run](../../runs/2026-08-29-validate-agent-skills-compat-matrix.md).
