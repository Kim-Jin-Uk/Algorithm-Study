function solution(a) {
  let answer = -1;
  if (a.length <= 2) {
    if (a.length <= 1) return 0;
    return 2;
  }

  const counter = Array(a.length + 1).fill(0);
  a.forEach((v) => counter[v]++);

  counter.forEach((v, i) => {
    if (!v) return;
    if (v * 2 <= answer) return;
    let result = 0;
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] !== i && a[j + 1] !== i) continue;
      if (a[j] === a[j + 1]) continue;
      result++;
      j++;
    }
    answer = Math.max(answer, result * 2);
  });
  return answer;
}

console.log(solution([0, 3, 3, 0, 7, 2, 0, 2, 2, 0]));
