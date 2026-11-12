// Diagram kit: small SVG primitives for original teaching diagrams in any board game.
// A guide's diagrams/<name>.mjs exports `default (kit, meta) => kit.svg(...)` and the source uses `::diagram name | Caption.`
// Colours are written inline (the SVG is self-contained, so the site's sample page shows it right with no extra CSS).
// Colours come from the cover and each has one fixed role in every diagram (so all guides look standardised):
//   accent (base, guide.json `accent`) = structure + focus: title bands, callouts, arrows, the one thing that matters
//   good / bad / gain (guide.json `palette`) = right choice / wrong choice or threat / resources or points gained
// Every diagram still reads in black and white: meaning is carried by shape, outline, pattern and labels, never colour alone.
// Units are CSS px at print scale: 1 viewBox unit = 1px when the figure is drawn at its natural width (max 624px = 6.5in).

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const f = n => +(+n).toFixed(1);
const INK = '#1b1b1b';
let P = { accent: '#a8431e', ink: '#a8431e', tint: '#f2dcd2', good: '#1b1b1b', goodTint: '#ecebe7', bad: '#1b1b1b', badTint: '#ecebe7', gain: '#1b1b1b', gainTint: '#ecebe7' };
// Called by the build before each diagram: accent = guide accent, ink = text-safe accent, tint = light accent fill;
// good/bad/gain = text-safe role colour, *Tint = its light fill.
export const setPalette = p => { P = { ...P, ...p }; };
const STY = () => ({
  'dg-plain': `fill="#fff" stroke="${INK}" stroke-width="1.5"`,
  'dg-muted': 'fill="#ecebe7" stroke="#9a978f" stroke-width="1.2"',
  'dg-focus': `fill="${P.tint}" stroke="${P.ink}" stroke-width="3"`,
  'dg-good': `fill="${P.goodTint}" stroke="${P.good}" stroke-width="2.5"`,
  'dg-bad': `fill="${P.badTint}" stroke="${P.bad}" stroke-width="2.5"`,
  'dg-gain': `fill="${P.gainTint}" stroke="${P.gain}" stroke-width="2"`,
  'dg-ghost': `fill="none" stroke="${INK}" stroke-width="1.5" stroke-dasharray="5 4"`,
  'dg-hatch': `fill="url(#dg-hatch)" stroke="${INK}" stroke-width="1.5"`,
  'dg-dots': `fill="url(#dg-dots)" stroke="${INK}" stroke-width="1.5"`,
  'dg-ink': `fill="${INK}"`,
  'dg-own-a': `fill="${INK}" stroke="${INK}" stroke-width="1.5"`,
  'dg-own-b': `fill="#fff" stroke="${INK}" stroke-width="2"`,
  'dg-own-c': `fill="url(#dg-hatch)" stroke="${INK}" stroke-width="1.5"`,
  'dg-own-d': `fill="url(#dg-dots)" stroke="${INK}" stroke-width="1.5"`,
  'dg-edge-a': `stroke="${INK}"`, 'dg-edge-b': `stroke="${INK}" stroke-dasharray="2 5"`,
  'dg-edge-c': 'stroke="#7a776f"', 'dg-edge-d': 'stroke="#7a776f" stroke-dasharray="2 5"',
  'dg-arrow': `fill="none" stroke="${P.ink}"`,
  'dg-ah': `fill="${P.ink}"`,
  'dg-callout': `fill="${P.ink}" stroke="#fff" stroke-width="1.5"`,
  'dg-callout-t': '#fff', 'dg-band-t': '#fff',
  'dg-mark-good': `fill="#fff" stroke="${P.good}" stroke-width="2.2"`,
  'dg-mark-bad': `fill="${P.bad}" stroke="${P.bad}" stroke-width="2"`,
  'dg-band': `fill="${P.ink}"`,
  'dg-panel': 'fill="none" stroke="#bdbab2" stroke-width="1.2"',
  'dg-axis': `stroke="${INK}" stroke-width="1.2"`,
});
// S(name) -> presentation attributes; S(name, 'fill') -> just the fill colour (for text).
const S = (name, only) => { const v = STY()[name] ?? STY()['dg-plain']; return only ? v.replace(/^fill="([^"]*)".*$/, '$1') : v; };

