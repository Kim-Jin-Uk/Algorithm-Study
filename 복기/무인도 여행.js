function solution(maps) {
  const answer = [];
  let [row, col] = [maps.length, maps[0].length];
  let [dx, dy] = [
    [-1, 0, 1, 0],
    [0, -1, 0, 1],
  ];
  const table = maps.map((v) => v.split(""));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (table[i][j] === "X") continue;
      let cnt = +table[i][j];
      table[i][j] = "X";
      let stack = [[i, j]];

      while (stack.length) {
        let [x, y] = stack.pop();
        for (let k = 0; k < 4; k++) {
          let [nx, ny] = [x + dx[k], y + dy[k]];
          if (
            nx >= 0 &&
            nx < row &&
            ny >= 0 &&
            ny < col &&
            table[nx][ny] !== "X"
          ) {
            cnt += +table[nx][ny];
            table[nx][ny] = "X";
            stack.push([nx, ny]);
          }
        }
      }
      answer.push(cnt);
    }
  }
  answer.sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}
