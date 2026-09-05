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
- [Pick the stack](issues/08-pick-stack.md) — **Astro**, static output (`output: 'static'`, no SSR adapter), latest-stable pinned in site #1's lockfile. Island framework = **vanilla JS by default**, Preact as the pre-blessed escape hatch when a site's tool crosses a genuine interdependent-reactive-state threshold. These are factory-wide conventions ticket 09's template assumes.
- [Design the house template shell + skin system](issues/09-house-template.md) — **one themeable base + layout modes + skin palette**, not a single skin: base = app-shell (dir 08); two layout modes (results-list vs card-grid dir 05) via one flag; tool-hero variant (dir 02) for calculator niches; editorial (03) as the guide skin; technical/dark/playful reachable. Branding **baked into the token system**: per-skin **color ramps** (luminance-graded, AA-safe, dark-mode via role re-point), one self-hosted **variable-WOFF2 brand font** + metric-matched fallback (CWV-safe), **CSS-wordmark/inline-SVG logo** + icon set. Page set gains **About + Contact** trust pages (Privacy is the one AdSense-required page; rest recommended E-E-A-T). Canonical template built as a **fresh Astro scaffold** (prototype/gallery kept as throwaway reference) — graduated into [ticket 10](issues/10-build-astro-template.md). Extra research: [research/09-brand-and-trust-pages.md](research/09-brand-and-trust-pages.md).
- [Build the canonical Astro house template](issues/10-build-astro-template.md) — **built** as a fresh Astro static scaffold at `factory/house-template/` (repo-tracked copyable starter, cloned into `sites/<slug>/` per site; not a package/CLI). Realises ticket 09: app-shell base + two layout modes + tool-hero variant, 5-skin two-layer token system (literal ramps → semantic roles) + dark mode, CWV-safe self-hosted brand fonts w/ graceful degrade, CSS-wordmark + inline-SVG logo, full page set incl. trust/legal (privacy = AdSense-required), monetization holes **off** (reserved ad slots + affiliate slots, no reflow), SEO baseline wired (JSON-LD `@graph`, canonical/OG/Twitter, sitemap + absolute-`Sitemap:` robots). **Per-site seam = one file** (`src/lib/site.config.mjs`) + `catalog.json` + fonts. Verified `npm run build` → 31 pages + sitemap + robots, clean, browser-confirmed. Feeds the "Extract the factory" step's skill-shape decision (starter-repo hypothesis, confirmed).
- [Write the PRD for site #1](issues/11-write-site1-prd.md) — PRD written for runs-on-your-battery-finder: config-and-dataset-only build against the house template (`layoutMode: 'list'`, `neutral` skin, existing `catalog.json` schema extended with real platforms/categories, mandatory hand-verified `fit` per row, long-tail pages via `[platform]/[category].astro`), monetization wired but off at launch, SEO targets mapped to the dossier's CSV-evidenced queries only.

## Not yet specified

<!-- known-coming milestones, too dependent on upstream decisions to ticket sharply yet; graduate as the frontier advances -->

- **Build site #1's dataset** — assemble + hand-verify the runs-on-your-battery product catalog as JSON/CSV in the site repo, loaded at build via Astro `getStaticPaths()`. **Now unblocked** — the PRD (ticket 11) fixes the schema extension (real platforms/categories) and the mandatory-fit-per-row rule; follow `factory/house-template/src/data/catalog.json` for the base shape.
- **Build the interactive tool + long-tail pages** — the client-side filter + generated platform×category pages, on top of the canonical template. **Now unblocked** — the template ships working demos of both (`index.astro` filter island + `[platform]/[category].astro`); site #1 swaps the dataset + copy.
- **Wire deploy + buy domain + ship** — HITL task using the Cloudflare-Pages UI checklist from ticket 06; the "publishable" milestone.
- **AdSense + CTR monetization layer** — placement + approval, from ticket 04; added onto the live site.
- **Affiliate monetization layer** — reusable link component + disclosure, from ticket 05; added onto the live site.
- **Extract the factory** — distill the standards + the `/build-site` skill from what shipping site #1 taught; the final ticket. Resolves the deferred skill-shape decision.

## Out of scope

- **Discovering / validating new ideas** — that's the existing scout/validate pipeline; this effort builds, it doesn't source ideas.
- **Digital-product checkout** (printables/PDFs) — documented-off-by-default per v3; a per-site manual act, not part of this factory.
- **Non-Google traffic channels** (Reddit/Pinterest/YouTube/newsletter marketing) — ruled out with v3's distribution decision.
- **Multi-site portfolio automation / bulk deploy** — v1 ships one site through the factory by hand; scaling the loop is a later effort.
