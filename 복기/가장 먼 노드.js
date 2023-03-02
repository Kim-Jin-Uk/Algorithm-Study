function solution(n, edge) {
  const map = new Map();
  const visited = new Array(n + 1).fill(0);
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  dp[1] = 0;

  edge.forEach(([s, e]) => {
    if (map.has(s)) map.get(s).push(e);
    else map.set(s, [e]);

    if (map.has(e)) map.get(e).push(s);
    else map.set(e, [s]);
  });

  const queue = [1];

  while (queue.length) {
    const prev = queue.shift();

    if (visited[prev] > 0) continue;
    visited[prev] = 1;

    if (!map.has(prev)) continue;

    for (let next of map.get(prev)) {
      dp[next] = Math.min(dp[next], 1 + dp[prev]);
      if (visited[next] > 0) continue;
      queue.push(next);
    }
  }

  const maxValue = Math.max(...dp);
  return dp.filter((v) => v === maxValue && v !== Infinity).length;
}
