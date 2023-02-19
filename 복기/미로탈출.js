function solution(maps) {
  // 시작, 레버, 탈출 지점
  let start = [];
  let lever = [];
  let exit = [];
  // 이차원 배열로 변경
  const table = maps.map((r) => r.split(""));
  const rLen = table.length;
  const cLen = table[0].length;
  // 테이블 순회하며 시작, 레버, 탈출 지점 갱신
  table.forEach((row, x) => {
    row.forEach((cel, y) => {
      if (cel === "S") start = [x, y];
      else if (cel === "L") lever = [x, y];
      else if (cel == "E") exit = [x, y];
    });
  });
  // 다익스트라 알고리즘으로 탐색
  const move = ([x1, y1], [x2, y2]) => {
    // 메모이제이션을 위한 dp
    const dp = new Array(rLen)
      .fill(null)
      .map(() => new Array(cLen).fill(Infinity));
    // 방문 노드
    const visited = new Array(rLen)
      .fill(null)
      .map(() => new Array(cLen).fill(false));

    dp[x1][y1] = 0;
    const queue = [[x1, y1]];

    while (queue.length) {
      const [px, py] = queue.shift();
      if (visited[px][py]) continue; // 방문했으면 스킵
      visited[px][py] = true;
      const nexts = [
        [px - 1, py],
        [px + 1, py],
        [px, py - 1],
        [px, py + 1],
      ];
      for (const [nx, ny] of nexts) {
        if (
          nx < 0 ||
          nx >= rLen ||
          ny < 0 ||
          ny >= cLen ||
          table[nx][ny] === "X"
        )
          continue; // 유효 좌표 아니라면 스킵
        dp[nx][ny] = Math.min(dp[nx][ny], dp[px][py] + 1);
        if (visited[nx][ny]) continue;
        queue.push([nx, ny, dp[nx][ny]]);
      }
    }
    return dp[x2][y2] === Infinity ? -1 : dp[x2][y2];
  };
  const first = move(start, lever);
  if (first === -1) return -1;
  const second = move(lever, exit);
  if (second === -1) return -1;
  return first + second;
}
