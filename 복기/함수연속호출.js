const arr = [];
const solution = (str) => {
  if (str === undefined) {
    const result = arr.join(" ");
    arr.length = 0;
    return result;
  }
  arr.push(str);
  return solution;
};
console.log(solution("value1")("value2")("value3")("value4")());
console.log(solution("value5")("value6")("value7")());
