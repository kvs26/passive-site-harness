# Cloudflare Setup: Domain + GitHub Deploy

Quick reference for shipping a site live on Cloudflare, based on what actually worked for
`runs-on-your-battery-finder`. Cloudflare's dashboard onboards new static sites through
**Workers** now, not the old "Pages" flow — don't be confused if older docs say Pages.

## 1. Buy the domain (Cloudflare Registrar)

1. Cloudflare dashboard → **Domain Registration** → **Register Domain**.
2. Search your `.com`, buy at-cost (~$10-11/yr, auto-renew on by default).
3. Bought directly on Cloudflare = DNS auto-attaches, no nameserver step needed.

## 2. Add a `wrangler.jsonc` to the site repo

Required so Workers knows where the built static files are:

```json
{
	"name": "your-site-name",
	"compatibility_date": "2026-09-05",
	"assets": {
		"directory": "./dist"
	}
}
```

Commit and push this **before** connecting the repo in step 3.

## 3. Push the site to its own GitHub repo

Each site is a standalone repo (not part of the monorepo git history):

```bash
cd sites/your-site-name
git init
git add -A
git commit -m "Initial commit"
git remote add origin https://github.com/<you>/<repo>.git
git branch -M main
git push -u origin main
```

## 4. Connect GitHub in Cloudflare Workers

1. Dashboard → **Workers & Pages** → **Create** → **Import a repository**.
2. Pick the GitHub repo (authorize Cloudflare's GitHub app if first time).
3. Build command: `npm run build`. Deploy command: leave default (`npx wrangler deploy`).
4. Click **Save and Deploy**.

## 5. Enable the public URL

- If no URL shows after deploy ("No URLs enabled"), go to the Worker's **Settings → Domains &
  Routes**, toggle on the `workers.dev` subdomain. Not needed once a custom domain is attached.

## 6. Attach the custom domain

1. Worker → **Domains** tab → **Add Domain**.
2. Enter the root domain (e.g. `example.com`), no subdomain needed.
3. SSL is automatic.

## 7. Update site config and rebuild

Set the real domain in `src/lib/site.config.mjs` (`SITE.url`), then:

```bash
npm run build
git add -A && git commit -m "Set production domain" && git push
```

## 8. Verify live

- Homepage loads.
- `/robots.txt` points to the real sitemap URL.
- `/sitemap-index.xml` resolves with real (not placeholder) URLs.

## 9. Register with search engines

**Google Search Console**
1. Add a **Domain** property (`example.com`) and verify via DNS TXT (auto-verifies for Cloudflare domains).
2. **Sitemaps** → submit `https://example.com/sitemap-index.xml`.

**Bing Webmaster Tools**
1. Add the site: **Import from Google Search Console**, or add manually and verify via DNS TXT.
2. Select the new site in the top-left dropdown → **Sitemaps** → **Submit sitemap** → `https://example.com/sitemap-index.xml`.
3. Import may not carry the sitemap over, so always submit it manually.
