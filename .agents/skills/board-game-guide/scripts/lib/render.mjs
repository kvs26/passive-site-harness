// Turns a loaded guide into HTML: the print document (for the PDF) and the standalone preview page.
import { Marked } from 'marked';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { slugify } from './source.mjs';

const ASSETS = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'assets');
export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cssStr = s => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ');

// ---- colour helpers --------------------------------------------------------
const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
const lum = hex => { const [r, g, b] = rgb(hex).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
export const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const mix = (hex, other, t) => '#' + rgb(hex).map((v, i) => Math.round(v * (1 - t) + rgb(other)[i] * t).toString(16).padStart(2, '0')).join('');

function prng(seedStr) {
  let h = 2166136261; for (const c of seedStr) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); }
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 10000) / 10000; };
}

// Deterministic decorative pattern, drawn from scratch (no publisher art).
export function coverPattern(meta, w = 816, h = 560) {
  const r = prng(meta.slug), motif = meta.motif || 'hex', onDark = lum(meta.accent) < 0.4;
  const ink = onDark ? '#ffffff' : '#000000';
  let out = '';
  if (motif === 'dots') {
    for (let y = 20; y < h; y += 44) for (let x = 20 + ((y / 44) % 2) * 22; x < w; x += 44)
      out += `<circle cx="${x}" cy="${y}" r="${(4 + r() * 11).toFixed(1)}" fill="${ink}" fill-opacity="${(0.08 + r() * 0.3).toFixed(2)}"/>`;
  } else if (motif === 'diamonds') {
    for (let y = 0; y < h + 60; y += 60) for (let x = 0; x < w + 60; x += 60) {
      const s = 14 + r() * 16;
      out += `<path d="M${x} ${y - s}L${x + s} ${y}L${x} ${y + s}L${x - s} ${y}Z" fill="${ink}" fill-opacity="${(0.08 + r() * 0.3).toFixed(2)}"/>`;
    }
  } else {
    const R = 36, dx = R * 1.732, dy = R * 1.5;
    for (let row = 0, y = 0; y < h + R; row++, y += dy) for (let x = (row % 2) * dx / 2; x < w + R; x += dx) {
      const pts = [0, 1, 2, 3, 4, 5].map(i => { const a = Math.PI / 6 + i * Math.PI / 3; return `${(x + (R - 3) * Math.cos(a)).toFixed(1)},${(y + (R - 3) * Math.sin(a)).toFixed(1)}`; }).join(' ');
      const v = r(); out += `<polygon points="${pts}" fill="${ink}" fill-opacity="${v > 0.55 ? (0.1 + v * 0.3).toFixed(2) : 0.05}"/>`;
    }
  }
  return `<svg class="cover-art" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Decorative pattern">${out}</svg>`;
}

// ---- markdown -> html ---------------------------------------------------------
function mdToHtml(section) {
  const seen = new Set([section.key]);
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        const clean = text.replace(/\s*\{#.*\}$/, '');
        if (depth === 1) return `<h1 id="${section.key}">${inner.replace(/\s*\{#.*\}$/, '')}</h1>\n`;
        let id = `${section.key}--${slugify(clean)}`;
        for (let n = 2; seen.has(id); n++) id = `${section.key}--${slugify(clean)}-${n}`;
        seen.add(id);
        return `<h${depth} id="${id}">${inner.replace(/\s*\{#.*\}$/, '')}</h${depth}>\n`;
      },
    },
  });
  return marked.parse(section.md)
    .replace(/<blockquote>\s*<p><strong>Assumes:/g, '<blockquote class="assumes"><p><strong>Assumes:')
    .replace(/<a href="(https?:[^"]+)"/g, '<a href="$1" rel="noopener noreferrer"');
}

export function sectionLabel(s) {
  return s.kind === 'tier' ? `Tier ${s.tier}` : '';
}

