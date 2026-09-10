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

- [Audience map: where the power-tool / DIY crowd lives](issues/02-audience-map.md) — resolved by `/research` subagent ([research/02-audience-map.md](research/02-audience-map.md)): first-pass leverage = brand subreddits (r/DeWalt/Milwaukee/Ryobi) + r/Tools/powertools (Reddiquette 9:1, check each sidebar), Quora Power Tools (links w/ attribution), YouTube comment-seeding (value-first, link-only removed), Curlie directory (free+followed, slow review → submit early); flagged link-hostile: DIY Stack Exchange (product-rec ban → use Woodworking SE), traditional forums (undocumented rules, integrate first); no verifiable audience-size numbers available (left unknown).

## Not yet specified

<!-- known-coming, too dependent on first-pass results to ticket sharply yet; graduate as the frontier advances -->

- **Link-magnet / embeddable-widget depth** — an embeddable compat-chart widget or richer printable others *want* to link. A seed exists in the visual asset kit (ticket 04); how far to push it depends on whether directories/Reddit show appetite for it.
- **Direct outreach** — emailing niche tool blogs / creators for a mention or link. Deferred until the first pass shows the site is link-worthy and indexed.
- **Cadence & repeat-pass rhythm** — how often to re-seed / refresh after the first pass. Specifiable only once the first pass reveals which channels responded.

## Open tickets (the remaining route)

<!-- convenience index for this local-markdown tracker; frontier = open + unblocked + unclaimed, first by number -->

- **Frontier (takeable now):** 01 (foundation), 03 (playbook skeleton). *(02 resolved during charting via research subagent.)*
- Blocked: 04 (←03); 05 (←03; 02 done); 06 (←03,04; 02 done); 07 (←03); 08 (←03; 02 done); 09 (←03; 02 done); 10 (←01,05,06,07,08,09); 11 (←10).

## Out of scope

- **Deep technical-SEO / indexing diagnosis** — beyond "is it indexed + measurement wired," root-causing crawl/rank problems belongs to a future **factory-site v2** effort. This map does only the lightweight check.
- **Rewriting `idea-scout` / `idea-validate`'s Google-only distribution stance** — reserved for a future **scout/validate-v4** effort, triggered *after* this effort produces evidence about which channels work. Changing the filter now would be guessing.
- **Paid promotion** (Google / Reddit / Pinterest Ads, sponsored placements) — inverts the passive-site economics; free/organic only.
- **YouTube video production** — a real demo video is high-effort and out for now; YouTube **comment-seeding** (text) stays in (ticket 09).
- **Any automated posting under the owner's identity** — the agent drafts, the owner posts; no bot posting, no spam, no ToS violations.
