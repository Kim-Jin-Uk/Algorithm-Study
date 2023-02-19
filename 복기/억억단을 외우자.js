function solution(e, starts) {
  const numCnt = new Array(e + 1).fill(1);
  const numCntAns = new Array(e + 1).fill(0);

  // 약수 개수 갱신
  for (let i = 2; i <= e; i++) {
    for (let j = 1; j <= e / i; j++) numCnt[i * j]++;
  }

  let [max, maxIdx] = [0, 0];
  // e 부터 j 까지에서 최대값 메모이제이션
  for (let j = e; j >= 0; j--) {
    maxIdx = max > numCnt[j] ? maxIdx : j;
    max = max > numCnt[j] ? max : numCnt[j];
    numCntAns[j] = maxIdx;
  }

  return starts.reduce((acc, s) => {
    acc.push(numCntAns[s]);
    return acc;
  }, []);
}
