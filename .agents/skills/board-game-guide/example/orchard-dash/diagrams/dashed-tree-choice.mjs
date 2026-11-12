// Good vs bad: from tree 1 with a roll of 3, the dashed tree beats stopping short.
export default kit => kit.svg({ w: 420, h: 150, label: 'Pawn on tree 1. Moving 3 to dashed tree 4 is marked good; stopping on plain tree 3 is marked bad' },
  [1, 2, 3, 4, 5].map((n, i) => kit.token(40 + i * 80, 80, String(n), { r: 20, tone: n === 4 ? 'focus' : 'plain' })).join(''),
  kit.text(280, 114, 'dashed: +1 bonus', { size: 11 }),
  kit.piece(40, 42, { shape: 'pawn', s: 18 }),
  kit.arrow(52, 52, 268, 56, { bend: -0.18 }), kit.mark(300, 26, 'good'),
  kit.arrow(48, 102, 196, 104, { bend: 0.15, dashed: true }), kit.mark(222, 132, 'bad'));
