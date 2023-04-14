function solution(n, m, x, y, queries) {
  // 현재 좌표범위로 이동이 가능한 이전 좌표의 범위 구하기
  const getPrevCoord = (x1, y1, x2, y2, c, d) => {
    if (c === 0) {
      if (y1 !== 0) y1 = y1 + d;
      y2 = Math.min(y2 + d, m - 1);
    } else if (c === 1) {
      if (y2 !== m - 1) y2 = y2 - d;
      y1 = Math.max(y1 - d, 0);
    } else if (c === 2) {
      if (x1 !== 0) x1 = x1 + d;
      x2 = Math.min(x2 + d, n - 1);
    } else if (c === 3) {
      if (x2 !== n - 1) x2 = x2 - d;
      x1 = Math.max(x1 - d, 0);
    }
    return [x1, y1, x2, y2];
  };
  // 불가능한 케이스 인지 확인
  const isOver = (x1, y1, x2, y2) => {
    if (n < x1) return true;
    if (x2 < 0) return true;
    if (m < y1) return true;
    if (y2 < 0) return true;
    return false;
  };

  const stack = [[x, y, x, y]];
  for (const [c, d] of queries.reverse()) {
    const prev = getPrevCoord(...stack.pop(), c, d);
    if (isOver(...prev)) return 0;
    stack.push(prev);
  }
  const [x1, y1, x2, y2] = stack.pop();
  return BigInt(x2 - x1 + 1) * BigInt(y2 - y1 + 1);
}
