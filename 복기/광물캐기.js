function solution(picks, minerals) {
  const remainPicks = [...picks];
  const maxFatigue = [];
  const useable = minerals.slice(0, picks.reduce((acc, cur) => acc + cur) * 5);
  useable.forEach((mineral, index) => {
    if (index % 5 === 0) maxFatigue.push({ diamond: 0, iron: 0, stone: 0 });
    maxFatigue.at(-1)[mineral]++;
  });
  maxFatigue.sort(
    (a, b) =>
      b.diamond * 25 +
      b.iron * 5 +
      b.stone -
      (a.diamond * 25 + a.iron * 5 + a.stone)
  );
  const answer = maxFatigue.reduce((acc, { diamond, iron, stone }) => {
    if (remainPicks[0] !== 0) {
      remainPicks[0]--;
      return acc + diamond + iron + stone;
    } else if (remainPicks[1] !== 0) {
      remainPicks[1]--;
      return acc + diamond * 5 + iron + stone;
    } else {
      remainPicks[2]--;
      return acc + diamond * 25 + iron * 5 + stone;
    }
  }, 0);
  return answer;
}
