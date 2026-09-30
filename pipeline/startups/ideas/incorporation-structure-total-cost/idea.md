# Incorporation structure total-cost calculator

Status: candidate
Origin: ../../runs/2026-09-30-scout.md

## Idea

Pick home state, formation state (Delaware/Wyoming/home), entity type and extra states; get the year-1 and 5-year state-fee stack plus a downloadable filing-deadline calendar.

## Edge

- **Dataset:** per-state formation fee, annual report/franchise tax, foreign-registration fee and due dates, hand-verified against Secretary of State fee schedules and corp.delaware.gov, merged with provider price tables. Incumbents disagree with each other (Delaware LLC annual fee $300 at Chamber of Commerce vs $400 at LLCU; Arizona LLC filing $50 vs $85 at ZenBusiness), so per-row verification is a real barrier — but a 51-row table is thin, see gate 3 note.
- **Compute:** multi-state scenario totals (formation + home-state foreign registration + annual reports, CA $800 minimum, Delaware franchise tax under both methods), multi-year sum, and .ics generation of due dates.
- **Long-tail surface:** ~50 x 3 pages such as "Delaware LLC for a California resident", "Wyoming LLC for a Texas resident". Search volume `unknown`.
- **Monetization route:** affiliate — Firstbase "$40 for each incorporation" (PartnerStack, https://www.firstbase.io/affiliates); ZenBusiness $75/$125/$175 per formation via Awin, 30-day cookie, no paid-search/coupon promotion (https://www.zenbusiness.com/affiliate-program/). doola rate unknown; Northwest rate conflicting in snippets. Documented-only; enabling links is a manual per-site act.

## Hook

LLCU's best-state article says out-of-state LLCs can "easily add up to DOUBLE the cost" but gives no calculator, and its foreign-LLC fee table was last updated 2024-10-17; nobody fetched combines formation state x operating state x years into one total.

## Incumbent probe

2026-09-30. Opened in full: chamberofcommerce.org/llc-costs-by-state, llcuniversity.com/llc-annual-fees-by-state (updated 2026-06-10), zenbusiness.com/state-fees (updated 2026-09-24), llcuniversity.com best-state and foreign-LLC pages. All are single-state tables or prose. SERP-snippet only (NOT opened): delawarellc.co/tools/cost-calculator (2026-06-03), delewarellc.com/tools/startup-cost-calculator (2026-07-02), globalsolo.global/data/formation-costs, taxhero.vc/checkin (calendar quiz), Stripe Atlas Delaware cost page. **Validate MUST open these — they are the gate-4 risk.** Delaware's official calculator (corp.delaware.gov/frtaxcalc) covers only the franchise-tax slice.

## AIO probe

Not run (Google CAPTCHA). Predicted from form: multi-input scenario calculator (favorable), but "how much does X cost in Y" head queries are question-form and likely AIO-triggered with a single-state figure. Manual checkpoint required.

## Gate results

- 1 AIO: unknown, manual checkpoint pending.
- 2 Static: pass.
- 3 Data moat: weak pass — SOS hand-verification plus provider merge; scrapeable in a weekend by one source is the risk. Upkeep ~2–3 h/week (estimate).
- 4 Hook: near-miss risk on unopened calculators; not killed on evidence in hand.
- 5 Legal: keep to fees/dates, no "you must register" advice.
- 6 US: pass.
- 7 Monetization: pass via affiliate; low payouts ($40–$175 per formation).

Weak candidate.

## Evidence

- HN 2026-05-06, Delaware franchise-tax method: "The minimum tax is $175.00 for corporations using the Authorized Shares method and a minimum tax of $400.00 for corporations using the Assumed Par Value Capital Method." — https://news.ycombinator.com/item?id=48039987
- r/SaaS 2026-08-24: "How much would it cost me annually to run an LLC in the US?" — https://reddit.com/r/SaaS/comments/1vx3u1i/
- LLCU comment 2025-06-01: "Can I move my LLC to a more friendly state and (not $500 a year for reports)" — https://www.llcuniversity.com/best-state-to-form-an-llc/
- LLCU comment 2025-09-22: "I still need to pay franchise tax of $800 with FTB but I want to know do I still need to register my Wyoming LLC as a foreign LLC in California." — same page
- Search volume, CPC, difficulty: `unknown`.

## History

- 2026-09-30 — candidate (emitted by scout run)
