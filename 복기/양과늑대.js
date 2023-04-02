function solution(info, edges) {
  const map = new Map();

  //map 객체 초기화
  edges.forEach(([key, child]) => {
    const value = map.get(key) || [];
    value.push(child);
    map.set(key, value);
  });
  // 최대 양 변수
  let maxSheep = 0;

  // root부터 순회하며 최대 양의 갱신
  const traverse = (sheep, wolf, nodes) => {
    maxSheep = Math.max(sheep, maxSheep);
    for (const key of nodes) {
      const parent = map.get(key) || [];
      for (const child of parent) {
        // 이미 순회 했거나 늑대가 양보다 많거나 같으면 스킵
        if (nodes.includes(child) || wolf + info[child] >= sheep) continue;
        // 노드가 양인 경우
        if (info[child] === 0) traverse(sheep + 1, wolf, [...nodes, child]);
        // 노드가 늑대인 경우
        else traverse(sheep, wolf + 1, [...nodes, child]);
      }
    }
  };
  traverse(1, 0, [0]);

  return maxSheep;
}
console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
