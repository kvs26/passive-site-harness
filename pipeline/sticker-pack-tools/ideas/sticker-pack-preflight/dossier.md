# Dossier: Sticker Pack Preflight

**A client-side, whole-pack, multi-platform sticker validator (per-file × per-platform pass/fail matrix + pack-count + tray-icon rules) — rejected at medium confidence: the underlying per-file/per-platform demand is strong but saturated, while the batch/whole-pack/multi-platform *differentiator* has no demand evidence and the "validate-then-fix" workflow is short-circuited by auto-conforming makers/packers.**

## Signal scorecard

**Demand (underlying problem): strong** — the per-file, per-platform "why is my sticker invalid / what size does it need to be" problem recurs across independent communities and has a broad, live autocomplete cluster. *Caveat: this demand is for single-file, single-platform fixing — not for the batch/whole-pack angle this idea is built on.*
  - Autocomplete fan-out this run (Google suggest, US) on `discord sticker` returned a dense failure cluster: `discord sticker invalid asset`, `…invalid asset png`, `…invalid asset meaning`, `…upload invalid asset`, `…says invalid asset`, `why is my discord sticker invalid asset`, `how to fix discord sticker invalid asset`, `discord sticker won t upload`, `discord sticker upload not working`, `discord sticker requirements`, `discord sticker size limit`. (scripts/fanout.py, `discord sticker` seed)
  - r/discordapp — "Why are the size limitations for stickers ridiculous?": *"…the sticker calls the file invalid…"* https://www.reddit.com/r/discordapp/comments/11ine30/why_are_the_size_limitations_for_stickers/ (re-verified live this run via scout link)
  - r/Telegram — "Getting stickers to the correct aspect ratio?": *"…at least one side has to be exact 512 pixels."* https://www.reddit.com/r/Telegram/comments/dn2ak0/getting_stickers_to_the_correct_aspect_ratio/

**SERP & competitor weakness: weak** — the SERP for the queries people actually type (single-file, single-platform) is saturated with dedicated resizers, checkers, converters and one-table cheat sheets; ranking a new tool there is hard, and the "whole folder" job is already absorbed by makers/packers.
  - Batch search (`validate entire sticker pack batch multiple files whatsapp telegram discord`, Bing) surfaced only *makers/packers/converters*, no whole-pack validator: `wastickers-packer` — *"Batch-pack sticker images into .wastickers files for WhatsApp — auto-resize, split, pad, and generate installable packs"* (PyPI, 10 Jun 2026); `sticker-convert` (laggykiller, PyPI); `sticker-js` (motebaya) — *"Telegram sticker pack management with batch processing and image optimization"*; `stickercrafter.com` — *"Every sticker is exported as a transparent PNG optimized for Telegram (512×512px), WhatsApp…"*.
  - Scout's documented per-file/per-platform incumbent density (re-confirmed as still the live landscape): emoteresizer.net, scalefish.app, imgfast.com, discordstickercompressor.com (resizers); kakameme.com all-platform cheat sheet ("export settings that satisfy all of them at once").

**Hook depth: weak** — the distinguishing features (batch, whole-pack, multi-platform matrix, count + tray-icon) are not searched for and not requested in complaints; the one named multi-platform "validator" incumbent turned out not to be a validator at all; and the workflow the hook targets is short-circuited by auto-conforming exporters.
  - **The scout's key multi-platform-validator incumbent is a misread.** `emoji.gg/stickers/validate` is a **sticker-download library page**, not a validation tool — SERP title/description: *"Validate Stickers - For Discord, Telegram & Whatsapp - Emoji.gg … Explore thousands of Validate Discord Stickers on Emoji.gg, our sticker library makes it easy to find the best Validate stickers to use…"* (Bing SERP; sibling slugs `/validation`, `/validated` render identically — the URL slug is a search term, not a feature). So the cut is genuinely *unserved* — but that removes an incumbent, not a demand signal.
  - **textfaker** is a Discord **single-file** preflight only: *"base verification utility for measurable fields… File extension… File size… pixel dimensions… aspect ratio"*, target `128 x 128`, `512 KB` — part of a generic per-tool template farm (*"Demand proof URLs stored: 2"*). https://textfaker.com/tools/discord-emoji-sticker-requirements-checker
  - **No demand for the differentiator.** Fan-out on `validate sticker pack`, `check sticker pack`, `sticker pack requirements checker`, `whatsapp sticker pack validator`, `batch sticker resize` returned nothing on-topic (only `search sticker pack`, `how to find sticker packs on X`). No autocomplete, forum, or SERP evidence that users want a *whole-pack, cross-platform* verdict — they fix one file for one platform, or use a maker.
  - **Workflow short-circuited:** makers/packers (wastickers-packer, stickercrafter, sticker-convert) auto-resize/pad/split on export, so a conformant pack is produced without a separate validate step — the "validate then fix a folder" journey the hook assumes rarely happens.

**Monetization paths: weak (bordering unknown)** — the plausible route is display ads (the whole competitor set runs as free ad-supported utilities), but this is low-intent how-to/utility traffic and no CPC data was obtainable this run (no Keyword Planner CSV).
  - Competitor set is free, ad-supported utility tools (emoteresizer.net, imgfast.com, discordstickercompressor.com — documented in scout landscape); no affiliate-friendly product category attaches naturally to "resize a sticker."
  - Top-of-page bid data: `unknown` — no `keyword-planner.csv` this run.

