function solution(numbers, target) {
  const dfs = (idx, prev) => {
    if (idx === numbers.length) return prev === target ? 1 : 0;
    const curr = numbers[idx];
    return dfs(idx + 1, prev + curr) + dfs(idx + 1, prev - curr);
  };
  return dfs(0, 0);
}
