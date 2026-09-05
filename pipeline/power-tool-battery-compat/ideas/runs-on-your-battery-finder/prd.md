# Runs-on-Your-Battery Finder — Site PRD

Status: ready-for-agent

## Problem Statement

Someone who already owns a power-tool battery platform (DeWalt 20V MAX, Milwaukee M18, Ryobi ONE+,
Makita LXT, and smaller house-brand platforms like Hart, Bauer, Kobalt) wants to know which non-tool
gadgets — fans, vacuums, inflators, lights, coffee makers, and more — they can run on batteries they
already own, without buying a second battery ecosystem. Today they either dig through scattered Reddit
threads, watch YouTube owner reports, or read a 4–7-item listicle (SlashGear, HowToGeek, House Digest)
that covers a handful of DeWalt products and nothing else. No source distinguishes a product that
natively takes their platform's battery from one that needs an aftermarket adapter (a real safety
distinction — adapters bypass the battery's protection circuitry and risk over-discharge), and none
covers the smaller house-brand platforms at all.

## Solution

A filterable, static directory: pick your battery platform and a product category, see every gadget
that runs on it, each flagged **native fit / third-party direct-fit / needs adapter** (with the specific
adapter linked when relevant), whether the battery is included, and an Amazon buy link. The dataset is
hand-verified by merging Amazon listings, manufacturer spec pages, and owner reports — a merge no single
existing source publishes. Long-tail platform × category pages (e.g. "Milwaukee M18 fans", "Ryobi ONE+
coffee makers") are the pages this site actually needs to rank, per the dossier's traffic case.

## User Stories

1. As a DeWalt 20V MAX owner, I want to filter the directory by my platform, so that I only see products
   that fit batteries I already own.
2. As a shopper comparing a specific gadget category, I want to filter by category (fans, vacuums,
   inflators, lights, coffee makers, etc.), so that I can compare options within my platform.
3. As a safety-conscious buyer, I want each product flagged native / direct-fit / needs-adapter, so that
   I understand whether I'm buying a purpose-built product or relying on a third-party adapter.
4. As a buyer considering an adapter-path product, I want the specific adapter linked and a caveat about
   over-discharge risk, so that I can make an informed purchase.
5. As a buyer, I want to know whether the battery is included with the product, so that I don't
   double-buy or get a surprise empty box.
6. As a buyer, I want a direct Amazon buy link on every product row, so that I can purchase without
   leaving the page for a separate search.
7. As an owner of a smaller house-brand platform (Hart, Bauer, Kobalt), I want the same filterable
   coverage as major brands, so that I'm not left out of the directory the way I am on every listicle.
8. As a searcher who lands on a platform × category URL directly from Google (e.g. "milwaukee m18 fan"),
   I want that page to show the filtered results immediately, so that I don't have to re-filter from
   the homepage.
9. As a skeptical visitor, I want a methodology page explaining how products are verified (battery
   interface, fit-type, sourcing), so that I can trust the fit-type claims.
10. As a visitor with a specific question not answered by browsing, I want an FAQ page, so that I can
    get quick answers (e.g. "can I use adapters safely?", "is the battery included?").
11. As a privacy-conscious visitor, I want a Privacy page and an Affiliate Disclosure page, so that I
    understand data handling and that outbound product links are monetized.
12. As a visitor wanting to know who runs the site, I want an About page and a way to Contact the site,
    so that I can assess trustworthiness (E-E-A-T).
13. As a mobile visitor, I want the filter and results to work well on a phone, so that I can look this
    up while standing in a store or garage.
14. As a search engine, I want each platform × category combination to have its own crawlable,
    server-rendered URL (not just a client-side filter state), so that the long-tail pages can be
    indexed and ranked individually.
15. As the site owner, I want new products addable by editing a single JSON dataset file, so that
    monthly new-product sweeps stay cheap (under the ~3 hrs/week upkeep cap).
16. As the site owner, I want affiliate links and disclosure wired but switched off until the site is
    live and ranking, per the ship-first ordering (publish → rank → monetize).
17. As the site owner, I want display ad slots reserved (but empty) from launch, so that turning on
    AdSense later doesn't reflow any page.

## Implementation Decisions

- **Built on `factory/house-template/`** (Astro, static output, vanilla-JS islands per ticket 08). This
  PRD's build clones the template into `sites/runs-on-your-battery-finder/` (a separate, independently
  pushed git repo per the `site-factory-v1` map's Notes) and edits only the per-site seam:
  `src/lib/site.config.mjs` and `src/data/catalog.json`. No layout, component, or token changes are
  in scope for site #1 — the "one seam" is the whole point of the factory.
- **Layout mode**: `list` (results-list mode from `SITE.layoutMode`) — this is a spec/filter directory,
  not an image-led product grid.
- **Skin**: `neutral` (default) unless a later branding pass picks another of the five reachable skins;
  not a decision this PRD needs to force.
- **`site.config.mjs` edits**: `url`, `name`, `tagline` set to the site's real domain/brand (domain
  chosen per ticket 06, HITL, outside this PRD's scope); `nav`/`footer` reuse the template's existing
  entries (Finder / Methodology / FAQ / About / Contact / Privacy / Affiliate disclosure) — the page
  set below maps onto them directly, no new nav structure needed.
- **`catalog.json` schema is reused as-is** from the template's demo data (`platforms[]`,
  `categories[]`, `products[]` with `id`, `name`, `platform`, `category`, `fit` (`native`/`direct`/
  `adapter`), `battery_included`, `note`, `affiliate` block). Site #1's build work is populating this
  file with real, hand-verified rows — not changing its shape. Extend `platforms[]` beyond the
  template's four demo entries to cover the dossier's named platforms (DeWalt 20V MAX, Milwaukee M18/
  M12, Ryobi ONE+, Makita LXT, Hart, Bauer, Kobalt) and `categories[]` beyond the demo five to cover the
  dossier's fuller category list (fans, misting fans, vacuums, sprayers, coffee makers, glue guns,
  chainsaws, inflators, lights, power stations, heated-jacket adapters, ride-on-car conversions) —
  restricted at launch to whichever categories have verified rows; an empty category is simply omitted
  rather than shipped with placeholder products.
