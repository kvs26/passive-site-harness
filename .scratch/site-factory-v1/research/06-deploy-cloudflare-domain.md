# Deploy pipeline: GitHub → Cloudflare Pages → custom .com domain

## Summary / recommendation

- **Repo model:** one GitHub repo per site, connected 1:1 to one Cloudflare Pages project. Confirmed as the standard, documented pattern (Section 3).
- **Registrar:** for a pure "cheapest, least-manual" domain buy, **Cloudflare Registrar** is the best default *if* you're already using Cloudflare Pages/DNS, because it sells at cost (no markup over the registry/ICANN fee) and domains bought there auto-attach to Cloudflare DNS with no nameserver step. However, Cloudflare's own docs don't publish a fixed at-cost price table, so the exact figure could not be verified (see Section 2 and Sources). **Porkbun** is the best *verifiable* cheap option: its own pricing page states an $11.08/year "everyday low price" for .com, with free WHOIS privacy, free DNS (Cloudflare-powered), and no listed new-customer bait-and-switch. **Namecheap** advertises a lower first-year promo price but a materially higher renewal price (see table in Section 2) — worse for a "buy once, forget it" passive-site portfolio.
- **One-line pipeline:** push each site's own git repo to GitHub → connect it in Cloudflare's **Workers & Pages** dashboard as a Pages project (Git integration) → get a free `*.pages.dev` URL → either delegate the domain's nameservers to Cloudflare (if bought at Cloudflare Registrar, or transferred) or add a CNAME at an external registrar's DNS → Cloudflare issues the domain as a Pages custom domain and handles HTTPS automatically.

**Material caveat found during research:** Cloudflare's docs (`developers.cloudflare.com/pages/`) currently display a banner: *"Are you sure you want to use Pages? Workers supports most Pages use cases and offers a broader feature set... It is Cloudflare's primary platform for building applications. Start new projects with Workers."* Cloudflare has not removed or renamed the Pages product, but it is steering new users toward deploying static sites via **Workers + static assets** instead of Pages. Pages is still fully documented, supported, and reachable from the same **Workers & Pages** dashboard section, and the Git-integration workflow (GitHub repo → build → deploy) is functionally the same either way. This research focuses on the still-current Pages Git-integration flow per your question, but flag this as a live decision point — see Section 4.

---

## Section 1: Cloudflare account + Pages setup guide (first-time user)

