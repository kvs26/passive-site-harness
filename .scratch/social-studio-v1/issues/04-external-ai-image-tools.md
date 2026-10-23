# External AI image tools for the optional image slot

Type: research
Status: resolved
Blocked by: —

## Question

For the hybrid's optional image slot, which external tools should the skill write prompts for, and how?

- Candidates: ChatGPT (GPT image), Google Gemini (image gen), Ideogram, Midjourney, Adobe Firefly, Canva (Magic Media / Dream Lab), Microsoft Designer/Copilot.
- Per tool: free tier limits, **commercial-use terms** for generated images, supported aspect ratios (2:3, 4:5, 3:4), strength at **stylised/3D/illustrated** looks, text-in-image quality (we keep text in HTML, so "no text" prompting matters), C2PA/metadata embedded.
- Prompt-writing best practice per tool (structure, style keywords, negative prompts, consistency across a set — style references/seeds).
- Can any of these be driven directly from VS Code Copilot (e.g. a Canva MCP server / Connect API, OpenAI/Gemini image API with a free key)? Cost and feasibility.
- Is any blocked on a corporate network (likely owner uses personal device — note it).

Output: a ranked shortlist (1–2 primary tools) + a prompt template the style kit can specialise.

## Answer

- **Primary: Google Gemini app (Nano Banana 2).** It's free on a personal account, and Google "won't claim ownership" of what it generates. Its official guide has a "negative space for text overlay" pattern, it takes reference images for set consistency, and it embeds SynthID.
- **Secondary: ChatGPT (GPT Image).** It's free with unpublished limits. OpenAI assigns output ownership to the user, it makes native 2:3 portraits, and it embeds C2PA + SynthID.
- Honourable mentions:
  - Firefly: lowest IP risk if you use Firefly models, not partner models.
  - Ideogram: exact 4:5/3:4/2:3, seed, style refs and negative prompt, but free generations are public.
  - Midjourney: paid-only.
  - Canva: Dream Lab images carry a visible AI label.
- **Exclude Microsoft Copilot/Image Creator.** Its terms say "personal use" and "entertainment purposes".
- **Direct integration: not worth it for v1.** The Gemini API has no free tier for image models (about $0.034–0.134 per image). The OpenAI Images API is paid and may need org verification. Canva's AI Connector (MCP) works on Free but builds Canva designs, not the bitmaps our HTML needs.
- **Prompt rules:** state the medium first and the ratio in words, put the reserved empty zone in the prompt, and describe "clean, unmarked surfaces" positively instead of "no text". Never name real games or box art.
- Full table, sources, template and a filled board-game example: [../research/04-external-ai-image-tools.md](../research/04-external-ai-image-tools.md).