- **Fit-type flag is mandatory per row**, not optional metadata — it's the hook's core trust asset
  (dossier: "Hook depth: strong"). Every product row must carry a hand-verified `fit` value; rows
  without verified fit data are not published.
- **Adapter rows link the specific adapter** as a related product/row (or, at minimum, name it in
  `note`) plus the community-standard over-discharge caveat text, surfaced near the fit-type flag on
  that row — not buried in the methodology page alone.
- **Long-tail pages are the existing `[platform]/[category].astro` dynamic route** from the template
  (`getStaticPaths()` over `catalog.json`), generating one static page per platform × category
  combination that has at least one product — this is what makes the platform × category matrix
  ("Milwaukee M18 fans", "Ryobi ONE+ coffee makers") independently crawlable and rankable, per the
  dossier's traffic case (SEO targets below).
- **Homepage (`index.astro`) is the interactive tool**: client-side filter island (platform + category)
  over the same `catalog.json`, for visitors who land on `/` directly rather than a long-tail URL.
- **Monetization stays off at launch**: `SITE.monetization.affiliate.enabled = false` and
  `SITE.monetization.ads.enabled = false` in `site.config.mjs`, per the map's ship-first ordering. Every
  product row's `affiliate` block is populated with real `asin`/`affiliate_url` values ahead of time
  (so flipping the switch later is a one-line config change, not a data re-pass) but renders as
  plain/non-monetized links until enabled.
- **Analytics**: `SITE.analytics.provider` set to `cloudflare` (matches the deploy target, ticket 06)
  once the site is deployed; not required before that.
