# How to use this harness

Quick guide: what each file is for and when to use it. See [README.md](README.md) for the overview.

## The workflow (repeat per niche)

1. **Discover** — say "run idea-scout". Pick 1 niche from the agent's proposals; the run ends with 3–5 candidate ideas in `pipeline/<niche>/ideas/`.
2. **Validate** — say "run idea-validate on <idea>". One idea per session; produces an evidence dossier. *Manual:* a Google Keyword Planner CSV export checkpoint.
3. **Pick** — once 3+ ideas are validated, read `pipeline/<niche>/comparison-<date>.md` and pick one yourself. *Manual:* the pick itself — always a human checkpoint.
4. **Spec** — run `/to-spec` on the picked idea's `idea.md` + `dossier.md`, with [docs/agents/site-prd-template.md](docs/agents/site-prd-template.md) attached → `prd.md`.
5. **Build** — run `/build-site` on `prd.md`. It scaffolds `sites/<slug>/` from the bundled template, discusses design (skin/layout) with you, fills config, and asks you for raw dataset/link material (drop files in `sites/<slug>/raw-source/` ahead of time to skip the ask). *Manual:* you supply the raw data + links; AdSense/Amazon Associates signup is never automated.
6. **Custom tool logic (if the PRD needs it)** — `/build-site` flags this itself when the PRD's Core job is more than data/listing. Run `/to-tickets` on `prd.md` → tickets in `sites/<slug>/.scratch/<slug>/issues/` → `/implement` or `/tdd` per ticket → `/code-review`.
7. **Deploy** — push `sites/<slug>/` as its own repo, wire GitHub → Cloudflare. *Manual:* domain purchase, Cloudflare wiring, and later, AdSense/Associates approval + flipping the monetization switches on request.
8. **Distribute** — once live, say "run `/spread-site` on `sites/<slug>/`" to get seen off-Google: it works through Reddit/forums, Pinterest, directories, Q&A sites, and YouTube comments one at a time, dropping a short posting checklist per channel at `sites/<slug>/distribution/`. *Manual:* you post every draft yourself, under your own accounts — see [DISTRIBUTION.md](DISTRIBUTION.md) for the plain-language rundown.
9. **Grow (post-launch)** — drop new feature ideas into `sites/<slug>/feature-notes/` whenever they occur. Run `/to-tickets` on that folder to turn them into tickets, then `/implement`/`/tdd` each one and mark it `Status: resolved`.

## What each file/folder means

| Path | What it is | When you touch it |
|---|---|---|
| [.agents/skills/idea-scout/SKILL.md](.agents/skills/idea-scout/SKILL.md) | The discovery skill | Invoked when you want new site ideas |
| [.agents/skills/idea-validate/SKILL.md](.agents/skills/idea-validate/SKILL.md) | The validation skill | Invoked to deep-dive one candidate |
| [.agents/skills/idea-validate/comparison-brief-template.md](.agents/skills/idea-validate/comparison-brief-template.md) | Format for the "compare validated ideas" file | Used automatically by idea-validate |
| [docs/agents/site-prd-template.md](docs/agents/site-prd-template.md) | Site-PRD scaffold | Attach it when running `/to-spec` on a picked idea |
| [.agents/skills/build-site/SKILL.md](.agents/skills/build-site/SKILL.md) | The build skill (bundles the house-template) | Invoked with a `prd.md` to scaffold a new site |
| [.agents/skills/spread-site/SKILL.md](.agents/skills/spread-site/SKILL.md) | The distribution skill | Invoked on a live `sites/<slug>/` to draft per-channel posting checklists |
| [DISTRIBUTION.md](DISTRIBUTION.md) | Plain-language "what is distribution and how do I run it" | Read before your first `/spread-site` pass |
| [docs/distribution-playbook.md](docs/distribution-playbook.md) | Detailed channel-play reference `/spread-site`'s short checklists are built from | Only if a channel's judgment call needs more context |
| `pipeline/board.md` | One-glance index of every idea + its status | Open it to see where everything stands |
| `pipeline/<niche>/niche.md` | Niche definition + status | Read when resuming a niche |
| `pipeline/<niche>/runs/` | Run logs (sources used, dead ends, killed candidates) | Read to avoid repeating research |
| `pipeline/<niche>/ideas/<slug>/idea.md` | The idea, its hook, canonical `Status:` line | The source of truth per idea |
| `pipeline/<niche>/ideas/<slug>/dossier.md` | Validation evidence, six graded signals | Read before picking |
| `pipeline/<niche>/ideas/<slug>/prd.md` | Build-ready spec | Hand to a build session |
| `.scratch/` | Planning history (wayfinder maps, tickets, spec) | Only for planning new harness efforts |
| `sites/<slug>/` | The actual websites, independent git repos | Build time onward |
| `sites/<slug>/raw-source/` | Owner-supplied raw dataset/link material | Drop files here before running `/build-site` to skip the ask |
| `sites/<slug>/.scratch/` | That site's own tickets for custom tool logic | Used by `/to-tickets` + `/implement`/`/tdd` |
| `sites/<slug>/feature-notes/` | Post-launch feature ideas, dropped any time | Run `/to-tickets` on it to make tickets |
| `.env` | Optional source credentials (Reddit OAuth, GitHub PAT) | Never commit; skills degrade gracefully without it |
| [CONTEXT.md](CONTEXT.md) | Domain glossary | Reference |

## Idea lifecycle

`candidate → validated → picked → spec'd` (side-exits: `rejected`, `parked`) — tracked by the `Status:` line in each `idea.md`.

## You always decide

Niche pick, idea pick, PRD approval, deploys, domain purchases, anything spending money.
