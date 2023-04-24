function solution(begin, target, words) {
  const answer = [];
  words.unshift(begin);
  const map = new Map();
  let targetIndex = 0;

  for (let i = 0; i < words.length; i++) {
    const value = [];
    if (words[i] === target) targetIndex = i;

    for (let j = 0; j < words.length; j++) {
      let counter = 0;
      for (let k = 0; k < words[j].length; k++) {
        if (words[i][k] !== words[j][k]) counter++;
        if (counter > 1) break;
      }
      if (counter === 1) value.push(j);
    }
    map.set(i, value);
  }

  const visited = { 0: true };
  const move = (start, visited) => {
    if (start === targetIndex) {
      answer.push(Object.keys(visited).length - 1);
      return;
    }
    for (const i of map.get(start)) {
      if (!visited[i]) move(i, { ...visited, [i]: true });
    }
  };

  move(0, visited);

  if (answer.length === 0) return 0;
  answer.sort((a, b) => a - b);
  return answer[0];
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
