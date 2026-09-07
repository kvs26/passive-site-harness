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
- [Build site #1's dataset](issues/12-build-site1-dataset.md) — **done** (built manually, adopted into the map as-is — the wayfinder way records completed execution, not redo it). `sites/runs-on-your-battery-finder/src/data/catalog.json`: 5 hand-verified platforms (DeWalt 20V MAX, Milwaukee M18, Ryobi 18V ONE+, Makita 18V LXT, HART 20V — HART cross-confirmed via Walmart model numbers, closing the small-platform gap), 6 categories, ~26 products each with mandatory hand-verified `fit`; Bauer/Kobalt omitted-until-verified. No invented figures; affiliate rows off.
- [Build the interactive tool + long-tail pages](issues/13-build-tool-longtail.md) — **done** (built manually, adopted as-is). Site #1 stood up by cloning `factory/house-template/` and editing **only** the one seam (`site.config.mjs` + `catalog.json`) — no template surgery. Clean `npm run build` → **39 pages** incl. the home finder island + every `[platform]/[category]` long-tail route + trust/legal set + sitemap/robots. First real proof of the factory's one-seam claim; confirms the starter-repo skill-shape hypothesis. Monetization present but off; `SITE.url` still placeholder until deploy (ticket 14).
- [Wire deploy + buy domain + ship site #1](issues/14-deploy-ship-site1.md) — **live at https://runsonyourbattery.com**. Domain bought at Cloudflare Registrar ($10.46/yr, auto-attached DNS). Standalone GitHub repo pushed (`kvs26/runs-on-your-battery-finder`, private). Cloudflare's dashboard now onboards new static-site Git integrations via **Workers** (not the classic Pages UI ticket 06 described) — same Git-connect flow, but deploy runs `wrangler deploy` against a `wrangler.jsonc` with `assets.directory: ./dist`; had to manually enable the `workers.dev` subdomain before a URL first appeared. Custom domain attached at zone root, SSL automatic. `SITE.url` set, rebuilt (39 pages), verified live: homepage, robots.txt, sitemap all resolving with correct absolute URLs. Monetization left off. Cloudflare account now exists, unblocking tickets 15/16.
- [Add plain (untagged) Amazon/retailer product links ahead of affiliate approval](issues/18-plain-product-links.md) — split affiliate on/off into two independent phases: a new `SITE.monetization.productLinks.enabled` switch shows each row's real `affiliate_url` as a plain, undisclosed, non-sponsored link now; flipping a row's `affiliate.affiliate_enabled` (ticket 16, post-Associates) later promotes it to the tagged/disclosed CTA automatically. Site #1 had the switch on briefly, then the owner asked to turn it back off pending a decision on link specificity (most `affiliate_url` values are Amazon search links, not product-page links); the canonical template ships it off by default. Ticket 17's `/build-site` skill must ask the site owner whether to enable it per new site.
- [Extract the factory](issues/17-extract-the-factory.md) — **done**, map closed. Tickets 15/16 ruled out of scope on the owner's explicit override (monetization signup stays manual, never agent-driven), unblocking this ticket to resolve on its own. Delivered `.agents/skills/build-site/SKILL.md`: a clone-and-fill skill whose bundled template asset lives at `.agents/skills/build-site/assets/house-template/` (no more standalone `factory/` folder), and whose dataset/link intake is owner-supplied raw material shaped by the agent, never agent-researched. Folded in lessons from `sites/runs-on-your-battery-finder`'s real drift (dev-only ad placeholder, bundled `wrangler.jsonc`, the whitespace-before-`<a>` bug, per-niche voice over copying site #1 verbatim). Everything site-specific lives only in `sites/<slug>/`.

## Not yet specified

<!-- known-coming milestones, too dependent on upstream decisions to ticket sharply yet; graduate as the frontier advances -->

<!-- Empty: the whole remaining route is now sharply ticketed (14 → 15/16 → 17). -->

## Open tickets (the remaining route)

<!-- not part of the wayfinder map body spec; a convenience index for this local-markdown tracker. Frontier = open + unblocked + unclaimed. -->

<!-- None. Ticket 17 (Extract the factory) resolved the map's final ticket; the destination is reached. -->

## Out of scope

- **Discovering / validating new ideas** — that's the existing scout/validate pipeline; this effort builds, it doesn't source ideas.
- **Digital-product checkout** (printables/PDFs) — documented-off-by-default per v3; a per-site manual act, not part of this factory.
- **Non-Google traffic channels** (Reddit/Pinterest/YouTube/newsletter marketing) — ruled out with v3's distribution decision.
- **Multi-site portfolio automation / bulk deploy** — v1 ships one site through the factory by hand; scaling the loop is a later effort.
- **Agent-driven AdSense activation** — closed [Turn on the AdSense monetization layer](issues/15-adsense-layer.md): AdSense signup/approval stays the site owner's own manual per-site action; `/build-site` only reserves the holes and flips the switch on request.
- **Agent-driven affiliate activation** — closed [Turn on the affiliate monetization layer](issues/16-affiliate-layer.md): joining Amazon Associates and minting tagged links stays the site owner's own manual per-site action; `/build-site` only verifies/attaches owner-supplied links and flips the switch on request.
