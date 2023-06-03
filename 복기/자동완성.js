function solution(words) {
  words.sort();

  let answer = 0;
  words.forEach((w, i) => {
    // 우측, 좌측 단어 초기화
    const left = words[i - 1] || "";
    const right = words[i + 1] || "";
    // 비교하며 입력횟수 갱신
    for (let i = 0; i < w.length; i++) {
      answer++;
      // 왜 index로 접근하면 안되지..
      const pre = w.substring(0, i + 1);
      if (pre !== left.substring(0, i + 1) && pre !== right.substring(0, i + 1))
        return;
    }
  });

  return answer;
}
