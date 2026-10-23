# Pinterest + Instagram rules and best practice — research notes

Date: 2026-10-23
Ticket: [../issues/02-platform-rules-best-practice.md](../issues/02-platform-rules-best-practice.md)
Scope: what the platforms' own docs say today, for a faceless brand account posting Pinterest static Pins and Instagram single posts/carousels (first site: whichexpansion.com).

Conventions: every claim cites its URL. **[unverified]** = no primary source found or retrieved. **[secondary]** = only a non-platform source was found. Quotes are verbatim from the fetched page on 2026-10-23.

---

## 1. Specs table

| Item | Value | Source |
|---|---|---|
| Pinterest standard Pin ratio / size | "recommend 2:3 aspect ratio, or 1000 x 1500 pixels. Pins with an aspect ratio greater than 2:3 might get cut off in people's feeds." | https://help.pinterest.com/en/business/article/pinterest-product-specs |
| Pinterest file type / size | .PNG or .JPEG; max 20 MB (desktop) / 32 MB (in-app) | same |
| Pinterest colour | Upload PNG in sRGB; Pinterest converts to 8-bit RGB JPEG; custom colour profiles not supported | same |
| Pinterest white/black backgrounds | Pinterest adds a faint layer: #000 at 4% (light mode, on white); #FFF at 10% (dark mode, on black) — pure white/black edges won't stay pure | same |
| Pinterest title | up to 100 chars; first ~40 may show in feeds | same |
| Pinterest description | up to 800 chars; not shown in feed but "used by our algorithm to determine relevance" | same |
| Pinterest carousel | 2–5 images, 1:1 or 2:3, 20 MB each | same |
| Pinterest 9:16 (Idea/video) safe zone | keep clear: top 270 px, left 65 px, right 195 px, bottom 440 px | same |
| Pinterest bulk-upload CSV field limits | Title 100, Description 500 (CSV is stricter than the 800 UI limit) | https://help.pinterest.com/en/business/article/bulk-upload-video-pins |
| Instagram photo width | up to 1080 px wide | https://help.instagram.com/1631821640426723 |
| Instagram supported ratios | keeps original resolution if ratio is between 1.91:1 and 3:4 — "width of 1,080 pixels with a height between 566 and 1,440 pixels"; other ratios are cropped | same |
| Instagram tallest feed image | **1080×1440 (3:4)** is the tallest officially supported; 1080×1350 (4:5) is still inside the range. Some third-party guides still say 4:5 is max — the primary page says 3:4 | same; conflict noted from secondary guides |
| Instagram profile-grid 3:4 change (2025) | Grid thumbnails now 3:4 **[secondary]** — announced by Adam Mosseri per secondary reports; primary announcement not retrieved | [secondary] e.g. recurpost / yoursocial.team coverage |
| Instagram carousel | "up to 20 photos and videos"; one orientation for all slides — "You can't select a different orientation for each"; one caption; can reorder/remove after posting but not add | https://help.instagram.com/269314186824048 |
| Instagram feed safe zones | No primary source found **[unverified]** — design for 3:4 with key text inside central 4:5 band so the grid crop and older clients don't cut it | — |
| Instagram hashtags | "You can use up to 5 tags on a post. If you include more than 5 tags on a single photo/video, your comment won't post." | https://help.instagram.com/351460621611097 |

---

## 2. Pinterest rules

### Creative / format
- Vertical 2:3; logo visible but not dominant; "Stack your story" — key-message text overlay at the top, details at the bottom; concise messaging, clear branding, specific CTAs; refresh creative based on engagement and seasonal moments. — https://business.pinterest.com/creative-best-practices
- Showcase/Quiz ad formats cap text overlay at ≤10 words (ads only; a useful ceiling for organic overlays too). — https://help.pinterest.com/en/business/article/pinterest-product-specs

