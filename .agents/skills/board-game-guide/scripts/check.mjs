#!/usr/bin/env node
// Usage: node check.mjs <guide-dir> [--links]
// Validates a built guide (run build.mjs first). Writes dist/pages/page-NN.png for visual inspection.
import { chromium } from 'playwright';
import { createCanvas } from '@napi-rs/canvas';
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { loadGuide } from './lib/source.mjs';
import { loadPdf, internalLinks, pageTexts } from './lib/pdf.mjs';

const guideDir = process.argv[2];
const doLinks = process.argv.includes('--links');
if (!guideDir) { console.error('usage: node check.mjs <guide-dir> [--links]'); process.exit(2); }

const guide = await loadGuide(guideDir);
const { meta, sections } = guide;
const dist = path.join(guide.dir, 'dist');
const fails = [], warns = [], oks = [];
const ok = m => oks.push(m), fail = m => fails.push(m), warn = m => warns.push(m);
const norm = s => s.toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[^a-z0-9]+/g, ' ').trim();
// PDF extraction splits ligatures ("fi ve") and hyphenless wraps, so compare with all spaces removed.
const sq = s => norm(s).replace(/ /g, '');

if (guide.errors.length) guide.errors.forEach(fail); else ok('source lint clean');

// ---- plain text of a markdown block, for matching against extracted text -------------
const plainLines = md => {
  let fence = false; const out = [];
  for (const raw of md.split('\n')) {
    if (/^```/.test(raw)) { fence = !fence; continue; }
    if (fence || !raw.trim() || /^(#|\||<|---|\s*<)/.test(raw.trim())) continue;
    out.push(raw.replace(/^\s*(>|[-*]|\d+\.)\s+/, '').replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`]/g, '').trim());
  }
  return out.filter(l => l.split(/\s+/).length >= 6);
};

