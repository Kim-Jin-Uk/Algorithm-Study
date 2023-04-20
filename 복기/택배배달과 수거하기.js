function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let [i, j] = [n - 1, n - 1];

  const pickOrDeliver = (idx, iter) => {
    let box = 0;
    while (idx >= 0 && box <= cap) {
      if (box + iter[idx] <= cap) {
        box += iter[idx];
        idx--;
      } else {
        iter[idx] -= cap - box;
        break;
      }
    }
    return idx;
  };

  while (i >= 0 || j >= 0) {
    if (deliveries[i] === 0 && pickups[j] === 0) {
      i--;
      j--;
      continue;
    }

    answer += (Math.max(i, j) + 1) * 2;
    i = pickOrDeliver(i, deliveries);
    j = pickOrDeliver(j, pickups);
  }
  return answer;
}
