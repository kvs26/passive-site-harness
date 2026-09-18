# Map: Site Distribution v1 (site-distribution-v1) — a repeatable off-Google spreading playbook, proven by a full first pass on runsonyourbattery.com

Label: wayfinder:map
Status: open

## Destination

A reusable **off-Google distribution playbook** — a documented, repeatable set of promotion moves (plus any light automation) that *any* factory site can run to get seen — **proven by executing a full first pass on [runsonyourbattery.com](../../sites/runs-on-your-battery-finder/)**. Phase 3 companion to [site-factory-v1](../site-factory-v1/map.md): the factory *builds* sites, this effort *spreads* them.

**Action-gated completion:** done when (1) the playbook exists, (2) the first real distribution pass is executed on runsonyourbattery.com across the in-scope channels, and (3) measurement is wired so results can be watched over the following weeks. **Not** gated on any traffic number — traffic is a lagging outcome we don't control; whether it comes is feedback for the future scout/validate-v4 effort, not a gate on this one.

This effort's Notes **override wayfinder's plan-only default** — building the playbook assets, generating shareable assets, and running the first pass are in-scope *deliverables*, not just decisions.

## Notes

- Successor/companion to [site-factory-v1](../site-factory-v1/map.md) (which shipped site #1 but assumed Google organic would arrive on its own — it hasn't: ~3–4 days live, no visible traffic, likely not yet indexed).
- **This effort deliberately reopens a door prior maps closed.** Both site-factory-v1 and [passive-site-harness-v3](../passive-site-harness-v3/map.md) ruled "Non-Google traffic channels (Reddit/Pinterest/YouTube/newsletter)" out of scope, with v3's escape hatch: *"revisit only if the strategy verdict forces it."* Zero traffic on a live site is that forcing function.
- Domain: the one live site is [runsonyourbattery.com](../../sites/runs-on-your-battery-finder/) — a power-tool **battery-compatibility finder**; audience = DIYers, tradespeople, tool buyers (a Reddit/forum/YouTube-heavy crowd). Sites live in `sites/<slug>/` as independent git repos, ignored by this repo.
- Skills to consult per session: `/grilling`, `/domain-modeling`, `/research`, `/prototype`.
- Research findings live in `research/NN-<slug>.md` inside this effort, with a pointer from the resolving ticket.

### Settled during charting

- **Destination = reusable playbook, proven on site #1** (option A), plan-only default overridden so the first pass is executed, not just planned.
- **Two layers, weighted to spreading:** a lightweight *foundation/diagnosis* layer (is it indexed? measurement wired?) plus the *spreading* layer (the focus). Deep technical-SEO / indexing diagnosis is deferred to a future **factory-site v2** — this effort does only enough diagnosis to confirm the site is indexable and to wire measurement.
- **Automation boundary:** the **agent creates everything** (find where the audience is, draft posts/pins/descriptions/comments in the owner's voice, generate shareable assets the static site can emit, monitor indexing/rank/referrals); **the owner does all the actual posting** under their own identity. **Hard "no" for everyone:** mass/spam posting, fake accounts, vote manipulation, ToS-violating link-drops — those get a site *banned*. The playbook is "show up genuinely where it's welcome," never "blast links."
- **Free/organic only** — paid promotion (Google/Reddit/Pinterest Ads) is out of scope; paying for traffic on a $0 site inverts the passive-site economics.
- **First-pass core = 100% effort across every text/link/image-based channel:** foundation (analytics + Search Console + Bing), Reddit/forums, Pinterest, directories, Q&A/answer sites, and YouTube **comment-seeding**. Only YouTube **video production** is out. Owner wants to know what full effort yields before trimming.
- **Scout/validate consequence deferred:** whether the Google-only distribution stance in `idea-scout`/`idea-validate` should loosen depends on *which channels actually produce traffic* — an experiment this effort runs and a future **scout/validate-v4** effort acts on. Out of scope here (see Out of scope).

## Decisions so far

<!-- the index — one line per closed ticket: gist the answer, link the ticket for detail -->

- [Foundation: wire free analytics + Search Console + Bing, baseline index check](issues/01-foundation-measurement-indexing.md) — Cloudflare Web Analytics live (turned out to auto-track already, no token needed); baseline found the site **indexed on Google** (~70-80 URLs) but **not on Bing**; owner has since verified Google Search Console + submitted sitemap, and imported into Bing Webmaster Tools from GSC. All three deliverables complete.
- [Audience map: where the power-tool / DIY crowd lives](issues/02-audience-map.md) — resolved by `/research` subagent ([research/02-audience-map.md](research/02-audience-map.md)): first-pass leverage = brand subreddits (r/DeWalt/Milwaukee/Ryobi) + r/Tools/powertools (Reddiquette 9:1, check each sidebar), Quora Power Tools (links w/ attribution), YouTube comment-seeding (value-first, link-only removed), Curlie directory (free+followed, slow review → submit early); flagged link-hostile: DIY Stack Exchange (product-rec ban → use Woodworking SE), traditional forums (undocumented rules, integrate first); no verifiable audience-size numbers available (left unknown).
- [Design the reusable "channel play" unit + playbook skeleton](issues/03-playbook-skeleton.md) — prototyped and owner-confirmed: reusable template at [docs/distribution-playbook.md](../../docs/distribution-playbook.md) (Where/Asset/What-to-post/ToS-safety/Cadence/Measurement), site-specific execution notes at `sites/<slug>/distribution/`; measurement uses UTM tags where tolerated (Pinterest/directories/YouTube) and bare-URL + referrer tracking where a tag would read as spam (Reddit/forums/Quora/StackExchange).
- [Visual / shareable asset kit (Pinterest + OG images + printable chart)](issues/04-visual-asset-kit.md) — generated offline via a new [generate-social-assets.py](../../sites/runs-on-your-battery-finder/scripts/generate-social-assets.py) script (Python+Pillow, reads the real catalog, not a build dependency): fixed a live broken-OG-image bug (`og-cover.png`), shipped 10 real Pinterest pins across 5 platforms/7 categories, and a data-driven platform×category compat-chart PNG (the first cut of the link-magnet fog line). Per-page OG images deferred as not worth it yet. Build confirmed clean (216 pages). Unblocks ticket 06 (Pinterest play; its other blocker, ticket 02, was already done).
- [Reddit & niche-forum play (draft + execute)](issues/05-reddit-forum-play.md) — drafted at [sites/runs-on-your-battery-finder/distribution/05-reddit-forum-play.md](../../sites/runs-on-your-battery-finder/distribution/05-reddit-forum-play.md): found 3 live, real threads (r/DeWalt fan-compat thread, r/MilwaukeeTool inherited-batteries thread, r/ryobi ONE+ snowblower thread) and drafted a tailored, value-first reply linking a real catalog page for each; corrected the audience map's `r/Milwaukee` link to the real brand sub `r/MilwaukeeTool`. Garage Journal/Contractor Talk deliberately skipped this pass (need reputation first). Owner still needs to post the 3 drafts under their own account (posting checklist included); feeds ticket 10 once posted.
- [Pinterest play (draft + execute)](issues/06-pinterest-play.md) — drafted at [sites/runs-on-your-battery-finder/distribution/06-pinterest-play.md](../../sites/runs-on-your-battery-finder/distribution/06-pinterest-play.md): 5 platform boards (DeWalt 20V MAX, Ryobi 18V ONE+, Milwaukee M18, Makita 18V LXT, HART 20V) with descriptions + keyword lists, and all 10 asset-kit pin images given a title, description, and UTM-tagged destination (base convention plus a per-pin `utm_content` for finer attribution); a ~3-week staggered posting schedule spaces the 10 pins so Pinterest sees steady activity, not a dump. Owner still needs to create the boards and post the 10 pins under their own account (posting checklist included); feeds ticket 10 once posted.
- [Directories & "useful tools" list submissions (draft + execute)](issues/07-directories-submissions.md) — drafted at [sites/runs-on-your-battery-finder/distribution/07-directories-submissions.md](../../sites/runs-on-your-battery-finder/distribution/07-directories-submissions.md): re-verified the field live and narrowed to **Curlie** (free, followed, submit once) plus **Ezilon** (free, secondary, unconfirmed follow-status) as the only real candidates; JoeAnt and Jasmine Directory rejected as paid, indie-startup-launch directories (Turbo0/Fazier/TinyLaunch/StartupBase/Product Hunt) rejected on audience mismatch despite being free. No live "useful free tools" listicle site was found — flagged as a gap. Owner still needs to submit both entries (checklist + log table included); feeds ticket 10 once submitted.
- [Q&A / answer-site play (Quora, StackExchange DIY)](issues/08-qa-answer-sites-play.md) — drafted at [sites/runs-on-your-battery-finder/distribution/08-qa-answer-sites-play.md](../../sites/runs-on-your-battery-finder/distribution/08-qa-answer-sites-play.md): found 2 live, real Quora questions ("Do all Ryobi tools use the same battery?", "Can a Dewalt 60V work with a 20V charger?") and drafted a self-contained answer for each, extending the existing top answer and linking the matching platform hub page only as "see the rest." Stack Exchange skipped this pass — no qualifying live Woodworking SE thread found, and DIY SE bans product-recommendation/brand advice outright per the audience map. Owner still needs to post the 2 drafts under their own Quora account (posting checklist included); feeds ticket 10 once posted.
- [YouTube comment-seeding play (text only, no video)](issues/09-youtube-comment-seeding.md) — drafted at [sites/runs-on-your-battery-finder/distribution/09-youtube-comment-seeding.md](../../sites/runs-on-your-battery-finder/distribution/09-youtube-comment-seeding.md): found 3 live, real, on-topic videos (one per platform — DeWalt, Milwaukee, Ryobi), each already about "what else can this battery run/power"; drafted a genuinely reactive, video-specific comment for each plus a no-link brand-mention variant in case a linked comment risks auto-hiding. Owner still needs to re-verify comments are open and post the 3 drafts under their own YouTube account (posting checklist included); feeds ticket 10 once posted.
- [Extract the distribution playbook into a `/spread-site` skill](issues/11-extract-spread-site-skill.md) — resolved ahead of ticket 10 at the owner's explicit request (none of the 5 channels confirmed posted yet — built on drafting-phase learnings, not validated posting outcomes). Shipped [.agents/skills/spread-site/SKILL.md](../../.agents/skills/spread-site/SKILL.md) (one channel at a time, hard rules carried verbatim), a short 4-line-per-channel checklist format replacing the pilot's much-longer files, plus [DISTRIBUTION.md](../../DISTRIBUTION.md) (plain-language root explainer) and a `/spread-site` step added to [USAGE.md](../../USAGE.md).

## Not yet specified

<!-- known-coming, too dependent on first-pass results to ticket sharply yet; graduate as the frontier advances -->

- **Link-magnet / embeddable-widget depth** — an embeddable compat-chart widget or richer printable others *want* to link. A seed exists in the visual asset kit (ticket 04); how far to push it depends on whether directories/Reddit show appetite for it.
- **Direct outreach** — emailing niche tool blogs / creators for a mention or link. Deferred until the first pass shows the site is link-worthy and indexed.
- **Cadence & repeat-pass rhythm** — how often to re-seed / refresh after the first pass. Specifiable only once the first pass reveals which channels responded.

## Open tickets (the remaining route)

<!-- convenience index for this local-markdown tracker; frontier = open + unblocked + unclaimed, first by number -->

- **Frontier (takeable now):** 10 (first-pass wrap) — claimed, still open pending owner posting confirmation across the 5 channels. *(01, 02, 03, 04, 05, 06, 07, 08, 09, 11 resolved — 11 resolved out of order, ahead of its formal blocker, at the owner's request.)*

## Out of scope

- **Deep technical-SEO / indexing diagnosis** — beyond "is it indexed + measurement wired," root-causing crawl/rank problems belongs to a future **factory-site v2** effort. This map does only the lightweight check.
- **Rewriting `idea-scout` / `idea-validate`'s Google-only distribution stance** — reserved for a future **scout/validate-v4** effort, triggered *after* this effort produces evidence about which channels work. Changing the filter now would be guessing.
- **Paid promotion** (Google / Reddit / Pinterest Ads, sponsored placements) — inverts the passive-site economics; free/organic only.
- **YouTube video production** — a real demo video is high-effort and out for now; YouTube **comment-seeding** (text) stays in (ticket 09).
- **Any automated posting under the owner's identity** — the agent drafts, the owner posts; no bot posting, no spam, no ToS violations.
