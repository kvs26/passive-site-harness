# passive-site-harness

Agent-driven harness for discovering, validating, and spec'ing passive-income website ideas — skills, pipeline state, and PRDs for building small static sites.

Not a SaaS, not a website factory: a solo side project run as a set of agent skills and markdown files on disk.

## How it works

The pipeline covers four stages:

1. **Idea discovery** — the `idea-scout` skill runs a bounded discovery pass over a chosen niche (autocomplete, pain mining, SERP/competitor research, trends, public datasets) and writes 3–5 candidates to disk, filtered through six hard gates.
2. **Validation** — the `idea-validate` skill builds an evidence dossier per idea: six signals graded strong/weak/unknown with real evidence, plus a confidence grade. No invented metrics — "unknown" is a first-class value.
3. **Comparison & pick** — when ≥3 ideas are validated, a comparison brief is generated and a human picks.
4. **PRD** — the picked idea gets a spec via `/to-spec` and the [site-PRD template](docs/agents/site-prd-template.md).

Building, previewing, and deploying sites (stages 5–8) is per-site work using general skills; the sites themselves live in `sites/<slug>/` as independent git repos, ignored by this one.

## Layout

| Path | What |
|---|---|
| `.agents/skills/` | Agent skills (general + project-specific) |
| `docs/agents/` | Conventions: issue tracker, triage labels, domain docs, site-PRD template |
| `pipeline/` | Discovery/validation state: niches, runs, ideas, board |
| `.scratch/` | Issue tracker: maps, tickets, research, prototypes |
| `sites/` | Generated websites — nested git repos, not tracked here |
| `CONTEXT.md` | Domain glossary |

## Ground rules

- Never invent search volume, CPC, difficulty, traffic, or revenue figures.
- No paid SEO tools or APIs.
- Sites are static HTML/CSS/JS — no accounts, DB, or backend; mobile-friendly, crawlable, cheap to host.
- Humans always decide: idea picks, PRD approval, deploys, domain purchases, and anything spending money.
