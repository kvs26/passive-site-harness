# Map: Board Game Guides — a research-to-PDF skill proven on one game

Label: wayfinder:map
Status: open

## Destination

Create `.agents/skills/board-game-guide/SKILL.md`: a reusable, AI-assisted workflow that researches a well-supported board game, writes an original learn-to-play and strategy guide, and produces a polished full PDF plus a separate public preview. Prove the workflow with one owner-reviewed guide for Which Expansion.

This effort explicitly overrides Wayfinder's planning-only default: skill implementation, necessary PDF tooling, and the first guide are in scope in later tickets. Charting creates the map and tickets only; it does not settle the open product decisions or implement the skill.

## Notes

### Owner's requirements

- Consumer products sold once; no subscriptions or retailer service. Goal: eventually ₹1 lakh/month, with ₹5,000–₹10,000 available for testing; this is context, not a revenue forecast or authorization to spend.
- AI is expected to research and produce the guides. The owner plays casually and knows CATAN and Ticket to Ride; do not assume broad expert knowledge or require hiring an expert as an automatic prerequisite.
- Start with games for which sufficiently useful, accessible resources exist. Publisher rules, YouTube explanations, Reddit discussions and BoardGameGeek are intended source types. A resource count alone does not establish quality.
- Proposed teaching progression: basic gameplay, beginner tactics, advanced tactics. Final PDF structure remains open; expansion packaging is recorded in the ongoing scope discussion.
- Web search, browser/Playwright inspection, frequent concise updates, and concrete requests for owner help are central to the eventual skill. If a useful video/page cannot be read, give its exact URL and request a transcript, relevant screenshots or pasted passages; explain which question the material will answer. Never claim inaccessible material was reviewed.
- Keep this map compact: four tickets, with two grilling discussions, one implementation ticket, and one first-guide ticket. Research and rendering work belong inside those tickets; do not create a ticket for every source or chapter.
- Work one decision ticket per session using Wayfinder. Ask one decision question at a time, give a recommendation, and record the owner's actual answer. Do not silently convert proposals below into decisions.
- Skills to consult as applicable: `wayfinder`, `grilling`, `domain-modeling`, `skill-creator`, and the available PDF skill for rendering and visual QA. Use `research` for outside evidence as needed. Use existing terminology; settle any new glossary terms during the discussions rather than inventing an architecture now.
- The existing expansion-buying tool and the new paid learning/strategy PDF are different products. Preserve that distinction in naming and content.

### Existing site references to carry into the skill

Paths below are relative to the repository root. The skill must use current files rather than freezing this inventory into copied content. The site directory is `sites/board-game-expansion-buyers-guide/`, not `sites/board-game-expansion/`.

