function solution(table) {
  const directions = [
    { row: 1, col: 0, action: "D" },
    { row: 0, col: 1, action: "R" },
    { row: -1, col: 0, action: "U" },
    { row: 0, col: -1, action: "L" },
  ];
  const startRow = table.findIndex((row) => row.includes("R"));
  const startCol = table[startRow].indexOf("R");
  const targetRow = table.findIndex((row) => row.includes("G"));
  const targetCol = table[targetRow].indexOf("G");
  const obstacleSet = new Set(
    table.flatMap((row, rowIndex) =>
      row
        .split("")
        .flatMap((cell, colIndex) =>
          cell === "D" ? [`${rowIndex},${colIndex}`] : []
        )
    )
  );
  const queue = [{ row: startRow, col: startCol, distance: 0 }];
  const visited = new Set([`${startRow},${startCol}`]);
  while (queue.length > 0) {
    const { row, col, distance } = queue.shift();
    for (const { row: rowDiff, col: colDiff, action } of directions) {
      let newRow = row + rowDiff;
      let newCol = col + colDiff;
      while (table[newRow]?.[newCol] !== "D") {
        if (newRow === targetRow && newCol === targetCol) {
          return distance + 1;
        }
        if (
          !obstacleSet.has(`${newRow},${newCol}`) &&
          !visited.has(`${newRow},${newCol}`)
        ) {
          queue.push({ row: newRow, col: newCol, distance: distance + 1 });
          visited.add(`${newRow},${newCol}`);
        }
        newRow += rowDiff;
        newCol += colDiff;
      }
    }
  }
  return -1;
}
console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));