export function buildToc(sections, { pages = {}, linkable = () => true, linkChapter = () => true, scope = 'print' } = {}) {
  const items = sections.map(s => {
    const lab = sectionLabel(s);
    const ok = linkable(s);
    const head = `<li class="toc-sec">${ok ? `<a href="#${s.key}">` : '<span class="toc-off">'}<span class="t">${lab ? `<b>${lab}</b> ` : ''}${esc(s.title)}</span>${scope === 'print' ? `<span class="dots"></span><span class="pg">${pages[s.key] ?? '00'}</span>` : ok ? '' : '<span class="pg note">full guide</span>'}${ok ? '</a>' : '</span>'}`;
    const subs = s.kind === 'tier' || s.key === 'quick-reference'
      ? `<ol class="toc-sub">${s.chapters.map(c => { const on = ok && linkChapter(c); return `<li>${on ? `<a href="#${c.id}">` : '<span class="toc-off">'}<span class="t">${esc(c.title)}</span>${scope === 'print' ? `<span class="dots"></span><span class="pg">${pages[c.id] ?? '00'}</span>` : ''}${on ? '</a>' : '</span>'}</li>`; }).join('')}</ol>` : '';
    return `${head}${subs}</li>`;
  });
  return `<ol class="toc">${items.join('')}</ol>`;
}

// Preview-only contents: what is free to read here, and (as plain text, never links) what only the full PDF has.
function buildPreviewNav(sections, hr, ps, chapterId) {
  const name = s => `${s.kind === 'tier' ? `<b>Tier ${s.tier}</b> ` : ''}${esc(s.title)}`;
  const subs = (s, skip) => (s.kind === 'tier' || s.key === 'quick-reference') && s.chapters.some(c => c.id !== skip)
    ? `<ol class="toc-sub">${s.chapters.filter(c => c.id !== skip).map(c => `<li><span class="toc-off">${esc(c.title)}</span></li>`).join('')}</ol>` : '';
  const chapter = ps.chapters.find(c => c.id === chapterId);
  const free = `<li class="toc-sec"><a href="#${hr.key}">${name(hr)}</a></li>`
    + `<li class="toc-sec"><a href="#${ps.key}">${name(ps)}: ${esc(chapter.title)}</a></li>`;
  const full = sections.filter(s => s !== hr).map(s => `<li class="toc-sec"><span class="toc-off">${name(s)}${s === ps ? ' (other chapters)' : ''}</span>${subs(s, s === ps ? chapterId : null)}</li>`).join('');
  return `<nav class="pv-nav" aria-label="Contents">
<h2 class="pv-h">Free sample</h2><ol class="toc toc-free">${free}</ol>
<h2 class="pv-h pv-h-full">Included in the full PDF</h2><p class="pv-note">These parts are not in this sample, so they are not links.</p><ol class="toc toc-full">${full}</ol></nav>`;
}

function coverHtml(meta) {
  const fg = contrast(meta.accent, '#ffffff') >= contrast(meta.accent, '#111111') ? '#ffffff' : '#111111';
  const panel = mix(meta.accent, fg === '#ffffff' ? '#000000' : '#ffffff', 0.18);
  return `<section class="cover" style="--cv-bg:${meta.accent};--cv-fg:${fg};--cv-panel:${panel}" aria-label="Cover">
  <div class="cover-top"><span>Learn-to-play &amp; strategy guide</span>${meta.brand ? `<span>${esc(meta.brand)}</span>` : ''}</div>
  <div class="cover-main"><p class="cover-kicker">${esc(meta.kicker || 'The complete guide to')}</p><h1 class="cover-title">${esc(meta.game)}</h1><p class="cover-sub">${esc(meta.version)}</p></div>
  ${coverPattern(meta)}
  <div class="cover-foot"><div class="cover-ver"><span class="disc">Independent guide. Not affiliated with or endorsed by ${esc(meta.publisher || 'the publisher')}. Game names belong to their owners.</span></div></div>
</section>`;
}

const baseCss = () => readFile(path.join(ASSETS, 'base.css'), 'utf8');
const printCss = async meta => (await readFile(path.join(ASSETS, 'print.css'), 'utf8'))
  .replaceAll('__FOOT__', cssStr(`${meta.game} guide · ${meta.version}`));
const previewCss = () => readFile(path.join(ASSETS, 'preview.css'), 'utf8');

const doc = (meta, css, body, extraHead = '') => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}</title>${extraHead}<style>:root{--accent:${meta.accent};--accent-ink:${contrast(meta.accent, '#ffffff') >= 4.5 ? meta.accent : mix(meta.accent, '#000000', 0.45)}}${css}</style></head><body>${body}</body></html>`;

export async function renderFull(guide, pages = {}) {
  const { meta, sections } = guide;
  const parts = sections.map(s => `<section class="sec" data-kind="${s.kind}">${mdToHtml(s)}</section>`);
  const body = `${coverHtml(meta)}
