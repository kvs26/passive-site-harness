# Add plain (untagged) Amazon/retailer product links ahead of affiliate approval

Type: task
Status: resolved
Blocked by: 14

## Question

Site #1's dataset already carries a real, working `affiliate_url` per row (Amazon or a
manufacturer/retailer product page — see `catalog.json`'s `$schema-note`), but before this ticket
`AffiliateLink.astro` only ever showed a link when the row was fully monetized
(`SITE.monetization.affiliate.enabled` + row `affiliate_enabled`, both false pre-Associates). Every
product therefore rendered as plain text with no outbound link at all, even though a real link
existed and needed no Associates account to show.

Split the single affiliate on/off switch into two independent phases so the link can go live now and
convert to a tagged affiliate link later with no template change:

1. **Now (this ticket):** show each row's `affiliate_url` as a plain outbound link — no
   `rel="sponsored"`, no FTC disclosure (none is owed; it isn't a monetized link yet).
2. **Later (ticket 16, post-Associates):** flip that row's `affiliate.affiliate_enabled` + a real
   tagged deep link, plus `SITE.monetization.affiliate.enabled = true`. The tagged/disclosed CTA then
   takes over for that row automatically — the plain-link path only ever fills the gap for rows not
   yet converted.

## Answer

Added a third render state to `AffiliateLink.astro` (both the canonical
`factory/house-template/` copy and site #1's copy), gated by a new independent config switch,
`SITE.monetization.productLinks.enabled` (default `false`):

- `affiliate.enabled` (row + site) on → tagged CTA, `rel="sponsored nofollow"`, disclosure line
  (unchanged, ticket 05/16's behavior).
- Not tagged, but `productLinks.enabled` is on and the row has a URL → plain link, `rel="nofollow"`,
  no disclosure.
- Neither → plain text, no `<a>` (unchanged fallback).

Site #1 (`runs-on-your-battery-finder`) had `productLinks.enabled = true` briefly (plain
Amazon/retailer links live). The site owner then asked to turn it back off pending a decision on
whether links should be specific product pages (most current `affiliate_url` values are Amazon
*search* links, not `/dp/` product links) rather than plain search-result links — so site #1's own
copy currently ships the switch **off**, matching the canonical template's default. Both
`npm run build` still succeed (house-template: 31 pages; site #1: 51 pages).

Documented in `factory/house-template/README.md` (new-site checklist + "Turning on monetization").
Ticket 17 (Extract the factory) now carries the requirement that `/build-site` must ask the site
owner whether to enable this switch when standing up a new site, rather than leaving it silently off.
