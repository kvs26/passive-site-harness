// Compare two options by what matters (apples), not by distance.
export default kit => kit.svg({ w: 320, h: 150, label: 'Bar chart: moving 2 trees gives 3 apples, moving 4 trees gives 1 apple' },
  kit.bars([{ label: 'Move 2 trees', value: 3, focus: true }, { label: 'Move 4 trees', value: 1 }], { x: 10, y: 4, w: 300, h: 140, fmt: v => `${v} apple${v > 1 ? 's' : ''}` }));
