function solution(m, n, puddles) {
  let caseDp = new Array(m).fill(null).map(() => new Array(n).fill(0));
  caseDp[0][0] = 1;

  const isInPuddles = ([cx, cy]) => {
    for (const [px, py] of puddles) {
      if (px === cx && py === cy) return true;
    }
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== 0)
        caseDp[i][j] = (caseDp[i][j] + caseDp[i - 1][j]) % 1000000007;
      if (j !== 0)
        caseDp[i][j] = (caseDp[i][j] + caseDp[i][j - 1]) % 1000000007;
      if (isInPuddles([m - i, n - j])) caseDp[i][j] = 0;
    }
  }

  return caseDp[m - 1][n - 1] % 1000000007;
}

console.log(solution(4, 3, [[2, 2]]));
