#!/usr/bin/env node
// Exact dice probabilities for checking claims in a guide (never trust prose plausibility).
// Usage: node probability.mjs <N>d<S> [<op><target>]     ops: = >= <= > <
//   node probability.mjs 2d6          -> full distribution
//   node probability.mjs 2d6 =7       -> P(sum = 7) = 6/36
import { fileURLToPath } from 'node:url';

export function distribution(n, sides) {
  let d = new Map([[0, 1]]);
  for (let i = 0; i < n; i++) {
    const next = new Map();
    for (const [sum, ways] of d) for (let f = 1; f <= sides; f++) next.set(sum + f, (next.get(sum + f) || 0) + ways);
    d = next;
  }
  return { ways: d, total: sides ** n };
}

export function probability(n, sides, op, target) {
  const { ways, total } = distribution(n, sides);
  const ok = { '=': s => s === target, '>=': s => s >= target, '<=': s => s <= target, '>': s => s > target, '<': s => s < target }[op];
  let hit = 0; for (const [s, w] of ways) if (ok(s)) hit += w;
  return { hit, total, p: hit / total };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const m = /^(\d+)d(\d+)$/.exec(process.argv[2] || '');
  if (!m) { console.error('usage: node probability.mjs <N>d<S> [<op><target>]'); process.exit(2); }
  const [n, s] = [Number(m[1]), Number(m[2])];
  const cond = /^(>=|<=|=|>|<)(\d+)$/.exec(process.argv[3] || '');
  if (cond) { const r = probability(n, s, cond[1], Number(cond[2])); console.log(`P(sum ${cond[1]} ${cond[2]}) = ${r.hit}/${r.total} = ${(r.p * 100).toFixed(2)}%`); }
  else { const { ways, total } = distribution(n, s); for (const [sum, w] of [...ways].sort((a, b) => a[0] - b[0])) console.log(`${sum}: ${w}/${total} (${(w / total * 100).toFixed(2)}%)`); }
}
