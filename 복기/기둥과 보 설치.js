const isSames = (arr) => {
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) return false;
  }
  return true;
};

const isCorrect = (ans, c1, c2, c3) => {
  if (ans.find(([a, b, fr]) => isSames([a, c1, b, c2, fr, c3]))) return true;
  return false;
};

//기둥
const checkPillar = (ans, x, y) => {
  if (y === 0) return true;
  if (isCorrect(ans, x, y - 1, 0)) return true;
  if (isCorrect(ans, x, y, 1)) return true;
  if (isCorrect(ans, x - 1, y, 1)) return true;
  return false;
};

//보
const checkPlate = (ans, x, y) => {
  if (isCorrect(ans, x, y - 1, 0)) return true;
  if (isCorrect(ans, x + 1, y - 1, 0)) return true;
  if (isCorrect(ans, x + 1, y, 1) && isCorrect(ans, x - 1, y, 1)) return true;
  return false;
};

const buildFrame = (ans, x, y, frame) => {
  if (frame) {
    if (checkPlate(ans, x, y)) ans.push([x, y, frame]);
  } else {
    if (checkPillar(ans, x, y)) ans.push([x, y, frame]);
  }
};

const destroyFrame = (ans, x, y, frame) => {
  const copy = ans.slice();
  const idx = ans.findIndex(([a, b, fr]) => a === x && b === y && fr === frame);

  copy.splice(idx, 1);
  for (const frs of copy) {
    const [xpos, ypos, fr] = frs;
    if (fr) {
      if (!checkPlate(copy, xpos, ypos)) return;
    } else {
      if (!checkPillar(copy, xpos, ypos)) return;
    }
  }

  ans.splice(idx, 1);
};

function solution(n, build_frame) {
  const answer = [];

  for (const frame of build_frame) {
    const [x, y, fr, isInstall] = frame;

    if (isInstall) buildFrame(answer, x, y, fr);
    else destroyFrame(answer, x, y, fr);
  }

  return answer.sort((a, b) =>
    a[0] === b[0] ? (a[1] === b[1] ? a[2] - b[2] : a[1] - b[1]) : a[0] - b[0]
  );
}
