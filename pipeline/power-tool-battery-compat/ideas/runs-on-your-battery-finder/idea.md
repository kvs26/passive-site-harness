# Runs-on-Your-Battery Finder

Status: validated
Origin: ../../runs/2026-09-01-scout.md

## Idea

Filterable directory of every gadget and non-tool product that runs on your existing power-tool battery platform — fans, misting fans, vacuums, sprayers, coffee makers, glue guns, chainsaws, inflators, lights, power stations, heated-jacket adapters, ride-on-car conversions. Pick your platform (DeWalt 20V, Milwaukee M18/M12, Ryobi One+, Makita LXT, Hart, Bauer, Kobalt…) + a category → every product that fits, flagged **native / third-party direct-fit / needs adapter** (with the specific adapter linked), with battery-not-included warnings and Amazon buy links.

## Hook

Nobody has built the filterable, cross-platform catalog. The SERP is exclusively 4–5-item listicles (SlashGear "5 Accessories That Use DeWalt Batteries" 9 Feb 2026, HowToGeek "5 Weird Products That Run on Power Tool Batteries" 20 Sep 2025, nerdtechy "5 Best Portable Fans for DEWALT" 16 Jun 2026, build-construct.com 2 Aug 2026) — all DeWalt-heavy, none filterable, none covering small platforms (Hart, Kobalt, Bauer, Skil — the exact gap a Redditor called out), none distinguishing direct-fit from adapter-path. The strong niche incumbents (toolcompatibility.com, garagealmanac.com, batteryfits.com) all stop at batteries↔tools/chargers; none catalogs the gadget/accessory long tail.

## Edge

- **Dataset**: product rows merged from Amazon listings + manufacturer spec pages + Reddit/YouTube owner reports, each hand-verified for battery interface (voltage + rail), native vs adapter path, and battery-included status — a merge no single source publishes.
- **Per-query compute**: filter by owned platform × category × fit-type; adapter-path resolution (gadget accepts brand X → adapter Y bridges from your brand Z).
- **Long-tail pages**: platform × category matrix ("Milwaukee M18 fans", "Ryobi One+ coffee maker", "Hart 20V gadgets", "what runs on Bauer batteries") — Trends shows demand lives in exactly these phrasings.
- **Monetization**: Amazon affiliate on every row (gadgets $30–300, Tools/Home ~3%); Home & Garden display RPM (~5× baseline) on the guide layer.

## Incumbent probe (2026-09-01)

Opened: SlashGear (5-item listicle, DeWalt only), HowToGeek (5-item, no filters), nerdtechy (5 fans, DeWalt), build-construct.com (radios/power-stations article), toolingideas.com (AI-farm prose), toolcompatibility.com + garagealmanac.com + batteryfits.com (battery↔tool/charger only — no gadget catalog), powertoolsadapters.com (adapters as products, not a gadget directory), Amazon search pages (unfiltered soup). Two separate Bing probes ("what gadgets run on dewalt batteries", "m18 powered gadgets list" family) surfaced no filterable, cross-platform, purpose-built directory.

## AIO probe (2026-09-01, live google.com, gl=us)

"what gadgets run on dewalt 20v batteries" → AI Overview present; answers at **category level** (speakers, inflators, USB chargers, lights/fans; third-party coffee makers, glue guns, mini chainsaws) citing Reddit/YouTube, then asks a follow-up. **Near-miss, judged survivable**: AIO gives examples, not the exhaustive filterable catalog with fit-type, adapter path, small-platform coverage, prices, or buy links — the transactional layer where this tool lives. Head informational query is partially ceded; the platform×category long tail and product-selection queries are not.

## Gate results

1. Answer-it — pass (near-miss, documented above).
2. Static feasibility — pass: static site + client-side filter over a JSON catalog.
3. Data moat — pass: (a) upkeep ≈ monthly new-product sweeps, well under 3 hrs/wk; (b) merge of Amazon + manufacturer specs + owner reports with per-row hand-verification of battery interface is not single-source-scrapable.
4. Hook served — pass: probed twice, listicles only (named + opened above).
5. Legal — pass: factual compatibility claims; adapter rows carry the community-standard over-discharge caveat.
6. US mismatch — pass: US platforms (Hart/Bauer/Kobalt are Walmart/HF/Lowe's house brands).
7. Monetization — pass: Amazon affiliate is the primary route; every result row is a purchasable product.

## Evidence

- Reddit r/Dewalt "Any Cool Third Party Gadgets That Run On Dewalt Batteries?" (wereef6, 17 comments) and "Any fun non tool things that use DeWalt batteries" (14j3jqg) — recurring discovery demand with answers scattered in comments.
- Reddit r/3Drequests (175hbia): "most models focus on prominent brands... while smaller and startup brands such as Skil/Denali, Hart, Kobalt, Bosch, Metabo, Porter-Cable" — explicit small-platform coverage gap.
- Amazon autocomplete (2026-09-01): "dewalt battery compatible misting fan / pressure washer / vacuum / chainsaw / heat gun / coffee maker / glue gun / fuel transfer pump" — purchase-shaped, per-gadget completions across platforms.
- Google Trends US 12-mo (2026-09-01): "dewalt battery fan" peaks 100 (Jun 2026), sustained Apr–Aug seasonal volume; generic "tools that use dewalt batteries" ≈ 0 — demand concentrated in per-gadget×platform phrasings this site's long-tail pages target.
- r/Dewalt (sejxmy): "Most third party adapters don't have this protection stuff so it's possible to over discharge" — the safety nuance the fit-type flag encodes.
- Affiliate precedent: thewoodworkingpodcast.com battery-platform finder and toolcompatibility.com both run Amazon affiliate on adjacent compat content.

## History

- 2026-09-01 — candidate (emitted by scout run; sole survivor of 12+ probed shapes — see run log)
- 2026-09-01 — parked: dossier complete at medium confidence; waiting on Keyword Planner CSV (see keywords-request.md). Unpark by exporting the CSV to keyword-planner.csv and re-running /idea-validate. Dig found no kill-level finding; SERP/AIO graded weak (informational head now AIO-answered incl. small platforms; transactional long-tail wedge verified). SERP/AIO evidence expires 2026-09-29.
- 2026-09-01 — validated (confidence: high). Keyword Planner CSV ingested (keyword-planner.csv): milwaukee m18 fan 50K bucket; dewalt battery fan/vacuum/chainsaw 5K each (all High comp, AIO-free Shopping SERPs) → Demand strong, CSV-backed. Every discovery/directory-framing query returned zero data — volume is in specific product queries, so this validates as a competitive product-directory play (rank product-category pages vs Shopping SERPs + listicles), not an uncontested-niche play; the fit-type/small-platform hook is a conversion/trust asset, not its own traffic channel. No kill-level finding. SERP/AIO stays weak (not re-probed this top-up); evidence expires 2026-09-29 — pre-build re-probe mandatory.
