function solution(order) {
  let answer = 0;
  const stack = [];
  let boxNum = 1;
  for (const idx of order) {
    let checker = false;
    while (true) {
      // stack이 빈상태일때 갱신해 줍니다
      if (stack.length === 0) stack.push(boxNum++);
      // 더 넣어줘야하는 경우 추가적으로 삽입해 줍니다
      if (idx > stack.at(-1)) stack.push(boxNum++);
      // 원하는 택배를 빼낼수 있는 경우 값들을 갱신해 줍니다
      else if (idx === stack.at(-1)) {
        stack.pop();
        answer++;
        checker = true;
        break;
      } else break;
    }
    if (!checker) break;
  }
  return answer;
}
