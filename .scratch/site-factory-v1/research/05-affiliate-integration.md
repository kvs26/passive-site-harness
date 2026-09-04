# Research: Affiliate Integration for Site Factory v1

**Date:** 4 September 2026
**Context:** Runs-on-Your-Battery-Finder niche; reusable across site factory
**Status:** Primary source research completed (some items unresolved — marked unknown)

---

## Amazon Associates Program Mechanics

### 24-Hour Cookie Window (Session Tracking)

**Verified:** ✓ Primary source

> "...during a single session, which is measured as beginning when a customer clicks through that Special Link and ending upon the first to occur of the following: (x) 24 hours elapse from that click, (y) the customer places an order for a Product..."

**Source:** Amazon Associates Program Policies, Section 1 (Qualifying Purchases and Qualifying Revenue)
**URL:** https://affiliate-program.amazon.com/help/operating/policies
**Interpretation:** The cookie/session window is **24 hours from initial click**, or terminates earlier if the customer places an order or clicks another affiliate's link.

### 3-Sales / 180-Day Account Activation Requirement

**Verified:** ✓ Primary source

> "After you sign up, our Associates team will check your application once you've driven qualified sales (we require at least three within the first 180 days). Please note that personal orders do not qualify."

**Source:** Amazon Associates Program Help, Application Review Process
**URL:** https://affiliate-program.amazon.com/help/node/topic/G8TW5AE9XL2VX9VM
**Requirement:** Account must generate **minimum 3 qualifying sales within the first 180 days** to move from provisional to active status — a hard gate for program participation.

### Commission Rates (Runs-on-Your-Battery Context)

**Verified:** ✓ Primary source (already verified in the idea dossier)

- **Tools / Home Improvement / Lawn & Garden / Outdoors:** 3.00%
- **Kitchen:** 4.50% (coffee makers, small kitchen gadgets)

**Source:** Amazon Associates Standard Commission Income Statement
**URL:** https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ

### Tax Form Requirement for Non-US Associates

**Status:** Unknown — could not verify the specific W-8BEN form requirement verbatim from a primary source in this pass.

**Reference found:**
> "If you are a non-US person participating in the Associates Program, you agree that unless you have otherwise notified us in your tax information you will perform all services under the Agreement outside the United States."

**Source:** Amazon Associates Program Policies, Participation Requirements
**URL:** https://affiliate-program.amazon.com/help/operating/policies

