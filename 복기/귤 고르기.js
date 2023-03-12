function solution(k, tangerine) {
  let answer = 0;
  const countDict = {};
  tangerine.forEach((t) => (countDict[t] = (countDict[t] || 0) + 1));
  // 기수 정렬 적용
  const sortedArr = new Array(Math.max(...Object.values(countDict)) + 1).fill(
    null
  );
  for (const key in countDict) {
    const value = countDict[key];
    if (sortedArr[value]) sortedArr[value].push(key);
    else sortedArr[value] = [key];
  }
  // N -> tangerine의 길이, M -> 귤 크기 종류의 개수
  // 시간복잡도 O(N+M) -> O(N) <- M <= N
  fin: for (let count = sortedArr.length - 1; count > 0; count--) {
    if (!sortedArr[count]) continue;
    if (k <= 0) break;
    const keys = sortedArr[count];
    for (const _ of keys) {
      if (k <= 0) break fin;
      k -= count;
      answer++;
    }
  }
  return answer;
}
