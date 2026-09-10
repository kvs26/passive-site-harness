# Foundation: wire free analytics + Search Console + Bing, baseline index check

Type: task
Status: open
Blocked by: —

## Question

Get measurement and indexing visibility live for runsonyourbattery.com so the rest of the effort can be watched — and capture the baseline "is this site even indexed?" answer.

Deliverables:

1. **Free, privacy-friendly analytics** wired into the live site (analytics is currently **off** in the house template — `SITE.analytics`/consent scaffold is inert). Pick a free option that fits the Cloudflare/static stack with no cookie banner (Cloudflare Web Analytics is the natural candidate; note the alternatives considered and why). Deliver the actual config/template change on `sites/runs-on-your-battery-finder/` and confirm a clean `npm run build`.
2. **Google Search Console** — owner-driven: verify domain ownership, submit the sitemap (`/sitemap-index.xml`), run URL Inspection on the homepage + a couple long-tail pages. Agent hands the owner a precise click-by-click checklist (HITL — needs the owner's Google account + domain DNS).
3. **Bing Webmaster Tools** — same shape (can often import from Search Console).
4. **Baseline index check** — record the facts later tickets measure against: is the homepage indexed? how many pages known/indexed? any coverage errors? These are *facts to capture*, not a diagnosis to fix (deep diagnosis is out of scope → factory-site v2).

Agent creates everything (analytics wiring, the verification checklist, the baseline snapshot); the owner performs the account/DNS/verification steps.

## Answer

<!-- filled on resolution -->
