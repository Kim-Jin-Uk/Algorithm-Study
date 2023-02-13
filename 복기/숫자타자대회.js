function solution(numbers) {
  let answer = Infinity;
  const dict = { "*": [3, 0], 0: [3, 1], "#": [3, 2] };
  for (let i = 0; i < 9; i++) dict[i + 1] = [Math.floor(i / 3), i % 3];

  let [left, right] = [
    [1, 0],
    [1, 2],
  ];
  const calcP = ([x1, y1], [x2, y2]) => {
    const [mx, my] = [Math.abs(x1 - x2), Math.abs(y1 - y2)];
    const d = Math.min(mx, my);
    return mx === 0 && my === 0 ? 1 : d * 3 + (Math.max(mx, my) - d) * 2;
  };
  const dfs = (prev, idx, l, r) => {
    if (idx === numbers.length) return (answer = Math.min(answer, prev));
    const n = dict[numbers[idx]];
    const [cl, cr] = [calcP(n, l), calcP(n, r)];
    if (cl < cr) return dfs(cl + prev, idx + 1, [...n], [...r]);
    if (cr < cl) return dfs(cr + prev, idx + 1, [...l], [...n]);
    else {
      dfs(cl + prev, idx + 1, [...n], [...r]);
      dfs(cr + prev, idx + 1, [...l], [...n]);
    }
  };
  dfs(0, 0, left, right);
  return answer;
}
