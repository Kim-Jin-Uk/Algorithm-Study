function solution(n, s, a, b, fares) {
  let answer = Infinity;
  const graph = new Array(n);
  const node = new Array(n).fill(Infinity);

  for (let index = 0; index < n; index++) {
    graph[index] = node.map((v, i) => {
      if (i === index) return 0;
      return v;
    });
  }

  for (const [start, end, time] of fares) {
    graph[start - 1][end - 1] = time;
    graph[end - 1][start - 1] = time;
  }
  // 플루이드 워셜 적용
  for (let p = 0; p < n; p++) {
    for (let s = 0; s < n; s++) {
      for (let e = 0; e < n; e++) {
        if (graph[s][p] + graph[p][e] < graph[s][e]) {
          graph[s][e] = graph[s][p] + graph[p][e];
        }
      }
    }
  }

  for (let index = 0; index < n; index++) {
    answer = Math.min(
      answer,
      graph[s - 1][index] + graph[index][a - 1] + graph[index][b - 1]
    );
  }
  return answer;
}
