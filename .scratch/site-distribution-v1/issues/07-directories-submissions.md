# Directories & "useful tools" list submissions

Type: task
Status: resolved
Blocked by: 03

## Question

Produce and execute the **directory / tool-list submission play**, following the playbook unit (ticket 03).

Agent creates everything:

- A vetted list of relevant, still-live, free-to-submit directories: free-tool directories, "useful online tools" lists, niche DIY/home-improvement directories, and any general indexes that accept a static site. Skip link-farm/spam directories (they hurt more than help).
- For each: the submission URL, what fields it needs, and a ready-to-paste site title + description + category in the owner's voice.
- Note any that give a real followed backlink (helps indexing) vs. nofollow-only (still fine for discovery).

The **owner submits** each entry. Record what was submitted where for the wrap ticket (10). (Directory backlinks also nudge the indexing question from ticket 01.)

## Answer

Drafted at [sites/runs-on-your-battery-finder/distribution/07-directories-submissions.md](../../../sites/runs-on-your-battery-finder/distribution/07-directories-submissions.md).

Re-verified the audience map's directory research directly (fetched each candidate's live submit/pricing
page) rather than taking it at face value, then surveyed a further round of candidates. Net result is
narrow: **Curlie** is the one strong candidate (free, human-edited, followed link — submit to exactly one
category, expect weeks-to-months review) plus **Ezilon** as a low-cost secondary (free but follow-status
and 2026 SEO value unconfirmed). Both get the same title/description (pulled from `site.config.mjs`) and
a bare canonical URL — neither submission form supports UTM tagging, so referrals are tracked via referrer
instead.

Everything else surveyed was rejected with a reason, not silently dropped: **JoeAnt** and **Jasmine
Directory** are paid (out of scope per the map's no-paid-promotion rule) — Jasmine turned out to be a
local-business directory (phone-verification model) that doesn't fit a static tool site anyway. **Indie/
startup-launch directories** (Turbo0, Fazier, TinyLaunch, StartupBase, Product Hunt's category) are real
and free at a base tier but rejected on audience fit — they're SaaS/AI/indie-maker launch feeds, not a room
a DIYer would browse; posting there would be the exact link-drop-into-the-wrong-room pattern the ticket's
brief said to avoid. No live, non-AI-hype "useful free tools" listicle site accepting submissions was
found — left as a gap for a future pass rather than papered over.

Owner still needs to submit both entries under their own identity (submission checklist + a log table
included in the site file); feeds ticket 10 once submitted.
