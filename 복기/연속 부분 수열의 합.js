function solution(elements) {
  const sumSet = new Set();
  const circleQueue = elements.concat(elements);
  for (let length = 1; length <= elements.length; length++) {
    for (let start = 0; start < elements.length; start++) {
      const end = start + length;
      sumSet.add(circleQueue.slice(start, end).reduce((a, b) => a + b));
    }
  }
  return sumSet.size;
}
