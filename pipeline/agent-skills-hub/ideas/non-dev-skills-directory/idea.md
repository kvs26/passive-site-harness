# Non-Developer Agent Skills Directory

Status: rejected
Origin: ../../runs/2026-08-25-scout.md

## Idea

A directory of agent skills cut for non-developer professions — Excel/Power BI analysts, project managers, marketers, business analysts — with plain-English descriptions and install walkthroughs, filtering out the dev-tooling noise that dominates existing directories.

## Hook

All major skill directories (skills.sh, claudeskills.cc, openclawai.io) are built by and for developers; the office-worker searching "agent skills excel" lands on dev-centric indexes with no guidance they can follow.

## Gate results

1. Answer-it test — pass: discovery + curation across scattered repos isn't a one-shot answer.
2. Static feasibility — pass: curated index, build-time data.
3. Unmaintainable data — pass with note: skill links rot; quarterly re-check plausible.
4. No specific hook — **near-miss (why marked weak)**: generic directories have category filters that could serve this; the differentiator is editorial curation + non-dev onboarding, which is a thin moat (same failure mode as guinea-pig-food-database).
5. Legal/policy risk — pass.
6. US-market mismatch — pass.

## Evidence

- Autocomplete (US): "agent skills excel", "agent skills power bi", "agent skills for power bi", "agent skills business analyst", "ai agent skills for project management", "ai agent skills for leaders", "agent skills powerpoint", "claude code skills excel", "ai agent skills excel", "agent skills jira", "agent skills notion", "agent skills obsidian"
- Anthropic's own document-skills (xlsx/pptx/pdf) are among the most-cited: "if you've ever worked with Excel + Python… this nails many of them [edge cases]" — mritchie712, https://news.ycombinator.com/item?id=45619537
- Incumbent gap: openclawai.io lists 5,798 skills by category but with dev-oriented presentation (https://openclawai.io/skills/); skillhub.club is "AI-evaluated Agent Skills for Claude Code" — dev-first framing
- Search volume: unknown (Google Trends 429; no Keyword Planner this run)

## History

- 2026-08-25 — candidate, marked weak (emitted by scout run)
- 2026-08-29 — rejected: scout gate 4 disproved at evidence level. The non-dev curation hook (plain-English, profession-organized, dev-noise-filtered) is already served by ≥3 maintained incumbents — takusaotome Claude Skills Library (management/finance/ops category tree, rich pages, .skill downloads), claudedirectory.org (use-case browse + per-role pages + newsletter), alirezarezvani/claude-skills (25k stars, Marketing/C-Level/PM/Finance domain bundles) — plus dense per-role listicles (get-ryze, lessie, metaflow). Demand real (query breadth) but no unserved cut. Dossier: dossier.md · run: ../../runs/2026-08-29-validate-non-dev-skills-directory.md
