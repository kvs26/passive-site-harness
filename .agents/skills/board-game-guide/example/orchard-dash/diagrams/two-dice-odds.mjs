// Ways to roll each two-dice total (out of 36). Values are computed, not typed, so the chart cannot drift from the maths.
export default kit => {
  const ways = t => 6 - Math.abs(7 - t);
  const data = Array.from({ length: 11 }, (_, i) => ({ label: String(i + 2), value: ways(i + 2), focus: i + 2 === 7 }));
  return kit.svg({ w: 560, h: 160, label: 'Bar chart of two-dice totals 2 to 12: 7 is the most likely with 6 ways in 36; 2 and 12 have 1 way each' },
    kit.bars(data, { x: 10, y: 4, w: 540, h: 152 }));
};
