// Turn-flow strip: the three steps of a turn, in order.
export default kit => kit.svg({ w: 470, h: 60, label: 'A turn has three steps in order: 1 roll the die, 2 move your pawn, 3 take the apples' },
  kit.flow(['Roll', 'Move', 'Take apples'], { x: 4, y: 7, w: 128, gap: 40 }));
