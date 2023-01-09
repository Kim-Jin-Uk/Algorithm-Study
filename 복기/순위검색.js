function solution(info, query) {
  const answer = [];
  const infos = {};
  info.forEach((infoString) => {
    const arr = infoString.split(" ");
    const score = +arr.pop();
    const key = arr.join("");
    infos[key] = (infos[key] || []).concat([score]);
  });

  for (const key in infos) {
    // 점수순 정렬
    infos[key].sort((a, b) => a - b);
  }

  //이진탐색
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
      mid = Math.floor((left + right) / 2);
    }

    return mid + 1;
  };
  // 해당 쿼리에 맞는 결과 반환
  const getResult = (query, score) => {
    const infosKey = Object.keys(infos);
    return (
      infosKey
        // 키 포함 여부로 필터링
        .filter((key) => query.every((v) => key.includes(v)))
        .reduce(
          (acc, key) =>
            acc + infos[key].length - binarySearch(infos[key], score),
          0
        )
    );
  };

  query
    // and 제외한 쿼리 배열
    .map((q) => q.split(/ and | |-/i).filter((v) => v !== ""))
    .forEach((query) => {
      const score = query.pop();
      answer.push(getResult(query, score));
    });

  return answer;
}
