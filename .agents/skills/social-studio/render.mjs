#!/usr/bin/env node
// Shared social-studio renderer. Usage: node render.mjs <batch-dir> [--only <slug>] [--no-lint]
// See README.md in this folder for the batch layout, slide HTML contract and design lint.
// Design lint (on by default; --no-lint for legacy batches): hook headline present, <=8 words, big enough;
// no visible text below the floor; word budget; Pinterest bottom-right clearance. Batch checks: sameness + feed simulation.
import { chromium } from 'playwright';
import { readFile, readdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SKILL = path.dirname(fileURLToPath(import.meta.url));
const ORIGIN = 'http://studio.local';
const SIZES = { pinterest: [1000, 1500], instagram: [1080, 1440] };
const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.json': 'application/json',
};

const args = process.argv.slice(2);
const batchArg = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--only');
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const LINT = !args.includes('--no-lint');
if (!batchArg) { console.error('usage: node render.mjs <batch-dir> [--only <slug>] [--no-lint]'); process.exit(2); }

// Design-lint limits (see SKILL.md > Design rules). Hook = the element marked data-hook.
const LIMITS = {
  hookMaxWords: 8,
  hookMinPx: { pinterest: 110, instagram: 100 },
  textFloorPx: 26,          // any visible text smaller than this fails unless inside [data-fine]
  wordBudget: { cover: 18, body: 45 },   // visible words per slide; cover = pin or first IG slide
  brZone: { w: 0.2, h: 0.1 },            // Pinterest bottom-right clearance (share of width/height)
};
const BATCH = path.resolve(batchArg);
const KIT = path.resolve(BATCH, '..', '..', 'style-kit');   // sites/<slug>/social/style-kit

const exists = p => stat(p).then(() => true, () => false);

// ---- discover posts -------------------------------------------------------
// pinterest/<slug>.html            -> pinterest/<slug>.png
// instagram/<slug>.html            -> instagram/<slug>.png          (single)
// instagram/<slug>/slide-NN.html   -> instagram/<slug>/slide-NN.png (carousel)
async function discover() {
  const jobs = [];
  for (const platform of Object.keys(SIZES)) {
    const dir = path.join(BATCH, platform);
    if (!(await exists(dir))) continue;
    for (const e of await readdir(dir, { withFileTypes: true })) {
      if (e.isFile() && e.name.endsWith('.html')) {
        jobs.push({ platform, slug: e.name.slice(0, -5), file: path.join(dir, e.name) });
      } else if (e.isDirectory()) {
        const slides = (await readdir(path.join(dir, e.name))).filter(n => /^slide-\d+\.html$/.test(n)).sort();
        for (const s of slides) jobs.push({ platform, slug: e.name, file: path.join(dir, e.name, s), slide: s });
      }
    }
  }
  return jobs.filter(j => !only || j.slug === only);
}

// ---- static server on a fake origin --------------------------------------
// /node_modules/* -> skill folder   /kit/* -> sites/<slug>/social/style-kit   /batch/* -> batch folder
function resolveUrl(pathname) {
  const p = decodeURIComponent(pathname);
  const map = [['/node_modules/', path.join(SKILL, 'node_modules')], ['/kit/', KIT], ['/batch/', BATCH]];
  for (const [prefix, root] of map) {
    if (p.startsWith(prefix)) {
      const full = path.resolve(root, p.slice(prefix.length));
      return full.startsWith(root + path.sep) ? full : null;   // path-traversal guard
    }
  }
  return null;
}

const FONT_CHECK_NOISE = /GPU stall due to ReadPixels/;

