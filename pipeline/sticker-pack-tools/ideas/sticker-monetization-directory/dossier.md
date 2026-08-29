# Dossier: Sticker Monetization Directory

**A side-by-side reference of where/how to sell or publish sticker packs per channel (payout share + review + specs) — rejected at low confidence: the digital-monetization hook is already synthesized by an incumbent (KakaMeme's "Why LINE is different"), and the only channel that pays creators a real revenue share (LINE) is non-US, collapsing the US-market premise; US "sell sticker packs" demand is dominated by *physical* stickers.**

## Signal scorecard

**Demand: weak** — the US query space for "sell sticker packs" resolves to *physical/print-on-demand* stickers, not digital messaging-sticker monetization; the digital angle is thin and its one paying channel is non-US.
  - Autocomplete fan-out `sell sticker packs` (Google suggest, US locale, this run) returns almost entirely physical-sticker retail/POD intent: "how to sell sticker packs on redbubble / etsy / amazon", "does walmart / hobby lobby sell sticker packs", "what stores sell fifa / panini / world cup sticker packs", "how to package stickers for shipping". (`scripts/fanout.py "sell sticker packs"`, run 2026-08-29)
  - Autocomplete `line creators market` (the one real paying channel) is dominated by non-US locales: "登入 / 官方網站 / 教學 / 注册教学 / 電腦版" (JP/zh-hant) and "line creator market thailand". (`scripts/fanout.py "line creators market"`, this run) — corroborates `niche.md`'s gate-6 caution.
  - `whatsapp stickers earn money` autocomplete surfaces the question but the honest answer is no store: "can you sell whatsapp stickers", "can i earn money from whatsapp".

**SERP & competitor weakness: weak** (i.e. incumbents are strong, not beatable) — the exact "how each channel pays" synthesis the hook claimed to own is already published, plus per-channel selling guides exist.
  - KakaMeme, "How to Make and Sell LINE Stickers with AI" (5 Jul 2026) already delivers the cross-platform monetization comparison verbatim: *"WhatsApp and Telegram packs are free to use — your reward is social. WeChat pays tips. LINE sells stickers as products: packs typically price around $0.99, and creators keep roughly 35% of the price after the app-store cut."* Plus review timing (*"Review takes days to ~2 weeks"*), payout mechanics (*"payouts via bank/PayPal once you cross the threshold"*), and specs. https://www.kakameme.com/blog/sell-line-stickers-with-ai
  - Per-channel selling guides already rank: Telegram ("How to Sell on Telegram: The Complete Guide (2026)", grambase.ai, 1 May 2026), iMessage ("How to Build iMessage Apps & Sticker Packs", Medium, 8 Mar 2026 + Apple Developer's own iMessage/App Store Connect docs), LINE (official Creators Market "How to Use" + Help Center "Process for selling stickers"). (Bing SERP, this run)

**Hook depth: weak** — scout gate 4 re-checked against evidence fails: the differentiator (side-by-side payout share per channel) is both already served *and* rests on a false premise — there is effectively one channel that pays sticker creators a revenue share, and it is non-US.
  - KakaMeme states it outright: *"LINE is the one platform where sticker creators earn real revenue share… Among all sticker platforms, LINE is the outlier."* (5 Jul 2026, link above) — so a "side-by-side of monetization channels" reduces to "LINE pays, everyone else is free/social", which the incumbent already says in two sentences.
  - LINE's own paying audience is *"Japan, Taiwan, and Thailand"* (same page), so the payout comparison isn't a US-relevant decision.

**Monetization paths: unknown** — no Keyword Planner CSV this run (no `.env` / credentials), so CPC/commercial-intent buckets are unmeasured. Plausible AdSense/affiliate routes exist in the space (AI sticker-maker tools, POD platforms) but weren't graded from data. Searched: Bing SERP for the topic surfaced ad-heavy creator-monetization roundups and AI-sticker-maker affiliates but no measured CPC.

**Feasibility & maintenance: weak** — the underlying data (official store terms) is free and static-feasible, but one channel's monetization is now *fast-moving*, breaking scout gate-3's "specs change ~yearly" assumption.
  - Telegram sticker monetization has shifted to a crypto/NFT model — Telegram Stars (introduced 6 Jun 2024), TON payouts via Fragment, and secondary marketplaces (Palace, MRKT, Harbor). *"the first TON-denominated sticker marketplace—Palace opened its doors… a set can now be resold without leaving the messenger."* (xgram.io, 2 Jul 2025) — the idea's "Telegram: free" cell is already stale, and this segment changes month-to-month, not yearly.

**Unique-data opportunity: unknown → weak** — no dataset or derivable structure competitors lack was found; the payoff facts (LINE ~35%, WhatsApp/Telegram free, WeChat tips) are already synthesized in one incumbent page. Searched: SERP + KakaMeme content cluster (which also ships a multi-channel "make money with AI stickers" guide). No public dataset that would give an edge.

## SERP snapshot

Fetched this run (Bing, `how to sell sticker packs imessage app store revenue share telegram line` and `where to sell sticker packs monetization comparison imessage google play line`):

- **KakaMeme — "How to Make and Sell LINE Stickers with AI" (5 Jul 2026)** — already the de-facto monetization directory in prose: LINE pays ~35%, WhatsApp/Telegram free/social, WeChat tips; specs, review time, payout method, region declaration. Links out to a WeChat submission guide and a "make money with AI stickers" multi-channel guide. **Not beatable — it owns the exact synthesis.**
- **LINE Creators Market (official)** — "How to Use" + Help Center "Process for selling stickers" — authoritative source for the one paying channel.
- **Apple Developer / App Store Connect** — "iMessage Apps and Stickers", "Add iMessage app information" — authoritative iMessage publishing source; plus a fresh Medium build guide (8 Mar 2026).
- **Telegram selling guides** — grambase.ai "How to Sell on Telegram (2026)" (1 May 2026); xgram.io / membertel.com cover the Stars/TON sticker economy.
- **Dominant physical-sticker noise** — Merch Titans "How to Sell Stickers Online 2026", Etsy/Printify/Gumroad POD guides, and video results ("Make $3,000/mo Selling Stickers on Etsy") crowd the SERP — the same-name query is mostly a *different* (physical) market.

Why it's not beatable: the highest-value synthesis (payout share per channel) is published and fresh; the rest is official docs; and the query surface is contaminated by physical-sticker POD intent.

## Keyword data

Awaiting Keyword Planner export — but note: a CSV was **not** requested for this idea because the rejection basis (hook already served + only paying channel non-US) is not a volume question a CSV would resolve. Demand/Monetization graded from autocomplete + SERP evidence only; confidence stays low regardless of CSV.

## Monetization sketch

If built anyway: display AdSense + affiliate to AI sticker-maker tools (KakaMeme et al.) and POD platforms. But the addressable US audience is small (physical-sticker sellers want Etsy/Printify, not a messaging-channel payout table), so the likeliest route sits on thin, non-commercial informational traffic. Not graded — CPC unmeasured this run.

## Risks & unknowns

- **Monetization CPC/volume — unknown.** No Keyword Planner CSV (no credentials this run). Not requested because it wouldn't change the rejection.
- **Google Trends / seasonality — unknown.** Trends endpoint not fetched (blocked headlessly in this repo's prior runs); not invented.
- **Reddit direct — unavailable.** JS-rendered / bot-challenged per the niche's prior access-ladder note; demand read from autocomplete + HN + SERP instead.
- **Exact iMessage / Google Play rev-share numbers — not read this run.** Not needed for the reject; the kill is hook-served + non-US, not a specific payout figure.

## Sources log

- `scripts/fanout.py "sell sticker packs" "make money sticker packs" "sticker pack monetization" "publish sticker pack" "imessage sticker app revenue"` — physical-sticker retail/POD intent dominates. (this run)
- `scripts/fanout.py "how to sell imessage stickers" "telegram sticker monetization" "whatsapp sticker earn money" "line creators market" "sticker pack app store"` — thin digital demand; LINE autocomplete heavily non-US (JP/TW/TH). (this run)
- `scripts/pain-fetch.py hn "imessage sticker"` — iMessage sticker/monetization items cluster around 2016 (App Store launch); largely historical, low current pain. (this run)
- `scripts/pain-fetch.py hn "sticker pack revenue"` — "LINE made $268 Million from just stickers" (non-US); skepticism about recurring sticker revenue. (this run)
- Bing SERP `how to sell sticker packs imessage app store revenue share telegram line` and `where to sell sticker packs monetization comparison imessage google play line` — competitor landscape. (this run)
- https://www.kakameme.com/blog/sell-line-stickers-with-ai (5 Jul 2026) — incumbent that already synthesizes the cross-platform monetization comparison; "LINE is the one platform… real revenue share". (fetched this run)
- https://xgram.io/blog/how-to-buy-and-sell-stickers-on-telegram (2 Jul 2025) — Telegram monetization is now Stars/TON/secondary-market; gate-3 "yearly" refresh assumption broken. (fetched this run)
- Dead ends: Google Trends (not fetched, blocked headlessly); Reddit direct (bot-challenged); Brave Search MCP (configured but requires `.env`, absent — off this run).

## History mirror

See `idea.md` for canonical status.
