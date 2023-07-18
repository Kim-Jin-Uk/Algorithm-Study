function solution(arr) {
  // 완전 탐색: 모든 경우의 수는 n!에 근사 (n > symbol 개수) => 불가
  // 그리디: a-(b-c) 가 최대가 되는 케이스 존재 => 불가

  const nums = [];
  const symbols = [];
  arr.forEach((el, i) => {
    if (i % 2) symbols.push(el);
    else nums.push(+el);
  });

  const N = nums.length;
  const posDP = new Array(N).fill(null).map(() => new Array(N).fill(-Infinity));
  const negDP = new Array(N).fill(null).map(() => new Array(N).fill(Infinity));

  for (let diff = 0; diff < N; diff++) {
    for (let s = 0; s < N - diff; s++) {
      const e = s + diff;
      if (s === e) {
        posDP[s][e] = nums[s];
        negDP[s][e] = nums[s];
        continue;
      }
      for (let i = s; i < e; i++) {
        if (symbols[i] === "+") {
          posDP[s][e] = Math.max(posDP[s][e], posDP[s][i] + posDP[i + 1][e]);
          negDP[s][e] = Math.min(negDP[s][e], negDP[s][i] + negDP[i + 1][e]);
        } else {
          posDP[s][e] = Math.max(posDP[s][e], posDP[s][i] - negDP[i + 1][e]);
          negDP[s][e] = Math.min(negDP[s][e], negDP[s][i] - posDP[i + 1][e]);
        }
      }
    }
  }

  return posDP[0][N - 1];
}