async function renderOne(ctx, job) {
  const [W, H] = SIZES[job.platform];
  const rel = path.relative(BATCH, job.file).split(path.sep).join('/');
  const page = await ctx.newPage();
  await page.setViewportSize({ width: W, height: H });
  const problems = [];
  page.on('pageerror', e => problems.push(`pageerror: ${e.message}`));
  page.on('console', m => { if (m.type() === 'error' && !FONT_CHECK_NOISE.test(m.text()) && !/404/.test(m.text())) problems.push(`console: ${m.text()}`); });
  try {
    await page.goto(`${ORIGIN}/batch/${rel}`);
    // image-slot fallback: <img data-slot="/batch/images/x.png" data-fallback="/batch/images/x-fallback.jpg">
    // The slot file wins if it exists; otherwise the fallback is used. Neither -> hard failure.
    const slotErrors = await page.evaluate(async () => {
      const errs = [];
      const load = src => new Promise(res => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = src; });
      for (const img of document.querySelectorAll('img[data-slot]')) {
        const slot = img.getAttribute('data-slot'), fb = img.getAttribute('data-fallback');
        if (await load(slot)) img.src = slot;
        else if (fb && await load(fb)) img.src = fb;
        else errs.push(`image slot ${slot} missing and no usable fallback`);
      }
      return errs;
    });
    problems.push(...slotErrors);
    // ready-wait: slides with their own script set window.__ready; plain slides are handled here
    const selfManaged = await page.evaluate(() => window.__ready !== undefined);
    if (selfManaged) {
      await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });
    } else {
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      });
    }
    const info = await page.evaluate(() => ({
      info: window.__info || {},
      hasCanvas: !!document.querySelector('canvas'),
      brokenImgs: [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.currentSrc || i.src),
      overflow: [document.documentElement.scrollWidth, document.documentElement.scrollHeight],
    }));
    if (info.info.error) problems.push(`slide error: ${info.info.error}`);
    if (info.hasCanvas && info.info.webgl && info.info.webgl !== 'webgl2') problems.push(`webgl: ${info.info.webgl}`);
    for (const [fontSpec, ok] of info.info.fonts || []) if (!ok) problems.push(`font not loaded: ${fontSpec}`);
    for (const b of info.brokenImgs) problems.push(`broken image: ${b}`);
    if (info.overflow[0] > W || info.overflow[1] > H) problems.push(`content overflows ${W}x${H}: ${info.overflow.join('x')}`);

    if (LINT) {
      const isCover = job.platform === 'pinterest' || !job.slide || job.slide === 'slide-01.html';
      const lint = await page.evaluate(({ isCover, platform, L, W, H }) => {
        const out = [];
        const words = t => (t.match(/\S+/g) || []).length;
        const visible = el => { const s = getComputedStyle(el); const r = el.getBoundingClientRect(); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05 && r.width > 0 && r.height > 0; };
        const hook = document.querySelector('[data-hook]');
        if (isCover) {
          if (!hook) out.push('no [data-hook] headline on the cover/pin');
          else {
            const w = words(hook.innerText), px = parseFloat(getComputedStyle(hook).fontSize);
            if (w > L.hookMaxWords) out.push(`hook is ${w} words (max ${L.hookMaxWords})`);
            if (px < L.hookMinPx[platform]) out.push(`hook font ${Math.round(px)}px (min ${L.hookMinPx[platform]})`);
          }
        }
        // walk text nodes
        let total = 0; const small = new Set();
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          const t = n.textContent.trim(); const el = n.parentElement;
          if (!t || !el || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName) || !visible(el)) continue;
          const fine = el.closest('[data-fine]');
          if (!fine) total += words(t);
          const px = parseFloat(getComputedStyle(el).fontSize);
          if (px < L.textFloorPx && !fine) small.add(`${Math.round(px)}px "${t.slice(0, 24)}"`);
        }
        if (small.size) out.push(`text below ${L.textFloorPx}px: ${[...small].slice(0, 3).join(', ')}${small.size > 3 ? ` (+${small.size - 3})` : ''}`);
        const budget = isCover ? L.wordBudget.cover : L.wordBudget.body;
        if (total > budget) out.push(`${total} visible words (budget ${budget}${isCover ? ' on a cover/pin' : ''}; wrap footnotes in [data-fine])`);
        // Pinterest overlays its own icons bottom-right
        if (platform === 'pinterest') {
          const zx = W * (1 - L.brZone.w), zy = H * (1 - L.brZone.h);
          for (const el of document.querySelectorAll('body *')) {
            if (el.closest('[data-allow-br]') || !visible(el)) continue;
            const leaf = !el.children.length && el.textContent.trim() || ['IMG', 'CANVAS'].includes(el.tagName);
            if (!leaf) continue;
            const r = el.getBoundingClientRect();
            if (r.right > zx && r.bottom > zy && r.left < W && r.top < H) { out.push(`content in Pinterest bottom-right zone: <${el.tagName.toLowerCase()}> "${el.textContent.trim().slice(0, 20)}" (mark [data-allow-br] only for pure decoration)`); break; }
          }
        }
        return out;
      }, { isCover, platform: job.platform, L: LIMITS, W, H });
      problems.push(...lint.map(l => `lint: ${l}`));
    }

    const out = job.file.replace(/\.html$/, '.png');
    await page.screenshot({ path: out, type: 'png', animations: 'disabled' });
    const buf = await readFile(out);
    const px = [buf.readUInt32BE(16), buf.readUInt32BE(20)];
    if (px[0] !== W || px[1] !== H) problems.push(`wrong size ${px.join('x')}, expected ${W}x${H}`);
    return { ...job, out, problems };
  } catch (e) {
    problems.push(`render failed: ${e.message}`);
    return { ...job, out: null, problems };
  } finally {
    await page.close();
  }
}

