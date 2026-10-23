# Current Pinterest + Instagram rules and best practice (2026)

Type: research
Status: resolved
Blocked by: —

## Question

What do the platforms' own docs (primary sources: Pinterest Business/Help/Creator, Pinterest policies; Instagram/Meta Help, Creators, Transparency Center) say *today* about:

- **Specs:** Pinterest pin size/ratio, text-overlay guidance; Instagram feed ratios (the 2025 profile-grid change to 3:4 — is 1080×1440 now preferred over 1080×1350?), carousel max slides, single-post sizes, safe zones.
- **Pinterest:** "fresh pin" guidance, posting frequency, pin/landing-page mismatch & spam rules, link + UTM tolerance, keywords vs hashtags, board strategy for a **brand-new** account, Business account claim of a website.
- **AI content:** Pinterest "AI modified" labels and the "see fewer AI pins" control — how detected, whether self-disclosure is required, any reach effect; Meta "AI info" label — when disclosure is *required* (photorealistic only?) vs automatic, any stated reach effect.
- **Instagram:** what drives reach for faceless brand accounts (saves/shares/sends), carousel best practice, hashtag guidance, link-in-bio, captions/keywords for IG search.
- **Native schedulers:** Pinterest scheduling (how far ahead, limits) and Meta Business Suite / Instagram scheduling for carousels — so `post-this.md` schedules map onto them.

Output: a concise rules sheet with source links the skill can bake in (sizes, cadence, link rules, AI-label rule).

## Answer

- **Sizes:** Pinterest 1000×1500 (2:3) PNG sRGB, taller gets cut off. Instagram supports up to 3:4, so 1080×1440 is the tallest; 4:5 (1080×1350) is still valid. A carousel holds up to 20 slides, all one orientation.
- **Copy limits:** Pinterest title ≤100 (first ~40 visible), description ≤500 for CSV (800 in the UI). Instagram allows at most 5 hashtags per post (hard limit).
- **Links:** Pinterest's "no surprises" rule bans deceptive redirects, abused shorteners, repointing existing Pins, and links to unoriginal sites. Claim the domain first. UTM tolerance is unverified.
- **AI labels:** Pinterest auto-labels "AI modified" from IPTC metadata plus classifiers. It has no self-disclosure requirement for organic Pins and no stated penalty. Meta requires a label only for photorealistic video or realistic audio. AI images are auto-labelled "AI content" when detected.
- **Originality (IG):** accounts that mostly post unoriginal photos or carousels lose recommendations. Repeated photorealistic AI people without the profile label also lose them. Slides must add the site's own information.
- **Cadence:** Pinterest says fresh Pins every week with no fixed number. The Nov 2026 rules target scaled, repetitive content. Saves and shares are the key reach signals.
- **Schedulers:** Pinterest allows 30 days ahead with up to 10 Pins queued. Bulk CSV takes up to 200 rows (UTC dates), and RSS auto-publish needs a claimed site. Instagram's in-app scheduler handles carousels, up to 25 a day and 30 days ahead. Third-party sites saying "75 days" conflict with Instagram's help page.
- Full sheet with citations, checklist and unverified items: [../research/02-platform-rules-best-practice.md](../research/02-platform-rules-best-practice.md)