// ---- PDF ------------------------------------------------------------------------
const pdfPath = path.join(dist, `${meta.slug}-guide.pdf`);
let pdf;
try { pdf = await loadPdf(pdfPath); } catch { fail(`cannot open ${pdfPath} (run build.mjs)`); }
if (pdf) {
  const n = pdf.numPages; ok(`${n} pages`);
  for (let p = 1; p <= n; p++) {
    const [, , w, h] = (await pdf.getPage(p)).view;
    if (Math.abs(w - 612) > 1 || Math.abs(h - 792) > 1) fail(`page ${p} is ${w}x${h}, expected US Letter 612x792`);
  }
  const texts = await pageTexts(pdf);
  if (!sq(texts[0]).includes(sq(meta.game)) || !sq(texts[0]).includes(sq(meta.version))) fail('cover text must show the game name and version');
  else ok('cover shows game + version');
  for (let p = 2; p <= n; p++) {
    if (texts[p - 1].length < 25) fail(`page ${p} is nearly empty`);
    if (!texts[p - 1].startsWith(`${p} `)) fail(`page ${p} has no page number p${p} in the footer (starts "${texts[p - 1].slice(0, 12)}")`);
  }
  const joined = sq(texts.join(' '));
  let missing = 0, total = 0;
  for (const s of sections) {
    for (const h of [s.title, ...s.chapters.map(c => c.title), ...s.tactics.map(t => t.title)]) { total++; if (!joined.includes(sq(h.replace(/[*_`]/g, '')))) { missing++; fail(`heading not found in PDF text: "${h}"`); } }
    for (const l of plainLines(s.md)) { total++; const probe = sq(norm(l).split(' ').slice(0, 7).join(' ')); if (!joined.includes(probe)) { missing++; fail(`text not found in PDF: "${l.slice(0, 60)}..."`); } }
  }
  if (!missing) ok(`extracted text contains all ${total} checked headings/paragraph openings`);

  const { links, pages } = await internalLinks(pdf);
  const unresolved = links.filter(l => !l.page);
  if (unresolved.length) fail(`${unresolved.length} internal links do not resolve: ${[...new Set(unresolved.map(l => l.dest))].join(', ')}`);
  const expectedToc = sections.reduce((a, s) => a + 1 + (s.kind === 'tier' || s.key === 'quick-reference' ? s.chapters.length : 0), 0);
  const firstSecPage = Math.min(...sections.map(s => pages[s.key]).filter(Boolean));
  const tocLinks = links.filter(l => l.from >= 2 && l.from < firstSecPage).length;
  if (tocLinks < expectedToc) fail(`contents page has ${tocLinks} working links, expected ${expectedToc}`);
  else ok(`contents page: ${tocLinks} working links; ${links.length} internal links total, all resolve`);
  for (const s of sections) if (!pages[s.key]) warn(`no link points at section ${s.key}`);

  // every #fragment link in the HTML must target an existing id
  const html = await readFile(path.join(dist, 'build', 'full.html'), 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  const dead = [...new Set([...html.matchAll(/href="#([^"]+)"/g)].map(m => m[1]))].filter(f => !ids.has(f));
  if (dead.length) fail(`links to missing anchors: ${dead.join(', ')}`); else ok('every #anchor link has a target');

  // ---- page PNGs (inspect these) ----
  const pagesDir = path.join(dist, 'pages');
  await mkdir(pagesDir, { recursive: true });
  for (const f of await readdir(pagesDir)) if (f.endsWith('.png')) await rm(path.join(pagesDir, f));
  for (let p = 1; p <= n; p++) {
    const page = await pdf.getPage(p), vp = page.getViewport({ scale: 1.5 });
    const canvas = createCanvas(Math.ceil(vp.width), Math.ceil(vp.height));
    await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
    await writeFile(path.join(pagesDir, `page-${String(p).padStart(2, '0')}.png`), canvas.toBuffer('image/png'));
  }
  ok(`rendered ${n} page PNGs to ${path.relative(process.cwd(), pagesDir)}/ (view every one)`);
}

// ---- clipping / overflow in print layout ------------------------------------------
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 643, height: 900 } });
  await page.emulateMedia({ media: 'print' });
  await page.setContent(await readFile(path.join(dist, 'build', 'full.html'), 'utf8'));
  const over = await page.evaluate(() => {
    const limit = document.querySelector('.contents').getBoundingClientRect().right + 1.5;
    return [...document.querySelectorAll('.sec *')].filter(e => e.getBoundingClientRect().right > limit)
      .map(e => `${e.tagName.toLowerCase()}${e.id ? '#' + e.id : ''}: ${(e.textContent || '').trim().slice(0, 40)}`).slice(0, 8);
  });
  if (over.length) fail(`content wider than the page text area: ${over.join(' | ')}`); else ok('no content overflows the page width');
  const svgBad = await page.evaluate(() => [...document.querySelectorAll('svg:not(.cover-art)')].filter(s => !s.getAttribute('aria-label')).length);
  if (svgBad) fail(`${svgBad} diagram(s) missing aria-label`);

  // ---- preview isolation ----
  const pv = await readFile(path.join(dist, 'preview', 'index.html'), 'utf8');
  const pvPage = await browser.newPage();
  await pvPage.setContent(pv);
  const pvText = norm(await pvPage.evaluate(() => document.documentElement.textContent));
  const ps = sections.find(s => s.key === meta.preview.section);
  const chapterId = `${ps.key}--${meta.preview.chapter}`;
  const chapterHead = ps.chapters.find(c => c.id === chapterId);
  if (!pvPage || !pvText.includes(norm(chapterHead.title))) fail('preview is missing its chapter');
  let leaked = 0, checked = 0;
  for (const s of sections) {
    if (s.key === 'how-to-read') continue;
    let md = s.md;
    if (s === ps) { // outside the chosen chapter only
      const lines = md.split('\n'); let on = false, keep = [];
      for (const l of lines) { const m = /^##\s+(.*)$/.exec(l); if (m) on = m[1].replace(/\s*\{#.*\}$/, '').trim() === chapterHead.title; if (!on && !/^>/.test(l)) keep.push(l); }
      md = keep.join('\n');
    }
    for (const l of plainLines(md)) { checked++; if (pvText.includes(norm(l).split(' ').slice(0, 8).join(' '))) { leaked++; fail(`preview leaks text from ${s.key}: "${l.slice(0, 50)}..."`); } }
  }
  const pvIds = new Set([...pv.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  const pvDead = [...new Set([...pv.matchAll(/href="#([^"]+)"/g)].map(m => m[1]))].filter(f => !pvIds.has(f));
  if (pvDead.length) fail(`preview has links to missing anchors: ${pvDead.join(', ')}`); else ok('preview: every #anchor link has a target');
  for (const w of [1280, 390]) {
    await pvPage.setViewportSize({ width: w, height: 800 });
    if (await pvPage.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)) fail(`preview scrolls sideways at ${w}px wide`);
  }
  const body = pv.replace(/<style>[^]*?<\/style>/, '');
  if (/<script|<[^>]*display:\s*none|<[^>]*\shidden[\s>=\/]|<template|<noscript|<!--/i.test(body)) fail('preview contains script/hidden/template/comment content');
  if (/(src|href)="https?:/i.test(body.replace(/<a [^>]*class="cta"[^>]*>/g, '').replace(/<a href="https?:[^"]*" rel="noopener noreferrer"/g, ''))) fail('preview loads external resources');
  if (!leaked) ok(`preview self-contained; ${checked} lines from other sections checked, none leaked`);
  ok(`preview size ${(Buffer.byteLength(pv) / 1024).toFixed(0)} KB vs full source ${(sections.reduce((a, s) => a + s.md.length, 0) / 1024).toFixed(0)} KB of text`);
} finally { await browser.close(); }

// ---- cited links ------------------------------------------------------------------
const urls = [...new Set(sections.flatMap(s => [...s.md.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map(m => m[1])))];
if (doLinks) {
  for (const u of urls) {
    try {
      const r = await fetch(u, { redirect: 'follow', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36' } });
      (r.ok ? ok : warn)(`link ${r.status} ${u}${r.ok ? '' : ' (not verified: open it by hand; some sites block scripts)'}`);
    } catch (e) { warn(`link unreachable from here: ${u} (${e.cause?.code || e.name}); not verified`); }
  }
} else warn(`${urls.length} cited link(s) NOT checked (re-run with --links)`);

console.log([...oks.map(m => `PASS  ${m}`), ...warns.map(m => `WARN  ${m}`), ...fails.map(m => `FAIL  ${m}`)].join('\n'));
process.exit(fails.length ? 1 : 0);
