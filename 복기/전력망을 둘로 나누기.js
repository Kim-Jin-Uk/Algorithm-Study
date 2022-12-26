function solution(n, wires) {
  let answer = Infinity;
  const wireObj = {};
  // 송전탑 개수를 구하는 함수
  const getLength = (obj, prev, visited) => {
    const nexts = obj[prev];
    for (const next of nexts) {
      if (visited.includes(next)) continue;
      visited.push(next);
      getLength(obj, next, visited);
    }
    return visited.length;
  };
  // 전력망을 나누는 함수
  const breakWire = (id1, id2) => {
    const breakedObj = Object.assign({}, wireObj);
    breakedObj[id1] = breakedObj[id1].filter((v) => v !== id2);
    breakedObj[id2] = breakedObj[id2].filter((v) => v !== id1);
    const len = getLength(breakedObj, id1, [id1]);
    return len;
  };
  // 그래프 초기화
  for (const [start, end] of wires) {
    wireObj[start] = (wireObj[start] || []).concat([end]);
    wireObj[end] = (wireObj[end] || []).concat([start]);
  }
  // 결과값 갱신
  for (const [id1, id2] of wires) {
    const len1 = breakWire(id1, id2);
    const len2 = n - len1;
    answer = Math.min(answer, Math.abs(len1 - len2));
  }

  return answer;
}
