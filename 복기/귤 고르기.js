function solution(k, tangerine) {
  let answer = 0;
  const countDict = {};
  tangerine.forEach((t) => (countDict[t] = (countDict[t] || 0) + 1));
  const countArr = Object.values(countDict).sort((a, b) => b - a);
  let idx = 0;
  while (k > 0) {
    k -= countArr[idx];
    answer++;
    idx++;
  }
  return answer;
}
