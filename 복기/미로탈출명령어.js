function solution(n, m, x, y, r, c, k) {
  const mDist = (x, y, r, c) => Math.abs(x - r) + Math.abs(y - c);

  const move = (n, m, x, y) => {
    let dx = [1, 0, 0, -1];
    let dy = [0, -1, 1, 0];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 1 && nx <= n && ny >= 1 && ny <= m) return i;
    }
  };

  let minDist = mDist(x, y, r, c);
  const res = k - minDist;
  const alp = ["d", "l", "r", "u"];

  if (minDist % 2 !== k % 2 || res < 0) return "impossible";

  let answer = "";

  while (minDist < k) {
    let temp = move(n, m, x, y, r, c);
    answer += alp[temp];
    if (temp === 0) x++;
    else if (temp === 1) y--;
    else if (temp === 2) y++;
    else x--;

    minDist = mDist(x, y, r, c);
    k--;
  }

  if (x < r) answer += "d".repeat(r - x);
  if (y > c) answer += "l".repeat(y - c);
  if (y < c) answer += "r".repeat(c - y);
  if (x > r) answer += "u".repeat(x - r);

  return answer;
  // console.log('minDist, k', minDist, k, x, y);
  // console.log('answer: ', answer);
}
