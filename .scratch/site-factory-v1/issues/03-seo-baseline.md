# SEO baseline for static tool/directory sites

Type: research
Status: resolved

## Question

What concrete, **reusable** on-page SEO baseline should every factory site ship, so a new site ranks with minimal per-site SEO effort? Produce a checklist the house template can bake in. Cover:
- **Structured data / schema.org** for a tool + directory: which types apply (`WebApplication`/`WebSite`, `ItemList`, `FAQPage`, `BreadcrumbList`, `Product`?) and how.
- **XML sitemaps + `robots.txt`** — auto-generated from the dataset.
- **Canonical / meta / OpenGraph / Twitter** tag patterns.
- **Title + description patterns** for long-tail dataset pages (templated from data).
- **Internal-linking strategy** for the platform×category long tail (hub/spoke, breadcrumbs, related links).
- **Indexation** — Google Search Console setup, submitting sitemaps, monitoring coverage.
- **Core Web Vitals budget** — LCP / CLS / INP targets and how a static site reliably hits them (fonts, images, no layout shift).

Free tools only; no paid SEO platforms.

Write findings to `research/03-seo-baseline.md`.

## Answer

Full findings: [research/03-seo-baseline.md](../research/03-seo-baseline.md).

- **FAQPage rich results are dead** (Google deprecated May 7 2026, docs removed June 2026) — don't bake FAQPage JSON-LD into the template for SERP benefit.
- Right schema.org types for a tool/directory: `WebApplication`, `BreadcrumbList`, `ItemList`. `Product` doesn't apply (non-transactional site).
- Sitemaps: auto-generate from the dataset as a build step; absolute canonical URLs; UTF-8; ≤50MB/50k URLs per file (sitemap index above that); Google ignores `priority`/`changefreq`.
- `robots.txt` is not a de-indexing tool — only manages crawl traffic; use `noindex` to keep pages out of Google.
- No hard length limits on `<title>`/meta description — Google truncates for display; the real risk is duplicate/boilerplate copy on dataset-heavy sites, so generate descriptions **programmatically** per Google's own guidance for database-driven sites.
- OG required tags: `og:title`, `og:type`, `og:image`, `og:url` (ogp.me spec), plus a Twitter Card mirror — bake into every templated page.
- Internal linking: hub (platform) → spoke (category) → leaf (dataset item), with real breadcrumb JSON-LD and crawlable `<a href>` "related" links.
- Indexation workflow: verify in Search Console, submit sitemap (UI/API + robots.txt reference), monitor Rich Results status after every template release, spot-check with URL Inspection.
- Core Web Vitals budget (web.dev, 75th percentile): LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 — hit via static hosting, sized images/no layout shift, minimal client JS, `font-display: optional`.
- All tools recommended are free (Search Console, PageSpeed Insights, Rich Results Test, URL Inspection) — no paid SEO platform cited.
