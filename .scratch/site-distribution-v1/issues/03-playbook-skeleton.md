# Design the reusable "channel play" unit + playbook skeleton

Type: prototype
Status: resolved
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

Prototyped and confirmed with the owner. Asset: [docs/distribution-playbook.md](../../../docs/distribution-playbook.md) (reusable, site-agnostic template) plus [sites/runs-on-your-battery-finder/distribution/README.md](../../../sites/runs-on-your-battery-finder/distribution/README.md) (site-specific execution home for tickets 05-09).

**The channel-play unit** — six sections per channel: Where (audience-map slice) / Asset (what the owner brings + its source) / What to post (owner-voice draft + "only link when it genuinely answers" rule) / ToS-safety notes (self-promo rules, ban risks, owner-posts-not-bots) / Cadence (first-pass action; repeat rhythm stays fog) / Measurement. Confirmed sufficient as-is — no fields added or cut.

**Location:** confirmed split — the reusable template stays at `docs/distribution-playbook.md` (repo root, site-agnostic; feeds ticket 11's future `/spread-site` skill), while each channel's real drafts/thread-links/posting-status live per-site at `sites/<slug>/distribution/<NN>-<channel-slug>.md`.

**Measurement convention:** confirmed conditional tagging — UTM-tag links where a tagged link reads as normal (Pinterest, directories, YouTube video/description links), and post bare canonical URLs tracked via referrer (Cloudflare Web Analytics / Search Console) on channels where a visible UTM tag reads as spam (Reddit/forums/Quora/StackExchange/YouTube comments).

A worked (illustrative, non-canonical) example using r/DeWalt from the audience map is included in the playbook doc to prove the template holds together end-to-end; ticket 05 still owns the real Reddit play.

This unblocks tickets 04, 06, 07, 08, 09 (all were blocked on this ticket; 02 is already resolved).
