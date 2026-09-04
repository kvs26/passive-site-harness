# Map: Site Factory v1 (site-factory-v1) — a repeatable static-site factory, proven by shipping the first site

Label: wayfinder:map
Status: open

## Destination

A repeatable **site factory** — documented standards + reusable assets (one themeable house template, an SEO baseline, pluggable AdSense + affiliate components, a GitHub → Cloudflare Pages deploy pipeline) + the skill/workflow that turns a validated idea's PRD into a shipped static site — **proven by actually shipping [runs-on-your-battery-finder](../../pipeline/power-tool-battery-compat/ideas/runs-on-your-battery-finder/idea.md) through it**. The factory is the deliverable; site #1 is the proving ground.

This effort's Notes **override wayfinder's plan-only default** — the template, components, deploy pipeline, and skill are in-scope *deliverables*, not just decisions.

## Notes

- Successor to the strategy effort [passive-site-harness-v3](../passive-site-harness-v3/map.md), whose Out-of-scope line reserved exactly this "site factory" map.
- Domain: the passive-website pipeline (`pipeline/`), skills in `.agents/skills/`, helper scripts in `scripts/`. Sites live in `sites/<slug>/` as **independent git repos, ignored by this repo** — each site is its own repo, pushed separately; Cloudflare Pages connects to that repo.
- Skills to consult per session: `/grilling`, `/domain-modeling`, `/research`, `/prototype`, `/to-spec`, `/implement`, `/tdd`.
- Research findings live in `research/NN-<slug>.md` inside this effort, with a pointer from the resolving ticket.
- Hard rules carry over from the pipeline: never invent search/CPC/traffic/revenue numbers; evidence-only; no paid SEO tools.

### Settled during charting

- **Destination = factory, proven by shipping site #1** (option A). If it fails to work, a site-factory-v2 supersedes — this map is not reopened.
- **Stack = static-site generator, not client-rendered React** (React's client-render SEO is the thing to avoid). Astro / 11ty lean; the exact pick is ticket 08, fed by survey ticket 02.
- **Design = one themeable house template + skin/token system** (option A) — not a multi-template library, not bespoke-per-site. Page set: interactive tool page, long-tail dataset page, methodology/data page, FAQ, legal pages.
- **Monetization is a deferred, pluggable layer.** A site must be publishable and rankable with **zero** affiliate links and *before* AdSense approval; ad slots + affiliate links are added later onto the live site without re-architecting — the templates pre-provision optional "holes".
- **Ship-first ordering:** publish → rank → layer monetization (AdSense needs live traffic to approve; Amazon Associates needs a live site + 3 sales / 180 days).
- **Pre-build re-probe is advisory, not a gate** (ticket 01). It runs for signal but does **not** block deploy — at near-zero cost, shipping site #1 delivers the factory regardless of the niche's competitiveness.
- **Deploy target = GitHub → Cloudflare Pages; domain = cheapest `.com`** (registrar chosen in ticket 06 — Cloudflare Registrar at-cost vs Porkbun/Namecheap). GitHub account exists; Cloudflare account does not — ticket 06 delivers an exact first-time UI setup guide.
- **Skill-shape deferred to the final "extract the factory" step**, decided from the real build. Starting hypothesis: reusable template assets/repo + one `/build-site` skill that plugs into `/implement`. End-state usage: `/to-spec` an idea → `/build-site <prd>` → guided one-time Cloudflare wiring → live → later an "add monetization" pass.

## Decisions so far

<!-- the index — one line per closed ticket: gist the answer, link the ticket for detail -->

- [Pre-build re-probe: runs-on-your-battery-finder](issues/01-prebuild-reprobe.md) — no ground-shift: still no filterable cross-platform gadget directory, still 4–5-item listicles (3 new ones, same shape), Hart/small-platform gap still open; live-Google AIO re-check was blocked by a bot-challenge and stays unconfirmed-but-not-contradicted. Advisory only — build proceeds on schedule.

## Not yet specified

<!-- known-coming milestones, too dependent on upstream decisions to ticket sharply yet; graduate as the frontier advances -->

- **Write the PRD for site #1** — run `/to-spec` on runs-on-your-battery-finder with the site-PRD template, once the stack (08) and template (09) are decided.
- **Build site #1's dataset** — assemble + hand-verify the runs-on-your-battery product catalog (JSON/CSV in the site repo). Shape depends on the stack pick.
- **Build the interactive tool + long-tail pages** — the client-side filter + generated platform×category pages. Blocked on the template (09).
- **Wire deploy + buy domain + ship** — HITL task using the Cloudflare-Pages UI checklist from ticket 06; the "publishable" milestone.
- **AdSense + CTR monetization layer** — placement + approval, from ticket 04; added onto the live site.
- **Affiliate monetization layer** — reusable link component + disclosure, from ticket 05; added onto the live site.
- **Extract the factory** — distill the standards + the `/build-site` skill from what shipping site #1 taught; the final ticket. Resolves the deferred skill-shape decision.

## Out of scope

- **Discovering / validating new ideas** — that's the existing scout/validate pipeline; this effort builds, it doesn't source ideas.
- **Digital-product checkout** (printables/PDFs) — documented-off-by-default per v3; a per-site manual act, not part of this factory.
- **Non-Google traffic channels** (Reddit/Pinterest/YouTube/newsletter marketing) — ruled out with v3's distribution decision.
- **Multi-site portfolio automation / bulk deploy** — v1 ships one site through the factory by hand; scaling the loop is a later effort.
