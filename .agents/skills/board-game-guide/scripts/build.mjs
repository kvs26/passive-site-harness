#!/usr/bin/env node
// Usage: node build.mjs <guide-dir>
// Lints the source, renders dist/<slug>-guide.pdf and dist/preview/index.html (two PDF passes for contents page numbers).
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { loadGuide } from './lib/source.mjs';
import { renderFull, renderPreview } from './lib/render.mjs';
import { loadPdf, internalLinks } from './lib/pdf.mjs';

const guideDir = process.argv[2];
if (!guideDir) { console.error('usage: node build.mjs <guide-dir>'); process.exit(2); }

const guide = await loadGuide(guideDir);
if (guide.errors.length) {
  console.error(`Lint failed (${guide.errors.length}):\n- ${guide.errors.join('\n- ')}`);
  process.exit(1);
}
const dist = path.join(guide.dir, 'dist');
await mkdir(path.join(dist, 'preview'), { recursive: true });
await mkdir(path.join(dist, 'build'), { recursive: true });

const expected = guide.sections.flatMap(s => [{ id: s.key, text: s.title }, ...(s.kind === 'tier' || s.key === 'quick-reference' ? s.chapters : []).map(c => ({ id: c.id, text: c.title }))]);
const browser = await chromium.launch();
try {
  async function pdfPass(pages) {
    const html = await renderFull(guide, pages);
    await writeFile(path.join(dist, 'build', 'full.html'), html);
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    const buf = await page.pdf({ preferCSSPageSize: true, printBackground: true, tag: true });
    await page.close();
    return buf;
  }
  const first = await pdfPass({});
  const pages1 = (await internalLinks(await loadPdf(first))).pages;
  const final = await pdfPass(pages1);
  const pages2 = (await internalLinks(await loadPdf(final))).pages;
  const missing = expected.filter(e => !pages2[e.id]);
  const moved = expected.filter(e => pages1[e.id] !== pages2[e.id]);
  if (missing.length) { console.error(`Contents links did not resolve in the PDF: ${missing.map(m => m.text).join('; ')}`); process.exit(1); }
  if (moved.length) { console.error(`Contents page numbers moved between passes: ${moved.map(m => m.text).join('; ')}`); process.exit(1); }
  const pdfPath = path.join(dist, `${guide.meta.slug}-guide.pdf`);
  await writeFile(pdfPath, final);
  await writeFile(path.join(dist, 'build', 'pages.json'), JSON.stringify(pages2, null, 2));
  await writeFile(path.join(dist, 'preview', 'index.html'), await renderPreview(guide));
  console.log(`OK  ${pdfPath}\nOK  ${path.join(dist, 'preview', 'index.html')}`);
} finally { await browser.close(); }
