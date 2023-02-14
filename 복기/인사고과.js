function solution(scores) {
  // 원호 값
  const [oa, ob] = scores[0];
  const ov = oa + ob;
  // 인센티브 받을 수 있는 직원만 필터링
  scores.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  const li = [];
  let limit = 0;
  for (const [a, b] of scores) {
    if (b < limit) {
      // 원호가 못받는 경우 (원호와 동일한 점수가 못받는 경우)
      if (a === oa && b === ob) return -1;
    } else {
      li.push(a + b);
      limit = Math.max(limit, b);
    }
  }
  li.sort((a, b) => b - a);
  // 이진탐색으로 탐색
  let [lo, hi] = [-1, li.length + 1];
  while (lo + 1 < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (li[mid] <= ov) hi = mid;
    else lo = mid;
  }
  return hi + 1;
}
