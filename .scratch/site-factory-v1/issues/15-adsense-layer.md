# Turn on the AdSense monetization layer

Type: task
Status: open
Blocked by: 14

## Question

Activate display ads on the **live** site #1, using the reserved-but-empty ad holes already built into
the template (ticket 04, `AdSlot.astro`). Post-launch by design — AdSense approval needs a live site
with real traffic, so this can only start once ticket 14 has shipped.

Concretely:

1. **Apply for Google AdSense** (HITL — human-only account/approval step) for the live domain; add
   `ads.txt` once the publisher id is issued.
2. **Flip the switch:** set `SITE.monetization.ads.enabled = true` and `adsensePublisherId` in
   `site.config.mjs`; confirm the reserved `AdSlot` boxes fill **in place with zero reflow / no CLS**.
3. **Placement per PRD** — ad slots on the page types the PRD's Monetization Placement section names,
   without harming the tool's usability or Core Web Vitals.
4. **(Optional) analytics** — set `SITE.analytics.provider` (Cloudflare Web Analytics recommended:
   cookieless, no consent banner) so ad/traffic performance is measurable.

Resolution records where ads render, the CWV before/after check, and the approval outcome. Any reusable
AdSense-activation steps learned here feed the "Extract the factory" skill (ticket 17).
