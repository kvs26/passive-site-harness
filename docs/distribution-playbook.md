# Distribution playbook

Reusable, **site-agnostic** template for off-Google distribution. It defines one repeatable unit —
the **channel play** — that every promotion channel (Reddit, Pinterest, directories, Q&A, YouTube
comments, …) follows, so per-channel work produces consistent output instead of one-off notes.

This doc is the seed for a future `.agents/skills/spread-site/` skill (see
`.scratch/site-distribution-v1/issues/11-extract-spread-site-skill.md`) — it stays here, reusable and
site-agnostic, until that ticket promotes it into a skill. **Keep site-specific content out of this
file.**

## Where site-specific execution lives

- **This file** — the reusable template + shared conventions. Changes only when the shape of the
  play itself changes.
- **`sites/<slug>/distribution/<NN>-<channel-slug>.md`** — one file per channel, per site, filled in
  from the template below. Holds the actual drafts, thread links, and posting status for that site's
  first pass.

## The channel play unit

Every channel's execution file follows this shape:

```markdown
# <Channel name> play — <site slug>

Status: draft | queued | posted | skipped

## Where

<Audience slice this play targets: specific subreddits / boards / threads / videos / directories,
each with a real link. Pull from the site's audience-map research — don't re-discover it here.>

## Asset

<What the owner brings to this channel, and where it comes from: a specific page URL, an image
generated for the site, a directory-ready one-line description, etc.>

## What to post

<Draft copy, in the owner's voice, tailored to the specific thread/board/listing — not a
copy-paste template blasted everywhere.>

**Link rule:** only link when it genuinely answers the question being asked. If the channel bans
or discourages links, post the value-only version (no link) and note that it was skipped for that
reason — brand recall without a link still has value; a ban does not.

## ToS / safety notes

<This channel's self-promotion / linking rules, in plain language. What specifically would get the
account or the site banned. Confirm: the owner posts this, under their own identity — never the
agent, never a bot, never an automated posting flow.>

## Cadence

- First pass: <the one action this play takes during the first pass>
- Repeat rhythm: not yet specified (fog — see the map's "Not yet specified" section; graduates once
  the first pass shows which channels are worth repeating)

## Measurement

<How a referral from this channel is expected to show up — see "Measurement convention" below for
the shared rule on when to tag vs. not.>
```

## Measurement convention

Not every channel tolerates a tagged link, so the tagging rule is conditional rather than universal:

- **Tag with UTM parameters** on channels where a marketing-style link is normal and won't read as
  spammy: Pinterest pin descriptions, directory submissions, YouTube video/description-level links.
  Convention: `?utm_source=<channel>&utm_medium=referral&utm_campaign=distribution-v1` (e.g.
  `?utm_source=pinterest&utm_medium=referral&utm_campaign=distribution-v1`).
- **Post the bare canonical URL** on channels where a visibly tagged link undermines the "genuine
  answer, not an ad" framing and risks looking like spam: Reddit/forum comments, Quora answers,
  StackExchange answers, YouTube comments. Track these via referrer instead — Cloudflare Web
  Analytics' referrer breakdown, and Google Search Console's "Discover"/referral signals where a
  crawler happens to index the linking page.
- Either way, the play file's own `Status` + the wrap-up ticket (10) is the source of truth for
  *what was posted where* — UTMs and referrers only tell you traffic arrived, not which specific
  post sent it, once several plays target the same channel type.

## Worked example (illustrative only)

This shows the template filled with real audience-map data, to check the shape works end-to-end.
**It is not the real Reddit play** — ticket 05 owns drafting and executing that for real.

```markdown
# Reddit — r/DeWalt play — runsonyourbattery.com (illustrative)

Status: draft

## Where

r/DeWalt (brand subreddit) — from research/02-audience-map.md: brand subreddits are the
highest-fit first-pass target; Reddiquette's 9:1 rule applies (9 non-promotional participations
per 1 link post), and each subreddit's own sidebar rules must be checked before posting.

## Asset

The relevant battery-compatibility page for whatever tool the thread is asking about, e.g.
`/dewalt-20v-max/`.

## What to post

A direct, helpful answer to a real "does X run on my Y battery" thread, written in first person,
answering the actual question asked before mentioning the site — link only if the mods/sidebar
allow it and the link is the most useful thing to add.

## ToS / safety notes

r/DeWalt requires participation, not just link-dropping (9:1 rule); confirm current sidebar
self-promo rules at post time, since subreddit rules change. Owner posts from their own Reddit
account — never an agent-run or freshly-created account.

## Cadence

- First pass: reply to 1-2 live, on-topic threads
- Repeat rhythm: not yet specified

## Measurement

Bare canonical URL (no UTM) — tracked via Cloudflare Web Analytics referrer (reddit.com) rather
than a tagged link.
```