### Fresh content and cadence
- "Create fresh content weekly… best to add more content every week"; "Rather than anchoring to a specific number of Pins per week, focus on the content itself." — https://business.pinterest.com/blog/how-to-build-audience-pinterest/ (2025-07-31)
- Fill **every** Pin field every time; title + description with relevant keywords; add topics when offered. — same
- Saves are a signal that creates a "halo of additional reach"; mix formats (video, carousels, collages). — same
- Feed is non-chronological (engagement + topics); saves are "the strongest metric"; Pins keep surfacing long after posting. — https://business.pinterest.com/en-ca/blog/beginner-pinterest-content-guide/ (2022-10-21)
- No official numeric posting frequency exists. **[unverified: any "X pins/day" figure]**

### Keywords vs hashtags
- Keywords in title/description/topics are the primary-backed lever (sources above).
- Hashtag help page (help.pinterest.com/en/article/hashtags-on-pinterest) now redirects to the help home; no current primary guidance on hashtags. **[unverified]** → don't rely on hashtags.

### Boards (brand-new account)
- Boards need a proper title and description; boards are discoverable in search. — https://business.pinterest.com/blog/how-to-build-audience-pinterest/
- Bulk-upload CSV auto-creates the named board/section if it doesn't exist. — https://help.pinterest.com/en/business/article/bulk-upload-video-pins
- No primary "board strategy for new accounts" doc beyond the above. **[unverified]**

### Links, spam and landing pages
Current Community Guidelines (last updated May 2026) — https://policy.pinterest.com/en/community-guidelines:
- No unapproved automation (approved partners only: business.pinterest.com/pinterest-partners).
- No repetitive, deceptive or irrelevant content to make money; no keyword "stuffing".
- No "redirecting existing Pins to new destinations".
- Don't link to unsafe, deceptive, untrustworthy or unoriginal sites — "Websites should have original content that adds unique value".
- "No surprises": Pinners should reasonably anticipate where a link goes; excessive/deceptive redirection and abused URL shorteners may be blocked.
- No multiple accounts to manipulate distribution.

Updated guidelines effective **12 Nov 2026** — https://policy.pinterest.com/community-guidelines-preview — add:
- "Coordinated or scaled activity that aims to manipulate search results, flood Pinterest with repetitive content".
- "Do not create Pins that cause deception or otherwise trick Pinners into engaging".
- Scams: "Synthetically generated or manipulated media used to misrepresent the appearance, efficacy, or nature of a product"; "Deceptive redirection used to funnel users toward harmful or unrelated destinations".
- Policies apply to synthetic (AI) content too.

UTM parameters: no explicit rule found. **[unverified]** Plain UTM query strings on the site's own domain don't redirect and satisfy "no surprises"; avoid shorteners and redirect hops.

### Claim the website (Business account)
- Methods: HTML `<meta>` tag in `<head>`, HTML file at site root, DNS TXT record (up to 72 h), or Google Merchant Center. You must own the domain and be able to edit source. One Pinterest account per website. Benefits: profile picture on Pins from the site, link to profile, follow button, analytics. — https://help.pinterest.com/en/business/article/claim-your-website
- Claiming is also a prerequisite for RSS auto-publish (§5).

---

## 3. Instagram rules

### What drives reach
- Feed: the five interactions Instagram weighs most are how likely you are to "spend a few seconds on a post, comment on it, like it, share it, and tap on the profile photo". — https://about.instagram.com/blog/announcements/instagram-ranking-explained (Adam Mosseri, 2023-05-31)
- Explore (where non-followers find a new account): "The most important actions we predict in Explore include likes, saves, and shares"; popularity signals "matter much more in Explore than they do in Feed". — same
- Reels are made less visible if "low-resolution or watermarked… contain borders… majority text, or… already been posted on Instagram". — same (reels only; feed images not stated)
- No primary doc names "sends" as the #1 signal; that framing is from Mosseri video/social posts. **[secondary]**

