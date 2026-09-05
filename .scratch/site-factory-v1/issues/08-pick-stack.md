# Pick the stack

Type: grilling
Status: resolved
Blocked by: 02

## Question

Given the stack survey (ticket 02), lock the factory's static-site stack (Astro vs 11ty vs vanilla + island vs other). HITL decision — a single choice, recorded with its rationale, that every downstream template / build / deploy ticket assumes. Confirm it satisfies: pre-rendered HTML for SEO, near-zero default JS for CWV, dataset → long-tail page generation, a reusable component/skin system, an interactive tool island, and low toolchain complexity.

## Answer

**Stack locked: Astro**, per the ticket 02 survey. It satisfies all six criteria — pre-rendered static HTML (SEO), zero JS by default (CWV), native long-tail generation via `getStaticPaths()`, `.astro` components + layouts + CSS-var tokens (the house template/skin system), built-in island hydration for the interactive tool, and moderate toolchain complexity with an official Cloudflare path. Eleventy was the close second (loses on manual island wiring); plain HTML/JS ruled out past ~100 pages; Next.js SSG and React CSR excluded on overhead/SEO grounds. The human confirmed Astro over the alternatives (happy to ramp on its learning curve).

Three sub-decisions settled in the same session, all factory-wide conventions ticket 09's template assumes:

1. **Island framework = vanilla JS by default, Preact as the pre-blessed escape hatch.** The factory's tools are all the same shape (load a JSON dataset → filter/select/compute → re-render), which sits squarely in vanilla's range and keeps shipped JS at the floor. Preact is the sanctioned fallback for any single site whose tool crosses a genuine *interdependent reactive-state* threshold (many UI pieces that must stay in sync — multi-facet filters + live count + URL sync + comparison tray). Both are first-class Astro islands, so switching on one site is a per-island change that never touches the static shell.
2. **Astro version = latest stable at scaffold time, pinned in site #1's `package.json`/lockfile** — no version number named now (would be stale by build); the lockfile in the site repo is the record.
3. **Output = fully static (`output: 'static'`), no SSR server adapter.** Every site is static files served directly by Cloudflare Pages; the Cloudflare adapter is only for SSR/on-demand rendering, which the map rules out.

Feeds ticket 09 (house template), which now builds on Astro + vanilla-JS islands + static output.
