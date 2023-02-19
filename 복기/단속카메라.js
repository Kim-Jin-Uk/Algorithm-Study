function solution(routes) {
  let max = -Infinity;
  return routes
    .sort((a, b) => a[1] - b[1])
    .reduce((answer, [s, e]) => {
      if (s > max) {
        answer++;
        max = e;
      }
      return answer;
    }, 0);
}
