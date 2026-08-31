# 03 — Earnings per visitor: what one visitor to a small static niche tool site pays in 2026

**Question:** What does one US visitor to a small static niche tool site (calculator / lookup / curated database) realistically pay under (a) display ads, (b) affiliate links, (c) blended — and what monthly-visitor targets do the $100/mo and $300/mo revenue bars translate into?

**Researched:** 2026-08-31. Every number below carries its source URL. "Unknown" is used wherever no citable figure exists.

---

## 1. Display ads — RPM ranges and entry bars

### 1.1 Definitions

- Page RPM = (estimated earnings ÷ pageviews) × 1000 — Google's own definition: https://support.google.com/adsense/answer/190515

### 1.2 AdSense — Google's own per-niche estimates (the only primary source found)

Google publishes no niche RPM tables, but its official earnings calculator at https://adsense.google.com/start/ produces per-category estimates. Read directly from the live calculator on 2026-08-31 (region **Americas**, at the slider minimum of **50,000 monthly pageviews**; calculator's own disclaimer: "just an estimate… no guarantee"):

| Category (calculator label) | Potential yearly earnings | Implied monthly | Implied page RPM |
|---|---|---|---|
| Pets & Animals | $1,400 | $116.67 | **$2.33** |
| Reference | $1,400 | $116.67 | **$2.33** |
| Food & Drink | $1,500 | $125.00 | **$2.50** |
| Hobbies & Leisure (crafts) | $1,600 | $133.33 | **$2.67** |
| Shopping | $1,600 | $133.33 | **$2.67** |
| Home & Garden | $8,000 | $666.67 | **$13.33** |

Arithmetic: implied RPM = yearly ÷ 12 ÷ 50,000 × 1000. Source: https://adsense.google.com/start/ (interactive calculator; values are JS-rendered, extracted via browser on 2026-08-31).

Key takeaway: for our candidate niches, Google itself estimates **~$2.30–$2.70 RPM** — except **Home & Garden at ~$13.30**, roughly 5× the others (appliance/home tools sit here). These are Americas-region blended estimates; a 100%-US audience may do somewhat better, but no primary source quantifies that — **unknown**.

