function solution(sequence, k) {
  let answer = [];
  let [left, right] = [0, 0];
  let minLength = Infinity;
  let sum = sequence[left];

  while (right < sequence.length) {
    if (sum > k) {
      sum -= sequence[left];
      left++;
    } else if (sum < k) {
      right++;
      sum += sequence[right];
    } else {
      if (minLength > right - left + 1) {
        answer = [left, right];
        minLength = right - left + 1;
      }
      sum -= sequence[left];
      left++;
    }
  }
  return answer;
}

solution([1, 2, 3, 4, 5], 7);