### Originality (critical for a faceless brand)
- Update extending reels originality rules to **photos and carousels**: "accounts that primarily post unoriginal content in photos or carousel posts, in addition to reels, will no longer be shown in places where we recommend content." Followers still see the posts. Eligibility returns when most recent posts in a rolling 30-day window are original; check Account Status. — https://creators.instagram.com/blog/rewarding-original-creators-on-instagram (dated 30 Apr 2026 per search-engine listing; page itself shows no date)
- Original = photos you took, "Content you designed… a how-to guide, or a visual story", or material edits that add new information/context. Not original: re-uploading others' work with only "a border, watermark, subtitles, or a credit in the captions". — same
- Recommendations Guidelines: not recommended — "Unoriginal content that is largely repurposed from another source with only minor, immaterial edits" and "Long captions unrelated to the underlying content". — https://help.instagram.com/313829416281232
- Accounts not recommended if they "Repeatedly and recently shared content that prominently features a photorealistic AI-generated person, unless the account has disclosed this by adding the AI-generated profile label", or repeatedly used "misleading practices to build followings, such as purchasing 'likes'". — same
- Implication: publisher box-art / product photos used as-is risk the "unoriginal" class; slides must be designed graphics adding the site's own info (comparisons, verdicts, data).

### Carousel best practice
- Up to 20 slides; single orientation for the whole carousel; can't add slides after posting. — https://help.instagram.com/269314186824048
- No primary "carousel best practice" doc (e.g. ideal slide count). **[unverified]**