// Root element. Text inside must render at >= 10px (7.5pt); check.mjs measures it.
export function svg({ w, h, label }, ...children) {
  if (!label) throw new Error('kit.svg needs a label (what the diagram shows)');
  return `<svg class="dg" viewBox="-3 -3 ${w + 6} ${h + 6}" width="${w + 6}" role="img" aria-label="${esc(label)}" font-family="Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif" stroke-linejoin="round"><defs>${DEFS()}</defs>${children.flat().join('')}</svg>`;
}

const DEFS = () => `<marker id="dg-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" ${S('dg-ah')}/></marker>`
  + `<pattern id="dg-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#fff"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1b1b1b" stroke-width="2"/></pattern>`
  + `<pattern id="dg-dots" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#fff"/><circle cx="3" cy="3" r="1.2" fill="#1b1b1b"/></pattern>`;

// tone: 'plain' (white), 'muted' (grey context), 'focus' (accent tint: the one thing that matters), 'hatch', 'dots', 'ghost' (dashed outline = not there yet / option),
// 'good' (right choice / allowed), 'bad' (wrong choice / blocked / threat), 'gain' (resources or points you get)
const tone = t => `dg-${t || 'plain'}`;
// Fill/stroke attributes for a tone, for custom shapes in a guide's own diagram files (keeps them on the palette).
export const style = t => S(tone(t));

export function text(x, y, s, { size = 13, anchor = 'middle', weight, cls: c } = {}) {
  return `<text x="${f(x)}" y="${f(y)}" font-size="${size}" text-anchor="${anchor}"${weight ? ` font-weight="${weight}"` : ''} dominant-baseline="central" fill="${c ? S(c, 'fill') : INK}">${esc(s)}</text>`;
}

export function rect(x, y, w, h, { tone: t, r = 4 } = {}) {
  return `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${r}" ${S(tone(t))}/>`;
}

// Pointy-top hexagon centred on (cx, cy). label = terrain/name, sub = small second line (e.g. a number token).
export function hex(cx, cy, r, { tone: t, label, sub, size = 12 } = {}) {
  const pts = [0, 1, 2, 3, 4, 5].map(i => { const a = -Math.PI / 6 + i * Math.PI / 3; return `${f(cx + r * Math.cos(a))},${f(cy + r * Math.sin(a))}`; }).join(' ');
  return `<polygon points="${pts}" ${S(tone(t))}/>` + (label ? text(cx, sub ? cy - size * 0.75 : cy, label, { size }) : '') + (sub ? text(cx, cy + size * 0.75, sub, { size, weight: 700 }) : '');
}

// Axial hex helpers (pointy-top). hexAt(q, r, R, ox, oy) -> centre; hexCorner(q, r, i, ...) -> corner i (0 = top, clockwise).
export const hexAt = (q, r, R, ox = 0, oy = 0) => ({ x: f(ox + R * Math.sqrt(3) * (q + r / 2)), y: f(oy + R * 1.5 * r) });
export function hexCorner(q, r, i, R, ox = 0, oy = 0) {
  const c = hexAt(q, r, R, ox, oy), a = -Math.PI / 2 + i * Math.PI / 3;
  return { x: f(c.x + R * Math.cos(a)), y: f(c.y + R * Math.sin(a)) };
}
// cells: [{ q, r, tone, label, sub }]
export const hexGrid = (cells, { R = 40, ox = 0, oy = 0, size } = {}) =>
  cells.map(c => { const p = hexAt(c.q, c.r, R, ox, oy); return hex(p.x, p.y, R - 1, { ...c, size }); }).join('');