// ---- sameness check -------------------------------------------------------
// Dominant colour bucket per cover/pin (8x8 grid, hue x lightness). Too many in one bucket = the feed looks like one template.
async function sameness(ctx, results) {
  const covers = results.filter(r => r.out && (r.platform === 'pinterest' || !r.slide || r.slide === 'slide-01.html'));
  const page = await ctx.newPage();
  await page.goto(`${ORIGIN}/batch/`).catch(() => {});
  const buckets = [];
  for (const r of covers) {
    const b64 = (await readFile(r.out)).toString('base64');
    const bucket = await page.evaluate(async b64 => {
      const img = new Image(); img.src = 'data:image/png;base64,' + b64; await img.decode();
      const c = document.createElement('canvas'); c.width = c.height = 8;
      const x = c.getContext('2d'); x.drawImage(img, 0, 0, 8, 8);
      const d = x.getImageData(0, 0, 8, 8).data, count = {};
      for (let i = 0; i < d.length; i += 4) {
        const [r, g, b] = [d[i] / 255, d[i + 1] / 255, d[i + 2] / 255];
        const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, s = mx === mn ? 0 : (mx - mn) / (1 - Math.abs(2 * l - 1));
        let h = 0; if (mx !== mn) { const dd = mx - mn; h = mx === r ? ((g - b) / dd) % 6 : mx === g ? (b - r) / dd + 2 : (r - g) / dd + 4; h = (h * 60 + 360) % 360; }
        const key = (s < 0.15 ? 'grey' : 'h' + Math.floor(h / 40)) + (l < 0.3 ? '-dark' : l < 0.7 ? '-mid' : '-light');
        count[key] = (count[key] || 0) + 1;
      }
      return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
    }, b64);
    buckets.push({ r, bucket });
  }
  await page.close();
  const warns = [], by = {};
  for (const { r, bucket } of buckets) (by[r.platform + ':' + bucket] ||= []).push(r.slug);
  for (const [k, slugs] of Object.entries(by)) {
    const max = k.startsWith('pinterest') ? 3 : 2;
    if (slugs.length > max) warns.push(`${slugs.length} ${k.split(':')[0]} covers share one dominant colour (${k.split(':')[1]}): ${slugs.join(', ')}. Max ${max}. Re-colour or re-compose some.`);
  }
  return { warns, buckets };
}