### Hashtags
- Hard limit: **5 hashtags per post** (more and the caption/comment won't post). — https://help.instagram.com/351460621611097

### Link-in-bio
- Feed-post captions have no clickable links (long-standing; no primary page retrieved). **[unverified]**
- Up to 5 links in bio. **[secondary]** (linke.io, soci.ai guides, 2026) — no help.instagram.com page retrieved.

### Captions / keywords for IG search
- No primary doc retrieved on caption keywords for Instagram search. **[unverified]** Only primary-backed caption rule: avoid long captions unrelated to the content (Recommendations Guidelines above).

---

## 4. AI labelling

### Pinterest
- "AI modified" label shown bottom-left in close-up for non-promoted Pins. Detection: metadata per the IPTC Photo Metadata Standard plus classifiers "even if the content doesn't have obvious markers"; also when the content owner indicates AI. Ads show disclosure under the ellipsis (incl. "AI-generated person" per owner disclosure). Appeals: https://help.pinterest.com/en/contact?appeals=gen_ai_appeal — https://help.pinterest.com/en/article/gen-ai-labels
- No stated self-disclosure **requirement** for organic Pins and no stated reach penalty for the label itself. — https://help.pinterest.com/en/article/ai-at-pinterest
- "See fewer AI Pins": option in "certain popular categories" that will "send a signal to our systems to recommend less of this type of content". — https://help.pinterest.com/en/article/see-fewer-ai-pins ; launched globally 30 Apr 2025 for categories prone to AI "e.g. beauty and art", expanding — https://newsroom.pinterest.com/news/introducing-gen-ai-labels/
- Whether board games / home & hobby categories are in the "see fewer" set: **[unverified]**.
- From 12 Nov 2026, synthetic media that misrepresents a product's appearance/nature is a listed scam. — https://policy.pinterest.com/community-guidelines-preview

### Instagram / Meta
- Labels are applied automatically when "industry-standard signals" show AI creation (incl. third-party tools); label text now **"AI content"**. AI-*modified* (not generated) content gets no on-post label — info sits in the post's Options menu. — https://help.instagram.com/761121959519495
- **Required** disclosure: "photorealistic video or realistic-sounding audio that has been digitally generated or altered". "Meta does not require you to label images that have been created or altered with AI. Images will still receive a label if Meta's systems detect they were AI-generated." "There may be penalties if you do not label content as required." — same
- Self-label: toggle "Add AI label" when posting; profile-level "AI-generated profile" toggle. — same
- Background: labels from industry signals or self-disclosure; edited-only content's label moved to menu (Sept 2024). — https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/ ; https://transparency.meta.com/governance/tracking-impact/labeling-ai-content (updated 19 Feb 2025)
- Reach: no stated penalty for an AI label itself; but repeated photorealistic AI-generated **people** without the AI-generated profile label → account not recommended (see §3). Fact-checker "Altered" rating excludes media already carrying Meta AI labels. — https://help.instagram.com/313829416281232 ; https://www.facebook.com/business/help/341102040382165

---

## 5. Native schedulers

### Pinterest
- In-app scheduler: business account; up to **30 days** ahead; schedule one at a time; up to **10 Pins** scheduled; after scheduling you can edit date/title/board/description/link but not the image. — https://help.pinterest.com/en/business/article/schedule-pins
- Bulk CSV: up to **200** images/videos per file; columns Title (100), Media URL (must be public), Pinterest board (auto-created), Description (500), Link, Publish date (future date = scheduled; UTC, format `2023-12-17T08:00:00`), Keywords (comma list). — https://help.pinterest.com/en/business/article/bulk-upload-video-pins
- Whether the 30-day / 10-Pin limits apply to CSV-scheduled Pins: **[unverified]**.
- RSS auto-publish: needs a claimed website; items must link to the claimed domain; up to 200 Pins/day; publishes within 24 h; RSS 2/1 (not Atom); image taken from `<image>`, `<enclosure>` or `<media:content>`. — https://help.pinterest.com/en/business/article/auto-publish-pins-from-your-rss-feed

### Instagram
- In-app scheduling: public account; "You can schedule up to 25 posts a day, up to 30 days in advance"; reels, photos **and carousels**; path: Create → Post → More options → "Schedule this post". Product tags, collab posts, sponsored posts and fundraisers can't be scheduled. Manage under Menu → Scheduled content (edit/reschedule/share now/delete). — https://help.instagram.com/439971288310029 (mirrored at https://www.facebook.com/business/help/3294660970775616)
- Many third-party guides say 75 days ahead **[secondary]** — conflicts with the primary page (30 days); use 30.
- Meta Business Suite Planner limits (days ahead, carousel support): no primary page retrieved **[unverified]**.

---

## 6. Rules the skill should bake in

- [ ] **Pinterest size:** 1000×1500 PNG, sRGB, 2:3; no taller. Avoid pure #FFFFFF/#000000 backgrounds (overlay tint).
- [ ] **Pinterest overlay:** key message at the top, detail at the bottom; few words; logo small.
- [ ] **Pinterest copy:** title ≤100 chars, front-load first ~40; description ≤500 (CSV-safe) with natural keywords, no stuffing; no reliance on hashtags.
- [ ] **Pinterest link:** direct link to the matching page on the claimed site; no shorteners, no redirect hops; never repoint an existing Pin; UTMs on the same domain only (UTM tolerance unverified).
- [ ] **Pinterest cadence:** new, distinct Pins every week; no fixed number; vary designs rather than near-duplicates (Nov 2026 rules target scaled repetitive content).
- [ ] **Pinterest scheduling:** `post-this.md` slots ≤30 days out, ≤10 queued in the UI; or emit a bulk CSV (≤200 rows, UTC publish date).
- [ ] **Pinterest setup:** Business account + claim the domain (meta tag) before the first Pin.
- [ ] **IG size:** 1080×1440 (3:4) for single posts and carousels; keep critical text inside the central 1080×1350 band. Every carousel slide the same ratio.
- [ ] **IG carousel:** ≤20 slides (all needed slides at post time, none can be added later).
- [ ] **IG hashtags:** ≤5 per post (hard limit).
- [ ] **IG caption:** relevant to the slides, not long filler; link in bio, not in caption.
- [ ] **IG originality:** every post is a designed graphic adding the site's own comparison/verdict/data; never re-post publisher or third-party images with only a border, watermark, or credit.
- [ ] **IG scheduling:** ≤25 posts/day, ≤30 days ahead via in-app scheduler.
- [ ] **AI labels:** static AI-assisted images need no mandatory label on either platform; don't strip metadata to dodge detection; if the graphic is mostly AI-generated imagery, use IG "Add AI label". Never use photorealistic AI people, and never generate product imagery that misrepresents a real game box/components.
- [ ] **Reach signals to design for:** saves (Pinterest, IG Explore) and shares — reference/checklist-style slides people keep.

## Unverified / open items
- Pinterest: UTM tolerance, hashtag guidance, "see fewer AI" category list, CSV schedule limits, any numeric cadence.
- Instagram: Mosseri primary for 3:4 grid, feed safe zones, 5 bio links (secondary only), caption-keyword search guidance, carousel best-practice slide count, Meta Business Suite Planner limits.
