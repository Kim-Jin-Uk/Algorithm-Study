function solution(plans) {
  const answer = [];

  /**
   * 시간 형태의 문자열을 숫자로 변환
   * @param {string} timeStr 숫자로 변환할 문자열
   * @returns 변환된 숫자
   */
  const timeStr2Num = (timeStr) => {
    const [HH, mm] = timeStr.split(":");
    const timeNum = +HH * 60 + +mm;
    return timeNum;
  };

  // task를 빠른 순으로 정렬 및 계산에 사용하기 위해 숫자 타입으로 변경
  const tasks = plans
    .map(([name, time, playTime]) => [name, timeStr2Num(time), +playTime])
    .sort(([, aTime], [, bTime]) => aTime - bTime);

  // 남아 있는 task를 담는 배열
  const prevs = [];
  // 현재 task
  let current = tasks.shift();
  // 현재 시간
  let taskTime = current[1];
  // 마지막에는 모든 업무를 처리하기 위해 무한한 시간을 가진 task을 마지막에 추가
  tasks.push(["", Infinity, Infinity]);

  for (const next of tasks) {
    const [nName, nTime, nPlayTime] = next;
    const [cName, cTime, cPlayTime] = current;
    // 현재 작업 처리, 남은 작업 가능한한 처리
    if (nTime >= taskTime + cPlayTime) {
      answer.push(cName);
      taskTime = taskTime + cPlayTime;
      // 남은 작업 처리
      while (prevs.length) {
        const [pName, pTime, pPlayTime] = prevs.pop();
        if (nTime >= taskTime + pPlayTime) {
          answer.push(pName);
          taskTime = taskTime + pPlayTime;
        } else {
          // 완료 못하면 다시 넣어주기
          prevs.push([pName, pTime, pPlayTime - nTime + taskTime]);
          break;
        }
      }
    }
    // 현재 작업 일부 수행하고 남은 작업에 넣기
    else prevs.push([cName, cTime, cPlayTime - nTime + taskTime]);
    current = next;
    taskTime = nTime;
  }

  return answer;
}
console.log(
  solution([
    ["aaa", "12:00", "20"],
    ["bbb", "12:10", "30"],
    ["ccc", "12:40", "10"],
  ])
);
console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);
console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
);
