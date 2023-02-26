function solution(beginning, target) {
  let answer = Infinity;
  const [rlen, clen] = [beginning.length, beginning[0].length];

  // 해당 행 || 열을 뒤집는다
  const reverse = (idx, table, isH) => {
    if (isH) return (table[idx] = table[idx].map((v) => 1 - v));
    for (let i = 0; i < rlen; i++) {
      table[i][idx] = 1 - table[i][idx];
    }
  };

  // 해결되었는지 판별
  const isSolved = (table) => {
    for (let r = 0; r < rlen; r++) {
      for (let c = 0; c < clen; c++) {
        if (target[r][c] !== table[r][c]) return false;
      }
    }
    return true;
  };

  const dfs = (i, table, count) => {
    if (i === rlen + clen) {
      if (isSolved(table)) answer = Math.min(answer, count);
      return;
    }
    const [isH, idx] = [i >= clen, i >= clen ? i - clen : i];

    // case1: 뒤집는다
    const newTable = table.map((v) => [...v]);
    reverse(idx, newTable, isH);
    dfs(i + 1, newTable, count + 1);
    // case2: 안 뒤집는다
    dfs(i + 1, table, count);
  };

  dfs(0, beginning, 0);
  return answer === Infinity ? -1 : answer;
}

solution(
  [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
  ],
  [
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ]
);
