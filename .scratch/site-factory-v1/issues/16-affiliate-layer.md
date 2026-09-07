# Turn on the affiliate monetization layer

Type: task
Status: closed (out of scope)
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

## Out of scope

Ruled out of scope during ticket 17 (Extract the factory), per the map's override: joining Amazon
Associates and minting tagged links stay the site owner's own manual action per live site. The
`/build-site` skill (ticket 17) verifies and attaches whatever raw links the owner hands it, asks
whether to enable plain `productLinks` pre-approval, and — later, on request — flips
`SITE.monetization.affiliate.enabled` once the owner supplies real tagged links. It never joins
Associates itself. No agent-driven "activation" ticket is needed.
