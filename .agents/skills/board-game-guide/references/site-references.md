# Existing site references (read live; never copy into a guide)

Paths are relative to the repository root. Find it with `git rev-parse --show-toplevel` (works from any directory). The site directory is `sites/board-game-expansion-buyers-guide/` (abbreviated `<site>/` below), not `sites/board-game-expansion/`.

The existing expansion-buying tool and the paid guide are different products. Do not reuse the site's rankings or buying advice as guide content, and keep the naming distinct.

| Reference | Purpose and limits |
| --- | --- |
| `<site>/src/data/catalog.json` | Top-level keys `games[]` and `expansions[]`. A game record has `slug`, `name`, `publisher`, `minPlayers`, `maxPlayers`, `playTime`, `oneLine`, `sources[]`, `checkedOn`, `buyLinks[]`. Use it to find the game, its current in-print edition hint (often in a `buyLinks[].note`, e.g. "6th edition"), player counts and source leads. Records are research starting points, not proof of strategy, and `checkedOn` may be stale: re-verify the edition yourself. Look up a game: `node -e "const c=require('./<site>/src/data/catalog.json');console.log(c.games.find(g=>g.slug==='catan'))"` (counts were 100 games / 647 expansions at charting; recompute). |
| `<site>/src/data/editorial.json`, `<site>/src/data/listing-summaries.json` | Existing buying recommendations and short copy. Not verified strategy. |
| `<site>/raw-source/sources.csv` | Source index with intended use, verification date, notes. Follow the URLs and read the evidence. |
| `<site>/raw-source/board_game_expansions_master_latest.csv`, `data_dictionary.csv`, `prerequisite_relationships.csv`, `editorial_recommendation_drafts.csv` | Raw catalog facts, field definitions, prerequisite alternatives, editorial status. Keep edition distinctions and uncertainty; drafts are not conclusions. |
| `<site>/raw-source/research-batch*.csv`, `<site>/raw-source/buy-links/` | More source leads and edition identification. Purchase links are not strategy evidence. |
| `<site>/src/pages/methodology.astro`, `about.astro`, `faq.astro` | Current audience, evidence explanations and site promises. Do not contradict them. |
| `<site>/src/pages/[game]/expansions/index.astro`, `[game]/[expansion].astro`, `compare/[game]/[pair].astro` | Existing landing/detail/comparison patterns; read the matching live page when useful. |
| `<site>/src/lib/site.config.mjs`, `src/styles/tokens.css`, `src/styles/base.css`, `public/logo.png`, `public/fonts/` | Brand name (`https://whichexpansion.com`), palette, type. Check font/asset licences before embedding. The default guide template uses system fonts; set `accent` in `guide.json` from the site palette if a branded look is wanted. |
| `<site>/social/style-kit/kit.json`, `README.md` | Visual direction. Adapt for long-form pages; social-slide layouts are not page layouts. |
| `pipeline/board-games/ideas/board-game-expansion-buyers-guide/prd.md` | Historical site scope; it deferred paid PDFs/backend. Guide production is authorised, checkout/backend is not. |
| `.agents/skills/social-studio/` (`SKILL.md`, `package.json`, `render.mjs`) | Reference only. Its renderer outputs fixed-size PNGs via Playwright and a fake-origin static server; it is not a PDF renderer. This skill reuses the idea (Chromium from HTML) with its own `scripts/build.mjs`. |
| `.scratch/board-game-guides-v1/` (`map.md`, `issues/01`, `issues/02`) | Settled product, structure and research decisions this skill encodes. |

Live site: https://whichexpansion.com/ (e.g. `/catan/expansions/`).
