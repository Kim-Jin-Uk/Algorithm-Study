function solution(arr) {
  const answer = [0, 0];
  const quadTree = (table) => {
    const element = table[0][0];
    if (table.length === 1) return answer[element]++;
    let check = true;
    outer: for (const row of table) {
      for (const cell of row) {
        if (cell !== element) {
          check = false;
          break outer;
        }
      }
    }
    if (check) return answer[element]++;
    const len = table.length / 2;
    // 1사분면
    quadTree(table.slice(0, len).map((v) => v.slice(0, len)));
    // 2사분면
    quadTree(table.slice(0, len).map((v) => v.slice(len, 2 * len)));
    // 3사분면
    quadTree(table.slice(len, 2 * len).map((v) => v.slice(0, len)));
    // 4사분면
    quadTree(table.slice(len, 2 * len).map((v) => v.slice(len, 2 * len)));
  };
  quadTree(arr);
  return answer;
}
