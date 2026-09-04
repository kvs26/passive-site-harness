# Survey static-site stacks for SEO + long-tail generation

Type: research
Status: resolved

## Question

Which static-site approach best fits the factory? Weigh these needs together:
- **Excellent SEO** — pre-rendered HTML, no client-render dependency.
- **Top Core Web Vitals** — near-zero JS shipped by default.
- **First-class long-tail generation** — turn a dataset (JSON/CSV) into hundreds of per-item / per-brand pages (e.g. `Milwaukee M18 fans`, `what runs on Bauer batteries`).
- **Reusable component/template system** — the house template + per-site skins (this *is* the factory).
- **An interactive client-side tool island** — a small filter/calculator app embedded on an otherwise static page.
- **Low toolchain complexity** — fast to ship, easy for a solo builder to maintain.

Compare **Astro**, **Eleventy (11ty)**, and **plain HTML/CSS/JS (+ optional Alpine/vanilla island)**. Note where Next.js SSG and others fit, and articulate precisely **why client-rendered React is excluded**. Recommend one, with the trade-offs, optimizing speed-to-ship + SEO for a solo builder. Free tools only.

Write findings to `research/02-stack-survey.md`.

## Answer

Full findings: [research/02-stack-survey.md](../research/02-stack-survey.md).

Recommendation: **Astro**, over Eleventy and plain HTML/JS. Astro is content-first (pre-rendered HTML, zero JS by default), has native long-tail generation via `getStaticPaths()`, a `.astro` component/layout system for the house-template + skins, built-in "islands" for a client-side tool with opt-in hydration (`client:load`/`client:visible`), an official Cloudflare adapter, and moderate toolchain complexity. Eleventy is a viable close second (pagination covers long-tail; WebC or partials cover components) but needs manual wiring for interactive islands and hydration. Plain HTML/JS is ruled out beyond ~100 static items — no component system, manual per-page generation. Next.js SSG and client-rendered React are both excluded: Next.js carries React/SSR-app overhead the factory doesn't need, and CSR fails the SEO/Core Web Vitals requirements outright (empty initial HTML, slow LCP/INP, layout shift on hydration).

This feeds ticket 08 (pick the stack), a HITL grilling ticket that locks the choice.
