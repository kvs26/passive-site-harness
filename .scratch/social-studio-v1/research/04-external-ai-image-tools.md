# 04 — External AI image tools for the optional image slot

Date: 2026-10-23 · Ticket: [../issues/04-external-ai-image-tools.md](../issues/04-external-ai-image-tools.md)
Method: official pricing/help/terms/docs pages only. Most were read through `r.jina.ai` (plain-text mirror of the live page), and `fetch_webpage` was used for the Canva help pages. Claims tagged **[unverified]** were not confirmed on a primary page today.

## Sources (cited by key below)

| Key | URL |
|---|---|
| OAI-TOU | https://openai.com/policies/row-terms-of-use/ |
| OAI-FREE | https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq |
| OAI-PROV | https://help.openai.com/en/articles/8912793-c2pa-in-chatgpt-images (now titled "Provenance signals in OpenAI-generated content") |
| OAI-IMG | https://platform.openai.com/docs/guides/image-generation |
| OAI-PRICE | https://openai.com/api/pricing/ |
| OAI-UP | https://openai.com/policies/usage-policies/ |
| G-APPIMG | https://support.google.com/gemini/answer/14286560 |
| G-LIMITS | https://support.google.com/gemini/answer/16275805 |
| G-TOS | https://policies.google.com/terms (effective 2026-07-30) |
| G-API-IMG | https://ai.google.dev/gemini-api/docs/image-generation |
| G-API-PRICE | https://ai.google.dev/gemini-api/docs/pricing |
| G-API-TERMS | https://ai.google.dev/gemini-api/terms |
| IDEO-PLANS | https://docs.ideogram.ai/plans-and-pricing/available-plans ("Last verified: October 15, 2026") |
| IDEO-SET | https://docs.ideogram.ai/create/image-settings.md |
| IDEO-FIX | https://docs.ideogram.ai/prompting/fix-common-problems.md |
| IDEO-PROMPT | https://docs.ideogram.ai/prompting/prompt-structure.md |
| IDEO-API | https://docs.ideogram.ai/plans-and-billing/ideogram-api.md |
| IDEO-TOS | https://ideogram.ai/legal/tos |
| MJ-PLANS | https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans |
| MJ-TOS | https://docs.midjourney.com/hc/en-us/articles/32083055291277-Terms-of-Service |
| MJ-AR | https://docs.midjourney.com/hc/en-us/articles/31894244298125-Aspect-Ratio |
| MJ-SREF | https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference |
| MJ-PROMPT | https://docs.midjourney.com/hc/en-us/articles/32023408776205-Prompt-Basics |
| AD-PLANS | https://www.adobe.com/products/firefly/plans.html |
| AD-CREDITS | https://helpx.adobe.com/creative-cloud/apps/generative-ai/generative-credits-faq.html |
| AD-PARTNER | https://helpx.adobe.com/creative-cloud/apps/generative-ai/non-adobe-models-in-adobe-products.html |
| AD-GUIDE | https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html |
| CV-AITERMS | https://www.canva.com/policies/ai-product-terms/ |
| CV-MM | https://www.canva.com/help/using-magic-media/ |
| CV-DL | https://www.canva.com/help/generate-with-dreamlab/ |
| CV-CONNECTOR | https://www.canva.dev/docs/connect/canva-mcp-server-setup/ (resolves to Help Center "Connect Canva to an AI assistant") |
| CV-DEVMCP | https://www.canva.dev/docs/connect/mcp-server/ |
| CV-CONNECT | https://www.canva.dev/docs/connect/ |
| MS-IC | https://www.bing.com/new/termsofuseimagecreator |
| MS-COPILOT | https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/termsofuse |

## Comparison table

