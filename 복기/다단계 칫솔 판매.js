function solution(enroll, referral, seller, amount) {
  const answer = new Array(enroll.length).fill(0);
  const graph = new Map();
  // graph 초기화
  referral.forEach((parent, i) => {
    const child = enroll[i];
    graph.set(child, { idx: i, parent });
  });
  // 부모와 수익 정산
  const distributionAmount = (amount) => {
    const parentAmount = Math.floor(amount * 0.1);
    const childAmount = amount - parentAmount;
    return [parentAmount, childAmount];
  };
  // 부모를 거슬러 올라가며 수익 정산
  const distributionAmountAll = (amount, seller) => {
    let node = seller;
    let price = amount;
    while (graph.has(node)) {
      const { idx, parent } = graph.get(node);
      let parentPrice = 0;
      [price, parentPrice] = distributionAmount(price);
      if (!parentPrice) break; // 부모에게 줄 돈없으면 순회 중단
      node = parent;
      answer[idx] += parentPrice;
    }
  };

  seller.forEach((s, i) => {
    distributionAmountAll(amount[i] * 100, s);
  });
  return answer;
}
