class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.front++;
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
      this.items = [];
    }
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(sales, links) {
  const counts = new Array(sales.length + 1).fill(0);
  const leaders = new Array(sales.length + 1);
  const members = new Map();
  links.forEach(([leader, member]) => {
    leaders[member] = leader;
    counts[leader]++;
  });
  // ceo
  leaders[1] = 0;
  counts[0] = 1;

  // 큐 초기화
  const queue = new Queue();
  counts.forEach((count, idx) => {
    if (count === 0) queue.push([idx, leaders[idx]]);
  });

  while (queue.size()) {
    const [idx, leader] = queue.shift();
    let [sum, min] = [0, 0];
    // 순회하며 [상위 팀의 수익, 하위 팀의 최소 수익] 갱신
    if (members.has(idx)) {
      sum = members.get(idx).reduce((sum, [, sale]) => sum + sale, 0);
      min = members
        .get(idx)
        .reduce(
          (min, [memberS, teamS]) => Math.min(min, memberS - teamS),
          sales[idx - 1]
        );
    }
    const el = [sales[idx - 1] + sum, min + sum];
    if (members.has(leader)) members.get(leader).push(el);
    else members.set(leader, [el]);
    if (--counts[leader] === 0) queue.push([leader, leaders[leader]]);
  }
  return Math.min(...members.get(0)[0]);
}