// ---- preview.html ---------------------------------------------------------
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
async function writePreview(results, extraWarns = []) {
  const rel = r => path.relative(BATCH, r.out).split(path.sep).join('/');
  const ok = results.filter(r => r.out);
  const pins = ok.filter(r => r.platform === 'pinterest');
  const igByPost = new Map();
  for (const r of ok.filter(r => r.platform === 'instagram')) {
    (igByPost.get(r.slug) || igByPost.set(r.slug, []).get(r.slug)).push(r);
  }
  const igCards = [...igByPost.entries()].map(([slug, slides]) =>
    `<figure class="ig"><div class="frame"><img src="${esc(rel(slides[0]))}" alt="">${slides.length > 1 ? `<span class="badge">1/${slides.length}</span>` : ''}</div><figcaption>${esc(slug)}</figcaption>` +
    (slides.length > 1 ? `<div class="strip">${slides.map(s => `<img src="${esc(rel(s))}" alt="">`).join('')}</div>` : '') + `</figure>`).join('\n');
  const html = `<!doctype html><meta charset="utf-8"><title>Batch preview</title>
<style>
body{margin:0;padding:32px;background:#161616;color:#eee;font:14px/1.4 system-ui,sans-serif}
h1{font-size:20px;margin:0 0 4px}h2{font-size:15px;margin:32px 0 12px;text-transform:uppercase;letter-spacing:.08em;color:#aaa}
.pins{columns:5 200px;column-gap:14px}.pin{break-inside:avoid;margin:0 0 14px}.pin img{width:100%;display:block;border-radius:16px}
.pin figcaption,.ig figcaption{padding:4px 2px;color:#999;font-size:12px}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,300px));gap:4px;max-width:908px}
.ig{margin:0}.frame{position:relative;aspect-ratio:3/4;overflow:hidden;background:#000}.frame img{width:100%;height:100%;object-fit:cover;display:block}
.badge{position:absolute;top:8px;right:8px;background:#000a;color:#fff;border-radius:10px;padding:2px 8px;font-size:12px}
.strip{display:flex;gap:2px;overflow-x:auto;margin-top:2px}.strip img{height:90px;width:auto;flex:none}
.warn{background:#4a1d1d;border:1px solid #a33;padding:8px 12px;border-radius:8px;margin:8px 0}
.feed{columns:2 236px;column-gap:10px;width:482px;background:#fff;padding:10px;border-radius:24px}.feed img{width:236px;display:block;margin:0 0 10px;border-radius:14px;break-inside:avoid}
</style>
<h1>Batch preview</h1><div>${esc(path.basename(BATCH))} &middot; ${pins.length} pins &middot; ${igByPost.size} Instagram posts &middot; ${new Date().toISOString().slice(0, 10)}</div>
${results.filter(r => r.problems.length).map(r => `<div class="warn"><b>${esc(path.relative(BATCH, r.file))}</b>: ${esc(r.problems.join('; '))}</div>`).join('')}
${extraWarns.map(w => `<div class="warn"><b>sameness</b>: ${esc(w)}</div>`).join('')}
<h2>Feed test: Pinterest at real size (236px columns) &middot; squint: can you read every hook?</h2>
<div class="feed">${pins.map(r => `<img src="${esc(rel(r))}" alt="">`).join('')}</div>
<h2>Pinterest (1000&times;1500)</h2><div class="pins">${pins.map(r => `<figure class="pin"><img src="${esc(rel(r))}" alt=""><figcaption>${esc(r.slug)}</figcaption></figure>`).join('\n')}</div>
<h2>Instagram grid mock (1080&times;1440, first slide shown; carousels expanded below each tile)</h2><div class="grid">${igCards}</div>`;
  await writeFile(path.join(BATCH, 'preview.html'), html);
}

// ---- main -----------------------------------------------------------------
const jobs = await discover();
if (!jobs.length) { console.error(`no posts found under ${BATCH}/{pinterest,instagram}`); process.exit(2); }

const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const ctx = await browser.newContext({ deviceScaleFactor: 1 });
await ctx.route(`${ORIGIN}/**`, async route => {
  const file = resolveUrl(new URL(route.request().url()).pathname);
  if (!file) return route.fulfill({ status: 404, body: 'not found' });
  try { await route.fulfill({ body: await readFile(file), contentType: MIME[path.extname(file)] || 'application/octet-stream' }); }
  catch { await route.fulfill({ status: 404, body: 'not found' }); }
});

const results = [];
for (const job of jobs) {
  const r = await renderOne(ctx, job);
  results.push(r);
  console.log(`${r.problems.length ? 'FAIL' : 'ok  '} ${path.relative(BATCH, r.file)}${r.problems.length ? '\n     ' + r.problems.join('\n     ') : ''}`);
}
let sameWarns = [];
if (LINT && !only) { sameWarns = (await sameness(ctx, results)).warns; for (const w of sameWarns) console.log('WARN ' + w); }
await browser.close();
if (!only) await writePreview(results, sameWarns);

const failed = results.filter(r => r.problems.length).length;
console.log(`\n${results.length - failed}/${results.length} rendered clean${only ? '' : ' -> preview.html'}`);
process.exit(failed ? 1 : 0);