| Tool | Free tier (personal acct) | Commercial use of outputs on free tier | 2:3 / 3:4 / 4:5 | Stylised/3D strength | Keeping text out | Set consistency | Provenance embedded |
|---|---|---|---|---|---|---|---|
| **Google Gemini app (Nano Banana 2)** | Yes. Image generation with Nano Banana 2 is listed in the "Without a Google AI plan" column. Limits are compute-based: they refresh every 5 h and also have a weekly cap. A "daily quota of Nano Banana 2 images" is mentioned. No number is published [G-LIMITS, G-APPIMG] | **Yes (ownership not claimed).** "Google won't claim ownership over that content" [G-TOS]. You must respect copyright and the Prohibited Use Policy [G-APPIMG] | The API lists 1:1, 3:2, **2:3, 3:4**, 4:3, **4:5**, 5:4, 9:16, 16:9, 21:9 [G-API-IMG]. An in-app ratio picker is **[unverified]**, so state the ratio in the prompt | Strong. The official guide has a "Stylized illustrations & stickers" section and a "**Minimalist & negative space design** … where text will be overlaid" pattern [G-API-IMG] | Official advice is "semantic negative prompts": describe the empty scene positively [G-API-IMG]. The model is a strong text renderer, so leave it nothing to label | Multiple reference images. The API mixes up to 14, and Pro takes up to 3 style refs. Multi-turn edits ("keep everything the same, but…") [G-API-IMG] | **SynthID** on all generated images [G-API-IMG]. A visible app watermark is **[unverified]** |
| **ChatGPT (GPT Image)** | Yes. "Create images in ChatGPT" is on Free, with separate, unpublished limits [OAI-FREE] | **Yes.** "you … own the Output. We hereby assign to you all our right, title, and interest" [OAI-TOU]. No tier carve-out. IP infringement is prohibited [OAI-UP] | API: 1024×1536 portrait (**2:3** exact), plus custom W×H in multiples of 16 within the 1:3–3:1 range [OAI-IMG]. The in-chat ratio control is **[unverified]**, so ask for "tall 2:3 portrait" | Strong general and stylised quality **[unverified for style specifics. No primary benchmark]** | Positive phrasing (general practice) | Image references: "use one or more images as a reference" [OAI-IMG]. In chat, keep the conversation going | **C2PA Content Credentials + SynthID** on images from ChatGPT/API [OAI-PROV] |
| **Ideogram** | 30 credits/week, only if you sign in with Google/Apple/Microsoft (email sign-ups get 0). The free plan starts at the cheapest quality (Turbo/Low) [IDEO-PLANS, IDEO-SET] | **Probably yes, with a caveat.** The ToS assigns output rights to you, with no free-tier carve-out [IDEO-TOS]. But **everything generated on Free is public** and remixable by others [IDEO-PLANS, IDEO-TOS], and ToS §6(E) bans commercial exploitation of "the Services" "except as expressly permitted" (wording is ambiguous) | 3.0 offers 1:1, **4:5**, 5:4, **3:4**, 4:3, **2:3**, 3:2 and more. 4.5 uses grouped ratios at 1K/2K. The docs map 4:5 to Instagram and 2:3 to Pinterest [IDEO-SET] | Good at graphic and poster looks. Text rendering is its specialty, which we don't need | Docs: models "latch onto" no/without, so use positive phrasing. A negative-prompt field exists on 3.0 only [IDEO-FIX] | **Seed** field. **Style reference images** (up to 10, on 3.0/Auto-General). Magic Prompt toggle (turn it off for exact wording) [IDEO-SET] | **[unverified]**. The ToS forbids removing watermarks [IDEO-TOS] |
| **Midjourney** | **None.** Plans run $10–$120/mo [MJ-PLANS] | Yes for subscribers ("General Commercial Terms"). Pro/Mega is required if revenue exceeds $1M [MJ-PLANS, MJ-TOS]. Public by default. Stealth only on Pro/Mega [MJ-TOS] | `--ar 2:3`, `3:4`, `4:5` and any other ratio [MJ-AR] | Best-in-class stylised looks **[unverified, reputational]** | Positive descriptions. `--no text` **[unverified, parameter page not fetched]** | **`--sref`** (image or numeric style code), which keeps a set consistent [MJ-SREF] | **[unverified]** |
| **Adobe Firefly** | A free plan with "limited daily generations" [AD-PLANS]. The credits FAQ describes free credits as allocated monthly on first use [AD-CREDITS], so the two pages conflict. Number not stated | **Yes for Firefly models.** "Outputs from Adobe Firefly AI models are safe for commercial use", trained on licensed/public-domain content [AD-PLANS]. **Partner models (Google/OpenAI) in Firefly: "You decide … and are responsible"** [AD-PARTNER]. No free-tier carve-out found on the plans page | **[unverified]** | Good **[unverified]** | Same positive phrasing | Style reference **[unverified]** | **Content Credentials** attached automatically [AD-PLANS] |
| **Canva (Magic Media / Dream Lab)** | Included, but uses an "AI allowance" whose size is not given on the pages read (`/help/ai-access/` not fetched) [CV-MM, CV-DL] | **Yes.** "you own your Output … may use your Output for any lawful purpose" [CV-AITERMS]. Characters/brands need the rights-holder's permission [CV-DL] | Magic Media layouts: square / landscape / portrait only (no exact ratio) [CV-MM] | Magic Media has 3D and graphic styles [CV-MM]. Dream Lab is powered by Leonardo.ai [CV-DL] | Same | Dream Lab reference image. Brand-Kit style reference is Pro-only [CV-DL] | **Dream Lab images "include a visible label showing that AI created them"** [CV-DL], which hurts a clean image slot |
| **Microsoft Copilot / Bing Image Creator** | Yes (MS account) | **No. Avoid it.** Copilot: "You can only use Copilot for your own personal use" [MS-COPILOT]. Image Creator: the services "are for entertainment purposes" [MS-IC] | **[unverified]** | — | — | — | Content Credentials (implied: the terms forbid removing them) [MS-COPILOT, MS-IC] |

