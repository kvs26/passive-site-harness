---
name: new_board_games_addition
description: Use to add the next 5 unfinished games (with researched expansions) to board-game-expansion-buyers-guide
---

Task: add the next 5 unfinished games to board-game-expansion-buyers-guide

**1. Understand the site first**
- Read these first: README.md, `raw-source/build_catalog.py`, the latest batch (`raw-source/research-batch21*.csv`, `docs/research/2026-10-08-batch21.md`), one `raw-source/buy-links/<slug>.csv`, `src/data/listing-summaries.json`, and `tests/`.
- Data flow: `research-batchN-games.csv` + `research-batchN.csv` + `buy-links/<slug>.csv` → `python3 raw-source/build_catalog.py` → `src/data/catalog.json`.
- Commands: `npm run build`, `npm test`, `npm run dev`. Reuse existing enums and columns. Don't invent new values.
- macOS/zsh: use `sed -i ''`. There is no timeout. Put scratch files in `/tmp/batchN/`, never in the workspace root.

**2. Pick games**
- Take the first 5 rows with an empty Status in `raw-source/ranked-missing-games-and-expansions-2026-10-08.md`.
- Put all 5 in ONE batch (a single games CSV and a single expansions CSV, next batch number). Buy links stay one file per game.

**3. Research (high bar)**
- Run one sub-agent per game, in parallel. Check their output and redo thin results yourself, since sub-agents are often shallow.
- Use web search, Playwright/browser tools, `fetch_webpage` and `curl` heavily. Cover publisher shops, Amazon, BGG, Reddit, Wikipedia and review sites.
- Every expansion must get a verdict. Keep unranked ones to the minimum.
  - Try BGG pages and forums, Reddit, review blogs, YouTube and publisher text before giving up.
  - If there is truly no evidence, leave it blank and explain why in the research doc.
- Every ranked expansion needs at least 1 verified buy link (a test enforces this).
  - Prefer a publisher shop page.
  - Otherwise use an Amazon `/dp/<ASIN>` whose title you checked.
  - Last resort is a BGG reference row.
  - Never guess an ASIN or URL.
- Never invent data. Mark uncertain fields as unverified.
- Tool tips:
  - Amazon `/dp` works with `curl`, a Chrome UA and `--compressed`, but search is blocked.
  - BGG blocks `curl`, so use `fetch_webpage` or Bing.
  - Reddit: use Arctic Shift (`title=` search, `posts/ids`, `comments/search?link_id=`) and space out the calls.
  - Lookout pages work via `fetch_webpage`.
  - Shopify stores expose `/products/<handle>.json`.

**4. Listing vs. detail text**
- On the game's expansions listing, Adds, Fixes and the grey evidence paragraph (`reason`) must each be ≤200 characters (2–3 lines). Never cut text off mid-sentence.
- If a catalog `adds`, `fixes` or `reason` is longer than 200 characters, add a hand-written entry to `src/data/listing-summaries.json`. The key is `game-slug/expansion-slug`, with `adds`, `fixes` and/or `reason`. Use only facts already in the catalog.
- The expansion's own page stays descriptive. Follow the existing pages and don't edit them to match the listing.
- `npm test` fails and names the key if any listing line is over 200 characters.

**5. Merge into the site**
- Append the batch rows and any needed `listing-summaries.json` entries. Run `build_catalog.py` and fix any errors.
- Give each game a distinct logo that fits its theme, like the existing games. Check how art and `VERIFIED_ASINS` are handled.
- Write `docs/research/<date>-batchN.md` with sources, unverified fields and gaps.
- `npm run build` and `npm test` must pass.

**6. Update the ranking file (required)**
- Fill the Status cell for each of the 5 rows in `ranked-missing-games-and-expansions-2026-10-08.md`.
- Use "Done (batchN)" if everything is ranked. Otherwise use "Partly done" and list exactly which expansions are unranked or not added, and why.

**Final report (brief):**
- Games added.
- New totals: games, expansions, rated.
- Unranked expansions with reasons.
- Listing summaries added, with all listing lines confirmed ≤200 characters.
- Build and test results.
