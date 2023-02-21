function solution(board, skill) {
  let answer = 0;
  const [rlen, clen] = [board.length, board[0].length];
  const table = new Array(rlen + 1)
    .fill(0)
    .map((_) => new Array(clen + 1).fill(0));

  const setTable = ([type, r1, c1, r2, c2, degree]) => {
    degree = type === 1 ? -degree : degree;
    table[r1][c1] += degree;
    table[r2 + 1][c2 + 1] += degree;
    table[r1][c2 + 1] -= degree;
    table[r2 + 1][c1] -= degree;
  };

  for (const s of skill) setTable(s);

  const circuit = (rS, cS, fn) => {
    for (let r = rS; r < rlen; r++) {
      for (let c = cS; c < clen; c++) fn(r, c);
    }
  };

  circuit(1, 0, (r, c) => (table[r][c] += table[r - 1][c]));
  circuit(0, 1, (r, c) => (table[r][c] += table[r][c - 1]));
  circuit(0, 0, (r, c) => board[r][c] + table[r][c] > 0 && answer++);

  return answer;
}