// Square grid: cells: [{ c, r, tone, label }]; also draws empty cells for cols x rows.
export function grid(cols, rows, s, cells = [], { ox = 0, oy = 0, size = 12 } = {}) {
  let out = '';
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const cell = cells.find(k => k.c === c && k.r === r) || {};
    out += rect(ox + c * s, oy + r * s, s, s, { tone: cell.tone, r: 0 }) + (cell.label ? text(ox + c * s + s / 2, oy + r * s + s / 2, cell.label, { size }) : '');
  }
  return out;
}

// Number/round token (e.g. a dice-number disc). pips = small dots under the number (frequency hint).
export function token(x, y, s, { r = 15, pips = 0, tone: t = 'plain', size = 13 } = {}) {
  let out = `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" ${S(tone(t))}/>` + text(x, pips ? y - 3 : y, s, { size, weight: 700 });
  for (let i = 0; i < pips; i++) out += `<circle cx="${f(x + (i - (pips - 1) / 2) * 4.5)}" cy="${f(y + r * 0.5)}" r="1.5" ${S('dg-ink')}/>`;
  return out;
}

// Player piece. Owner is shown by fill style, not colour: a = solid, b = white outline, c = hatched, d = dotted.
const OWN = { a: 'dg-own-a', b: 'dg-own-b', c: 'dg-own-c', d: 'dg-own-d' };
export function piece(x, y, { shape = 'disc', owner = 'a', s = 14 } = {}) {
  const c = OWN[owner] || OWN.a;
  if (shape === 'house') return `<path d="M${f(x - s / 2)} ${f(y + s / 2)}V${f(y - s / 6)}L${f(x)} ${f(y - s / 1.6)}L${f(x + s / 2)} ${f(y - s / 6)}V${f(y + s / 2)}Z" ${S(c)}/>`;
  if (shape === 'city') return `<path d="M${f(x - s * .8)} ${f(y + s / 2)}V${f(y - s / 6)}L${f(x - s * .4)} ${f(y - s / 1.6)}L${f(x)} ${f(y - s / 6)}H${f(x + s * .8)}V${f(y + s / 2)}Z" ${S(c)}/>`;
  if (shape === 'cube') return `<rect x="${f(x - s / 2)}" y="${f(y - s / 2)}" width="${s}" height="${s}" rx="2" ${S(c)}/>`;
  if (shape === 'pawn') return `<path d="M${f(x - s / 2)} ${f(y + s / 2)}Q${f(x)} ${f(y - s / 4)} ${f(x + s / 2)} ${f(y + s / 2)}Z" ${S(c)}/><circle cx="${f(x)}" cy="${f(y - s / 3)}" r="${f(s / 4)}" ${S(c)}/>`;
  return `<circle cx="${f(x)}" cy="${f(y)}" r="${f(s / 2)}" ${S(c)}/>`;
}

// Line segment along a board edge (a, b = {x, y}, e.g. from hexCorner) (roads, routes, walls).
export const edge = (a, b, { owner = 'a', w = 6 } = {}) => `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke-width="${w}" stroke-linecap="round" ${S(`dg-edge-${owner}`)}/>`;

// Arrow for a move, plan or flow. bend > 0 curves it. dashed = option / possible, solid = what happens.
export function arrow(x1, y1, x2, y2, { bend = 0, dashed = false, w = 2.5 } = {}) {
  const mx = (x1 + x2) / 2 - (y2 - y1) * bend, my = (y1 + y2) / 2 + (x2 - x1) * bend;
  const d = bend ? `M${f(x1)} ${f(y1)}Q${f(mx)} ${f(my)} ${f(x2)} ${f(y2)}` : `M${f(x1)} ${f(y1)}L${f(x2)} ${f(y2)}`;
  return `<path d="${d}" ${S('dg-arrow')}${dashed ? ' stroke-dasharray="6 5"' : ''} stroke-width="${w}" marker-end="url(#dg-ah)"/>`;
}

// Numbered callout that matches a numbered step in the text or caption.
export const callout = (x, y, n, { r = 11 } = {}) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" ${S('dg-callout')}/>` + text(x, y, n, { size: 12, weight: 700, cls: 'dg-callout-t' });

