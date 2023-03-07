const solution = (n, costs) => {
  let answer = 0;
  const parent = new Array(n).fill(null).map((_, i) => i);
  const rank = new Array(n).fill(0);

  costs.sort((a, b) => a[2] - b[2]);
  // 부모를 찾는 함수
  const findRootFor = (parent, c) => {
    let root = c;
    while (root !== parent[root]) root = parent[root];
    while (c !== root) {
      const p = parent[c];
      parent[c] = root; // path compression 기법 적용
      c = p;
    }
    return root;
  };
  // 부모를 하나로 합치는 함수
  const unionChildsFor = (parent, rank, c1, c2) => {
    const [root1, root2] = [findRootFor(parent, c1), findRootFor(parent, c2)];
    if (root1 === root2) return;
    parent[root1] = root2;
    // union find rank 기법 적용
    if (rank[root1] === rank[root2]) rank[root1]++;
  };
  // 시간 복잡도는 O(nlog*n)
  for (const c of costs) {
    if (findRootFor(parent, c[0]) !== findRootFor(parent, c[1])) {
      answer += c[2];
      unionChildsFor(parent, rank, c[0], c[1]);
    }
  }
  return answer;
};
