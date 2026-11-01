#!/usr/bin/env node
// Shared social-studio renderer. Usage: node render.mjs <batch-dir> [--only <slug>]
// See README.md in this folder for the batch layout and slide HTML contract.
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
if (!batchArg) { console.error('usage: node render.mjs <batch-dir> [--only <slug>]'); process.exit(2); }
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

// ---- preview.html ---------------------------------------------------------
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
async function writePreview(results) {
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
</style>
<h1>Batch preview</h1><div>${esc(path.basename(BATCH))} &middot; ${pins.length} pins &middot; ${igByPost.size} Instagram posts &middot; ${new Date().toISOString().slice(0, 10)}</div>
${results.filter(r => r.problems.length).map(r => `<div class="warn"><b>${esc(path.relative(BATCH, r.file))}</b>: ${esc(r.problems.join('; '))}</div>`).join('')}
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
await browser.close();
if (!only) await writePreview(results);

const failed = results.filter(r => r.problems.length).length;
console.log(`\n${results.length - failed}/${results.length} rendered clean${only ? '' : ' -> preview.html'}`);
process.exit(failed ? 1 : 0);