// Verdict mark: good = check in a circle, bad = cross in a circle (shape differs, so it works in black and white).
export function mark(x, y, kind = 'good', { r = 12 } = {}) {
  const p = kind === 'good' ? `M${f(x - r * .45)} ${f(y)}L${f(x - r * .1)} ${f(y + r * .4)}L${f(x + r * .5)} ${f(y - r * .4)}` : `M${f(x - r * .4)} ${f(y - r * .4)}L${f(x + r * .4)} ${f(y + r * .4)}M${f(x + r * .4)} ${f(y - r * .4)}L${f(x - r * .4)} ${f(y + r * .4)}`;
  return `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" ${S(`dg-mark-${kind}`)}/><path d="${p}" fill="none" stroke="${kind === 'good' ? P.good : '#fff'}" stroke-width="2.6" stroke-linecap="round"/>`;
}

// Card with a title band and short lines (card anatomy, cost/recipe cards, player aids).
export function card(x, y, w, h, { title, lines = [], tone: t, size = 12 } = {}) {
  let out = rect(x, y, w, h, { tone: t, r: 6 });
  if (title) out += `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${size * 2}" rx="6" ${S('dg-band')}/>` + text(x + w / 2, y + size, title, { size, weight: 700, cls: 'dg-band-t' });
  lines.forEach((l, i) => { out += text(x + w / 2, y + (title ? size * 2 : 0) + size * 1.3 * (i + 1), l, { size: size - 1 }); });
  return out;
}

// Turn/phase strip: boxes joined by arrows. steps: ['Roll', 'Trade', 'Build']; focus = index to highlight.
export function flow(steps, { x = 0, y = 0, w = 120, h = 46, gap = 34, focus = -1, size = 13 } = {}) {
  return steps.map((s, i) => {
    const bx = x + i * (w + gap);
    return rect(bx, y, w, h, { tone: i === focus ? 'focus' : 'plain', r: 8 }) + callout(bx + 14, y + 14, i + 1, { r: 9 }) + text(bx + w / 2 + 6, y + h / 2, s, { size, weight: 600 })
      + (i < steps.length - 1 ? arrow(bx + w + 4, y + h / 2, bx + w + gap - 4, y + h / 2) : '');
  }).join('');
}

// Bar chart with value labels on every bar (no axis-reading needed). data: [{ label, value, focus }]
export function bars(data, { x = 0, y = 0, w = 520, h = 140, size = 12, fmt = v => String(v) } = {}) {
  const max = Math.max(...data.map(d => d.value)) || 1, bw = w / data.length;
  return data.map((d, i) => {
    const bh = (d.value / max) * (h - size * 3), bx = x + i * bw + bw * 0.15, by = y + h - size * 1.6 - bh;
    return rect(bx, by, bw * 0.7, bh, { tone: d.focus ? 'focus' : 'muted', r: 2 }) + text(bx + bw * 0.35, by - size * 0.7, fmt(d.value), { size: size - 1 })
      + text(bx + bw * 0.35, y + h - size * 0.6, d.label, { size });
  }).join('') + `<line x1="${x}" y1="${f(y + h - size * 1.6)}" x2="${x + w}" y2="${f(y + h - size * 1.6)}" ${S('dg-axis')}/>`;
}

// Small-multiples panel: frame + heading. Put 2-4 side by side drawn at the same scale (before/after, step 1-2-3).
export const panel = (x, y, w, h, title, body = '', { size = 12 } = {}) =>
  `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="6" ${S('dg-panel')}/>` + text(x + 10, y + size + 2, title, { size, anchor: 'start', weight: 700 }) + `<g>${body}</g>`;

// Legend row: items [{ draw: (x, y) => svgString, label }].
export const legend = (items, { x = 0, y = 0, gap = 130, size = 12 } = {}) =>
  items.map((it, i) => it.draw(x + i * gap + 8, y) + text(x + i * gap + 22, y, it.label, { size, anchor: 'start' })).join('');

export const g = (attrs, ...children) => `<g ${attrs}>${children.flat().join('')}</g>`;
