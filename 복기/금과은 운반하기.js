function solution(a, b, g, s, w, t) {
  let [left, right] = [0, 4 * 10 ** 14];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let [gold, silver, sum] = [0, 0, 0];
    for (let i = 0; i < g.length; i++) {
      const count =
        Math.floor(mid / (2 * t[i])) + (mid % (2 * t[i]) >= t[i] ? 1 : 0);
      gold += Math.min(g[i], count * w[i]);
      silver += Math.min(s[i], count * w[i]);
      sum += Math.min(g[i] + s[i], count * w[i]);
    }
    if (gold >= a && silver >= b && sum >= a + b) right = mid - 1;
    else left = mid + 1;
  }
  return left;
}

console.log(solution(10, 10, [100], [100], [7], [10]));