## Ranked shortlist

1. **Google Gemini app (Nano Banana 2), the primary tool.**
   - It's free on a personal Google account, and Google doesn't claim ownership [G-TOS].
   - The official prompting guide has a ready-made "minimalist & negative space … where text will be overlaid" pattern [G-API-IMG]. That's exactly our image-slot use.
   - It takes reference images for set consistency: re-attach the first approved image as a style reference.
   - Weak spots: free quotas aren't published [G-LIMITS], and an in-app aspect-ratio picker is unverified. Put the ratio in the prompt, and let the HTML slot `object-fit: cover` crop the rest.
2. **ChatGPT (GPT Image), the secondary tool and fallback when the Gemini quota runs out.**
   - Its terms are the clearest commercial wording of the free tools: output is assigned to you [OAI-TOU].
   - It produces native 2:3 portrait output [OAI-IMG], and C2PA + SynthID provenance is embedded [OAI-PROV].
   - Free limits are unpublished [OAI-FREE].

Honourable mentions:
- **Adobe Firefly**: the lowest IP risk, because it's trained on licensed content [AD-PLANS]. Use Firefly models, not partner models. The free allowance is tiny/unclear.
- **Ideogram**: the best explicit controls (exact 2:3/3:4/4:5, seed, style refs, negative prompt). But free outputs are public, and ToS §6(E) is ambiguous.
- **Midjourney**: the strongest stylisation and `--sref`, but it's paid-only.
- **Canva**: the visible AI label on Dream Lab images is a problem.
- **Microsoft**: excluded (personal use only).

Corporate network: the owner is expected to use a personal device. On the Verisk network, new/uncategorised domains have been blocked by "Browser Isolation" before (from repo tool notes, not re-tested here). Whether gemini.google.com, chatgpt.com, ideogram.ai or firefly.adobe.com are reachable at work is **[unverified]**.

## Direct-integration feasibility (driving generation from VS Code Copilot)