<section class="sec contents" id="contents"><h1 id="contents-h">Contents</h1>${buildToc(sections, { pages })}</section>
${parts.join('\n')}`;
  return doc(meta, (await baseCss()) + (await printCss(meta)), body);
}

export async function renderPreview(guide) {
  const { meta, sections } = guide;
  const ps = sections.find(s => s.key === meta.preview.section);
  const chapterId = `${ps.key}--${meta.preview.chapter}`;
  const hr = sections.find(s => s.key === 'how-to-read');
  // Only the one chosen H2 chapter of the beginner tier is rendered; every other section's text is never put in this file.
  const chapterMd = extractChapter(ps.md, chapterId, ps.key);
  const chapterHtml = mdToHtml({ ...ps, md: chapterMd, key: ps.key });
  const chapterTitle = ps.chapters.find(c => c.id === chapterId).title;
  const more = sections.filter(s => s.kind === 'tier' || s.key === 'quick-reference').map(s => `<li>${s.kind === 'tier' ? `<b>Tier ${s.tier}</b> ` : ''}${esc(s.title)}</li>`).join('');
  // fullGuideUrl is the guide's page on the site (e.g. /guides/<slug>/): the route back, and where price and purchase live.
  // Never write a price into the preview; it changes and belongs to that page.
  const url = meta.fullGuideUrl ? esc(meta.fullGuideUrl) : '';
  const link = url ? `<a class="cta" href="${url}" rel="noopener">See the full guide</a>` : '';
  const bar = `<header class="pv-bar"><span class="pv-brand">${esc(meta.brand || meta.game)} &middot; Free sample</span><nav aria-label="Sample shortcuts">${url ? `<a class="pv-back" href="${url}" rel="noopener">&larr; Back to guide details</a>` : ''}<a class="pv-jump" href="#${ps.key}">Jump to free chapter</a></nav></header>`;
  const body = `${bar}
${coverHtml(meta)}
<main class="pv">
${buildPreviewNav(sections, hr, ps, chapterId)}
<section class="sec" id="${hr.key}">${mdToHtml(hr).replace(/<h1 id="[^"]*">/, '<h1>')}</section>
<section class="sec" id="${ps.key}"><p class="pv-tag">Free sample &middot; Tier 2 &middot; ${esc(ps.title)}</p>${chapterHtml.replace(/<h1 id="[^"]*">[^]*?<\/h1>\n?/, '')}</section>
<section class="pointer" id="full-guide"><h2>The rest is in the full guide</h2>
<p>You have read one complete chapter: <em>${esc(chapterTitle)}</em>. The full guide has the same plain-English style throughout, and adds:</p><ul>${more}<li>Sources and version notes, and a list of what the guide does not cover</li></ul>${link ? `<p>${link}</p><p class="pv-note">The current price and the purchase option are on the guide page.</p>` : ''}</section>
</main>`;
  // A link to a part that is not in the sample becomes plain text tagged "full PDF", never a link that only jumps to a sales box.
  const ids = new Set([...body.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  const fixed = body.replace(/<a href="#([^"]+)"[^>]*>([^]*?)<\/a>/g, (m, id, text) => (ids.has(id) ? m : `<span class="in-full">${text}</span><span class="in-full-tag"> (full PDF)</span>`));
  return doc(meta, (await baseCss()) + (await previewCss()), fixed, '<meta name="robots" content="noindex">');
}

function extractChapter(md, chapterId, key) {
  const lines = md.split('\n'); const out = []; let on = false, fence = false;
  const h1 = lines.find(l => /^#\s/.test(l));
  const assumes = [];   // the tier's "Assumes" blockquote sits before the first H2
  let seenH2 = false;
  for (const line of lines) {
    if (/^```/.test(line)) fence = !fence;
    const m = !fence && /^##\s+(.*)$/.exec(line);
    if (m) { seenH2 = true; on = `${key}--${slugify(m[1].replace(/\s*\{#.*\}$/, '').trim())}` === chapterId; }
    if (!seenH2 && /^>/.test(line)) assumes.push(line);
    if (on) out.push(line);
  }
  return `${h1}\n\n${assumes.join('\n')}\n\n${out.join('\n')}`;
}
