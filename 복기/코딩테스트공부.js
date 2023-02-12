function solution(alp, cop, problems) {
  let [mA, mC] = [alp, cop];

  for (const [rA, rC] of problems) {
    mA = Math.max(mA, rA);
    mC = Math.max(mC, rC);
  }

  const dp = new Array(mA + 1)
    .fill(null)
    .map((_) => new Array(mC + 1).fill(Infinity));
  dp[alp][cop] = 0;

  for (let a = alp; a <= mA; a++) {
    for (let c = cop; c <= mC; c++) {
      if (a + 1 <= mA) dp[a + 1][c] = Math.min(dp[a + 1][c], dp[a][c] + 1);
      if (c + 1 <= mC) dp[a][c + 1] = Math.min(dp[a][c + 1], dp[a][c] + 1);

      for (let [rA, rC, aA, aC, t] of problems) {
        if (a >= rA && c >= rC) {
          const nA = Math.min(mA, a + aA);
          const nC = Math.min(mC, c + aC);
          dp[nA][nC] = Math.min(dp[nA][nC], dp[a][c] + t);
        }
      }
    }
  }
  return dp[mA][mC];
}