| Route | Free? | Cost / requirements | Verdict |
|---|---|---|---|
| **OpenAI Images API** (`gpt-image-2.5-flare` / `-sunburst`) | No free tier found | Image output costs $30 per 1M tokens, and image input $8 per 1M tokens [OAI-PRICE]. The cost per image depends on size and quality: the docs have a calculator, and the exact per-image cost is **[unverified]**. You "may need to complete the API Organization Verification" [OAI-IMG]. Sizes: 1024×1536 (2:3), or custom sizes such as 1152×1536 (3:4) and 1088×1360 (4:5), which fit the documented multiple-of-16 rule [OAI-IMG] | Feasible as a small script plus a paid key. It's code, so it's out of scope for v1 |
| **Gemini API** (Nano Banana 2.1 / Pro) | **No.** Every image-output model row on the pricing page shows Free Tier "Not available" [G-API-PRICE] | Costs about $0.0336 per 1K image (Nano Banana 2.1 standard) up to about $0.134 per 1K/2K image ($120 per 1M tokens, which looks like the Pro row; the row-to-model mapping is inferred) [G-API-PRICE]. You must be 18+. Paid prompts are not used for training [G-API-TERMS] | Feasible and cheap, but needs billing. Out of scope for v1 |
| **Canva AI Connector (MCP)** | Available on all plans, including Free [CV-CONNECTOR] | Can "create and edit designs", search, export. Brand Templates and Autofill are not on Free [CV-CONNECTOR]. Documented clients are ChatGPT, Claude, Gemini and Microsoft Copilot. VS Code Copilot support is **[unverified]**. Whether it calls Magic Media image generation is **[unverified]** | Not useful for us: our layout is HTML/CSS, so we only need a bitmap |
| **Canva Dev MCP server** | — | It's for *building Canva apps* (docs/tools for Cursor, Claude Desktop) [CV-DEVMCP] | Not applicable |
| **Canva Connect REST API** | — | Create/sync designs and assets from your own web app [CV-CONNECT]. Plan requirements are **[unverified]** | Overkill |
| **Ideogram API** | Shares your app credits [IDEO-API] | Prices appear in Settings → Usage costs **[unverified amounts]**. Developer docs are at developer.ideogram.ai | Possible later |
| **Midjourney** | — | No public API found in the docs read **[unverified]** | No |

**Recommendation:** keep v1 manual. The skill writes the prompt, and the owner pastes it into Gemini (or ChatGPT) and drops the file into the folder. Revisit a paid API script only if volume grows. At roughly $0.03–0.07 per image, 30 images a month would cost about $1–2.

## Official prompting guides

- Gemini / Nano Banana: G-API-IMG, section "Prompting guide and strategies" and "Best practices". The app tips are at G-APPIMG ("Tips for image generation prompts").
- OpenAI: the "GPT Image prompting guide" page in the platform docs nav next to OAI-IMG. Its exact URL was not captured **[unverified]**.
- Ideogram: IDEO-PROMPT, plus IDEO-FIX for negative phrasing and framing.
- Midjourney: MJ-PROMPT, plus MJ-SREF.
- Canva: CV-DL, section "Improve your results with better prompts".
- Adobe Firefly: **[unverified]**, not fetched.

