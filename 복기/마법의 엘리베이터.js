function solution(storey) {
  let answer = Infinity;
  const str = "" + storey;
  function dfs(idx, prev, upper) {
    if (idx < 0) return (answer = Math.min(answer, prev + (upper ? 1 : 0)));
    const curr = +str[idx] + (upper ? 1 : 0);
    if (curr > 5) return dfs(idx - 1, prev + 10 - curr, true);
    if (curr < 5) return dfs(idx - 1, prev + curr, false);
    dfs(idx - 1, prev + 10 - curr, true);
    dfs(idx - 1, prev + curr, false);
  }
  dfs(str.length - 1, 0, false);
  return answer;
}
