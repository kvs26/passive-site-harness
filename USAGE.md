# How to use this harness

Quick guide: what each file is for and when to use it. See [README.md](README.md) for the overview.

## The workflow (repeat per niche)

1. **Discover** — say "run idea-scout". Pick 1 niche from the agent's proposals; the run ends with 3–5 candidate ideas in `pipeline/<niche>/ideas/`.
2. **Validate** — say "run idea-validate on <idea>". One idea per session; produces an evidence dossier.
3. **Pick** — once 3+ ideas are validated, read `pipeline/<niche>/comparison-<date>.md` and pick one yourself.
4. **Spec** — run `/to-spec` on the picked idea with [docs/agents/site-prd-template.md](docs/agents/site-prd-template.md) attached → `prd.md`.
5. **Build** — hand the PRD to `/implement` or `/tdd`; the site goes in `sites/<slug>/` (its own git repo).

## What each file/folder means

| Path | What it is | When you touch it |
|---|---|---|
| [.agents/skills/idea-scout/SKILL.md](.agents/skills/idea-scout/SKILL.md) | The discovery skill | Invoked when you want new site ideas |
| [.agents/skills/idea-validate/SKILL.md](.agents/skills/idea-validate/SKILL.md) | The validation skill | Invoked to deep-dive one candidate |
| [.agents/skills/idea-validate/comparison-brief-template.md](.agents/skills/idea-validate/comparison-brief-template.md) | Format for the "compare validated ideas" file | Used automatically by idea-validate |
| [docs/agents/site-prd-template.md](docs/agents/site-prd-template.md) | Site-PRD scaffold | Attach it when running `/to-spec` on a picked idea |
| `pipeline/board.md` | One-glance index of every idea + its status | Open it to see where everything stands |
| `pipeline/<niche>/niche.md` | Niche definition + status | Read when resuming a niche |
| `pipeline/<niche>/runs/` | Run logs (sources used, dead ends, killed candidates) | Read to avoid repeating research |
| `pipeline/<niche>/ideas/<slug>/idea.md` | The idea, its hook, canonical `Status:` line | The source of truth per idea |
| `pipeline/<niche>/ideas/<slug>/dossier.md` | Validation evidence, six graded signals | Read before picking |
| `pipeline/<niche>/ideas/<slug>/prd.md` | Build-ready spec | Hand to a build session |
| `.scratch/` | Planning history (wayfinder maps, tickets, spec) | Only for planning new harness efforts |
| `sites/<slug>/` | The actual websites, independent git repos | Build time onward |
| `.env` | Optional source credentials (Reddit OAuth, GitHub PAT) | Never commit; skills degrade gracefully without it |
| [CONTEXT.md](CONTEXT.md) | Domain glossary | Reference |

## Idea lifecycle

`candidate → validated → picked → spec'd` (side-exits: `rejected`, `parked`) — tracked by the `Status:` line in each `idea.md`.

## You always decide

Niche pick, idea pick, PRD approval, deploys, domain purchases, anything spending money.
