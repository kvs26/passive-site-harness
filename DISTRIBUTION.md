# Distributing a site

**Search visibility status (runsonyourbattery.com, as of 2026-09-14):** Cloudflare Web Analytics is
live (auto-tracking, no token needed), Google Search Console is verified with sitemap submitted, and
Bing Webmaster Tools is imported from GSC. Details:
`.scratch/site-distribution-v1/issues/01-foundation-measurement-indexing.md`.

Building a site doesn't make people find it. Google can take weeks to notice a new site, and even
then it might not rank. **Distribution** means showing up where your audience already is — Reddit,
Pinterest, YouTube comments, Q&A sites, useful-tools directories — so real people find the site for
free, without ads.

## How it works

1. The agent finds real, live threads, boards, questions, and videos where people are already
   asking the kind of question your site answers.
2. The agent drafts a genuinely helpful reply for each one — solves the person's problem first,
   links your site only when it's the most useful thing to add.
3. **You post each draft yourself**, under your own account. The agent never posts for you — that's
   what keeps accounts (and the site) from getting banned.

## How to run it

Say **"run /spread-site on `sites/<slug>/`"** once a site is live. It works through channels one at
a time — Reddit/forums, Pinterest, directories, Q&A sites, YouTube comments — and drops a short
checklist per channel at `sites/<slug>/distribution/`. Open a file, copy the draft, post it, done.

## Rules that never change

- **You post everything.** No automated posting, no bot accounts.
- **Free only.** No ads, no paid placements.
- **Real links only.** Every thread, board, or video is something the agent actually found live —
  never invented.
- **Help first, link second.** If a link would look spammy or the community bans it, the draft just
  helps — no link.

See [.agents/skills/spread-site/SKILL.md](.agents/skills/spread-site/SKILL.md) for the full
procedure, or [docs/distribution-playbook.md](docs/distribution-playbook.md) for the detailed
channel-play reference it's built from.
