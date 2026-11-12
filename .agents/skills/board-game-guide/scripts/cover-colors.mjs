#!/usr/bin/env node
// Lists the cover image's main colours so the guide's `accent` can match the cover (references/diagrams.md, Colour).
// Usage: node scripts/cover-colors.mjs <guide-dir>
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { contrast, mix } from './lib/render.mjs';

const dir = path.resolve(process.argv[2] || '.');
const file = ['png', 'jpg', 'webp'].map(e => path.join(dir, 'cover', `cover.${e}`));
let data;
for (const f of file) { try { data = `data:image/${path.extname(f).slice(1)};base64,${(await readFile(f)).toString('base64')}`; break; } catch {} }
if (!data) { console.error('No cover/cover.png|jpg|webp in', dir); process.exit(1); }

const browser = await chromium.launch();
const page = await browser.newPage();
const colours = await page.evaluate(async src => {
  const img = new Image(); img.src = src; await img.decode();
  const c = document.createElement('canvas'); c.width = 160; c.height = Math.round(160 * img.height / img.width);
  const x = c.getContext('2d'); x.drawImage(img, 0, 0, c.width, c.height);
  const d = x.getImageData(0, 0, c.width, c.height).data, bins = new Map();
  for (let i = 0; i < d.length; i += 4) {
    const [r, g, b] = [d[i], d[i + 1], d[i + 2]], max = Math.max(r, g, b), min = Math.min(r, g, b);
    if (max - min < 40 || max < 50 || min > 215) continue; // skip greys, near-black, near-white: not accent candidates
    const k = `${r >> 4},${g >> 4},${b >> 4}`, v = bins.get(k) || [0, 0, 0, 0];
    v[0] += r; v[1] += g; v[2] += b; v[3]++; bins.set(k, v);
  }
  const total = d.length / 4;
  return [...bins.values()].sort((a, b) => b[3] - a[3]).slice(0, 40)
    .map(([r, g, b, n]) => ({ hex: '#' + [r, g, b].map(v => Math.round(v / n).toString(16).padStart(2, '0')).join(''), share: n / total }));
}, data);
await browser.close();

// Merge near-duplicates, keep the top 8.
const near = (a, b) => { const p = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)); const [x, y] = [p(a), p(b)]; return Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]) < 48; };
const picked = [];
for (const c of colours) { const m = picked.find(p => near(p.hex, c.hex)); if (m) m.share += c.share; else picked.push({ ...c }); }
console.log('Cover colours (most common first). "text-safe" = usable as accent as-is; otherwise the build darkens it for text.\n');
for (const c of picked.sort((a, b) => b.share - a.share).slice(0, 8)) {
  const cr = contrast(c.hex, '#ffffff');
  console.log(`${c.hex}  ${(c.share * 100).toFixed(1).padStart(5)}% of cover   contrast on white ${cr.toFixed(1)}  ${cr >= 4.5 ? 'text-safe' : `-> text ${mix(c.hex, '#000000', 0.45)}`}`);
}
console.log('\nIn guide.json set "accent" to the main colour the owner picks (base), and "palette": { "good", "bad", "gain" } to three');
console.log('other clearly different cover colours (supporting). Rebuild and look at a tactic page next to page 1.');
