// Annotated board snippet: you (solid pawn) reach the rival's (white pawn) target tree first.
export default kit => kit.svg({ w: 500, h: 150, label: 'Your solid pawn on tree 3 and the rival\'s white pawn on tree 4. Tree 6 gives 2 apples; you move there first to block it' },
  [3, 4, 5, 6, 7].map((n, i) => kit.token(50 + i * 95, 90, String(n), { r: 20, tone: n === 6 ? 'focus' : 'plain' })).join(''),
  kit.text(335, 124, '2 apples', { size: 11 }),
  kit.piece(50, 50, { shape: 'pawn', s: 20 }), kit.text(50, 18, 'You', { size: 11 }),
  kit.piece(145, 50, { shape: 'pawn', owner: 'b', s: 20 }), kit.text(145, 18, 'Rival: 8 apples', { size: 11 }),
  kit.arrow(64, 56, 318, 64, { bend: -0.12 }), kit.callout(190, 30, 1));
