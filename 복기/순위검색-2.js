/** 쿼리를 키 형태로 변환하고 점수기준과 함께 반환하는 함수 */
const convertQuery = (query) => {
  const keys = query.split(" ").filter((v) => v !== "and");
  const score = +keys.pop();
  return [`|${keys.join("|")}`, +score];
};
/** 정보를 기반으로 키 배열을 생성하고 점수와 함께 반환하는 함수 */
const convertInfo = (info) => {
  const splitInfo = info.split(" ");
  const score = +splitInfo.pop();

  const keys = [];
  const dfs = (idx, prev) => {
    if (idx === splitInfo.length) return keys.push(prev);
    dfs(idx + 1, prev + "|" + splitInfo[idx]);
    dfs(idx + 1, prev + "|-");
  };
  dfs(0, "");
  return [keys, score];
};
/** 이진 탐색 함수 */
const binarySearch = (scores, score) => {
  let [left, right] = [0, scores.length];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (scores[mid] >= score) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};
function solution(info, query) {
  // 키: [점수, 점수, ...] 형태로 저장하는 객체
  const cache = {};
  // 캐시 초기화
  info.forEach((v) => {
    const [keys, score] = convertInfo(v);
    for (const key of keys) {
      cache[key] = cache[key] || [];
      cache[key].push(score);
    }
  });
  // 캐시 정렬
  for (const key in cache) cache[key].sort((a, b) => b - a);
  // 각 쿼리에 대해 이진 탐색을 수행
  return query.map((v) => {
    const [key, score] = convertQuery(v);
    const scores = cache[key] || [];
    return binarySearch(scores, score);
  });
}
