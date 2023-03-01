function solution(k, ranges) {
  const integral = [0];
  // 1이 될때까지 우박수열 생성, 적분값 누산
  while (k !== 1) {
    if (k % 2) {
      integral.push((k + k * 3 + 1) / 2 + integral.at(-1));
      k = k * 3 + 1;
    } else {
      integral.push((k * 3) / 4 + integral.at(-1));
      k /= 2;
    }
  }
  // 시작, 종료지점의 누적 넓이의차 => 시작, 종료지점까지의 넓이의 누산값
  return ranges.map(([s, e]) => {
    if (integral.length - 1 + e < s) return -1;
    return integral.at(e - 1) - integral[s];
  });
}
