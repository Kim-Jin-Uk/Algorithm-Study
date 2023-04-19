function solution(targets) {
  let answer = 0;
  targets.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
  let last = -1;
  targets.forEach(([s, e]) => {
    if (last <= s) {
      answer++;
      last = e;
    } else if (e < last) last = e;
  });
  return answer;
}
