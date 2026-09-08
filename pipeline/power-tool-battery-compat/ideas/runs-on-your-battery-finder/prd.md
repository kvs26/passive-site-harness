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

The same problem exists for owners in the UK, Germany, France, Italy, and Spain — but with an added
wrinkle: several "same-name" platforms are not the same platform across the Atlantic. DeWalt's US 20V
MAX line is badged **XR 18V** in the UK/EU (same manufacturer, same battery interface, different
marketing name), so US content applies directly once the badge name is accounted for. Ryobi is the
sharp exception: **Ryobi ONE+ in the US (and Canada/Australia) is licensed to TTI**, while **Ryobi in
the UK/EU is licensed to Positec** — two different companies selling under the same brand with
physically incompatible battery packs. Treating these as one platform would be exactly the kind of
silent, unsafe compatibility error this site exists to prevent, so region-aware platform modeling is a
core requirement, not a cosmetic add-on.

## Solution

A filterable, static directory: pick your battery platform and a product category, see every gadget
that runs on it, each flagged **native fit / third-party direct-fit / needs adapter** (with the specific
adapter linked when relevant), whether the battery is included, and an Amazon buy link. The dataset is
hand-verified by merging Amazon listings, manufacturer spec pages, and owner reports — a merge no single
existing source publishes. Long-tail platform × category pages (e.g. "Milwaukee M18 fans", "Ryobi ONE+
coffee makers") are the pages this site actually needs to rank, per the dossier's traffic case.

The same pages now also serve US, UK, German, French, Italian, and Spanish visitors: a lightweight
**region toggle** (US / UK / DE / FR / IT / ES) on every results view swaps each product's buy link to
the matching Amazon marketplace and hides platforms not sold in the selected region — without adding
new URLs or translating page copy. The platform list itself stays correct per region (e.g. Ryobi US/TTI
and Ryobi UK-EU/Positec are modeled as distinct platforms, not one platform with a relabeled badge).

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
18. As a UK, German, French, Italian, or Spanish owner, I want to select my region and see only
    products actually sold/available there, so that I'm not shown US-only platforms or a US buy link
    that ships to the wrong marketplace.
19. As a Ryobi owner, I want the site to distinguish US/TTI Ryobi ONE+ from UK/EU/Positec Ryobi, so
    that I never see a false-compatible pairing between two brands that merely share a name.
20. As a returning EU/UK visitor, I want my region selection remembered between visits, so that I
    don't have to re-select it every time I land on a platform × category page.
21. As the site owner, I want each product row's regional buy links (amazon.co.uk/.de/.fr/.it/.es)
    prepared alongside the US link during dataset population, so that turning on Associates tracking
    for a new marketplace later is a config change, not a second research pass.

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
- **Buy link ≠ affiliate link.** Every product row carries a `affiliate_url` that is simply the best
  available outbound product link — which may be an Amazon listing/search *or* a manufacturer/retailer
  product page (Home Depot, milwaukeetool.com, worx.com, greenworkstools.com, etc.) when that gives a
  more precise link. These are plain outbound links right now. **Affiliate monetization is off entirely
  at launch** (`SITE.monetization.affiliate.enabled = false`, and no row's `affiliate_enabled` set),
  and when it is eventually turned on it will be **Amazon-only**: only Amazon links get affiliate
  tagging/disclosure; manufacturer/retailer links stay plain outbound links regardless. So a non-Amazon
  buy link is a valid, permanent row value — it is not a placeholder to be swapped for an Amazon link
  later.
- **Region model**: `US`, `UK`, `DE`, `FR`, `IT`, `ES` — six regions, no separate URLs per region (per
  the map's decision). These codes are **internal only** (dataset `regions[]` values, the `affiliate`
  per-region map keys, and the `localStorage` value); the region toggle **displays full country names**
  to visitors — United States, United Kingdom, Germany, France, Italy, Spain — since `DE`/`FR`/`IT`/`ES`
  aren't self-evident to most shoppers. A client-side region-toggle island appears on the Finder
  homepage and every
  `[platform]/[category]` long-tail page; the toggle re-renders which platforms are shown and which
  regional buy link each product row uses. Default region on first visit is `US`; the visitor's choice
  persists via `localStorage` for repeat visits. No IP-based geolocation — keeps the pages fully static
  with no server-side logic.
- **`catalog.json` schema extended for regions, not replaced**: each platform entry gains a
  `regions: string[]` field (subset of the six region codes) marking where it's actually sold; a
  platform absent from the selected region is filtered out of that region's view entirely (e.g. HART,
  Craftsman are US-only and disappear when UK/DE/FR/IT/ES is selected — confirm WORX Power Share and
  Greenworks 24V regional availability during the EU data pass rather than assuming). Each product's
  `affiliate` field becomes a per-region map (`{ US: {...}, UK: {...}, DE: {...}, FR: {...}, IT: {...},
  ES: {...} }`), each entry carrying its own `asin`/`affiliate_url`/`affiliate_enabled`/
  `requires_disclosure`; a region key is only added once a real, verified buy link exists for that
  region — an unpopulated region key means "not yet verified there," and the row is hidden (not shown
  with a broken link) when that region is selected.
- **Platform equivalence rule, with one required exception**: same manufacturer + same battery
  interface across regions stays a single platform entry with an optional `region_note` documenting a
  cosmetic badge-name difference (e.g. DeWalt US "20V MAX" badged "XR 18V" in UK/EU — same platform
  slug `dewalt-20v-max`, one `region_note`). **Ryobi is the mandatory exception**: US/Canada/Australia
  Ryobi ONE+ is TTI-licensed and UK/EU Ryobi is Positec-licensed — two incompatible battery systems
  under one brand name. Model these as two platform slugs (e.g. `ryobi-18v-one` for US/TTI and
  `ryobi-one-eu` for UK/EU/Positec) and never merge their product rows. Verify any other
  same-name-different-licensee split (this pattern is not unique to Ryobi) during the EU/UK data pass
  before adding rows, rather than assuming US compatibility data carries over.
- **No price/currency display**: the catalog has never stored a price field, only a buy link — so the
  region toggle only needs to swap which marketplace link is shown, not format currency. This sidesteps
  GBP/EUR price-display work entirely; if a price field is added later, currency formatting per region
  becomes an explicit follow-up, not something this PRD covers.
- **Content stays English-only**: no translation of site copy, nav, methodology, FAQ, or product notes
  into German/French/Italian/Spanish. The region toggle changes buy links and platform visibility only.
  Full multilingual localization is out of scope (see below).
- **Long-tail URLs are unchanged by region**: per the map's decision, `[platform]/[category]` pages keep
  their existing single URL (e.g. `/milwaukee-m18/fans`) rather than gaining `/uk/...`/`/de/...`
  variants — the static page is generated once per platform × category and the region toggle is a
  client-side re-render on top of it. This means UK/DE/FR/IT/ES search intent for the same
  platform × category keyword lands on the same URL as US intent and self-serves via the toggle; no
  region-specific SEO targets are added by this change (see SEO targets note below).
- **Monetization stays off at launch**: `SITE.monetization.affiliate.enabled = false` and
  `SITE.monetization.ads.enabled = false` in `site.config.mjs`, per the map's ship-first ordering. Every
  product row's per-region `affiliate` entries are populated with real `asin`/`affiliate_url` values
  ahead of time (so flipping the switch later — potentially per-region, since Amazon Associates
  programs are separate accounts per marketplace — is a config change, not a data re-pass) but render as
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
- Manually spot-check the region toggle on a sample of platform × category pages: switching to UK/DE/
  FR/IT/ES hides US-only platforms (HART, Craftsman, and any others confirmed US-only during the data
  pass), Ryobi US/TTI rows never appear under a UK/EU region selection and vice versa, and every visible
  product row's buy link actually points at the selected region's Amazon marketplace domain (not a
  silently-reused `.com` link).

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
- Full multilingual translation of site copy (nav, methodology, FAQ, product notes) into German,
  French, Italian, or Spanish — the region toggle changes buy links and platform visibility only; the
  site itself stays English-only for this change.
- Region-prefixed or region-specific long-tail URLs (e.g. `/uk/milwaukee-m18/fans`) and separate
  regional subdomains/deploys — the map's decision is one URL per platform × category with a
  client-side region toggle on top, not region-specific routing or hosting.
- Displaying price or currency per region — the catalog has no price field today; this change only
  swaps which regional buy link is shown.
- Signing up for UK/DE/FR/IT/ES Amazon Associates accounts or enabling affiliate tracking for any
  region — monetization stays off everywhere per the existing ship-first ordering; this change only
  prepares the per-region link data ahead of time.
- Auditing every already-published US-only platform (WORX Power Share, Greenworks 24V, and any other
  platform not explicitly confirmed US-only) for EU/UK availability — that confirmation happens during
  the EU/UK data-population pass that follows this PRD update, not as part of writing the PRD.

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
- **Ryobi US/TTI vs UK-EU/Positec is a real, load-bearing risk, not a formality.** Ryobi ONE+ in North
  America/Australia is licensed to Techtronic Industries (TTI); Ryobi in the UK/EU is licensed to
  Positec — the two use different, physically incompatible battery packs despite sharing a brand name.
  Any EU/UK Ryobi data must be sourced from Positec-line listings/spec pages, never assumed compatible
  with the existing US/TTI `ryobi-18v-one` rows already in `catalog.json`. Treat this the same way the
  existing dataset treats native/adapter fit — get it wrong here and the site publishes exactly the
  kind of unsafe compatibility claim it exists to prevent.
- No SERP/AIO re-probe has been run for UK/DE/FR/IT/ES query variants — the dossier's evidence (dated
  2026-09-01, expired 2026-09-29) is US/Google.com only. Treat EU/UK traffic potential as unvalidated
  until a follow-up scout/validate pass covers those markets; this PRD change is a data-model and UI
  change, not a re-validation of demand outside the US.

