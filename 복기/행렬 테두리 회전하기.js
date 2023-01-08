function solution(rows, columns, queries) {
  const table = new Array(rows)
    .fill(null)
    .map((_, r) =>
      new Array(columns).fill(null).map((_, c) => r * columns + c + 1)
    );
  const getMinFor = (x1, y1, x2, y2) => {
    let min = Infinity;
    for (let i = x1; i < x2; i++) {
      table[i][y1] = table[i + 1][y1];
      min = Math.min(min, table[i][y1]);
    }
    for (let i = y1; i < y2; i++) {
      table[x2][i] = table[x2][i + 1];
      min = Math.min(min, table[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      table[i][y2] = table[i - 1][y2];
      min = Math.min(min, table[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      table[x1][i] = table[x1][i - 1];
      min = Math.min(min, table[x1][i]);
    }
    return min;
  };
  const addMinAfterRotate = (answer, query) => {
    const [x1, y1, x2, y2] = query.map((v) => v - 1);
    let [min, tmp] = [table[x1][y1], table[x1][y1]];
    min = Math.min(getMinFor(x1, y1, x2, y2), min);
    table[x1][y1 + 1] = tmp;
    answer.push(min);
    return answer;
  };
  return queries.reduce(addMinAfterRotate, []);
}
