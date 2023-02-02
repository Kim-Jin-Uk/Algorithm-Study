function solution(book_time) {
  const answer = [];
  const str2num = (str) => {
    const [h, m] = str.split(":");
    return 60 * +h + +m;
  };
  const bookTimes = book_time
    .map(([s, e]) => [str2num(s), str2num(e)])
    .sort((a, b) => a[0] - b[0]);
  for (const [s, e] of bookTimes) {
    if (!answer.length) {
      answer.push(e + 10);
      continue;
    }
    answer.sort((a, b) => a - b);
    if (answer[0] <= s) answer[0] = e + 10;
    else answer.push(e + 10);
  }
  return answer.length;
}
