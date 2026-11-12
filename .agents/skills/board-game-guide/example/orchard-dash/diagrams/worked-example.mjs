// Small multiples: before and after Mia's move, drawn at the same scale.
const path = (kit, ox, oy, { pawnAt, focus, apples }) => [1, 2, 3, 4, 5].map((n, i) => {
  const x = ox + 24 + i * 46;
  return kit.token(x, oy, String(n), { r: 17, tone: n === focus ? 'focus' : n === 4 ? 'ghost' : 'plain' })
    + (apples[n] ? kit.text(x, oy + 30, `${apples[n]} apple${apples[n] > 1 ? 's' : ''}`, { size: 10 }) : '')
    + (n === pawnAt ? kit.piece(x, oy - 32, { shape: 'pawn', s: 18 }) : '');
}).join('');

export default kit => kit.svg({ w: 600, h: 150, label: 'Before: Mia\'s pawn on tree 2 with 2 apples. After: she rolled 3, moved to tree 5 and took 2 apples, so she has 4' },
  kit.panel(0, 0, 290, 146, '1  Before: Mia has 2 apples', path(kit, 10, 82, { pawnAt: 2, apples: { 5: 2 } })),
  kit.panel(310, 0, 290, 146, '2  After: rolled 3, now 4 apples', path(kit, 320, 82, { pawnAt: 5, focus: 5, apples: { 5: 2 } })
    + kit.arrow(394, 58, 506, 58, { bend: -0.25, dashed: true })));
