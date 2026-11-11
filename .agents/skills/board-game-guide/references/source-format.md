# Source format (what `build.mjs` and `check.mjs` enforce)

A guide lives at `<site>/guides/<game-slug>/` (site root = `sites/board-game-expansion-buyers-guide/`; inside the site folder, but outside its `public/`).

```
guides/<slug>/
  guide.json                 metadata
  source/<section>.md        8 fixed files (editable source; the only place guide text lives)
  research/source-log.md     internal claim-to-source log (never shipped)
  research/notes/            optional scratch: transcripts the owner pasted, excerpts, simulation output
  checks/                    optional deterministic checks (dice maths, simulations) + their output
  dist/                      generated: <slug>-guide.pdf, preview/index.html, pages/*.png, build/
```

Never publish `dist/<slug>-guide.pdf`, `source/` or `research/` under a site's `public/`. Only `dist/preview/index.html` is a public-safe artifact; the site's release step copies it (and owner-approved cover/images) after the owner approves the guide. Payment, download and email are not handled here.

## guide.json

Required: `slug`, `game`, `title`, `version` (the latest in-print edition, shown on the cover), `versionChecked` (YYYY-MM-DD), `versionSource` (URL proving the edition is current), `players`, `language`, `accent` (`#rrggbb`), `preview` (`{ "section": "tier2-beginner", "chapter": "<h2-slug>" }`).
Optional: `subtitle`, `kicker`, `brand`, `publisher`, `motif` (`hex` | `dots` | `diamonds`), `fullGuideUrl` (the guide's page on the site, normally `"/guides/<slug>/"`; an https URL is also accepted, anything else fails lint. It adds **Back to guide details** in the preview's top bar and **See the full guide** in its closing box. Set it before the owner-approved build that gets released; never put a price in it or in the preview).

## Section files (fixed names and order)

`how-to-read`, `tier1-how-to-play`, `tier2-beginner`, `tier3-intermediate`, `tier4-advanced`, `quick-reference`, `sources`, `not-covered`. The cover and clickable contents are generated.

- One `#` H1 per file (section title). `##` = chapter (listed in the contents). `###` = one tactic (tiers 2-4).
- Tiers 1-4 open with `> **Assumes:** ...`. Tier 1 needs an H2 "Worked example". `quick-reference` needs an H2 "Glossary".
- Every tactic (`###`) contains these bold lead-ins, in prose paragraphs: `**Why it works.**` `**When it applies.**` `**When it fails.**` `**Example.**` `**Common mistake.**`. No evidence/source labels on tactics.
- Link between sections with `[text](#section-key)` or `[text](#section-key--chapter-slug)` (slug = lowercase-hyphenated H2 text). A tier never restates a rule: link to the quick reference or glossary.
- Diagrams: original inline `<svg viewBox="..." role="img" aria-label="...">` inside `<figure>`. No remote images, scripts or inline event handlers (lint rejects them). No publisher art or box scans.
- `sources.md` lists only sources whose `source-log.md` status is `read` or `owner-supplied`.

## research/source-log.md

A markdown table, one row per source touched:

`| ID | URL | Type | Status | Accessed | Used for |`

Status is exactly one of `read` (opened and read by the agent), `owner-supplied` (owner pasted transcript/excerpt for this URL), `unreadable` (attempt failed; say what failed in "Used for"), `lead-only` (title/snippet seen, not read). "Used for" maps claims to sources (rules / strategy / edition / disputed point). Record player count, edition and timestamp for strategy sources.

## Commands (run from `.agents/skills/board-game-guide/`; `npm install` once, `npx playwright install chromium-headless-shell` if the browser is missing)

```
node scripts/build.mjs  <guide-dir>          # lint -> PDF (2 passes for contents page numbers) -> preview
node scripts/check.mjs  <guide-dir> [--links] # PDF + preview validation, writes dist/pages/page-NN.png
node scripts/probability.mjs 2d6 =7          # exact dice odds for claims
node scripts/selftest.mjs                    # proves the gates still work (fixture + negative tests)
```
