# Validate run — board-game-expansion-buyers-guide (2026-09-20, top-up)

Idea was `parked` waiting on the Keyword Planner CSV (see `keywords-request.md` from the 2026-09-18 run and its `dossier.md`). Human supplied the export (`Keyword Stats 2026-09-20 at 00_57_19.csv`), copied into the idea folder as `keyword-planner.csv`. Per the skill's top-up path: ingest the CSV, upgrade Demand/Monetization + confidence, flip status — no full re-dig.

## What was done

1. Normalized the CSV with `scripts/planner-report.py`. Head terms: "catan expansions" = 50,000 bucket (High competition, bid 16.90–44.22 INR), "dominion expansions" = 5,000 bucket (Medium, bid 17.86–48.39 INR) — both clear the rubric's 5K+ bar, corroborating the already-strong Demand grade. "root expansions ranked" / "everdell expansions ranked" = 500 bucket. "dominion expansion order" showed a -90% YoY dip (noted, doesn't offset the head-term strength). Most of the specific buy-order/worth-it hook phrasing came back zero-volume — flagged in Risks, since the head terms are broader queries than the exact ranked-buy-order hook.
2. Re-verified the Amazon Associates Monetization route, which the 2026-09-18 dossier had left at "weak-but-unrejected" believing the rate required a login. Per this workspace's own prior research (repo/user memory), the Standard Commission Income Statement is actually public: fetched `affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ` directly — Table 1 confirms **Toys = 3.00%**. Also fetched `affiliate-program.amazon.com/help/operating/policies` — confirms the **24-hour click session, extendable to 89 days via cart-add**. Both public, no login needed. This resolves the dossier's biggest open risk and upgrades Monetization from weak to **strong**.
3. Did **not** re-attempt the SERP dig or the manual Google AIO checkpoint this run (out of scope for a CSV top-up; still blocked by CAPTCHA per the 2026-09-18 run). Per the rubric, the SERP/AIO expiry clock only restarts on a re-probe — it wasn't re-probed, so the original 2026-10-16 expiry stands unchanged.

## Confidence change

Medium → **high**: CSV now present (lifts the medium cap), no signal graded unknown, Demand backed by ≥2 independent sources (SE/Reddit recurrence + CSV bucket corroboration).

## Outcome

Status flipped `parked` → `validated` (confidence: high). No kill-level finding surfaced. Manual Google AIO checkpoint remains owed before build per the standing pre-build re-probe rule (not specific to this idea — applies to every validated idea regardless of status-flip reason).

`pipeline/board.md` regenerated for this row. Board-games niche now has 1 validated idea — comparison-brief trigger (≥3) not yet met.

## Addendum — manual AIO checkpoint (same day, follow-up)

The owed manual Google AIO checkpoint was completed later the same day. Google loaded normally this time (no CAPTCHA). Five head queries checked directly via `google.com/search`:

- "catan expansions ranked" — no AI Overview (straight to Web results).
- "which catan expansion should i buy first" — no AI Overview.
- "dominion expansions ranked" — no AI Overview.
- "catan seafarers vs cities and knights" — AI Overview present, but only describes each expansion's focus/mechanics (exploration vs. city-building); does not rank, buy-order, or filter by ownership.
- "which expansion should i buy first" (generic, no game named) — AI Overview present but answered for an unrelated domain (Guild Wars 2 expansions), confirming the bare generic phrasing doesn't even reach our niche.

`&udm=14` control run on the vs-query confirmed the AIO-free baseline (plain Web results), matching the layout of the three no-AIO queries.

**Result:** no kill-level finding. The three core buy-order/ranked head queries carry no AIO at all; the one board-game-relevant AIO (comparison form) only describes and doesn't touch the ranked/filtered/own-aware-recommendation wedge. Confirms scout's original predict-from-form assessment (low AIO risk) at evidence level.

Dossier and `idea.md` updated: SERP & AIO snapshot section now carries the dated table; Risks & unknowns' AIO entry removed (resolved); SERP/AIO evidence expiry moved from 2026-10-16 to **2026-10-18** (4 weeks from this AIO re-probe, per the rule that the clock only restarts on an actual re-probe). Idea remains `validated` (confidence: high) — this closes the last standing pre-build item early; a fresh pre-build re-probe is still mandatory regardless of age per the skill's standing rule.