1. Go to `dash.cloudflare.com` and sign up for a free Cloudflare account (email + password, email verification).
2. In the Cloudflare dashboard, navigate to the **Workers & Pages** page (Cloudflare merged the Pages product into this combined dashboard section — confirmed by the docs, which link every Pages action through `dash.cloudflare.com/?to=/:account/workers-and-pages`).
3. Select **Create application** → **Pages** → **Connect to Git**.
4. Sign in with your Git provider (GitHub) when prompted. This authorizes Cloudflare Pages to read your repos and (for pull requests from the repo itself) post preview-deployment updates.
5. **Select your GitHub repository**: choose from your personal account or an organization you've granted Pages access to. Both private and public repos are supported.
6. Select **Install & Authorize**, then **Begin setup**.
7. In **Set up builds and deployments**:
   - **Project name** — defaults to your Git repo name; this becomes part of your `<project-name>.pages.dev` hostname.
   - **Production branch** — the branch Cloudflare deploys as production (commonly `main`). You must have pushed at least one branch before this dropdown is populated. All other branches become **preview deployments**.
   - **Framework preset / Build settings** — pick a framework preset if offered, or set manually:
     - **Astro:** build command `npm run build` (or `astro build`), build output directory `dist`.
     - **11ty (Eleventy):** build command `npx @11ty/eleventy` (or your npm script), build output directory `_site` (11ty's default output folder, override the framework preset's build output directory field if it differs from your project's `.eleventy.js`/config).
     - If you don't need a build step at all, leave **Build command** blank and just set the output directory.
   - **Root directory (advanced)** — Pages builds from your repo's root by default; only change this if your buildable site lives in a subfolder of *that* repo (this is separate from the monorepo question in Section 3 — see the "not a subdirectory deploy" clarification there).
   - **Environment variables** — optional key/value pairs for the build (e.g., a Node version pin); can be edited later too.
8. Select **Save and Deploy**. Cloudflare Pages installs dependencies, runs your build command, and deploys the output directory to Cloudflare's network, streaming build logs live.
9. When the deploy finishes, Cloudflare shows a unique URL — your `<project-name>.pages.dev` production URL. Select **Continue to project** to land on the project's dashboard (deployment status, production URL, commit SHA, deployment history).
10. If you see a DNS-style error visiting the `.pages.dev` URL immediately after first deploy, it's usually just DNS propagation delay — wait and retry, per Cloudflare's own troubleshooting note.

Every subsequent `git push` to the production branch auto-triggers a new production deployment; pushes to any other branch (or PRs) auto-trigger a preview deployment at a unique `<hash>.<project>.pages.dev` URL (Section 4 has details).

---

## Section 2: Domain registrar comparison + DNS steps

### Registrar comparison

| Registrar | Model | Verified .com price | Source |
|---|---|---|---|
| **Cloudflare Registrar** | At-cost: "Only pay the registration and renewal fees charged by your registry" — no markup, no upsells. Includes free DNS, free CDN/SSL, free WHOIS privacy, free DNSSEC. | **Not published as a fixed number** on Cloudflare's own docs/marketing pages fetched for this research — Cloudflare states the price is whatever the registry (Verisign for `.com`) plus ICANN charge, and directs you to the dashboard domain-search flow to see the live quote. Could not verify an exact dollar figure from an official Cloudflare page. | `cloudflare.com/products/registrar/`; the dedicated pricing doc URL guessed (`developers.cloudflare.com/registrar/about/pricing/`, `.../registrar/domain-pricing/`) both returned HTTP 404 — do not exist or were renamed. |
| **Porkbun** | Flat "everyday low price," no bait-and-switch renewal hike claimed. Includes free WHOIS privacy, free SSL, free URL/email forwarding, free DNS (itself Cloudflare-powered). | **$11.08/year**, labeled "EVERYDAY LOW PRICE" (currency not explicitly labeled but page is USD-context; treat as USD unless geolocated otherwise). | `porkbun.com/tld/com` (fetched 2026-09-04) |
| **Namecheap** | Discounted first-year promo, renewal reverts to standard list price. Free WHOIS privacy, free BasicDNS/DNSSEC. | First-year registration listed at **A$10.98** (was A$14.98; a further "new customer" promo code drops it to $6.79, currency for that figure unclear). **Renewal: A$18.48/year.** Transfer: A$11.48. (Prices shown in Australian dollars, presumably geo-detected — a US visitor would likely see USD figures; exact USD price not confirmed.) Plus a mandatory $0.20/yr ICANN fee added at checkout per their own disclaimer. | `namecheap.com/domains/registration/gtld/com/` (fetched 2026-09-04) |

**Recommendation:** for a portfolio of many small passive sites where you don't want renewal-price surprises, Porkbun's flat quoted price is the most transparent verified figure. Cloudflare Registrar is likely cheaper or equal (it's explicitly at-cost/wholesale, and Verisign's wholesale `.com` fee is typically at or below Porkbun's retail price) and is operationally simplest if your DNS/Pages/Registrar all live in one Cloudflare account — but treat the exact price as **unverified** until you check the live quote in the Cloudflare dashboard domain search. Namecheap's renewal price (A$18.48) is the least favorable of the three for a "buy and forget" site.

### DNS Path A — Nameserver delegation (domain bought at, or transferred to, Cloudflare Registrar)

1. If the domain was registered directly through Cloudflare Registrar, Cloudflare automatically uses itself for authoritative DNS — **no nameserver step needed** (per Cloudflare's own DNS setup docs: "Domains purchased through Cloudflare Registrar automatically use Cloudflare for authoritative DNS, so you can skip the rest of this tutorial").
2. If the domain lives at another registrar and you want full delegation instead of transferring registrar-of-record, or simply to use Cloudflare DNS while keeping the domain elsewhere:
   1. In the Cloudflare dashboard, go to **Domains → Onboard a domain**, enter the apex domain (e.g. `example.com`), and choose how to import existing DNS records (Cloudflare offers a quick scan).
   2. Select **Continue** and pick a plan (Free is sufficient).
   3. Review the imported DNS records — pay special attention to zone-apex records, subdomain records (e.g. `www`), and email records, since the quick scan isn't guaranteed to catch everything.
   4. Cloudflare assigns you two authoritative nameservers (visible on the zone's Overview page).
   5. Log in to your **old** registrar's account. If DNSSEC is active there, disable it first — changing nameservers with DNSSEC still active can make the domain unreachable.
   6. At the old registrar, remove the existing nameservers and replace them with the two Cloudflare-assigned nameservers (copy them exactly).
   7. Wait up to 24 hours for propagation. Cloudflare emails you and marks the zone **Active** once it detects the delegation; you can also check with `dig ns <domain> @1.1.1.1` or `whois <domain>`.
   8. Once active, you can re-enable DNSSEC via Cloudflare's own DNSSEC settings.
3. With the zone active on Cloudflare (either path), go to your **Pages project → Custom domains → Set up a domain**, enter the apex domain, and select **Continue**. Because the domain is now a Cloudflare zone, Cloudflare creates the required CNAME record automatically.

### DNS Path B — Keep domain at an external registrar, use CNAME + Cloudflare DNS

- **Subdomain (e.g. `shop.example.com`) — does *not* require the whole domain to be a Cloudflare zone:**
  1. In the Cloudflare dashboard, go to your **Pages project → Custom domains → Set up a domain**, enter the subdomain, and continue.
  2. At your existing DNS provider (wherever the domain's nameservers currently point), manually add a CNAME record: `shop.example.com → <your-project>.pages.dev`.
  3. If the domain is already a Cloudflare zone, this CNAME gets added automatically instead of manually.
  4. Cloudflare's docs warn: you must go through the **Set up a domain** flow in the Pages dashboard first — manually adding the CNAME without first registering the custom domain in Pages will fail to resolve and can throw a 522 error.
- **Apex domain (e.g. `example.com`) — *does* require the domain to be a Cloudflare zone** (this is Cloudflare's stated constraint, not an option): to serve Pages on the bare apex, the domain must be onboarded as a Cloudflare zone (Path A above), because Cloudflare needs to manage the zone apex to create the equivalent of a CNAME at the root (which plain DNS doesn't support natively).

### www ↔ apex redirect

- Cloudflare Pages' built-in redirect mechanism is a plain-text `_redirects` file placed in your build output directory (e.g. one line: `https://www.example.com/* https://example.com/:splat 301`, or the reverse if you prefer `www` as canonical). This supports 301/302/303/307/308 status codes, splats (`*` → `:splat`), and named placeholders, but does **not** support query-parameter matching, domain-level redirects as first-class objects, or redirect-by-cookie/country.
- Because `_redirects` is limited (2,000 static + 100 dynamic rules per file) and is a Pages-project-scoped mechanism, redirecting an entire second hostname (e.g. `www.example.com` → `example.com`) at the zone/account level is more reliably done with Cloudflare's account-level **Bulk Redirects** feature (`developers.cloudflare.com/rules/url-forwarding/bulk-redirects/`) — both `www` and apex would need to be added as custom domains/DNS records on the same zone, with one of them redirecting to the other via a redirect rule.
- **Automatic HTTPS/SSL**: not a manual step — every custom domain and every `*.pages.dev` deployment gets a Cloudflare-managed TLS certificate automatically once the domain/DNS is correctly attached; the only documented failure mode is a pre-existing CAA record on the zone that doesn't permit Cloudflare's issuing CAs (Let's Encrypt, Google Trust Services/`pki.goog`, SSL.com) — if so, you must add CAA records allowing those issuers.

---

## Section 3: Repo model confirmation

Confirmed directly from Cloudflare's Git-integration docs: the entire onboarding flow is *"Select your GitHub repository"* → one Pages project per repo, with **Production branch** and **Root directory (advanced)** as the only structural knobs. There is no documented "one repo, many independent Pages projects" pattern for genuinely separate sites — the intended and supported model is **one GitHub repository maps to one Cloudflare Pages project**.

For a monorepo working copy (e.g. `sites/<slug>/` gitignored inside this project's monorepo):

- The "Root directory (advanced)" field in Pages' build settings is for a **subdirectory deploy of a single connected repo** (i.e., your production Astro/11ty site lives in `apps/web/` inside the *same* repo Pages is watching, and you tell Pages to build from that subfolder). Cloudflare does document a related **Monorepos** page (`developers.cloudflare.com/pages/configuration/monorepos/`, linked from the Preview-deployments doc's "Previous" nav) confirming Pages does support connecting one Pages project to a subdirectory of a bigger connected repo, with build-watch-paths to avoid unrelated rebuilds.
- However, your stated intent — `sites/<slug>/` becomes **its own standalone git repo** pushed to its **own GitHub remote**, so Cloudflare watches that dedicated remote — is a *different, and more isolating*, pattern than the "Root directory" monorepo-subfolder feature. Practically:
  1. `sites/<slug>/` in your local monorepo working copy stays gitignored from the monorepo's own `.git`.
  2. Inside `sites/<slug>/`, you `git init` a fresh, independent repository, add a remote pointing to a new empty GitHub repo (e.g. `github.com/you/<slug>`), and push it there. This is a completely separate git history from the monorepo.
  3. In Cloudflare's Workers & Pages dashboard, you connect that new standalone GitHub repo — not the monorepo — as its own Pages project, with **Root directory** left at the default (repo root), since that repo's root *is* the site.
  4. This gives clean 1:1 isolation: one GitHub repo ↔ one Pages project ↔ one custom domain, with no risk of one site's build/webhook noise touching another site's Pages project — matching Cloudflare's default, best-documented workflow rather than relying on the subfolder/monorepo feature.

This local-standalone-repo approach isn't itself described by name in Cloudflare's docs (it's a git-workflow choice on your side, not a Cloudflare feature), but it is fully compatible with, and arguably simpler than, Cloudflare's documented Git-integration flow, since from Cloudflare's perspective it's just "a GitHub repo" like any other.

---

## Section 4: Gotchas

- **Pages vs. Workers direction:** Cloudflare's Pages landing page now leads with "Are you sure you want to use Pages? Workers supports most Pages use cases and offers a broader feature set… Start new projects with Workers," linking to a static-assets migration guide. Pages' Git-integration flow (as documented in Section 1) is still live and fully supported today, but Cloudflare's own docs signal Workers + static assets (`wrangler.toml`/`wrangler.jsonc` with an `assets` block, `not_found_handling` options, deployed via `wrangler deploy` or `npm create cloudflare@latest`) as the forward-looking replacement. Workers' static-assets git-integration equivalent was not directly documented on the page fetched (`developers.cloudflare.com/workers/static-assets/`) — that page shows CLI/Wrangler deploys, not a dashboard "connect a GitHub repo" flow like Pages has. **Unverified:** whether Workers' Git-integration onboarding UI mirrors Pages' exactly; would need to check `developers.cloudflare.com/workers/static-assets/get-started/` or the dashboard directly.
- **You cannot switch a Git-integrated Pages project to Direct Upload later** (documented explicitly) — if you ever want to move a site off Git-triggered builds, you can disable automatic deployments per branch and use Wrangler to push builds manually instead, but the project can't be converted to a from-scratch Direct Upload project.
- **Build caching:** off by default; must be explicitly enabled per project (**Settings → Build → Build cache → Enable**). Requires the "V2 build system." When enabled, Pages auto-detects and caches known package-manager global caches (npm's `.npm`, yarn's `.cache/yarn`, pnpm's `.pnpm-store`, bun's `.bun/install/cache`) and framework-specific build-output caches — **Astro:** `node_modules/.astro`; **Eleventy:** `.cache` — is in the supported-frameworks table. Cache is capped at 10 GB/project and purged after 7 days of no reads; can be manually cleared from the same Settings page if a stale cache causes weird build behavior.
- **Preview deployments vs. production branch:** any push to a non-production branch, or any PR opened from the connected repo itself (not from a fork, per the docs' wording), auto-generates a unique preview URL (`<hash>.<project>.pages.dev`) plus a stable branch-name alias (`<branch>.<project>.pages.dev`, lowercased/hyphenated). Preview deployments are public by default but always ship an `X-Robots-Tag: noindex` header so they won't get indexed by search engines; you can additionally lock previews behind Cloudflare Access if you want them fully private. Custom domains and the main `<project>.pages.dev` URL are unaffected by preview builds — only production-branch pushes update those.
- **Custom 404 page:** create a `404.html` in your build output. Pages looks for the closest matching `404.html` up the directory tree (so `/blog/404.html` can override a top-level `/404.html` for blog-scoped 404s). If there's **no** top-level `404.html` at all, Pages assumes you're deploying a single-page app and instead serves `/` (index) for all unmatched routes — meaning if you *want* a real 404 and are using a framework that doesn't emit one by default (11ty in particular doesn't generate a 404.html unless you author a `404.md`/`404.njk` template yourself), you must explicitly add that source file or you'll silently get SPA-style routing instead.
- **Environment variables / build settings:** set during initial project setup (framework preset, build command, build output directory, root directory, env vars) and all remain editable afterward under the Pages project's **Settings** (build command/output directory/root directory, and env vars, are called out as configurable post-deploy in the docs).
- **Caching gotcha for custom domains:** Cloudflare recommends *against* adding extra Cache Rules on a Pages custom domain in most cases, since Pages already serves every asset from Cloudflare's Tiered Cache with strong ETag-based revalidation until the next deploy — extra caching on top can serve stale assets after a redeploy or interfere with `_redirects`/Pages Functions. If you do see stale content after deploying, the fix is **Caching → Configuration → Purge Everything** on that zone.
- **CAA record trap:** if your zone (bought at another registrar with pre-existing CAA records) restricts which certificate authorities can issue for it, adding a Pages custom domain can silently fail to get a certificate until you add CAA records permitting Let's Encrypt / Google Trust Services / SSL.com.

---

## Sources

- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/pages/configuration/preview-deployments/
- https://developers.cloudflare.com/pages/configuration/build-caching/
- https://developers.cloudflare.com/pages/configuration/serving-pages/
- https://developers.cloudflare.com/pages/configuration/redirects/
- https://developers.cloudflare.com/pages/
- https://developers.cloudflare.com/workers/static-assets/
- https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- https://www.cloudflare.com/products/registrar/
- https://porkbun.com/tld/com
- https://www.namecheap.com/domains/registration/gtld/com/

**Attempted but not accessible (404 / dead link — noted so exact Cloudflare Registrar pricing stays flagged as unverified):**
- https://developers.cloudflare.com/registrar/about/pricing/ (404)
- https://developers.cloudflare.com/registrar/domain-pricing/ (404)
- https://developers.cloudflare.com/pages/how-to/custom-domains/ (404, superseded by the `configuration/custom-domains/` URL above)
- https://blog.cloudflare.com/pages-workers-integration/ (fetch failed — could not extract content; the Pages-vs-Workers steering language was instead confirmed directly from the current `developers.cloudflare.com/pages/` docs page)
