# Complexity-as-moat criteria

Type: grilling
Status: resolved
Blocked by: 01, 05

## Question

The maintenance ceiling was relaxed on the theory that deliberate complexity/maintenance is the moat AI site farms won't copy. Make that operational: what *counts* as a moat-grade site under the strategy edge (e.g. minimum curated-dataset scope, hand-verification requirement, interactivity depth, update cadence that stays within 2–4 hrs/week), and how do scout gate 3 (unmaintainable data) and validate signals 5–6 (feasibility, unique data) get rewritten to reward rather than punish it? Output: the exact replacement gate/signal wording ready for tickets 08–09.

## Answer

**Five decisions, grilled one-by-one and confirmed:**

**1. Time budget re-set (supersedes the 2–4 hrs/week portfolio guidance from ticket 05).** The user wants to invest real time to make money: portfolio guidance is now **~10 hrs/week**, with a **~3 hrs/week per-site steady-state upkeep cap**. The cap sits below total capacity deliberately — build time for the *next* site is where money compounds, and estimates always undershoot. The old ~quarterly *cadence* rule is dropped entirely: the bound is **hours, not cadence**. Monthly or weekly touches are fine — even desirable (that's the moat) — as long as the total fits.

**2. Scout gate 3 becomes two-sided** — kills both unmaintainable data *and* moat-free data (one-sided alternative rejected: scout would keep emitting moat-free candidates for validate to kill, the 18/20 postmortem failure mode). Exact replacement wording for ticket 08:

> 3. **Data won't moat** — fails either side: **(a) unsustainable** — no free/licensed public source, or realistic steady-state upkeep exceeds ~3 hrs/week for one person; or **(b) moat-free** — the dataset could be assembled by scraping one source or prompting an LLM with no per-row verification judgment, i.e. an AI site farm could replicate it in a weekend. Clearing the moat side needs at least one of: merging 2+ independent sources, per-row hand-verification against a primary source, or per-row expert/editorial judgment. High-touch maintenance within the cap is a *feature* (the moat), not a failure.

At scout this is a good-faith estimate; validate verifies both sides against real sources.

**3. Moat floor is qualitative, no row minimum.** A dataset clears the floor by needing at least one of: (a) merging/reconciling 2+ independent sources, (b) per-row hand-verification against a primary source (manufacturer spec, official doc), (c) per-row expert/editorial judgment. No numeric row floor anywhere — 150 hand-verified rows can moat harder than 5,000 scraped ones, and a numeric floor invites padding. Scale matters only via the long-tail-surface check in signal 6.

**4. Validate signal 5 replacement wording** (for ticket 09) — rubric line:

> **5. Feasibility & sustainable upkeep** — evidence-level re-check of scout gates 2–3: static-build feasibility, plus a **realistic steady-state upkeep estimate** (hrs/week) built from the real data sources — what changes, how often, how it's detected, minutes per touch. **Strong** = sources located with licence/access confirmed AND estimate credibly ≤ ~3 hrs/week; **weak** = upkeep approaches the cap or source access is shaky; kill-level finding = no viable source, or estimate over cap.

Dig-process line:

> **5.** Locate the actual data source(s); verify licence/access; build the upkeep estimate bottom-up (change frequency × touch time, + quarterly affiliate-link check). Judge against the ~3 hrs/week per-site cap — high-touch is *fine* if each touch is small and the total fits.

Key inversion: the upkeep *estimate* is the deliverable; only the cap is a kill. A monthly-touch dataset now grades strong, not weak.

**5. Validate signal 6 replacement wording** (for ticket 09) — renamed **Data moat**, with edge part 3 (long-tail surface) folded in rather than minting a seventh signal (both facts fall out of the same dataset inspection; six-signal table/brief format survives; ticket 08/09 may split later if the gate list demands):

> **6. Data moat** — evidence-level re-check of the moat side of scout gate 3: verify against the actual sources **which replication barrier holds** — (a) merging/reconciling 2+ independent sources, (b) per-row hand-verification against a primary source, (c) per-row expert/editorial judgment — and that the dataset's structure yields a **long-tail page surface** (per-item/brand/model pages an incumbent single-pager can't match). **Strong** = a named barrier verified against real sources AND a credible long-tail surface; **weak** = barrier exists but is thin (one source, light verification) or surface is small; kill-level finding = dataset is mechanically replicable (fails a/b/c).

No new tickets surfaced — 08 and 09 consume this wording directly. No fog graduated; no scope changes.
