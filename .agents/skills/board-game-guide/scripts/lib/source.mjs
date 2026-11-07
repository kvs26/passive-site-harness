// Load + lint a guide's editable source. A guide dir looks like:
//   <guide-dir>/guide.json          metadata (see references/source-format.md)
//   <guide-dir>/source/<key>.md     one file per section, fixed keys below
//   <guide-dir>/research/source-log.md
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

// Fixed order = the page order settled in the guide-scope ticket (after cover + contents).
export const SECTIONS = [
  { key: 'how-to-read', kind: 'front' },
  { key: 'tier1-how-to-play', kind: 'tier', tier: 1 },
  { key: 'tier2-beginner', kind: 'tier', tier: 2 },
  { key: 'tier3-intermediate', kind: 'tier', tier: 3 },
  { key: 'tier4-advanced', kind: 'tier', tier: 4 },
  { key: 'quick-reference', kind: 'back' },
  { key: 'sources', kind: 'back' },
  { key: 'not-covered', kind: 'back' },
];

export const TACTIC_LEADS = ['Why it works.', 'When it applies.', 'When it fails.', 'Example.', 'Common mistake.'];
export const LOG_STATUSES = ['read', 'owner-supplied', 'unreadable', 'lead-only'];
const REQUIRED_META = ['slug', 'game', 'title', 'version', 'versionChecked', 'versionSource', 'players', 'language', 'accent'];

export const slugify = s =>
  s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const exists = p => stat(p).then(() => true, () => false);

export async function loadGuide(guideDir) {
  const dir = path.resolve(guideDir);
  const errors = [];
  let meta = {};
  try { meta = JSON.parse(await readFile(path.join(dir, 'guide.json'), 'utf8')); }
  catch (e) { errors.push(`guide.json: ${e.code === 'ENOENT' ? 'missing' : e.message}`); }
  for (const k of REQUIRED_META) if (!meta[k]) errors.push(`guide.json: missing "${k}"`);
  if (meta.accent && !/^#[0-9a-fA-F]{6}$/.test(meta.accent)) errors.push('guide.json: accent must be #rrggbb');
  if (meta.versionChecked && !/^\d{4}-\d{2}-\d{2}$/.test(meta.versionChecked)) errors.push('guide.json: versionChecked must be YYYY-MM-DD');
  if (meta.slug && !/^[a-z0-9-]+$/.test(meta.slug)) errors.push('guide.json: slug must be lowercase-hyphen');

  const sections = [];
  for (const s of SECTIONS) {
    const file = path.join(dir, 'source', `${s.key}.md`);
    if (!(await exists(file))) { errors.push(`source/${s.key}.md: missing`); continue; }
    const md = await readFile(file, 'utf8');
    sections.push({ ...s, file, md, ...lintSection(s, md, errors) });
  }

  const idSeen = new Set();
  for (const s of sections) for (const h of [{ id: s.key }, ...s.chapters]) {
    if (idSeen.has(h.id)) errors.push(`duplicate heading id "${h.id}" (rename a heading)`);
    idSeen.add(h.id);
  }

  if (meta.preview) {
    const ps = sections.find(s => s.key === meta.preview.section);
    if (!ps || ps.tier !== 2) errors.push('guide.json: preview.section must be tier2-beginner (one beginner-tier chapter)');
    else if (!ps.chapters.some(c => c.id === `${ps.key}--${meta.preview.chapter}`))
      errors.push(`guide.json: preview.chapter "${meta.preview.chapter}" is not an H2 in ${ps.key}`);
  } else errors.push('guide.json: missing "preview": { section, chapter }');

  const logPath = path.join(dir, 'research', 'source-log.md');
  const log = (await exists(logPath)) ? parseLog(await readFile(logPath, 'utf8'), errors) : (errors.push('research/source-log.md: missing'), []);
  const src = sections.find(s => s.key === 'sources');
  if (src) {
    const urls = [...src.md.matchAll(/\]\((https?:\/\/[^)\s]+)\)|(?<![(\w])(https?:\/\/[^\s)<>]+)/g)].map(m => m[1] || m[2]);
    if (!urls.length) errors.push('source/sources.md: no source URLs listed');
    for (const u of new Set(urls)) {
      const row = log.find(r => r.url === u);
      if (!row) errors.push(`sources.md lists ${u} but source-log.md has no row for it`);
      else if (!['read', 'owner-supplied'].includes(row.status))
        errors.push(`sources.md lists ${u} but source-log.md status is "${row.status}" (only read/owner-supplied may be listed)`);
    }
  }
  return { dir, meta, sections, log, errors };
}

