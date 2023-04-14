function solution(target) {
  const dp = new Array(target + 1).fill(null).map(() => [Infinity, 0]);
  dp[0] = [0, 0];
  const darts = new Array(20).fill(null).map((_, i) => i + 1);
  // 점수 더해주기
  const addScore = (prev, score, add) => {
    if (prev + score > target) return;
    let [nCount, nAdd] = dp[prev + score];
    const [pCount, pAdd] = dp[prev];
    if (nCount > pCount + 1) {
      nCount = pCount + 1;
      nAdd = pAdd + add;
    } else if (nCount === pCount + 1) nAdd = Math.max(nAdd, pAdd + add);
    dp[prev + score] = [nCount, nAdd];
  };

  for (let score = 0; score < target; score++) {
    for (let dart of darts) {
      addScore(score, dart, 1);
      addScore(score, dart * 2, 0);
      addScore(score, dart * 3, 0);
    }
    addScore(score, 50, 1);
  }
  return dp[target];
}
