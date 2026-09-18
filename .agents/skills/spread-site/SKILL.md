---
name: spread-site
description: Walk a live site's owner through off-Google distribution, one channel at a time — find real threads/boards/listings/videos, draft owner-voice copy, hand over a short posting checklist. Use when a site is live and needs non-Google distribution (Reddit/forums, Pinterest, directories, Q&A, YouTube comments), or when asked to "spread"/"distribute"/"promote" a site.
---

# Spread Site

Turns a live site into a distribution pass: one channel at a time, find real places the target
audience already is, draft genuinely helpful copy in the owner's voice, and hand over a checklist
short enough to act on immediately. **Agent drafts everything; owner posts everything under their
own accounts.** Extracted from runsonyourbattery.com's first real pass
(`.scratch/site-distribution-v1/`) — this skill is the reusable version of that.

## Hard rules

- **Agent drafts, owner posts.** No automated posting, no bot accounts, no API-driven posting flow —
  ever, on any channel.
- **Free/organic only.** No paid promotion, no ads.
- **Real, live evidence only.** Every thread/board/listing/video linked must be something the agent
  actually found live this session — never invented, never assumed still open.
- **Only link when it genuinely helps.** If a channel bans or discourages links, draft the
  value-only version instead — no link-only or copy-pasted comments.
- **Keep checklists short.** One page per channel: where, what to post, the link, one ToS note.
  Owners shouldn't have to read a spec to post a comment — see "The short checklist format" below.
- Deep technical-SEO/indexing diagnosis and whether the Google-only stance in `idea-scout`/
  `idea-validate` should loosen are **out of scope** for this skill — separate efforts own those.

## Procedure

Work **one channel at a time** — don't draft all six before the owner's had a chance to post the
first. Suggested order (skip any that don't fit the niche):

1. **Foundation** — confirm free analytics + Google Search Console + Bing Webmaster Tools are wired,
   and do a quick `site:<domain>` check on Google and Bing to see whether the site's indexed yet.
   Skip this step entirely if it's already been done for this site.
2. **Reddit / forums**
3. **Pinterest** (skip for niches with nothing visual/pinnable)
4. **Directories** ("useful tools" / niche listing sites)
5. **Q&A / answer sites** (Quora, a relevant Stack Exchange)
6. **YouTube comments** (text only — no video production)

For each channel:

1. **Find the audience.** Search for the real communities/boards/threads/videos where this site's
   audience already asks the kind of question the site answers. Note each one's self-promo rules
   (karma requirements, link bans, participation norms like Reddit's 9:1 rule).
2. **Draft, don't template.** Write one tailored, helpful reply/pin/listing per real thing found —
   solve the problem first, link only if it's the most useful thing to add.
3. **Write the short checklist.** Save it to `sites/<slug>/distribution/<NN>-<channel-slug>.md`
   using the condensed format below.
4. **Hand off and stop.** Tell the owner what's ready to post. Don't start drafting the next channel
   until this one's checklist exists — the owner can post it while you draft the next.

### The short checklist format

Every channel file is this short — no tables, no schedules, no repeated boilerplate:

```markdown
# <Channel> — <site slug>

Status: draft

**Where:** <the specific board/thread/video — a real link>

**Post this:**
> <the actual draft text, ready to copy-paste>

**Link:** <bare URL, or UTM-tagged URL — see rule below>
**Watch for:** <one line — what would get this flagged or banned on this channel>
```

**Link rule:** UTM-tag links on Pinterest, directories, and YouTube video descriptions
(`?utm_source=<channel>&utm_medium=referral&utm_campaign=spread-site`). Post the **bare canonical
URL** everywhere else — Reddit, forums, Quora, Stack Exchange, YouTube comments — a visible tracking
tag reads as spam there. Track bare-URL channels via the site's analytics referrer breakdown instead.

If a channel bans links outright, drop the **Link** line and post the value-only draft — brand
recall without a link still beats not showing up.

## When posting is done

Once the owner confirms a channel's post(s) are live, update that file's `Status:` to `posted`.
This skill doesn't require a separate wrap-up ticket — each site's own tracker decides whether it
wants one.

## Deeper reference

[docs/distribution-playbook.md](../../../docs/distribution-playbook.md) holds the fuller, more
detailed channel-play shape this skill's checklist condenses (same ideas — where, asset, what to
post, ToS, cadence, measurement — spelled out at length). Use it if a channel's judgment call needs
more context than the short checklist has room for; the short format above is what actually gets
written per channel.
