function solution(n, info) {
  let answer = [-1];
  let winScore = 0;
  // 점수차 계산
  const calcScore = (apeach, lion) => {
    return apeach.reduce((acc, cur, idx) => {
      if (cur < lion[idx]) return acc + 10 - idx;
      if (cur === 0 && lion[idx] === 0) return acc;
      return acc - 10 + idx;
    });
  };
  const dfs = (count, lion, prev) => {
    // 남은 화살이 없다면 리턴
    if (count === 0) {
      const score = calcScore(info, lion);
      if (winScore < score) {
        winScore = score;
        answer = lion;
      }
      return;
    }
    // 작은 점수 화살부터 쏘기
    for (let idx = prev; idx < 11; idx++) {
      const realIdx = 10 - idx;
      const copy = [...lion];
      if (count > info[realIdx]) {
        copy[realIdx] = info[realIdx] + 1;
        dfs(count - copy[realIdx], copy, idx + 1);
      } else {
        copy[10] += count;
        dfs(0, copy, idx + 1);
      }
    }
    // 남은 화살은 모두 작은 화살에 쏘기
    const copy = [...lion];
    copy[10] += count;
    dfs(0, copy, -1);
  };
  dfs(n, new Array(11).fill(0), 0);
  return answer;
}
