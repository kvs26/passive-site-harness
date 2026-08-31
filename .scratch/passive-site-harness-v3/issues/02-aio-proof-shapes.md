# AI-Overview-proof query and tool shapes

Type: research
Status: resolved

## Question

Which query/tool shapes still earn Google clicks in 2026 despite AI Overviews / AI Mode — and which are dead? Ground in primary/high-trust sources (Google's own AIO documentation and triggering behavior, published zero-click/CTR studies with methodology, documented cases). Deliver: (a) a taxonomy of shapes ranked by AIO-resistance (e.g. interactive calculator with user-specific input, model-number lookup, multi-constraint filter, printable artifact, data table AIO cites-but-users-still-click) with evidence per shape; (b) observable *scout-time tests* for each ("does an AIO trigger on the head query? does it fully answer or hedge?"); (c) implications for the two validated pet-food ideas as a sanity check.

## Answer

Full findings: [research/02-aio-proof-shapes.md](../research/02-aio-proof-shapes.md).

- CTR evidence: AIO presence costs position-1 ~58% of clicks (Ahrefs Dec 2025); AIO triggers on informational queries 21–36% vs transactional 2–5%; "can/is" yes-no questions ~57%, "X vs Y" ~95%.
- Shape ranking (most→least AIO-proof): multi-input calculator > printable/download generator > SKU/model lookup vs curated DB > multi-constraint finder > static data table > simple unit converter (killed by Google's own widget) > plain informational article (dead for click monetization). Surviving mechanic: the goal requires an *action* a summary can't perform — compute on user inputs, deliver a file, filter proprietary data.
- Scout-time tests: manually load google.com/search for 3–5 head queries, record AIO presence + full-answer-vs-hedge; `&udm=14` as AIO-free control; predict from query form first (question-word ≈58–86% AIO, 1–2-word tool query ≈9–10%). DDG SERPs alone are structurally AIO-blind.
- Sanity check: dog-treat-portion-calculator **survives** (user-specific compute + brand long-tail); can-my-dog-eat-database **fails as built** (yes/no + pets = peak AIO; Ahrefs' example AIO keyword is literally "can dogs have cinnamon") — surviving wedge is a quantity/toxicity-by-weight calculator.
