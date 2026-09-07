# Turn on the AdSense monetization layer

Type: task
Status: closed (out of scope)
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

## Out of scope

Ruled out of scope during ticket 17 (Extract the factory), per the map's override: AdSense signup and
approval stay the site owner's own manual action on each live site, done outside any agent session.
The `/build-site` skill (ticket 17) only reserves the ad holes and, later, flips
`SITE.monetization.ads.enabled` once the owner hands over a real publisher id — it never applies for
AdSense itself. No agent-driven "activation" ticket is needed.
