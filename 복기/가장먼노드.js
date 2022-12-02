function solution(n, edge) {
  let map = new Map();
  let dp = new Array(n + 1).fill(Infinity);
  let visited = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  edge.forEach(([s, e]) => {
    if (map.has(s)) map.get(s).push(e);
    else map.set(s, [e]);
    if (map.has(e)) map.get(e).push(s);
    else map.set(e, [s]);
  });
  const queue = [[1, 0]];
  while (queue.length) {
    const [prev, prevEdges] = queue.shift();
    if (visited[prev]) continue;
    visited[prev] = 1;
    if (!map.has(prev)) continue;
    for (const next of map.get(prev)) {
      dp[next] = Math.min(dp[next], dp[prev] + 1);
      if (visited[next]) continue;
      queue.push([next, dp[next]]);
    }
    queue.sort((a, b) => a[1] - b[1]);
  }
  const maxDistance = Math.max(...dp);
  return dp.reduce((acc, cur) => acc + (cur === maxDistance ? 1 : 0), 0);
}
