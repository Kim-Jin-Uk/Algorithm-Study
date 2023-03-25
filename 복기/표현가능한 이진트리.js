function solution(numbers) {
  const answer = [];
  // 부모를 찾는 함수 > 이미지 첨부
  const findParent = (node, len) => {
    const height = Math.ceil(Math.log2(len++));
    for (let d = 1; d <= height; d++) {
      for (let s = 1; s < 2 ** d; s += 4) {
        if (+node === (s / 2 ** d) * len - 1)
          return (Math.ceil(s / 2) * len) / 2 ** (d - 1) - 1;
      }
      for (let s = 3; s < 2 ** d; s += 4) {
        if (+node === (s / 2 ** d) * len - 1)
          return (Math.floor(s / 2) * len) / 2 ** (d - 1) - 1;
      }
    }
  };
  // 이진 트리 문자열을 포화 이진 트리 문자열로 만드는 함수
  const makeFullTree = (tree) => {
    const len = tree.length;
    const height = Math.ceil(Math.log2(len + 1));
    return "0".repeat(2 ** height - 1 - len) + tree;
  };
  // 가능한 트리인지 확인
  const isPossible = (tree) => {
    const dict = {};
    tree = makeFullTree(tree);
    // 루트노드는 정 중앙에 있다
    const root = Math.floor(tree.length / 2);
    // 값이 있는 노드만 객체에 담는다
    for (let i = tree.length - 1; i >= 0; i--) {
      if (tree[i] === "1") dict[i] = true;
    }
    if (tree[root] === "0") return 0;

    for (const key in dict) {
      let child = +key;
      // 루트까지 순회하며 부모가 모두 값이 있다면 가능한 경우이다
      while (child !== root) {
        const parent = findParent(child, tree.length);
        if (dict[parent]) child = parent;
        // 중간에 값이 없다면 불가능한 케이스 이다
        else return 0;
      }
    }
    return 1;
  };
  numbers.forEach((num) => {
    const tree = num.toString(2);
    answer.push(isPossible(tree));
  });
  return answer;
}