| Reference | Purpose and limits |
| --- | --- |
| `sites/board-game-expansion-buyers-guide/src/data/catalog.json` | Game/expansion slugs, publisher, player counts, prerequisites, source URLs and check dates. Inspected during charting: 100 games and 647 expansions; recompute when needed. These records are research starting points, not proof of gameplay strategy. |
| `sites/board-game-expansion-buyers-guide/src/data/editorial.json` and `src/data/listing-summaries.json` within that site | Existing buying recommendations and concise site copy. Do not treat rankings or unsourced editorial claims as verified strategy. |
| `sites/board-game-expansion-buyers-guide/raw-source/sources.csv` | Source index, intended use, verification date and notes. Follow relevant URLs and read the actual evidence. |
| `sites/board-game-expansion-buyers-guide/raw-source/board_game_expansions_master_latest.csv`, `data_dictionary.csv`, `prerequisite_relationships.csv`, `editorial_recommendation_drafts.csv` in the same directory | Raw catalog facts, field definitions, prerequisite alternatives and editorial status. Preserve uncertainty and distinguish editions; drafts are not verified conclusions. |
| `sites/board-game-expansion-buyers-guide/raw-source/research-batch*.csv` and `raw-source/buy-links/` | Additional source leads and product/edition identification. Purchase links are not strategy evidence. |
| `sites/board-game-expansion-buyers-guide/src/pages/methodology.astro`, `about.astro`, `faq.astro` in the same directory | Current audience, explanation of evidence and site promises. |
| `sites/board-game-expansion-buyers-guide/src/pages/[game]/expansions/index.astro`, `src/pages/[game]/[expansion].astro`, `src/pages/compare/[game]/[pair].astro` within that site | Existing landing/detail/comparison page patterns and honest cross-links. Read the corresponding live page when useful. |
| `sites/board-game-expansion-buyers-guide/src/lib/site.config.mjs`, `src/styles/tokens.css`, `src/styles/base.css`, `public/logo.png`, `public/fonts/` within that site | Brand name, production URL, visual palette, typography and reusable assets. Check font/asset usage suitability for the PDF. |
| `sites/board-game-expansion-buyers-guide/social/style-kit/kit.json` and its `README.md` | Existing visual direction; adapt for readable long-form PDFs rather than using social-slide layouts as pages. |
| `pipeline/board-games/ideas/board-game-expansion-buyers-guide/prd.md` | Historical scope of the site. It explicitly deferred paid PDFs and backend work; this map authorizes guide production, not checkout/backend implementation. |
| `.agents/skills/social-studio/SKILL.md`, `.agents/skills/social-studio/package.json`, `.agents/skills/social-studio/render.mjs` | Existing browser/rendering workflow to inspect for reusable ideas. Its PNG renderer is not automatically a PDF renderer; assess capabilities before reusing. |

Live site: https://whichexpansion.com/. Relevant candidate pages: https://whichexpansion.com/catan/expansions/ and https://whichexpansion.com/ticket-to-ride/expansions/. Neither candidate has been selected for the first PDF.

### Charting status

- Created from the owner's request on 2026-11-04.
- [Choose the guide's scope, teaching structure and first game](issues/01-guide-scope-and-structure.md) resolved 2026-11-07.
- [Implement the board-game guide skill and PDF workflow](issues/03-build-guide-skill.md) resolved 2026-11-07.
- Remaining: running the skill on a real game (CATAN) and delivery/hosting.

## Decisions so far

<!-- Add one linked gist per resolved ticket; the detailed answer belongs in that ticket. -->

- [Choose the guide's scope, teaching structure and first game](issues/01-guide-scope-and-structure.md) — base-game guide for CATAN's latest version (English, base player counts); cover, clickable contents, how-to-read, four standalone tiers (how to play, beginner, intermediate, advanced), quick reference/glossary, sources, not-covered; teacher-style tactics; free HTML preview with one beginner tactics chapter; owner reads the whole guide.
- [Define trustworthy research and owner-assisted source access](issues/02-research-and-owner-handoffs.md) — no evidence gate (skill reports, owner decides); official rules then YouTube-led research with transcript fallback to owner; no inline per-tactic labels or credits, internal source log plus general sources list; own-reasoning tactics only as last resort; AI checks then owner reads all; sub-agents allowed.
- [Implement the board-game guide skill and PDF workflow](issues/03-build-guide-skill.md) — `.agents/skills/board-game-guide/` with Node + Playwright PDF/preview renderer, lint and checks, fixture-tested; guides live in `guides/<slug>/`, not under any site's `public/`; untested on a real game.

## Not yet specified

- The exact defects and workflow adjustments the first real guide may reveal. Fold small fixes into implementation/first-guide work rather than generating speculative tickets.

## Out of scope

- Checkout, payment provider selection, backend, database, email delivery, account system, deployment and public sales launch. Preserve the future delivery contract: full PDF remains outside public site assets; the public preview is a separate HTML page. Download, email and hosting of both are undecided.
- Changing existing site code, rankings, analytics or social posts during charting or guide creation.
- A full catalog rollout, guides for every expansion, pricing experiments, sales forecasts or a distribution campaign.
- Requiring expert credentials or mandatory paid reviewers by default. Agree evidence and practical review standards in the research-workflow discussion.
