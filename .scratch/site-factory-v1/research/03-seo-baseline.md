# 03 — SEO baseline for the factory site template

Research note. Question: what concrete, reusable on-page SEO baseline should every factory
site (static tool/directory, likely Astro/11ty) ship so a new site ranks with minimal
per-site effort? All claims cited to primary sources: Google Search Central, schema.org,
web.dev, ogp.me, sitemaps.org. Free tools only — no paid SEO platforms recommended.

Site date context: 4 September 2026.

---

## 1. Structured data / schema.org for a tool + directory

**Which types apply:**

- **`WebSite`** (schema.org) on the homepage, optionally with a `SearchAction` (sitelinks
  searchbox) if the site has an internal search page — this is Google's supported way to
  add a search box under your site name in results. [Google: Sitelinks search box](https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox)
- **`WebApplication`** (schema.org, subtype of `SoftwareApplication`) fits a "tool" page —
  properties like `applicationCategory`, `operatingSystem`, `browserRequirements`,
  `offers`/`isAccessibleForFree` describe a web-based tool. [schema.org/WebApplication](https://schema.org/WebApplication)
  Google's own structured-data catalog has a dedicated **Software app** feature for
  downloadable/installable software (with rating/price requirements) — for a browser-based
  free tool with no install, `WebApplication` JSON-LD is still valid schema.org markup, but
  don't expect a distinct Google-only rich result for it unless it matches Google's
  [Software app](https://developers.google.com/search/docs/appearance/structured-data/software-app) requirements (which target native/downloadable apps). Treat `WebApplication` as
  descriptive schema.org markup for machine understanding, not a guaranteed rich-result
  trigger.
- **`ItemList`** for directory/listing pages (e.g., "all X compatible with Y"): schema.org
  models an `ItemList` as an ordered/unordered list of items, each optionally a `ListItem`
  with `position`. [schema.org/ItemList](https://schema.org/ItemList) Google does not document a
  dedicated generic "ItemList rich result" outside of `BreadcrumbList`/carousels, so use
  `ItemList` for semantic correctness (helps LLM/AI understanding and is schema.org-valid)
  rather than expecting a specific SERP enhancement.
- **`BreadcrumbList`** — Google explicitly supports this for breadcrumb rich results on
  desktop, all regions/languages. Requires ≥2 `ListItem`s with `position` (1 = top of
  trail) and `name`; `item` (URL) is optional on the last item. [Google: Breadcrumb structured
  data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) ·
  [schema.org/BreadcrumbList](https://schema.org/BreadcrumbList)
- **`FAQPage`** — **do not implement for Google rich results.** Google deprecated the FAQ
  rich result feature; it stopped appearing in Google Search on **May 7, 2026**, and Google
  removed the FAQPage structured-data documentation in June 2026. [Google Search Central
  changelog: Deprecating the FAQ rich result feature](https://developers.google.com/search/updates#faq-deprecation) ·
  [changelog: Removing FAQPage documentation](https://developers.google.com/search/updates#removing-faq-rich-result)
  FAQ content can still be marked up with schema.org `Question`/`Answer` for general
  semantic value (e.g., AI answer engines), but it buys nothing in classic Google SERP
  rich results anymore — do not bake FAQPage JSON-LD in expecting a SERP feature.
- **`Product`** — only relevant if the site sells something or reviews purchasable
  products; Google splits this into **Product snippets** (non-transactional review pages)
  vs. **Merchant listings** (pages where users can buy). For a passive tool/directory site
  with no commerce, `Product` markup does not apply. [Google: Introduction to Product
  structured data](https://developers.google.com/search/docs/appearance/structured-data/product)

**How to implement (JSON-LD, Google's recommended format):**

Google's structured-data docs demonstrate JSON-LD `<script type="application/ld+json">` in
the page `<head>`, and this is the general delivery mechanism to use in the SSG template.
[Google: Breadcrumb structured data — examples](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Example Tool Site",
  "url": "https://example.com/"
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Battery Compatibility Checker",
  "url": "https://example.com/tool/",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Any (web-based)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/" },
    { "@type": "ListItem", "position": 2, "name": "Brand", "item": "https://example.com/brand/" },
    { "@type": "ListItem", "position": 3, "name": "Model" }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "https://example.com/item-a/" },
    { "@type": "ListItem", "position": 2, "url": "https://example.com/item-b/" }
  ]
}
</script>
```

**Validation/monitoring:** validate with the [Rich Results Test](https://search.google.com/test/rich-results)
(free) before shipping a template change, and monitor the relevant rich-result status
reports in [Search Console](https://search.google.com/search-console) after deploy — Google recommends this workflow explicitly
for breadcrumbs and structured data generally. [Google: Breadcrumb — monitor rich results
with Search Console](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)

---

## 2. XML sitemaps + robots.txt

**Sitemap format & size limits:** XML sitemap is the most versatile format (supports
image/video/news extensions and localized versions). Hard limits per the sitemaps
protocol: **50 MB uncompressed or 50,000 URLs per sitemap file**; split larger sites into
multiple sitemaps referenced by a sitemap index. [Google: Build and submit a sitemap —
best practices](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

**Best practices (Google's explicit guidance):**
- Sitemap must be UTF-8 encoded; host it at the site root (unless submitted directly via
  Search Console) so it can cover the whole site.
- Use fully-qualified **absolute URLs** (`https://example.com/page/`, never `/page/`).
- Only include the **canonical** URLs you want indexed — don't list duplicate/near-duplicate
  variants.
- Google **ignores `<priority>` and `<changefreq>`**; don't bother generating them.
- `<lastmod>` is used by Google only if it's consistently accurate — reflect real content/
  structured-data/link changes, not trivial edits like copyright-year bumps.
[Google: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

**Auto-generating from a dataset (SSG pattern):** Google explicitly recommends that
"the best way is to have your website software generate it for you" by extracting URLs
from the site's data/database and exporting them to a sitemap file — exactly the shape of
an Astro/11ty build step that iterates the dataset (JSON/CSV/CMS collection) and emits
`sitemap.xml` (or a sitemap index if content-page count exceeds ~50k). [Google: Automatically
generate a sitemap with tools](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
Both Astro (`@astrojs/sitemap`) and 11ty (via a sitemap plugin/template) can do this as a
static build step with no runtime cost — free, no paid tooling required.

**Submitting the sitemap:** three free options — (1) Search Console Sitemaps report (also
surfaces processing errors), (2) the Search Console API programmatically, (3) reference it
from `robots.txt` with a `Sitemap:` line, which Google will pick up on its next crawl of
`robots.txt`. Multiple `Sitemap:` lines are allowed. [Google: Submit your sitemap to Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

**robots.txt:** its actual job is managing crawl traffic and keeping specific file types out
of the crawl — it is **not** a mechanism to keep a page out of Google Search entirely (a
disallowed page can still be indexed if linked from elsewhere, just without a description).
Use `noindex` (meta tag or header) or password-protection to truly block indexing. [Google:
Introduction to robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
Baseline template `robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
```

---

## 3. Canonical / meta / OpenGraph / Twitter Card tag patterns

**Canonical:** Google computes its own canonical choice using multiple signals (HTTP vs
HTTPS, redirects, sitemap presence, `rel="canonical"`), and treats your `rel="canonical"`
annotation as a **hint, not a rule**. Still, always emit a self-referencing (or
duplicate-pointing) canonical on every page — it's the primary lever you control. [Google:
What is canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
Template pattern:

```html
<link rel="canonical" href="https://example.com/brand/model/" />
```
Every generated dataset page should emit an absolute, self-referencing canonical unless it
is an intentional duplicate/filter view, in which case point it at the primary variant.

**Title link generation:** Google composes the visible title from multiple signals — the
`<title>` element, the page's main visible heading, `<h1>`, `og:title`, and even
`WebSite` structured data — not just the `<title>` tag alone. [Google: Influencing your title
links](https://developers.google.com/search/docs/appearance/title-link) Practical implication for
the template: keep `<title>`, the first visible `<h1>`, and `og:title` **consistent** for
each generated page so Google doesn't have to guess/rewrite.

**Meta description / snippet:** there is **no official length limit** — Google truncates the
displayed snippet to fit the device width, so don't chase a "155 character" magic number as
a hard rule; write a complete, informative sentence and let truncation happen naturally.
[Google: Control your snippets in search results](https://developers.google.com/search/docs/appearance/snippet)
Google explicitly encourages **programmatic generation of descriptions for database-driven,
dataset-style sites** ("programmatic generation of the descriptions can be appropriate and
are encouraged... good descriptions are human-readable and diverse... page-specific data is
a good candidate for programmatic generation") — directly applicable to a directory/tool
site templated from a dataset. Avoid keyword-stuffed lists; describe the actual page
content/data. [Google: Programmatically generate descriptions](https://developers.google.com/search/docs/appearance/snippet)

**OpenGraph:** per the Open Graph protocol spec, four properties are **required** on every
page: `og:title`, `og:type`, `og:image`, `og:url` (canonical URL of the object). Recommended
optional: `og:description`, `og:site_name`. [ogp.me — Basic Metadata](https://ogp.me/)
Also add `og:image:width`, `og:image:height`, `og:image:alt` — schema.org/OG image metadata is
one of the sources Google Search/Discover uses to pick thumbnail images. [Google: Preferred
image best practices](https://developers.google.com/search/docs/appearance/google-images#specify-preferred-image)
Template pattern:

```html
<meta property="og:title" content="{{ pageTitle }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ canonicalUrl }}" />
<meta property="og:image" content="{{ ogImageUrl }}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="{{ ogImageAlt }}" />
<meta property="og:description" content="{{ metaDescription }}" />
<meta property="og:site_name" content="{{ siteName }}" />
```

**Twitter Card:** Twitter/X's card tags (`twitter:card`, `twitter:title`,
`twitter:description`, `twitter:image`) are a de facto standard layered on top of OG tags
(most platforms fall back to OG tags if Twitter-specific ones are absent) — include
`summary_large_image` as the default card type for a tool/directory site to maximize social
preview quality at effectively zero marginal cost per page:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{ pageTitle }}" />
<meta name="twitter:description" content="{{ metaDescription }}" />
<meta name="twitter:image" content="{{ ogImageUrl }}" />
```
(No X/Twitter primary-source doc was cited here since the official Twitter Cards developer
docs are behind X's developer portal and outside "free/official Google/schema.org/web.dev"
scope requested; the tags above mirror the OG pattern already sourced and are safe,
widely-supported no-ops if unused by a given consumer.)

---

## 4. Title + description patterns for long-tail dataset pages

Grounded in the two Google docs above (title links, snippets):

- **No hard character limit exists per Google** for either `<title>` or meta description —
  Google truncates for display, it does not reject or penalize longer text. Don't build
  arbitrary 60/155-char hard-fail validation into the pipeline; instead validate for
  **uniqueness and non-emptiness**, which Google explicitly flags as the real problems
  ("half-empty `<title>` elements", "micro-boilerplate text… shared by multiple pages").
  [Google: Common issues and how Google manages them](https://developers.google.com/search/docs/appearance/title-link)
- **Avoid boilerplate/duplicate titles across dataset pages.** Google's explicit bad example:
  titling every page "Cheap products for sale" makes pages indistinguishable. Template
  titles must interpolate the actual per-row facts (brand, model, category) so no two
  generated pages share an identical title.
- **Recommended template pattern** for platform×category long-tail pages:
  `<title>{{Specific Entity}} {{Category/Relationship}} — {{Site Name}}</title>`
  e.g. `Ryobi 18V Battery Compatible Tools — ToolBatteryCheck` — matches Google's guidance to
  put the site/brand name at the end after a delimiter, and to keep the distinctive part
  (the actual data) first/prominent. [Google: Best practices for influencing title links](https://developers.google.com/search/docs/appearance/title-link)
- **Description pattern:** programmatically generate one full sentence (or two) summarizing
  the specific page's data — not a static template string with only one token swapped.
  Example generation formula: `"See which {{category}} products work with {{brand}} {{model}},
  including {{count}} compatible items and key spec notes."` — varies enough per row to avoid
  the "same description for every page" anti-pattern Google calls out. [Google: Use quality
  descriptions](https://developers.google.com/search/docs/appearance/snippet)

---

## 5. Internal-linking strategy for platform×category long-tail pages

No single Google Search Central doc mandates a specific link topology, but the guidance
below is grounded in officially documented mechanisms:

- **Breadcrumbs are Google's own supported hierarchy signal** — implement a real hub→spoke
  breadcrumb trail (`Home > Platform > Category > Specific Item`) as both visible nav and
  `BreadcrumbList` JSON-LD; Google recommends breadcrumbs represent the "typical user path,"
  not necessarily the literal URL structure. [Google: Breadcrumb structured data — Guidelines](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- **Sitemaps + canonical + breadcrumbs together define the hub/spoke shape Google actually
  consumes**: a platform hub page (`/ryobi-18v/`) lists all category spokes; each spoke
  (`/ryobi-18v/drills/`) lists all leaf/dataset pages; each leaf page links back up via
  breadcrumb and across to 3–5 "related" leaf pages (same category, different platform, or
  same platform, different category) to spread internal PageRank-like link equity and give
  Google multiple crawl paths into deep dataset pages, consistent with sitemap best practice
  of including canonical URLs Google should crawl regularly. [Google: Build and submit a
  sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- **Crawlability of internal links**: Google's docs on making links crawlable require real
  `<a href>` elements (not JS-only click handlers) so hub/spoke/related links are followed —
  bake this into the template's "related items" component as server-rendered anchors, not
  client-side-only navigation. [Google: crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)

**Reusable pattern for the template:**
1. Hub page per platform/brand → links to every category page for that platform.
2. Category page → links to every dataset leaf page in that category/platform combo,
   paginated if large (avoid a single page exceeding reasonable size/URL count).
3. Leaf/dataset page → breadcrumb up (Home > Platform > Category), plus a "related" block
   (same platform other categories, same category other platforms) generated from the
   dataset relationships, not hardcoded.
4. All of the above URLs also appear in the generated sitemap.

---

## 6. Indexation — Search Console setup, sitemap submission, coverage monitoring

- **Verify site ownership in [Google Search Console](https://search.google.com/search-console)** (free) — required before
  submitting sitemaps via the UI or API.
- **Submit the sitemap** via the Search Console **Sitemaps report**, which also surfaces
  processing errors, or reference it in `robots.txt` (`Sitemap:` line) so Google discovers
  it on the next robots.txt crawl — do both for redundancy since submission is "merely a
  hint," not a guarantee of crawling. [Google: Submit your sitemap to Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- **After deploying structured data for the first time**, check the relevant **Rich result
  status report** in Search Console; expect an increase in valid items and no increase in
  invalid ones. **After releasing new templates**, re-check for regressions (increase in
  invalid items, or a decrease in valid items with no matching increase in invalid = markup
  silently missing). [Google: Monitor rich results with Search Console](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- **Use the URL Inspection tool** to verify a live page after deploy, confirm it isn't
  blocked by robots.txt/`noindex`/login, and request a recrawl if needed (allow "several
  days after publishing" for Google to find and crawl a new page even after requesting
  recrawl). [Google: Breadcrumb — How to add structured data, step 4](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- **Monitor traffic via the Search Console Performance report** periodically — shows
  impressions, clicks, and average position, plus a Search Console API for automating pulls
  across many generated factory sites. [Google: Analyzing traffic periodically](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- All of Search Console, the Rich Results Test, PageSpeed Insights, and the URL Inspection
  tool are **free**, satisfying the no-paid-tools constraint.

---

## 7. Core Web Vitals budget

Per web.dev (Google's official Core Web Vitals documentation), the three **stable** Core
Web Vitals and their pass thresholds, measured at the **75th percentile of page loads**,
segmented by mobile/desktop:

- **LCP (Largest Contentful Paint)** — good ≤ **2.5 seconds** from navigation start.
- **INP (Interaction to Next Paint)** — good ≤ **200 milliseconds**. (INP replaced FID as
  the interactivity Core Web Vital in 2024.)
- **CLS (Cumulative Layout Shift)** — good ≤ **0.1**.

A page is considered "passing" only if it meets all three thresholds at the 75th
percentile. [web.dev: Web Vitals — Core Web Vitals](https://web.dev/articles/vitals)

**How a static site reliably hits these budgets (template defaults):**

- **LCP:** the largest element is typically a hero image or heading text. For a static
  SSG build: preload/prioritize the LCP image (`fetchpriority="high"`, no lazy-loading on
  above-the-fold hero media), serve pre-optimized/responsive image formats, and avoid
  render-blocking CSS/JS in `<head>`. Static hosting (no server compute per request) also
  removes server response time as an LCP risk factor. Google's own guidance: [web.dev:
  Optimize LCP](https://web.dev/articles/optimize-lcp) (see also the top recommendations roundup at
  [web.dev: The most effective ways to improve Core Web Vitals](https://web.dev/articles/top-cwv)).
- **CLS:** always set explicit `width`/`height` (or `aspect-ratio`) on every `<img>`/embed so
  layout doesn't shift when the asset loads; reserve space for ads/embeds; load web fonts
  with `font-display: optional` or matched fallback metrics to avoid FOIT/FOUT reflow;
  never inject content above existing content after load (e.g., late-arriving banners).
  [web.dev: Optimize CLS](https://web.dev/articles/optimize-cls) · [web.dev: Best practices for fonts](https://web.dev/articles/font-best-practices)
- **INP:** keep main-thread JS minimal on dataset/listing pages — a static tool/directory
  site should ship little to no heavy client JS framework hydration; where interactivity is
  needed (search/filter widgets), break up long tasks and avoid large synchronous handlers
  on click/input. Lighthouse can't measure INP directly (no real user input in a lab run) but
  Total Blocking Time (TBT) is a lab proxy — keep TBT low as an early-warning signal. [web.dev:
  Optimize INP](https://web.dev/articles/optimize-inp) · [web.dev: Web Vitals — Lab tools](https://web.dev/articles/vitals)
- **Measurement:** use free tools only — [PageSpeed Insights](https://pagespeed.web.dev/) (lab
  + field/CrUX data), Search Console's **Core Web Vitals report** (field data at the site
  level), Chrome DevTools, and/or the open-source `web-vitals` JS library for custom RUM if
  needed. [web.dev: Tools to measure and report Core Web Vitals](https://web.dev/articles/vitals)

---

## Reusable checklist (bake into the house SSG template)

**Structured data**
- [ ] `WebSite` JSON-LD on the homepage (add `SearchAction`/sitelinks searchbox only if an
      internal search page exists).
- [ ] `WebApplication` JSON-LD on tool pages (`applicationCategory`, `operatingSystem`,
      `offers`/`isAccessibleForFree` for free tools).
- [ ] `ItemList` JSON-LD on directory/listing pages, generated from the dataset.
- [ ] `BreadcrumbList` JSON-LD on every non-home page, matching the visible breadcrumb trail
      (≥2 `ListItem`s, `position` + `name`, URL on non-final items).
- [ ] Do **not** implement `FAQPage` JSON-LD expecting a Google rich result (deprecated
      May 2026) — plain FAQ content/markup is fine for users/AI answer engines only.
- [ ] No `Product` markup unless the site is transactional/commerce.
- [ ] Validate every template change with the free [Rich Results Test](https://search.google.com/test/rich-results) before shipping.

**Sitemap & robots.txt**
- [ ] Auto-generate `sitemap.xml` (or sitemap index if >50k URLs / >50MB) as a build step
      from the site's dataset — absolute canonical URLs only, UTF-8, hosted at site root.
- [ ] Omit `<priority>`/`<changefreq>` (Google ignores them); include accurate `<lastmod>`
      only when it reflects a real content change.
- [ ] `robots.txt` at root with `Allow: /` baseline plus a `Sitemap:` line pointing at the
      generated sitemap; use `noindex`, not robots.txt, to actually keep pages out of Google.
- [ ] Submit sitemap via Search Console Sitemaps report (or API) in addition to the
      robots.txt reference.

**Meta/canonical/social tags (per page, templated)**
- [ ] Self-referencing absolute `<link rel="canonical">` on every generated page.
- [ ] Unique, data-driven `<title>` per page: `{{Specific Entity}} {{Relationship}} —
      {{Site Name}}`; keep `<title>`, first visible `<h1>`, and `og:title` consistent.
- [ ] Unique, programmatically generated meta description per page (full sentence(s) from
      real page data, no boilerplate/keyword lists, no artificial character-count truncation
      in the source).
- [ ] Required OG tags on every page: `og:title`, `og:type`, `og:image` (with `:width`,
      `:height`, `:alt`), `og:url`; recommended: `og:description`, `og:site_name`.
- [ ] Twitter Card tags mirroring OG (`summary_large_image`, title/description/image).

**Internal linking**
- [ ] Hub (platform) → spoke (category) → leaf (dataset item) link structure, generated from
      the dataset relationships, not hand-authored.
- [ ] Visible breadcrumb nav matching the `BreadcrumbList` JSON-LD on every leaf page.
- [ ] "Related items" block on every leaf page (cross-category/cross-platform), rendered as
      real server-side `<a href>` anchors (crawlable, no JS-only navigation).
- [ ] Every hub/spoke/leaf URL present in the generated sitemap.

**Indexation**
- [ ] Verify the property in Google Search Console at launch.
- [ ] Submit the sitemap in Search Console and via robots.txt.
- [ ] Check the Rich Results status report after first structured-data deploy, and again
      after any template change, for valid/invalid item regressions.
- [ ] Spot-check new pages with the URL Inspection tool; request indexing for a small
      initial batch if needed.
- [ ] Periodically review the Search Console Performance report (or API) per site.

**Core Web Vitals budget**
- [ ] LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 at the 75th percentile (mobile + desktop) — treat as
      the hard budget for every template release.
- [ ] Explicit `width`/`height` or `aspect-ratio` on all images/embeds; no late-injected
      above-the-fold content (CLS).
- [ ] Priority-load the LCP element (hero image/heading); no render-blocking assets ahead of
      it; static hosting to minimize server response time (LCP).
- [ ] Minimal/zero heavy client-side JS hydration on listing/dataset pages; break up any
      necessary interactive handlers to avoid long main-thread tasks (INP).
- [ ] `font-display: optional` (or size-matched fallback) for all web fonts to avoid reflow.
- [ ] Validate every release with free [PageSpeed Insights](https://pagespeed.web.dev/) and
      the Search Console Core Web Vitals report — no paid performance/SEO tooling required.
