function solution(board) {
  let answer = 0;

  const removeBlock = (answer) => {
    let removes = 0;
    const possibleY = new Array(board.length).fill(true);

    const blocks = {};
    const removeList = [-1];

    board.forEach((row, x) => {
      row.forEach((cell, y) => {
        if (cell === 0) {
          if (possibleY[y]) board[x][y] = -1;
          return;
        } else possibleY[y] = false;

        if (blocks[cell]) {
          const { minX, maxX, minY, maxY } = blocks[cell];
          blocks[cell].minX = Math.min(x, minX);
          blocks[cell].minY = Math.min(y, minY);
          blocks[cell].maxX = Math.max(x, maxX);
          blocks[cell].maxY = Math.max(y, maxY);
        } else blocks[cell] = { minX: x, minY: y, maxX: x, maxY: y };
      });
    });

    for (const id in blocks) {
      let isRemoved = true;
      const block = blocks[id];
      const { minX, maxX, minY, maxY } = block;

      for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
          if (board[x][y] !== +id && board[x][y] !== -1) isRemoved = false;
        }
      }

      if (isRemoved) {
        removeList.push(+id);
        removes++;
      }
    }

    if (removes === 0) return answer;
    else {
      board.forEach((row, x) => {
        row.forEach((cell, y) => {
          if (removeList.includes(cell)) board[x][y] = 0;
        });
      });
      return removeBlock(answer + removes);
    }
  };

  return removeBlock(answer);
}
