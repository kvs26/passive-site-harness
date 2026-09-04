# Affiliate programs + reusable link component

Type: research
Status: resolved

## Question

For the runs-on-your-battery niche (and reusably across the factory):
- **Which affiliate programs apply.** Amazon Associates is primary (mechanics already known from the dossier: ~3% Tools/Home Improvement, 24h cookie, 3-sales/180-day activation, W-8BEN, FTC disclosure line). Note viable alternatives/networks (e.g. manufacturer programs, Impact/CJ/ShareASale, Walmart/Home Depot) and whether they're worth it here.
- **The reusable, deferred affiliate-link component** the factory needs: affiliate links as **data fields in the dataset** (per-row), `rel="sponsored nofollow"`, disclosure placement, geo/localization (Amazon OneLink), link-rot handling, and how the component plugs into a live site *later* with zero re-architecting.

Output: the component contract (inputs/behavior) + a per-row **data schema** for affiliate links that the dataset and template share.

Write findings to `research/05-affiliate-integration.md`.

## Answer

Amazon Associates is the only immediately viable affiliate program for this niche; no accessible manufacturer (DeWalt/Milwaukee/Ryobi/Makita) or network (Impact/CJ/ShareASale/Home Depot/Walmart) program is a proven alternative today — Amazon alone at launch, revisit later only if catalog/retailer diversification becomes a priority.

Verified from Amazon's own operating policy: 24-hour click-to-session cookie window (session ends earlier on order or another affiliate click); 3-qualifying-sales/180-day account activation gate; Tools/Home Improvement/Lawn & Garden/Outdoors at 3.00%, Kitchen at 4.50% (already known from the dossier); FTC disclosure obligation is referenced explicitly in Amazon's policy text (pointing to the FTC's own Endorsement Guides). Confirmed from Google Search Central: affiliate links should use `rel="sponsored nofollow"`. W-8BEN specifics and Amazon OneLink mechanics could not be verified from an accessible primary source in this pass — flagged as open pre-launch checks, not blockers.

Component contract: a data-driven `AffiliateLink`/`AffiliateComponent` pair where every dataset row carries an `affiliate` block (`asin`, `affiliate_url`, `link_type`, `affiliate_enabled`, `requires_disclosure`, `disclosure_template`, `commission_rate`) and a `link_health` block (`last_verified_date`, `last_verified_alive`, `verification_interval_days`). `affiliate_enabled: false` and `affiliate_url: null` is the pre-monetization default — the schema exists from day one so turning monetization on later is a data flip plus dropping in the render component, not a re-architecture. Dead links (monthly HEAD-check, curator-gated removal) fall back to an Amazon search-URL rather than being deleted. OneLink geo-localization is deferred behind a `link_type` switch rather than hard-coded now.

Full findings, citations, and the JSON schema: [research/05-affiliate-integration.md](research/05-affiliate-integration.md).
