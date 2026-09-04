# Deploy: GitHub → Cloudflare Pages + cheapest .com, with exact UI setup guide

Type: research
Status: resolved

## Question

Define the easiest, cheapest, least-manual deploy pipeline: each site as its **own GitHub repo** → **Cloudflare Pages**, with a custom **`.com`** domain. Deliver:

1. **Exact, step-by-step Cloudflare UI guide** for a first-time user (no Cloudflare account yet): create a free account, connect the GitHub repo to Cloudflare Pages, set build settings for the chosen SSG (from ticket 08), deploy, and get the `*.pages.dev` URL. Screens/labels as they appear in the UI.
2. **Domain:** cheapest `.com` registrar recommendation — Cloudflare Registrar (at-cost) vs Porkbun vs Namecheap — and the exact **DNS steps** to point the domain at Cloudflare Pages (full nameserver delegation vs CNAME/apex), including www/apex redirect and HTTPS.
3. **Repo model:** confirm each site = its own repo, and how the harness's `sites/<slug>/` (gitignored here) maps to a standalone GitHub repo Cloudflare watches.
4. **Gotchas:** build caching, preview vs production branches, custom 404, environment settings.

Output: a repeatable **deploy checklist** + the one-time **account-setup guide**.

Write findings to `research/06-deploy-cloudflare-domain.md`.

## Answer

Findings written to [research/06-deploy-cloudflare-domain.md](../research/06-deploy-cloudflare-domain.md).

- **Repo model:** confirmed — one GitHub repo per site, 1:1 to one Cloudflare Pages project. A site's local working copy (gitignored under `sites/<slug>/` in this monorepo) is pushed as its own standalone repo with its own remote, not deployed as a monorepo subdirectory.
- **Registrar:** Cloudflare Registrar is the best default once already on Cloudflare (at-cost, auto-attaches DNS, no nameserver step) — but its exact at-cost `.com` price isn't published, so it couldn't be price-verified. **Porkbun** is the best *verified* cheap option: flat $11.08/yr, no renewal hike. Namecheap's cheap first-year promo is undercut by a materially higher renewal price — worse for a buy-once passive-site portfolio.
- **Pipeline:** push site repo to GitHub → connect as a Cloudflare Pages project via Git integration (Workers & Pages dashboard) → free `*.pages.dev` URL → point domain via full nameserver delegation (Cloudflare Registrar/transferred domains) or CNAME at an external registrar's DNS (subdomain only) → HTTPS automatic.
- **Gotcha / open flag:** Cloudflare's docs now steer new users toward "Workers + static assets" over Pages, though Pages remains fully supported and reachable from the same dashboard with the same Git-integration flow used here. Worth a quick sanity check before ticket 08/09 lock in the build tooling, but doesn't block this ticket's answer.
- **Unverified gaps:** Cloudflare Registrar's exact at-cost `.com` price; Namecheap's USD price (fetched figures were AUD).