- **Data sourcing**: per the dossier's Edge section — merge Amazon listings, manufacturer spec pages,
  and Reddit/YouTube owner reports; each row hand-verified for battery interface (voltage + rail),
  fit-type, and battery-included status before being added to `catalog.json`. This is manual research
  work performed by whoever builds the dataset, not automatable — Reddit is hostile to unauthenticated
  fetch per repo memory (`power-tool-battery-compat.md`).

## Testing Decisions

- Reuse `factory/house-template`'s existing build verification pattern (ticket 10: `npm run build`
  produces the expected page count, clean, browser-confirmed) — after populating `catalog.json`,
  re-run `npm run build` and confirm the generated page count matches
  `platforms × categories with ≥1 verified product row`, plus the fixed page set (home, methodology,
  FAQ, about, contact, privacy, disclosure).
- No unit-test framework exists in the template; this is a static-content site, so the meaningful test
  is the build step itself (Astro's `getStaticPaths()` failing loudly on malformed `catalog.json`) plus
  a manual pass checking a sample of platform × category pages render the expected filtered rows.
- Manually spot-check that every published product row has a non-empty `fit` value — a row with a
  missing or unverified fit-type must not reach `catalog.json` (a content-quality check, not an
  automated one, given no test harness exists yet for data validation).

## Out of Scope

- Actual dataset population (assembling and hand-verifying the real product catalog) — this PRD
  specifies the schema and rules the data must follow; filling `catalog.json` with verified rows is the
  next build step ("Build site #1's dataset" in the map's Not yet specified), not part of writing this
  PRD.
- Domain purchase and Cloudflare Pages wiring — HITL task per ticket 06, tracked separately on the map
  ("Wire deploy + buy domain + ship").
- Turning on AdSense or affiliate monetization — deferred layers per tickets 04/05 and the map's
  ship-first ordering; this PRD wires the config seam but leaves both switches off.
- Any change to the house template's layout, components, tokens, or skins — site #1 is a pure
  config + dataset consumer of the template built in ticket 10.
- Digital products (printable cheat sheets) — the dossier rules this off by default; not compelling
  against a live filterable directory.
- Non-Google traffic channels — ruled out at the strategy level (map's Out of scope).

## Further Notes

- SERP/AIO evidence in the dossier is dated 2026-09-01 and expires 2026-09-29; the map's ticket 01
  pre-build re-probe already ran (advisory, not a gate) and found no ground-shift as of this PRD.
  A second re-probe immediately before the dataset build/launch is still worth a quick check given the
  expiry window, but per the map's Notes it does not block shipping.
- The traffic case (dossier's Traffic sanity-check) rests on the platform × category product pages
  out-ranking Shopping SERPs and listicles — not on the directory/discovery framing itself, which the
  Keyword Planner CSV showed has no measured search volume. Build and content priorities should favor
  depth and accuracy on the highest-volume platform × category combinations named in the CSV (milwaukee
  m18 fan; dewalt battery fan/vacuum/chainsaw) over exhaustive small-platform coverage, though the
  small-platform coverage remains part of the hook's differentiation per the dossier.

## Core job

Pick your battery platform and a product category; see every verified gadget that runs on it, flagged
native / direct-fit / needs-adapter, with a buy link. A "do it" filter-and-buy action, not an "answer
it" explainer page.

## Data source & update plan

Merged from three sources per row, each hand-verified for battery interface (voltage + rail), fit-type,
and battery-included status:

- **Amazon listings** — price, battery-included status, product images/ASIN.
- **Manufacturer spec pages** — native-platform confirmation.
- **Reddit/YouTube owner reports** — third-party direct-fit and adapter-path facts not published by
  either of the above (e.g. r/ryobi's "Any Cool Third Party Tools" thread, r/Dewalt threads, owner
  YouTube channels).

No formal licence/terms issue — these are factual compatibility claims about publicly sold products,
not reproduced copyrighted content. Update cadence: monthly new-product sweep across the ~6 covered
platforms, plus a quarterly affiliate-link/price check once monetization is enabled — both estimated
well under the 3 hrs/week upkeep cap (dossier: "Feasibility & sustainable upkeep: strong").

## Page map

- **`/` (Finder, tool page)** — client-side filter island: pick platform + category, see matching
  product rows with fit-type flag, battery-included status, note, and buy link.
- **`/[platform]/[category]` (long-tail dataset pages)** — one static page per platform × category
  combination with ≥1 verified product, e.g. `/milwaukee-m18/fans`, `/dewalt-20v-max/vacuums`,
  `/ryobi-18v-one/coffee-makers`. These are the pages the SEO targets below map to.
- **`/methodology`** — how products are sourced and fit-type verified; the trust page backing the
  fit-type claims.
- **`/faq`** — recurring questions (adapter safety, battery-included meaning, platform coverage).
- **`/about`**, **`/contact`** — E-E-A-T trust pages.
- **`/privacy`** — AdSense-required legal page.
- **`/disclosure`** — Amazon Associates affiliate disclosure.

## SEO targets

Mapped to the CSV-evidenced queries in the dossier (`keyword-planner.csv`), all AIO-free Shopping-SERP
queries — no invented volumes beyond what the CSV measured:

| Query (evidenced) | Target page |
|---|---|
| milwaukee m18 fan (50,000 bucket) | `/milwaukee-m18/fans` |
| dewalt battery fan (5,000) | `/dewalt-20v-max/fans` |
| dewalt battery powered vacuum (5,000) | `/dewalt-20v-max/vacuums` |
| dewalt battery chainsaw (5,000) | `/dewalt-20v-max/chainsaws` (pending a verified chainsaw row) |
| battery powered misting fan (500) | `/dewalt-20v-max/misting-fans` and equivalent per-platform pages (pending verified rows) |
| power tool battery inverter (500) | relevant platform × "power stations"/"inverters" category pages (pending verified rows) |
| cordless portable fan (500) | cross-links from platform-specific fan pages |
| kobalt 24v battery adapter (500) | `/kobalt-24v/adapters`-style page once Kobalt rows exist |
| dewalt battery coffee maker (50) | `/dewalt-20v-max/coffee-makers` |

Directory/discovery-framing queries ("what gadgets run on dewalt batteries", etc.) measured zero volume
in the CSV — per the dossier, these are not traffic targets; the homepage tool serves that use case for
visitors who arrive by other means (organic browsing, direct nav), not as an SEO target in its own
right.

## Monetization placement

Amazon Associates affiliate links on every product row (Tools/Home Improvement/Lawn & Garden/Outdoors
at 3.00%; Kitchen at 4.50%, verified verbatim per the dossier). No AdSense placement decisions are made
by this PRD beyond the template's existing reserved-but-empty ad slots — both `SITE.monetization.ads`
and `SITE.monetization.affiliate` stay `enabled: false` at launch per the ship-first ordering; product
rows carry populated `affiliate` data ready to switch on later without a second data pass. Actual
AdSense signup/approval remains a human checkpoint outside this PRD's or any agent's hands.

## Maintenance plan

Monthly new-product sweep across the ~6 covered platforms (adding rows to `catalog.json`); quarterly
affiliate-link/price check once monetization is enabled. Product rows are stable once verified — a
gadget's battery interface doesn't change — so churn is limited to new products trickling in, not
re-verification of existing rows. Estimated well under the 3 hrs/week upkeep cap; no dependency-free
rot risk beyond ordinary link/price drift.

## Standing constraints

- Static HTML/CSS/JS only — no accounts, no database, no backend. (Satisfied: Astro static output, no
  SSR adapter, client-side filter island only.)
- Mobile-first, fast (good Core Web Vitals), crawlable and indexable. (Satisfied by the house template's
  existing CWV-safe font loading, static rendering, and per-platform×category static routes.)
- Cheap to host (static hosting). (Satisfied: Cloudflare Pages, per ticket 06.)
- US market by default. (Consistent with the dossier — Hart/Bauer/Kobalt are US house brands; Amazon
  Associates US program.)
