# Extend pain-fetch adapters

Type: task
Status: open
Blocked by: 04, 08

## Question

Implement the build-now adapter shortlist from the pain-source survey (04) in `scripts/pain-fetch.py` (same pluggable pattern: credential-free by default, `.env`-gated credentialed ones, cache under `.cache/pain/`), matching whatever source catalog the accepted v3 scout skill (08) names. Includes wiring the Reddit OAuth adapter if the user's pending developer access has arrived (check with the user; if still pending, note it and leave the ladder as-is). Resolution records: adapters added, endpoints used, any sources attempted and dropped with reason.
