function solution(n, k, enemy) {
  let left = 0;
  let right = enemy.length;

  const check = (n, k, mid, enemy) => {
    // 무적권으로 커버 가능
    if (mid <= k) return true;
    const slice = enemy.slice(0, mid).sort((a, b) => b - a);
    let sum = 0;
    // 큰수들은 무적권으로 처리
    for (let i = k; i < slice.length; i++) {
      sum += slice[i];
      if (sum > n) return false;
    }
    return true;
  };

  // 이진 탐색 통해서 처리
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (check(n, k, mid, enemy)) left = mid + 1;
    else right = mid - 1;
  }

  return right;
}
