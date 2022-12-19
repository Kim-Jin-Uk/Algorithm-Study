function solution(topping) {
  // 형제의 토핑가짓수를 저장하는 Set과 인덱스에 따른 토핑 가짓수를 저장하는 배열을 선언해 줍니다
  const [b1Dict, b1Arr, b2Dict, b2Arr] = [new Set(), [], new Set(), []];
  // 토핑리스트를 순회하며 초기화 해줍니다
  topping.forEach((t1, i) => {
    const t2 = topping.at(-i);
    b1Dict.add(t1);
    if (i !== 0) b2Dict.add(t2); // i가 0일때 at(0)은 0번 인덱스를 호출합니다 - 원하는 값이 아니에요
    b1Arr.push(b1Dict.size);
    b2Arr.push(b2Dict.size);
  });
  // 누산합을 통해 비교하며 더해줍니다
  return b1Arr.reduce(
    (acc, cur, i) => (cur === b2Arr.at(-i - 1) ? acc + 1 : acc),
    0
  );
}
