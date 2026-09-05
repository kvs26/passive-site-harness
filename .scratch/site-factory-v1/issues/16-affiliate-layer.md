# Turn on the affiliate monetization layer

Type: task
Status: open
Blocked by: 14

## Question

Activate affiliate links on the **live** site #1, using the affiliate holes already built into the
template (ticket 05, `AffiliateLink.astro`) and the per-row affiliate blocks already present in
`catalog.json` (currently `affiliate_enabled: false`, Amazon search-scoped URLs). Post-launch by design —
Amazon Associates requires a live site + 3 qualifying sales within 180 days, so this follows shipping
(ticket 14).

Concretely:

1. **Join Amazon Associates** (HITL — human-only account step) for the live site; obtain the tracking
   tag.
2. **Mint tagged links** — replace each row's search-scoped `affiliate_url` with a real tagged deep link
   to the exact model where possible, and set `affiliate_enabled: true` per verified row.
3. **Flip the switch:** set `SITE.monetization.affiliate.enabled = true`; confirm the FTC
   `disclosure` line renders near affiliate links + in the footer, and links carry
   `rel="sponsored nofollow"`. Off rows must still render as plain text.
4. **Disclosure page** — confirm `/disclosure` matches the active affiliate relationship.

Resolution records which rows are monetized, the disclosure placement, and the Associates status. Any
reusable steps feed the "Extract the factory" skill (ticket 17).
