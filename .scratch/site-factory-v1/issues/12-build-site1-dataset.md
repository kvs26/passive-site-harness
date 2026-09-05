# Build site #1's dataset

Type: task
Status: resolved
Blocked by: 11

## Question

Assemble and **hand-verify** the runs-on-your-battery product catalog for site #1 as
`src/data/catalog.json` in the site repo (`sites/runs-on-your-battery-finder/`), loaded at build via the
template's `getStaticPaths()`. Follow the schema fixed by the PRD (ticket 11): real `platforms[]` /
`categories[]`, and a mandatory hand-verified `fit` value on **every** product row — no invented data,
no unverified rows shipped (omit a platform/category rather than publish a guess).

## Answer

**Done — built manually by the human, adopted into the map as-is** (the wayfinder way is to record
completed execution, not redo it; verified it builds — see ticket 13).

Dataset lives at
[`sites/runs-on-your-battery-finder/src/data/catalog.json`](../../../sites/runs-on-your-battery-finder/src/data/catalog.json):

- **5 hand-verified platforms** — DeWalt 20V MAX, Milwaukee M18, Ryobi 18V ONE+, Makita 18V LXT, HART
  20V. HART cross-confirmed via Walmart + manufacturer model numbers (HPCF01 fan, HPSV50 vacuum),
  closing the exact small-platform gap the dossier flagged.
- **6 categories** — fans, vacuums, inflators, lights, chainsaws, coffee-makers (empty categories
  omitted, not shipped with placeholders).
- **~26 products**, each carrying a mandatory hand-verified `fit` (`native`/`adapter`), a sourcing
  `note`, and an affiliate block with `affiliate_enabled: false` (Amazon search-scoped URL until an
  Associates tag exists).
- **Deliberately omitted** (per PRD, unverified-in-this-pass): Bauer (Harbor Freight), Kobalt (Lowe's)
  — the `$schema-note` records the running coverage list.

No invented volumes/CPC/traffic. Remaining coverage expansion (Bauer/Kobalt, more categories) is
ordinary post-launch maintenance, not a build blocker.