function lintSection(s, md, errors) {
  const name = `source/${s.key}.md`;
  const chapters = [];
  const tactics = [];
  if (/<script|\son[a-z]+\s*=|javascript:/i.test(md)) errors.push(`${name}: scripts/inline handlers/javascript: URLs are not allowed`);
  if (/<img[^>]+src=["']?(https?:)?\/\//i.test(md)) errors.push(`${name}: remote images are not allowed (draw original inline SVG)`);
  for (const m of md.matchAll(/<svg\b[^>]*>/g)) if (!/aria-label=/.test(m[0])) errors.push(`${name}: <svg> needs aria-label (describe the diagram)`);
  const lines = md.split('\n');
  let inFence = false, h1 = null, curChapter = null, curTactic = null;
  lines.forEach((line, i) => {
    if (/^```/.test(line)) inFence = !inFence;
    if (inFence) { if (curTactic) curTactic.body += line + '\n'; return; }
    const m = /^(#{1,4})\s+(.*)$/.exec(line);
    if (m) {
      const level = m[1].length, text = m[2].replace(/\s*\{#.*\}$/, '').trim();
      if (level === 1) { if (h1) errors.push(`${name}:${i + 1}: more than one H1`); h1 = text; }
      else if (level === 2) { curChapter = { id: `${s.key}--${slugify(text)}`, title: text, line: i + 1 }; chapters.push(curChapter); curTactic = null; }
      else if (level === 3 && curChapter) { curTactic = { title: text, line: i + 1, body: '' }; tactics.push(curTactic); }
      else curTactic?.body !== undefined && (curTactic.body += line + '\n');
      return;
    }
    if (curTactic) curTactic.body += line + '\n';
  });
  if (!h1) errors.push(`${name}: needs one H1 (the section title)`);
  if (md.replace(/\s/g, '').length < 40) errors.push(`${name}: too short to be real content`);
  if (s.kind === 'tier') {
    if (!/^>\s*\*\*Assumes:\*\*/m.test(md)) errors.push(`${name}: tier must open with a "> **Assumes:** ..." line`);
    if (!chapters.length) errors.push(`${name}: tier needs at least one H2 chapter`);
    if (s.tier === 1 && !chapters.some(c => /worked example/i.test(c.title))) errors.push(`${name}: tier 1 needs an H2 "Worked example" chapter`);
    if (s.tier >= 2) {
      if (!tactics.length) errors.push(`${name}: tactics tier has no H3 tactics`);
      for (const t of tactics) for (const lead of TACTIC_LEADS)
        if (!t.body.includes(`**${lead}**`)) errors.push(`${name}:${t.line}: tactic "${t.title}" is missing "**${lead}**"`);
    }
  }
  if (s.key === 'quick-reference' && !chapters.some(c => /glossary/i.test(c.title))) errors.push(`${name}: needs an H2 "Glossary"`);
  if (/\*\*(Evidence|Source)s?( level)?[:.]\*\*/i.test(md)) errors.push(`${name}: per-tactic evidence/source labels are not used (settled in research ticket)`);
  return { title: h1 || s.key, chapters, tactics };
}

export function parseLog(text, errors = []) {
  const rows = [];
  for (const line of text.split('\n')) {
    if (!line.startsWith('|') || /^\|\s*-/.test(line) || /^\|\s*ID\b/i.test(line)) continue;
    const c = line.split('|').slice(1, -1).map(x => x.trim());
    if (c.length < 6) continue;
    const [id, url, type, status, accessed, used] = c;
    const st = status.toLowerCase();
    if (!LOG_STATUSES.includes(st)) { errors.push(`source-log.md: row ${id} has invalid status "${status}" (use ${LOG_STATUSES.join('/')})`); continue; }
    rows.push({ id, url: url.replace(/^<|>$/g, ''), type, status: st, accessed, used });
  }
  return rows;
}
