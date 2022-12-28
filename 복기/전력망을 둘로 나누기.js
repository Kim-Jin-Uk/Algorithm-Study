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

let unionFinds = [];

const find = (a) => {
  if (unionFinds[a] < 0) return a;
  unionFinds[a] = find(unionFinds[a]);
  return unionFinds[a];
};

const merge = (a, b) => {
  fa = find(a);
  fb = find(b);
  if (fa === fb) return;

  unionFinds[fa] += unionFinds[fb];
  unionFinds[fb] = fa;
};

function solution(n, wires) {
  let result = Infinity;
  const N = wires.length;

  for (let node = 0; node < N; node++) {
    unionFinds = new Array(n + 1).fill(-1);
    const graph = wires.filter((_, i) => i !== node);

    for (const [v, w] of graph) merge(v, w);

    const [a, b] = unionFinds.slice(1).filter((v) => v < 0);
    result = Math.min(result, Math.abs(a - b));
  }

  return result;
}

class Tree {
  constructor(n) {
    this.tree = new Array(n);
    this.min = n - 1;
  }
  addConnect(v1, v2) {
    this.connect(v1, v2);
    this.connect(v2, v1);
  }
  connect(v, target) {
    const connects = this.tree[v - 1] || [];
    connects.push(target);
    this.tree[v - 1] = connects;
  }
  getCount(v, except) {
    const connects = this.tree[v - 1] || [];
    if (connects.length === 1) return 1;
    return connects.reduce((acc, cur) => {
      if (cur === except) return acc;
      return acc + this.getCount(cur, v);
    }, 1);
  }
  setDiff(v1, v2) {
    const diff = Math.abs(this.getCount(v1, v2) * 2 - this.tree.length);
    this.min = Math.min(this.min, diff);
  }
}
function solution(n, wires) {
  const tree = new Tree(n);
  wires.forEach(([v1, v2]) => tree.addConnect(v1, v2));
  wires.forEach(([v1, v2]) => tree.setDiff(v1, v2));
  return tree.min;
}