Principles that hold across these guides:
- **One-sentence summary first** (medium + subject + tone) [IDEO-PROMPT].
- **Be specific about medium and style** (Midjourney's "Medium" slot [MJ-PROMPT]; "describe the artistic style, subject, and medium" [G-API-IMG]).
- **State intent** ("context and intent" [G-API-IMG]).
- **Phrase exclusions positively**, because "no X" invites X [IDEO-FIX, G-API-IMG].
- **Framing follows the aspect ratio** [IDEO-FIX].
- **Use camera language for composition** [G-API-IMG].

## Prompt TEMPLATE (for the style kit to specialise)

```
[1 · One-line summary]
A {MEDIUM: stylised 3D render | soft clay/toy 3D | flat vector illustration | risograph-style graphic | vintage travel-poster illustration} of {SUBJECT — generic, invented objects only}, {MOOD} mood, made as a background image for a social-media graphic.

[2 · Subject detail]
{2–3 sentences: what the objects are, materials, colours, count. Invented/generic designs only — no real products, brands, logos, mascots or characters.}

[3 · Composition + reserved space]
Tall {RATIO: 2:3 | 3:4 | 4:5} portrait. Place the subject in the {SUBJECT_ZONE: lower third | bottom-right | left half}. Keep the {TEXT_ZONE: top 40% | upper-left area | right half} as a calm, empty, softly lit {BACKDROP: plain gradient | seamless studio sweep | flat colour field} with nothing in it — a clean area reserved for headline text added later.

[4 · Style lock]
Palette: {HEX/colour names from the site's style kit}. Lighting: {soft top-left key light, gentle shadows}. Camera: {three-quarter view, slight high angle, shallow depth of field}. Finish: {matte, smooth, minimal detail}.

[5 · Clean surfaces (positive phrasing, no "no X")]
All surfaces are plain and unmarked: blank card faces, smooth unprinted boxes, solid-colour tiles, bare backdrop. The image is purely pictorial — lettering, numbers, logos, signatures and watermarks are absent.

[6 · Consistency (if a set)]
Match the style, palette and lighting of the attached reference image exactly; change only the subject.
```

Tool-specific notes:
- **Ideogram 3.0**: turn Magic Prompt off and put `text, letters, words, numbers, logo, watermark, signature` in **Negative prompt** [IDEO-SET, IDEO-FIX]. Set the ratio in settings. Fix a seed for the set.
- **Midjourney**: append `--ar 2:3` (or `3:4` / `4:5`) [MJ-AR] and `--sref <url or code>` [MJ-SREF]. `--no text` is **[unverified]**.
- **Gemini / ChatGPT**: attach the first approved image for items 2+ of a set. Iterate with "keep everything the same, but…" [G-API-IMG].

### Filled example: board-game Pinterest pin (stylised 3D, no text, reserved space, 2:3)

```
A soft clay-style 3D render of a cosy tabletop game scene, warm and playful mood, made as a background image for a Pinterest pin.

A small cluster of invented game pieces sits on a round wooden table: six chunky rounded meeples in teal, mustard and coral, two oversized six-sided dice with simple dot pips, a short fanned stack of blank cream-coloured cards, and a few smooth hexagonal tiles in sage green. Everything looks hand-modelled from matte clay, with slightly imperfect rounded edges.

Tall 2:3 portrait. Place the table and pieces in the lower third of the frame, slightly right of centre. Keep the top 45% as a calm, empty, softly lit warm-cream gradient backdrop with nothing in it — a clean area reserved for headline text added later.

Palette: warm cream #F4EBDD, teal #2F7F7A, mustard #E2A93B, coral #E07A5F, sage #9DB59A. Lighting: soft top-left key light, gentle contact shadows. Camera: three-quarter view from a slight high angle, shallow depth of field. Finish: matte, smooth, minimal detail.

All surfaces are plain and unmarked: blank card faces, unprinted tiles, bare backdrop. The image is purely pictorial — lettering, numbers, logos, box art and watermarks are absent.
```

Variants:
- **Instagram 4:5**: swap "Tall 2:3 portrait" for "4:5 portrait (1080×1350)" and "top 45%" for "top 35%".
- **Instagram 3:4**: use "3:4 portrait (1080×1440)".
- **Set of carousel images**: add section 6 and attach the approved first image.

IP guardrail for the skill: never name a real game, publisher, box art or character in the prompt. Describe generic components only. Every tool's terms put infringement risk on the user [OAI-UP, G-APPIMG, MJ-TOS, AD-GUIDE, CV-DL, MS-IC].
