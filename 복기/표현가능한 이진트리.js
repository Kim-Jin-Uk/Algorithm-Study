function solution(numbers) {
  const answer = [];
  const findParent = (node, len) => {
    const height = len.toString(2).length;
    len++;
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
  const makeFullTree = (tree) => {
    const len = tree.length;
    let height = 1;
    while (len > 2 ** height - 1) {
      height++;
    }
    return "0".repeat(2 ** height - 1 - len) + tree;
  };
  const isPossible = (tree) => {
    const dict = {};
    tree = makeFullTree(tree);
    const root = Math.floor(tree.length / 2);
    tree
      .split("")
      .reverse()
      .forEach((node, i) => node === "1" && (dict[i] = true));
    if (tree[root] === "0") return 0;
    for (const key in dict) {
      let child = +key;
      while (child !== root) {
        const parent = findParent(child, tree.length);
        if (dict[parent]) {
          child = parent;
        } else return 0;
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
