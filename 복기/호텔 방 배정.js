function solution(k, room_number) {
  const map = new Map();

  return room_number.map((num) => {
    if (!map.get(num)) {
      map.set(num, num + 1);
      return num;
    }
    // 갱신할 노드들 관리
    const updates = [num];
    // 배정할 방 번호
    let newNum = map.get(num);
    while (true) {
      if (!map.get(newNum)) break;
      newNum = map.get(newNum);
      updates.push(newNum);
    }
    updates.push(newNum);
    // path compression 기법 적용
    updates.forEach((num) => map.set(num, newNum + 1));
    return newNum;
  });
}
