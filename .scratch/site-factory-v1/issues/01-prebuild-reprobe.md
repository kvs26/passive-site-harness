# Pre-build re-probe: runs-on-your-battery-finder

Type: research
Status: resolved

## Question

Has the SERP / AI-Overview ground shifted under [runs-on-your-battery-finder](../../../pipeline/power-tool-battery-compat/ideas/runs-on-your-battery-finder/idea.md) since 2026-09-01 (its evidence expires 2026-09-29)? This is the lightweight competitive re-probe the v3 rules mandate before any build — **not** a full re-validate.

Check three things:
1. Has a **filterable, cross-platform gadget/accessory directory** shipped (the currently-unserved hook)?
2. Do the head queries' SERPs still show only 4–5-item **listicles** (no purpose-built catalog)?
3. Is the **AI Overview** still answering only at *category* level, not the exhaustive filterable catalog with fit-type / adapter path / small-platform coverage / prices / buy links?

**Advisory:** the result informs monetization urgency and ranking expectations but does **not** block deploy.

Reference (from repo memory + the idea's dossier):
- Probe channels: DDG bot-challenges; use **Bing via fetch** + **live google.com via browser** (`waitForTimeout ~4s` then `innerText` for the AIO). Reddit is hostile to automation — re-verify threads live in a browser.
- Known incumbents to re-open: SlashGear / HowToGeek / nerdtechy listicles; toolcompatibility.com, garagealmanac.com, batteryfits.com (battery↔tool/charger only); powertoolsadapters.com (adapters-as-products).
- Head queries: `what gadgets run on dewalt 20v batteries`, `milwaukee m18 powered gadgets`, `what runs on ryobi one+ battery`, plus a small-platform check (`hart 20v gadgets` / `bauer battery accessories`).

Write findings to `research/01-prebuild-reprobe.md`.

## Answer

No ground-shift. Full findings: [research/01-prebuild-reprobe.md](../research/01-prebuild-reprobe.md).

- **No filterable cross-platform directory has shipped.** Results are single-brand listicles, Amazon/eBay/Etsy unfiltered soup, single-brand OEM stores, and battery↔tool-only guide sites (a new one, whatbatteryfits.com, joins the same-shaped incumbents).
- **Head queries still show only 4–5-item listicles** — three new ones surfaced (housedigest.com, bgr.com, products.consumerecho.com), same non-filterable, single-brand shape as the original three.
- **Small-platform gap (Hart) still unserved** — query returned only Amazon/eBay soup, no gadget content.
- **AIO check blocked, not re-confirmed:** live google.com served a bot-challenge interstitial and Bing's render came back empty; did not retry a third channel. The 2026-09-01 AIO finding (category-level, near-miss) is unconfirmed-but-not-contradicted, not re-verified.

Advisory only, per the ticket — does not block deploy. Build proceeds on schedule; re-check the AIO claim opportunistically from a channel that isn't bot-challenged before relying on it again.