**Feasibility & maintenance: strong** — dimension/file-size/format/frame inspection runs fully client-side (File API + canvas + header parsing); the rule sets are public and change roughly yearly. This holds scout gates 2–3.
  - WhatsApp spec re-verified this run: sticker images WebP/PNG, <100 KB, exactly 512×512; **tray icon PNG, <50 KB, exactly 96×96** (Bing answer box citing digitalcitizen.life / guidingtech.com). Discord 320×320 / ≤512 KB / PNG-APNG; Telegram one side exactly 512px (scout facts, still live in this run's threads).
  - *Caveat on the iMessage leg:* iMessage sticker packs ship as Xcode Sticker Pack **apps** (asset-catalog small/medium/large sizes), not uploaded files a browser tool inspects — so an "iMessage validation" column is largely inapplicable, thinning the multi-platform claim.

**Unique-data opportunity: weak** — every input is a public platform spec; the only "asset" is the aggregated cross-platform ruleset + pack-level rules, which is a compilation already produced by cheat sheets.
  - kakameme.com and somake.ai already publish all-platform spec tables; no proprietary or derivable dataset a competitor lacks.

## SERP snapshot

- `emoji.gg stickers validate discord telegram whatsapp` (Bing) — top result is `emoji.gg/stickers/validate`, but its own description is *"Explore thousands of Validate Discord Stickers on Emoji.gg, our sticker library makes it easy to find the best Validate stickers to use…"* → a **download library**, not a validator. Adjacent results (`/validation`, `/validated`, stickers.gg, stickers.wiki) are all sticker galleries. **No dedicated whole-pack validator ranks.**
- `validate entire sticker pack batch multiple files whatsapp telegram discord` (Bing, ~49 results) — results are **makers/packers/converters**: wastickers-packer (auto-resize/split/pad), sticker-convert, sticker-js (batch processing), stickercrafter (export presets), botostore Batch Sticker Uploader. The batch *validator* niche is empty — because demand routes to makers.
- `whatsapp sticker pack tray icon requirement won't load error` (Bing, ~26K results) — dominated by **runtime-troubleshooting** content (clear cache, reinstall, update, network) and how-to fix videos, plus WhatsApp/stickers GitHub runtime bugs (empty packs after update, packs disappearing) — i.e. an answer-it/support space, not a file-preflight need.

Why beatable / not: the exact batch-matrix niche has no dedicated incumbent (beatable in principle), but the queries that carry volume are single-file/single-platform and already densely served; a tool whose distinguishing feature nobody searches for cannot capture that saturated traffic.

## Keyword data

No `keyword-planner.csv` present — awaiting Keyword Planner export would only quantify the *single-file/single-platform* demand (already graded strong) and its CPC. It cannot measure demand for the batch/whole-pack/multi-platform differentiator, because there are no such query variants to feed it (fan-out returned none). The decisive weakness (hook depth) is therefore not CSV-resolvable, so no export was requested.

## Monetization sketch

Likeliest route: display ads (AdSense) on a free utility, matching the incumbent resizer/checker pattern. It would sit around the results matrix and the per-platform spec reference. Intent is low-value how-to/utility; no natural affiliate category. CPC unknown (no CSV).

## Risks & unknowns

- **Monetization CPC: unknown** — searched competitor monetization pattern (display ads confirmed) but no bid data without Keyword Planner CSV.
- **Trend/seasonality: unknown** — Google Trends not fetched (JSON endpoint blocked headlessly this run; no CSV export).
- **Load-bearing risk (why rejected):** the value proposition rests entirely on the batch/whole-pack/multi-platform differentiator, for which the dig found **no demand evidence**, while the underlying per-file demand that *is* strong is saturated and the whole-pack workflow is absorbed by auto-conforming makers/packers.

## Sources log

Fetched / run this session (2026-08-29):
- scripts/fanout.py — seeds `validate sticker pack`, `check sticker pack`, `sticker pack requirements checker`, `whatsapp sticker pack validator`, `batch sticker resize` (no on-topic hits); `why won't my sticker`, `discord sticker invalid`, `sticker pack limit`, `how many stickers per pack`, `telegram sticker not uploading`; `sticker pack`, `discord sticker`, `telegram sticker`, `whatsapp sticker`, `sticker pack size`.
- scripts/pain-fetch.py github — `whatsapp sticker pack tray icon` (WhatsApp/stickers runtime bugs: #688 empty packs after update, #1089 packs disappear, #1002 check-if-added — runtime, not preflight).
- scripts/pain-fetch.py hn — `sticker pack validate` (no relevant hits).
- textfaker.com/tools/discord-emoji-sticker-requirements-checker — fetched; Discord single-file preflight, generic tool farm.
- emoji.gg/stickers/validate — direct fetch Forbidden; browser open blocked by Cloudflare challenge (persistent). Characterized via Bing SERP title/description instead → sticker library page.
- Bing SERP — `emoji.gg stickers validate discord telegram whatsapp`; `validate entire sticker pack batch multiple files whatsapp telegram discord`; `whatsapp sticker pack tray icon requirement won't load error`.
- Re-verified scout links (still live, still say what they said): r/discordapp 11ine30; r/Telegram dn2ak0.

Dead ends / unavailable: emoji.gg (Cloudflare); Google Trends (blocked headlessly); Keyword Planner (no credentials / no `.env`); Reddit direct (degraded to Bing-surfaced snippets, per access ladder).
