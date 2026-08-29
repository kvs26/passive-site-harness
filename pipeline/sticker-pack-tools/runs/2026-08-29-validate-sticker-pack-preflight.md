# Validate run — sticker-pack-tools — sticker-pack-preflight — 2026-08-29

Idea: **Sticker Pack Preflight** — client-side whole-pack, multi-platform validator (per-file ×
per-platform pass/fail matrix + pack-count + tray-icon rules + one-click fix).
Target market: US (default). Verdict: **rejected** (gate-4 / hook-depth disproved). Confidence: medium.

## Inputs read
- idea.md, origin scout run (2026-08-29-scout.md), niche.md. No prior dossier (first validation).
- No `.env` → no Keyword Planner credentials, no Reddit OAuth. MCP: Playwright available (used, but
  emoji.gg blocked by Cloudflare); built-in fetch + helper scripts otherwise.

## What was dug
1. **Demand (pass 1)** — fan-out on the idea's differentiator queries (`validate/check sticker pack`,
   `whatsapp sticker pack validator`, `batch sticker resize`) → **no on-topic suggestions**. Fan-out on
   the underlying problem (`discord sticker`, `telegram sticker`, `whatsapp sticker`, upload-failure
   phrasings) → dense, live single-file/single-platform cluster (invalid asset, size limit, won't
   upload, requirements). Re-verified two scout Reddit links (still live). → underlying demand strong;
   differentiator demand absent.
2. **Keyword Planner checkpoint** — no CSV. Deliberately did **not** write keywords-request / park:
   a CSV can only size the single-file demand (already strong) + its CPC; it cannot measure demand for
   the batch/whole-pack differentiator (no query variants exist to feed it). The decisive weakness isn't
   CSV-resolvable, so parking-for-CSV would be misleading.
3. **SERP & competitor** — Bing SERP on the batch query returned only makers/packers/converters
   (wastickers-packer "auto-resize, split, pad"; sticker-convert; sticker-js; stickercrafter) — no
   whole-pack validator. The batch niche is unserved because demand routes to auto-conforming makers.
4. **Hook depth (the crux)** — opened the two named near-miss incumbents the scout required:
   - `emoji.gg/stickers/validate` = **misread**; it's a sticker-download library page ("find the best
     Validate stickers to use"), not a validator. Sibling slugs /validation, /validated render identically.
   - `textfaker` = Discord **single-file** preflight only, generic tool-farm template.
   Neither occupies the cut — but the differentiator also has no demand, and makers short-circuit the
   "validate-then-fix a folder" workflow. Hook depth → weak.
5. **Monetization** — competitor set is free ad-supported utilities (display-ad route); CPC unknown (no CSV).
6. **Feasibility & maintenance** — client-side inspection confirmed feasible; specs public + ~yearly
   change (WhatsApp tray-icon 96×96/<50KB re-verified this run). Holds. Caveat: iMessage packs are Xcode
   apps, not uploaded files → an iMessage validation column is largely inapplicable, thinning the
   multi-platform claim.
7. **Unique data** — none; all specs public; cross-platform ruleset already compiled by cheat sheets.

## Dead ends / inconclusive
- emoji.gg — Cloudflare challenge on both fetch and Playwright; characterized via SERP title/description.
- Google Trends — not fetched (blocked headlessly). Seasonality unknown, not invented.
- HN `sticker pack validate` — no relevant hits. GitHub WhatsApp/stickers issues = runtime bugs, not preflight.

## Early-stop
No early stop — demand for the underlying problem is strong, so all six signals were graded. The
rejection rests on hook depth + saturated adjacent SERP + maker short-circuit, not on absent demand.

## Outcome
- Status: candidate → **rejected**. Dossier kept as record. No CSV requested (see rationale above).
- Board regenerated. Niche has 0 validated ideas → no comparison brief.
