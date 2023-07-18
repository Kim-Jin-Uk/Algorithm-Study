const solution = (n, start, end, roads, traps) => {
  // 간선 정보를 저장
  const edges = new Array(n + 1).fill(null).map(() => []);
  for (const [P, Q, S] of roads) {
    edges[P].push([Q, S]); // 정방향
    edges[Q].push([P, -S]); // 역방향
  }

  // 트랩 정보를 저장
  const trapMap = new Map(traps.map((node, i) => [node, i]));
  const isTrapFor = (node) => trapMap.has(node);
  const isReversedFor = (triggeredSet, node) =>
    isTrapFor(node) && triggeredSet.has(node);

  // 방문 정보를 저장
  const visited = new Array(n + 1).fill(null).map(() => new Set());
  // 우선순위 큐 > [거리, 노드, 트리거된 트랩]
  const prirorityQue = [[0, start, new Set()]];

  while (prirorityQue.length) {
    prirorityQue.sort((a, b) => b[0] - a[0]);
    const [distance, node, triggeredSet] = prirorityQue.pop(); // shift의 경우 O(n)이므로 pop을 사용

    // 목적지에 도착한 경우 리턴
    if (node === end) return distance;

    // 방문했던 노드인지 체크
    const visitedKey = [...triggeredSet].sort().join();
    if (visited[node].has(visitedKey)) continue;
    visited[node].add(visitedKey);

    // 방문하지 않은 경우 다음 노드들을 우선순위 큐에 넣음
    const isReversed = isReversedFor(triggeredSet, node);
    for (const [next, S] of edges[node]) {
      // 정방향, 역방향, 트랩 여부에 따라 간선이 없는 경우 스킵
      const isOriginReverse = S < 0 ? 1 : 0;
      const hasNotEdge =
        (isOriginReverse +
          (isReversed ? 1 : 0) +
          (isReversedFor(triggeredSet, next) ? 1 : 0)) %
        2;
      if (hasNotEdge) continue;

      // 트랩을 밟은 경우 트리거된 트랩에 넣고, 트리거된 트랩이 아닌 경우 그대로 둠
      const nextTriggeredSet = isTrapFor(next)
        ? triggeredSet.has(next)
          ? new Set([...triggeredSet].filter((x) => x !== next))
          : new Set([...triggeredSet, next])
        : triggeredSet;
      prirorityQue.push([distance + Math.abs(S), next, nextTriggeredSet]);
    }
  }
};
