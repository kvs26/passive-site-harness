# Design the reusable "channel play" unit + playbook skeleton

Type: prototype
Status: open
Blocked by: —

## Question

Define the **repeatable unit** every channel play follows, and the shape of the playbook document itself — so the per-channel tickets (05–09) all produce consistent, reusable output rather than one-off notes. This is the spine of the deliverable: what makes it a *playbook* and not just "things we did for site #1."

Prototype a rough "channel play" template to react to. A play should capture at least:

- **Where** — the audience map slice for this channel (which communities/boards/videos, from ticket 02).
- **What asset** — what the owner brings (a helpful answer, a pin image, a directory entry) and where it comes from.
- **What to post** — draft copy in the owner's voice, plus the "only link when it genuinely answers the question" rule.
- **ToS / safety notes** — the channel's self-promotion rules; what would get the site banned; the human-posts-not-bots boundary.
- **Cadence** — first-pass action vs. repeat rhythm (repeat rhythm itself is fog for now).
- **Measurement** — how a referral from this channel shows up in analytics/Search Console (UTM? referrer?).

Also decide: **where the playbook lives** so it's reusable for *future* sites (a repo doc? part of a `/spread-site` skill later?) vs. site-specific execution notes that live only under `sites/<slug>/`. Keep the reusable template site-agnostic; keep runsonyourbattery-specific content out of it.

## Answer

<!-- filled on resolution; links the prototype asset -->
