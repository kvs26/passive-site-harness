#!/usr/bin/env node
// Self-test: builds + checks the fixture, then proves the lint/check gates actually reject bad guides.
// Usage: node scripts/selftest.mjs     (run from anywhere)
import { cp, rm, readFile, writeFile, mkdtemp } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadGuide } from './lib/source.mjs';
import { probability } from './probability.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FIX = path.join(ROOT, 'example', 'orchard-dash');
let failures = 0;
const t = (name, cond, detail = '') => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : '  ' + detail}`); if (!cond) failures++; };

// 1. full pipeline on the fixture
const run = s => execFileSync('node', [path.join(ROOT, 'scripts', s), FIX], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
try { run('build.mjs'); run('check.mjs'); t('fixture builds and passes every check', true); } catch (e) { t('fixture builds and passes every check', false, (e.stdout || e.message).slice(-600)); }

// 2. negative tests on temp copies
const tmp = await mkdtemp(path.join(tmpdir(), 'bgg-'));
async function mutate(name, fn, expect) {
  const dir = path.join(tmp, name);
  await cp(FIX, dir, { recursive: true, filter: p => !p.includes(`${path.sep}dist`) });
  await fn(dir);
  const g = await loadGuide(dir);
  t(`rejects: ${name}`, g.errors.some(e => e.includes(expect)), `errors were: ${g.errors.join(' | ') || '(none)'}`);
}
const edit = (file, from, to) => async dir => { const f = path.join(dir, file); await writeFile(f, (await readFile(f, 'utf8')).replace(from, to)); };
await mutate('tactic missing a part', edit('source/tier2-beginner.md', '**Common mistake.**', '**Oops.**'), 'missing "**Common mistake.**"');
await mutate('tier without Assumes line', edit('source/tier3-intermediate.md', '> **Assumes:**', '> Note:'), 'Assumes');
await mutate('sources.md lists an unreadable source', edit('source/sources.md', 'https://example.org/', 'https://example.net/orchard-dash-video'), 'status is "unreadable"');
await mutate('sources.md lists an unlogged source', edit('source/sources.md', 'https://example.org/', 'https://example.org/never-opened'), 'no row for it');
await mutate('script in source', edit('source/how-to-read.md', 'This guide has', '<script>alert(1)</script> This guide has'), 'scripts');
await mutate('remote image', edit('source/how-to-read.md', 'This guide has', '<img src="https://x.test/a.png" alt=""> This guide has'), 'remote images');
await mutate('per-tactic evidence label', edit('source/tier4-advanced.md', '**Example.**', '**Evidence level:** widely agreed\n\n**Example.**'), 'evidence/source labels');
await mutate('preview chapter not in tier 2', edit('guide.json', '"first-five-turns"', '"no-such-chapter"'), 'preview.chapter');
await mutate('invalid log status', edit('research/source-log.md', '| read | 2026-11-07 | fixture only |', '| i-watched-it | 2026-11-07 | fixture only |'), 'invalid status');

// 3. probability helper against known values
const p7 = probability(2, 6, '=', 7), p2 = probability(2, 6, '=', 2);
t('probability helper: 2d6 sum 7 = 6/36, sum 2 = 1/36', p7.hit === 6 && p7.total === 36 && p2.hit === 1);

await rm(tmp, { recursive: true, force: true });
console.log(failures ? `\n${failures} failure(s)` : '\nAll self-tests passed');
process.exit(failures ? 1 : 0);