**Recommendation:** Verify the exact W-8BEN requirement during the account-setup flow (it appears in Amazon's tax-interview UI, not in the public policy text) before finalizing site launch.

---

## Alternative Affiliate Programs & Networks

### Manufacturer-Direct Programs (DeWalt, Milwaukee, Ryobi, Makita)

**Status:** Unknown — no publicly accessible affiliate program documentation found for any of the four brands. If they exist, terms are not published; would require direct outreach to each manufacturer's partnership team.

### General Affiliate Networks

- **Impact (impact.com):** Platform for managing affiliate/creator/referral programs; requires brand sign-up (e.g. a specific retailer or manufacturer) — not itself a source of a power-tools program. https://impact.com/
- **CJ Affiliate (cj.com):** Established network aggregating 3,000+ merchant programs; may include home-improvement retailers, but no power-tools-specific program terms were accessible without joining. https://www.cj.com/
- **ShareASale:** Acquired by Awin; redirected, no independently accessible program terms found in this pass.
- **Home Depot / Walmart direct:** No direct-enrollment affiliate program found on either corporate site; both likely route through a third-party network rather than direct sign-up.

### Verdict on Alternative Programs

**Amazon Associates is the only immediately viable affiliate option** for the runs-on-your-battery niche:
1. Broadest catalog coverage across all battery platforms (DeWalt/Milwaukee/Ryobi/Makita-compatible gadgets).
2. Public, self-service enrollment with clear terms — no pre-existing brand relationship needed.
3. No accessible alternative currently offers a comparable, provable program for this niche.
4. Single affiliate source keeps the data schema and disclosure logic simple.

**Recommendation:** Launch with Amazon Associates only. Revisit CJ Affiliate (for Home Depot-type retailers) in a later phase if catalog/retailer diversification becomes a priority — this is a re-probe, not a blocker.

---

## Compliance & Disclosure

### FTC Affiliate Disclosure Requirement

**Verified:** ✓ Referenced explicitly in Amazon's own operating policy (which itself points to the FTC as the controlling authority).

> "...displaying Special Links and Program Content on your Site in compliance with the Agreement, all applicable laws, ordinances, rules, regulations, orders, licenses, permits, guidelines, codes of practice, industry standards, self-regulatory rules, judgments, decisions, or other requirements of any applicable governmental authority, including those related to disclosures (for example, if applicable, the U.S. FTC Guides Concerning the Use of Endorsement and Testimonials in Advertising)..."

**Source:** Amazon Associates Program Policies, Participation Requirements (Responsibility for Your Site)
**URL:** https://affiliate-program.amazon.com/help/operating/policies

**Direct FTC source:** Not independently re-fetched in this pass; Amazon's policy text is the primary citation used here. Recommend a follow-up fetch of the FTC's own "Disclosures 101 for Social Media Influencers" / Endorsement Guides page before finalizing site copy, to quote the FTC directly rather than at one remove through Amazon.

**Practical implementation:** Every page carrying affiliate links needs a clear, conspicuous disclosure, e.g. "As an Amazon Associate we earn from qualifying purchases," placed near the top of the page (not just buried in a footer/legal page).

### Google `rel="sponsored nofollow"`

**Verified:** ✓ Primary source

> "Mark links that are advertisements or paid placements (commonly called paid links) with the sponsored value."
> "Use the nofollow value when other values don't apply, and you'd rather Google not associate your site with, or crawl the linked page from, your site."

**Source:** Google Search Central, "Qualify Your Outbound Links"
**URL:** https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links

**Implementation:** `<a rel="sponsored nofollow" href="...">` on every affiliate product link — combining both values is Google's own recommended pattern for paid/affiliate links.

---

## Amazon OneLink (Geo-Localization)

**Status:** Unknown — could not verify current documentation from a primary source in this pass (OneLink-specific help pages were not reachable).

**What it's understood to do:** Auto-redirect visitors to their local Amazon storefront (amazon.co.uk, amazon.de, etc.) while preserving affiliate credit.

**Recommendation for component design:** Defer OneLink as an optional, data-driven switch (`link_type: "direct" | "onelink"`) rather than hard-coding geo-logic into the template now. Verify OneLink's current setup/API directly with Amazon Associates support before the localization work is scheduled.

---

## Reusable Affiliate-Link Component Contract

### Purpose

A deferred-monetization component: dataset carries affiliate metadata per row; the component renders links, disclosure, and fallback behavior — pluggable into any site template with **zero re-architecting** and addable *after* a site is already live and ranking.

### Component Contract (abstract)

```typescript
interface AffiliateLink {
  productName: string;
  productDescription: string;
  asin: string;
  affiliateUrl: string;
  amazonOnelinkId?: string | null;
  linkType: "direct" | "onelink";
  priceUsd: number;
  category: string;
  affiliateEnabled: boolean;
  lastVerifiedDate: string;   // ISO 8601
  lastVerifiedAlive: boolean;
  requiresDisclosure: boolean;
  disclosureText: string;
}

interface AffiliateComponent {
  render(link: AffiliateLink): HTMLElement;
  renderDisclosure(link: AffiliateLink): HTMLElement;
  validateLinkAlive(url: string): Promise<boolean>; // link-rot check
}
```

### Rendering behavior

1. Render the link with `rel="sponsored nofollow"`.
2. Render an inline (not footer-only) FTC disclosure near the link.
3. If `lastVerifiedAlive === false`: render a muted/fallback state — a search-URL fallback (`https://amazon.com/s?k={productName}`) rather than the dead direct link, since ASIN-based direct links are less reliable to reconstruct than a search redirect.
4. If `linkType === "onelink"` and an ID is present, resolve via OneLink at render time; otherwise use `affiliateUrl` as-is.
5. Every affiliate field is optional at the dataset level (`affiliateEnabled: false` renders the row with no monetization) — this is what makes monetization a layer addable after publish, not a launch-time requirement.

### Per-row data schema

```json
{
  "product": {
    "name": "Arctic Cove 16\" Oscillating Misting Fan",
    "description": "High-velocity misting fan; powered by Ryobi One+ 18V batteries",
    "image_url": "https://m.media-amazon.com/images/I/...",
    "manufacturer": "Arctic Cove"
  },
  "affiliate": {
    "asin": "B0D5X1Z8YK",
    "affiliate_url": "https://amazon.com/gp/product/B0D5X1Z8YK?tag=yourtag-20",
    "amazon_onelink_id": null,
    "link_type": "direct",
    "price_usd": 79.99,
    "category": "Fans & Cooling",
    "affiliate_enabled": false,
    "requires_disclosure": true,
    "disclosure_template": "As an Amazon Associate we earn from qualifying purchases",
    "commission_rate": 0.03,
    "commission_rate_category": "Tools/Home Improvement/Lawn & Garden/Outdoors"
  },
  "link_health": {
    "last_verified_date": "2026-09-01",
    "last_verified_alive": true,
    "verification_interval_days": 30,
    "next_verification_due": "2026-10-01"
  }
}
```

**Minimal fields needed to render:** `product.name`, `affiliate.asin`, `affiliate.affiliate_url`, `affiliate.affiliate_enabled`, `affiliate.requires_disclosure`, `affiliate.disclosure_template`, `link_health.last_verified_alive`.

**Zero re-architecting guarantee:** the dataset carries the fields from day one (all set to `affiliate_enabled: false`, `affiliate_url: null`) even before AdSense/Associates approval — turning monetization on later is a data flip plus dropping in the component, not a schema migration.

---

## Link-Rot & Verification Strategy

- **Cadence:** monthly HTTP HEAD check against every row's `affiliate_url`; `2xx` → alive, `4xx/5xx`/timeout → dead.
- **Curator-gated removal:** dead links are flagged, not auto-removed — a human reviews before the dataset is updated.
- **Fallback:** dead links render as an Amazon search redirect rather than being deleted outright, preserving some monetization value while avoiding a broken-link UX.

---

## Open items for a later ticket / pre-launch check

- Confirm the FTC's own Endorsement Guides text directly (currently cited only via Amazon's reference to it).
- Confirm W-8BEN specifics directly from Amazon's tax-interview flow during account setup.
- Confirm current Amazon OneLink setup mechanics directly from Amazon Associates support before geo-localization work is scheduled.