## Core job

Pick your battery platform and a product category; see every verified gadget that runs on it, flagged
native / direct-fit / needs-adapter, with a buy link. A "do it" filter-and-buy action, not an "answer
it" explainer page.

## Data source & update plan

Merged from three sources per row, each hand-verified for battery interface (voltage + rail), fit-type,
and battery-included status:

- **Amazon listings** — price, battery-included status, product images/ASIN (amazon.com for US rows;
  amazon.co.uk, amazon.de, amazon.fr, amazon.it, amazon.es for the matching region once verified).
- **Manufacturer spec pages** — native-platform confirmation (US and, for EU/UK rows, the manufacturer's
  regional site/spec page — not the US page, since UK/EU model numbers and even licensees can differ,
  per the Ryobi TTI/Positec case above).
- **Reddit/YouTube owner reports** — third-party direct-fit and adapter-path facts not published by
  either of the above (e.g. r/ryobi's "Any Cool Third Party Tools" thread, r/Dewalt threads, owner
  YouTube channels; for UK/EU rows, the region-specific subreddits/forums, e.g. r/UKElectricians,
  r/DIYUK, German/French/Italian/Spanish equivalents where they exist).

No formal licence/terms issue — these are factual compatibility claims about publicly sold products,
not reproduced copyrighted content. Update cadence: monthly new-product sweep across the ~6 covered US
platforms plus the UK/DE/FR/IT/ES rows once populated, plus a quarterly affiliate-link/price check once
monetization is enabled. Adding five regions roughly multiplies the platform × category surface under
maintenance; the monthly sweep should still fit under the 3 hrs/week upkeep cap by scoping each pass to
whichever platform × region combinations have the most product churn, but this should be re-checked
once the EU/UK dataset exists rather than assumed (dossier's original estimate: "Feasibility &
sustainable upkeep: strong" — US-only).

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

**At launch, monetization is off entirely** — every product row's buy link is a plain outbound link
(Amazon *or* manufacturer/retailer product page), with no affiliate tagging, no disclosure rendering,
and `SITE.monetization.affiliate.enabled = false`. Non-Amazon links (Home Depot, milwaukeetool.com,
worx.com, greenworkstools.com, etc.) are permanent valid values, not placeholders.

When affiliate monetization is eventually turned on it will be **Amazon-only**: only Amazon links get
affiliate tagging and the FTC disclosure; manufacturer/retailer links stay plain outbound links. The US
Amazon Associates rates are Tools/Home Improvement/Lawn & Garden/Outdoors 3.00% and Kitchen 4.50%
(verified verbatim per the dossier). UK/DE/FR/IT/ES each run their own separate Amazon Associates
program with their own signup and tracking id — this PRD only prepares each product row's per-region
Amazon `affiliate_url`/`asin` data so those programs can be joined later; it does not assume UK/EU
commission rates match the US ones, and does not sign up for any of them. No AdSense placement decisions
are made by this PRD beyond the template's existing reserved-but-empty ad slots — both
`SITE.monetization.ads` and `SITE.monetization.affiliate` stay `enabled: false` at launch, for every
region, per the ship-first ordering. Actual AdSense and per-region Associates signup/approval remain
human checkpoints outside this PRD's or any agent's hands.

## Maintenance plan

Monthly new-product sweep across the ~6 covered US platforms plus the UK/DE/FR/IT/ES rows once
populated (adding rows to `catalog.json`); quarterly affiliate-link/price check once monetization is
enabled. Product rows are stable once verified — a gadget's battery interface doesn't change — so churn
is limited to new products trickling in, not re-verification of existing rows. Estimated well under the
3 hrs/week upkeep cap for the US-only dataset; re-check this cap once the five additional regions are
populated, since the sweep surface is now platform × category × region rather than platform × category
alone.

## Standing constraints

- Static HTML/CSS/JS only — no accounts, no database, no backend. (Satisfied: Astro static output, no
  SSR adapter, client-side filter island only.)
- Mobile-first, fast (good Core Web Vitals), crawlable and indexable. (Satisfied by the house template's
  existing CWV-safe font loading, static rendering, and per-platform×category static routes.)
- Cheap to host (static hosting). (Satisfied: Cloudflare Pages, per ticket 06.)
- US market by default, with UK/DE/FR/IT/ES as selectable regions via the client-side region toggle.
  US-only house brands (Hart, Bauer, Kobalt, and any others confirmed US-only) stay hidden outside the
  US region; Amazon Associates remains US-only until UK/DE/FR/IT/ES accounts are set up (out of scope
  for this PRD).