- AdSense entry bar: no traffic minimum; content/policy review only. New-site friction: sites must pass a review and comply with program policies (https://support.google.com/adsense/answer/9724): no published pageview threshold.

### 1.3 Premium networks — pay rates and entry bars (2026)

| Network | Published RPM | Entry bar (2026) | Source |
|---|---|---|---|
| **Journey by Mediavine** | unknown (not published) | **≥1,000 "premium sessions" in 30 days**, connected GA4, original brand-safe content; run Grow ≥30 days. Auto-disqualifiers: Wix/Blogspot, "excessive use of AI", <1,000 premium sessions | https://journeymv.zendesk.com/hc/en-us/articles/24633185741723-Journey-Minimum-Requirements ; https://www.journeymv.com/ |
| **Mediavine (full)** | unknown (not published) | **≥$5,000/year in ad revenue** ("Not at $5K yet? Start with Journey… Journey starts at 1K sessions") | https://www.mediavine.com/mediavine-requirements/ |
| **Raptive** | unknown (not published) | **≥25,000 pageviews/mo** (lowered from 100K, Oct 16 2025). For 25K–99K tier: 50% traffic from US/UK/CA/NZ/AU, long-form content on majority of pages, **domain ≥6 months old**, GA set up | https://help.raptive.com/hc/en-us/articles/360032840891-Who-is-eligible-for-Raptive ; https://raptive.com/blog/opening-the-door-to-more-creators-who-meet-raptive-quality-standards/ |
| **Ezoic** | unknown (Ad Revenue Index exists at https://adrevenueindex.ezoic.com/ but was not fetched) | **250,000+ monthly active users** for new sites (policy effective Feb 19 2026); smaller sites routed to "Ezoic Incubator Program" | https://support.ezoic.com/kb/article/getting-started-ezoics-requirements ; https://support.ezoic.com/kb/article/ezoic-incubator-program |

New-site implications:
- **Ezoic is no longer a small-site option** (250K MAU bar). Its old "no pageview minimum" era (https://www.ezoic.com/blog/no-more-pageview-limits, June 2021) is superseded.
- **Journey at 1K sessions/30 days is the realistic first premium step**; note Raptive's tier structure also imposes a **domain-age ≥6 months** rule, and Journey explicitly disqualifies "excessive use of AI" content — a direct risk for AI-generated tool/database sites.
- Journey/Mediavine/Raptive RPMs: **unknown** — none publish rate tables. Third-party claims exist but are not primary sources and are excluded per the no-invented-numbers rule.

Caveat for tool sites specifically: display RPM assumes the visitor sees ad-filled pages. A calculator page with one interaction and no scroll depth may monetize below content-page RPMs; no citable figure for this discount — **unknown**.

---

## 2. Affiliate links

### 2.1 Amazon Associates — fixed standard commission rates

Source (official rate card): https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ

| Category (relevant to our niches) | Rate |
|---|---|
| **Pets Products** | **3.00%** |
| Home, Home Improvement, Lawn & Garden, Furniture, Tools, Toys, Sports, Baby | 3.00% |
| **Kitchen** | **4.50%** |
| Physical Books | 4.50% |
| Automotive | 4.50% |
| Grocery, Health & Personal Care | 1.00% |
| Pet Prescription Medications | 0.00% |
| All Other Categories | 4.00% |

Bounties (fixed fees, same page): Pet Food & Supplies first-purchase bonus **$3.00**; Prime Free Trial sign-up $3.00; Amazon Business registration $15.00.

Cookie window (official): **24 hours from click**; window closes early if the customer submits an order or clicks another associate's link; items added to cart within the 24h still earn commission if ordered before the cart expires (~90 days). Source: https://affiliate-program.amazon.com/help/node/topic/G9SMD8TQHFJ7728F. Operating Agreement (updated Oct 15 2025): https://affiliate-program.amazon.com/help/operating/agreement.

Entry requirement relevant to a new site: Amazon reviews the account after the first qualifying sales; the account must generate **3 qualifying sales within 180 days** of signup or it is closed (may re-apply) — https://affiliate-program.amazon.com/help/operating/agreement.

### 2.2 Pet retailers

- **Chewy:** **4% commission**, **15-day cookie**, program run via Partnerize/Impact. Program page: https://www.chewy.com/app/content/affiliate (direct fetch failed; terms confirmed via the partner signup page https://join.partnerize.com/chewy/en_us and search-result snippets of the Chewy page). Treat the 4%/15-day figures as sourced-but-secondary.
- **Petco:** rate and cookie **unknown** — not fetched from a primary page in this pass.
- **Home Depot** (appliance niche): rate and cookie **unknown** — not fetched in this pass.

### 2.3 CTR / conversion assumptions

No citable 2025–2026 primary source was found for affiliate link CTR or Amazon conversion rate for niche tool sites. **Both are unknown.** Any affiliate revenue projection must carry them as explicit variables (see §4).

One documented data point on order size (single site, home/garden niche, Dec 2020): Amazon average order value **$37.95** on OwnTheYard.com — https://www.nichepursuits.com/owntheyard-2020-review/. Dated; use as illustration only.

---

## 3. Digital products context (fees only)

- **Gumroad:** **10% + $0.50 per transaction** on direct sales; **30%** on sales via the Discover marketplace; no monthly fee; Gumroad is merchant of record (since Jan 1 2025). Source: https://gumroad.com/pricing
- **Lemon Squeezy:** **5% + 50¢ per transaction**; $0/mo; merchant of record; small surcharges possible (e.g., PayPal, +0.5–1% international). Source: https://www.lemonsqueezy.com/pricing

---

## 4. Visitors-needed table

Convention: 1 visitor ≈ 1 session; pageviews = visitors × pages/visit. For a single-interaction tool site assume **1.3 pages/visit** (assumption, not sourced — tool sites have shallow depth; flagged explicitly).

### 4.1 Ads only

Formula: monthly pageviews needed = target ÷ (RPM ÷ 1000); visitors = pageviews ÷ 1.3.

RPM scenarios from Google's own calculator (§1.2): **low = $2.33** (Pets/Reference), **high = $13.33** (Home & Garden).

| Target | RPM | Pageviews/mo needed | Visitors/mo (÷1.3) |
|---|---|---|---|
| $100 | $2.33 (low) | 100 ÷ 0.00233 = **42,918** | ~33,000 |
| $100 | $13.33 (high) | 100 ÷ 0.01333 = **7,502** | ~5,800 |
| $300 | $2.33 (low) | 300 ÷ 0.00233 = **128,755** | ~99,000 |
| $300 | $13.33 (high) | 300 ÷ 0.01333 = **22,506** | ~17,300 |

Entry-bar cross-check: at the low-RPM end, $300/mo needs ~129K pageviews — above Raptive's 25K bar (which would raise RPM, unknown by how much) but demonstrates the scale problem. At AdSense-only rates, even $100/mo in a pet/reference niche needs ~43K pageviews/mo.

### 4.2 Affiliate only

Formula (all unknowns explicit):

> revenue = visitors × CTR(unknown) × CVR(unknown) × AOV × commission
> visitors needed = target ÷ (CTR × CVR × AOV × commission)

Anchored illustration ONLY (assumptions labeled): CTR = 10% (assumed), CVR = 5% (assumed), AOV = $37.95 (single documented site, https://www.nichepursuits.com/owntheyard-2020-review/), commission = 3% (Amazon Pets, cited §2.1):

- Revenue/visitor = 0.10 × 0.05 × 37.95 × 0.03 = **$0.0057** (≈ $5.70 RPM-equivalent per 1,000 visitors)
- $100/mo → 100 ÷ 0.0057 ≈ **17,600 visitors/mo**; $300/mo → ≈ **52,700 visitors/mo**
- At Chewy 4% instead of 3%: $100 → ≈13,200; $300 → ≈39,500 visitors/mo.

These hinge entirely on the assumed CTR/CVR — real values are **unknown** and could be several× lower on informational tool pages (24-hour Amazon cookie compounds this).

### 4.3 Blended (ads + affiliate on the same traffic)

Per-visitor value = RPM/1000 × pages/visit + affiliate $/visitor.

Low case (pets niche): $2.33/1000 × 1.3 + $0.0057 = $0.0030 + $0.0057 = **$0.0087/visitor** → $100/mo ≈ **11,500 visitors/mo**; $300/mo ≈ **34,500 visitors/mo**.
High case (home & garden): $13.33/1000 × 1.3 + $0.0057 = $0.0173 + $0.0057 = **$0.0230/visitor** → $100/mo ≈ **4,350 visitors/mo**; $300/mo ≈ **13,000 visitors/mo**.

(Affiliate leg carries the §4.2 assumptions; treat blended numbers as scenario bounds, not forecasts.)

---

## 5. Reality check

### 5.1 Documented income report (traffic + revenue stated)

**OwnTheYard.com** (home/garden — our highest-RPM category), publicly documented by Spencer Haws:
- Launched **Sept 2018**; **first $1 in Dec 2018** (month ~3); Dec 2019 (month ~15): **$2,366/mo**; 2020 total **$48,897** (~$4,075/mo avg); Dec 2020: $3,755 ($2,543 Amazon + $1,212 Ezoic). Source: https://www.nichepursuits.com/owntheyard-2020-review/
- Cost side: **$20,805 spent in the first 12 months**, ~$45,000 lifetime; 621 outsourced articles; traffic peaked ~10,000 sessions/day then was cut by the May 2020 core update + a manual unnatural-links penalty. Same source.
- Long-tail structure: top 17 articles = 41.86% of traffic; ~27% of articles earned ≥$1/30 days. Same source.
- Interpretation vs our bar: this site very likely passed $100–$300/mo somewhere between months 3 and 15, but only with **~300+ articles and ~$20K spent in year one** — not a static 20-page tool site. Additional 2023–2026 reports pairing traffic and revenue for small tool sites: **not found in this pass — unknown.**

### 5.2 Time-to-rank evidence ("sandbox")

Ahrefs study (May 15 2025, Patrick Stox, 1M random new URLs from Sept 2023): https://ahrefs.com/blog/how-long-does-it-take-to-rank/
- Only **1.74%** of new pages reached Google top-10 within a year (down from 5.7% in the 2017 study); **6.11%** for non-empty English-content pages.
- Of pages that did reach top-10, **40.82%** did so within 1 month — success tends to be fast or not at all.
- **72.9%** of current top-10 pages are >3 years old; the average #1 page is ~5 years old.

### 5.3 Verdict on "$100–$300/mo within 6–9 months"

- **Ads-only: unrealistic** for pets/food/crafts/reference niches (needs ~43K–129K pageviews/mo at Google's own ~$2.33 RPM estimate) and **stretch-but-conceivable** only for Home & Garden (~7.5K–22.5K pageviews/mo at ~$13.33 RPM) — and only if the site beats the 1.74–6.11% odds of ranking within a year.
- **Blended: the low bar ($100/mo) becomes plausible** at ~4,300–11,500 visitors/mo *if* the assumed affiliate CTR/CVR hold — which is unverified (unknown).
- Entry bars stack the deck further for a brand-new site: Raptive requires a **6-month-old domain** + 25K pageviews; Ezoic requires **250K MAU**; Journey (1K sessions) is the only near-term premium option and explicitly disqualifies "excessive use of AI" content; Amazon closes accounts without **3 sales in 180 days**.
- The one documented case that cleared the bar (Own The Yard) did so in a high-RPM niche with ~$20K first-year content spend — an order of magnitude more input than a static tool site plan assumes.

**Bottom line:** $100/mo in 6–9 months is achievable only in the top-RPM niche (home/appliance) with a blended model and above-average ranking luck; $300/mo in 6–9 months is outside what any cited evidence supports for a small static site.
