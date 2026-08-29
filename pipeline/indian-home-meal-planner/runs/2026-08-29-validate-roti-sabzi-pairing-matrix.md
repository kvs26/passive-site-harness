# Validate run — indian-home-meal-planner — roti-sabzi-pairing-matrix — 2026-08-29

One idea, one session. Outcome: **parked** at medium confidence (no Keyword Planner CSV). Dossier complete.

## Inputs

- Idea: `ideas/roti-sabzi-pairing-matrix/idea.md` (status candidate, weak — thin demand + gate-1 near-miss).
- Origin scout: `runs/2026-08-29-scout.md`.
- `niche.md` — US diaspora primary market, India upside.
- No prior dossier; no `keyword-planner.csv`; no `keywords-request.md` at start → missing-CSV path.

## Environment

- Credentials: no `.env` → credential-free adapters only.
- MCP: Playwright browser available (used for Google SERP + reddit reads after DDG CAPTCHA). Brave/Fetch MCP not exercised.
- Blocked this run: `scripts/pain-fetch.py ddg` empty (bot wall), html.duckduckgo.com CAPTCHA, eathealthy365 403, reddit comment bodies (JS/login wall), Google Trends not retried (429 at scout).

## What was dug

- **Demand (pass 1).** Two autocomplete fan-outs (gl=us). Found the demand is **broader than the scout's "thin" read** — a genuine per-bread long tail ("what to eat with jowar/bajra/besan/missi/methi/makki/nachni roti") and a full paratha/dal side ("side dish for aloo/methi/paneer paratha", "what goes best with dal makhani/chawal/khichdi"), i.e. real two-directional pairing intent. Google PAA on the jowar query curates the pairing question. Reddit recurrence exists but the on-point thread (r/veganrecipes "Tired of eating roti and sabzi every day") is variety-fatigue framed, overlapping the sibling rotation idea. → **Demand: strong** (upgrade from scout).
- **SERP & competitor weakness.** Two SERP reads. "what sabzi to eat with jowar roti" → no AI Overview, all articles/videos/reddit, no tool (open). "side dish for aloo paratha" → **AI Overview present** (curd/lassi, butter, pickle, chai, salad) + dedicated listicles (indianambrosia "25+ Side Dishes for Paratha", rakskitchen). The head is served; only the long tail is open. → **weak**.
- **Hook depth.** The scout's gate-1 near-miss is **confirmed, not dispelled**: AI Overview answers the single "what goes with <bread>" question — the matrix's highest-value use — on head terms. Differentiator now rests entirely on the two-way browsable matrix, which no evidence shows wanted as a tool. → **weak**.
- **Monetization.** Competitor ad/affiliate stacks fetched: vegrecipesofindia = AdThrive/Raptive + affiliate; archanaskitchen = Amazon affiliate. Route is real but no bid data, food vertical low-CPC. → **weak**.
- **Feasibility & maintenance.** Static curated pairing table; traditional canon, public prose, no licence, sub-quarterly refresh. → **strong**.
- **Unique data.** Two-way filterable cross-tab is unserved but derivable-from-prose and AIO-eroded. → **weak**.

## Early-stop / judgement

Demand did **not** collapse — it strengthened — so this is not a rejection on demand. Gate-1 is a confirmed near-miss but not a clean kill: the per-bread long tail carries no AI Overview and the two-way matrix cut is unserved, so the idea is genuinely inconclusive on hook rather than disproven (contrast washer-capacity-converter / appliance-fit-checker, which were rejected because AIO fully served the hook). With no CSV to size the one unserved cut, the correct state is **parked**, per the missing-CSV rule.

Honest read for the human: this is the **weaker of the two live sibling ideas**. `sabzi-by-vegetable-index` (also parked, medium) has stronger SERP-weakness and unique-data grades and no AI-Overview overlap on its core query; roti-sabzi-pairing's head hook is being eaten by AI Overview. If the CSV shows the per-bread long tail is thin, this one likely rejects.

## Dead ends (don't repeat)

- DDG (script + browser html endpoint) — bot-walled both ways this run.
- eathealthy365 roti-pairings guide — 403 on direct fetch.
- Reddit on-page comment scrape — JS/login wall; titles/snippets only.
- HN Algolia "roti sabzi" — no on-topic pain.

## Outputs

- `ideas/roti-sabzi-pairing-matrix/dossier.md` — six-signal dossier, confidence medium.
- `ideas/roti-sabzi-pairing-matrix/keywords-request.md` — ~19 grouped keywords; gating read = size the long-tail cut.
- `idea.md` → `parked`; History appended.
- `pipeline/board.md` regenerated.

Comparison brief: **not triggered** — this niche has 0 `validated` ideas (parked never counts).

Parked — export Keyword Planner data for the keywords in `keywords-request.md` to `keyword-planner.csv`, then re-run validate on this idea to finish.
