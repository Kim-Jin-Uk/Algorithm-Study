function solution(s) {
  const answer = [0, 0];
  while (s !== "1") {
    const origin = s.length;
    s = s.replace(/0/gi, "");
    const trans = s.length;
    answer[0]++;
    answer[1] += origin - trans;
    s = trans.toString(2);
  }
  return answer;
}
