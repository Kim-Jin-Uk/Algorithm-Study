function solution(word) {
  const chars = ["A", "E", "I", "O", "U"];
  const dict = [];
  function dfs(prev) {
    if (prev.length > 5) return;
    if (prev.length > 0) dict.push(prev);
    for (const char of chars) {
      dfs(prev + char);
    }
  }
  dfs("");
  return dict.indexOf(word) + 1;
}
console.log(solution("AAA"));
