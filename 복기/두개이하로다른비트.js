function solution(numbers) {
  const answer = [];
  numbers.forEach((num) => {
    if (num < 2 || num % 2 === 0) answer.push(num + 1);
    else {
      let min = 2;
      while ((num + 1) % (min * 2) === 0) min *= 2;
      answer.push(num + min / 2);
    }
  });
  return answer;
}
