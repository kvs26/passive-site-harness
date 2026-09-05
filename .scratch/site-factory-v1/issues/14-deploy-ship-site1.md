# Wire deploy + buy domain + ship site #1

Type: task
Status: resolved
Blocked by: 12, 13

## Question

Ship [runs-on-your-battery-finder](../../../sites/runs-on-your-battery-finder/README.md) live — the
factory's "publishable" milestone. HITL: the agent hands the human a precise checklist and the human
performs the account/registrar/DNS clicks. Follow the deploy checklist + first-time Cloudflare UI guide
from [research/06-deploy-cloudflare-domain.md](../research/06-deploy-cloudflare-domain.md) (ticket 06).

Concretely:

1. **Buy the domain** — pick the exact `.com`, buy at the cheapest verified option (Porkbun $11.08/yr,
   or Cloudflare Registrar at-cost if already on Cloudflare).
2. **Set `SITE.url`** in `sites/runs-on-your-battery-finder/src/lib/site.config.mjs` to the real domain
   (clears the `TODO(ticket-06, HITL)` marker), rebuild so canonical/OG/sitemap URLs are correct.
3. **Push the site repo** to its own standalone GitHub repo (per the confirmed one-repo-per-site model).
4. **Create the Cloudflare Pages project** from that repo (build command `npm run build`, output `dist`),
   get the `*.pages.dev` URL, then attach the custom domain + HTTPS + www/apex redirect.
5. **Verify live:** pages resolve, sitemap/robots reachable at the real origin, 404 works.

Resolution records: the live URL, the GitHub repo URL, the registrar used, and any setup facts later
tickets depend on (e.g. Cloudflare account exists now → unblocks analytics/AdSense wiring).

Monetization stays **off** at launch (ship-first ordering: publish → rank → monetize).

## Answer

Live: **https://runsonyourbattery.com** — 39 pages, sitemap/robots resolving with the real
origin, custom domain SSL working.

- **GitHub repo**: https://github.com/kvs26/runs-on-your-battery-finder (private, one repo per
  site as planned). Local `sites/runs-on-your-battery-finder/` was `git init`'d standalone
  (it's gitignored from the monorepo) and pushed to `main`.
- **Registrar**: Cloudflare Registrar — `runsonyourbattery.com`, $10.46/yr, auto-renew on. Domain
  auto-attached to Cloudflare DNS (no nameserver step needed).
- **Deploy platform**: Cloudflare's dashboard now onboards new Git-integrated static sites
  through **Workers** (not the classic Pages UI the ticket-06 research described) — same
  GitHub-connect flow, but deploy uses `wrangler deploy` against a `wrangler.jsonc` with an
  `assets.directory` pointing at `dist`. Added `wrangler.jsonc` to the site repo for this.
  Build command `npm run build`, deploy command left at the default `npx wrangler deploy`.
  Production `workers.dev` subdomain had to be manually enabled (off by default) before the
  first URL appeared; not needed once the custom domain was attached.
- **Custom domain**: attached via Workers & Pages → Domains → Add Domain, root domain (no
  subdomain), SSL automatic.
- `SITE.url` updated to `https://runsonyourbattery.com` in `site.config.mjs`, rebuilt (39 pages),
  pushed — canonical/OG/sitemap URLs confirmed correct on the live site.
- Cloudflare account now exists → unblocks AdSense/analytics wiring for later tickets.
- Monetization (`ads.enabled` / `affiliate.enabled`) left off, per plan.

