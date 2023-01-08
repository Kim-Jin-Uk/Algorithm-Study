function solution(s) {
  const len = s.length;
  s = s.repeat(2);
  const isValid = (idx) => {
    const stack = [];
    for (let cIdx = idx; cIdx < len + idx; cIdx++) {
      const size = stack.length;
      if (stack[size - 1] === "{" && s[cIdx] === "}") stack.pop();
      else if (stack[size - 1] === "[" && s[cIdx] === "]") stack.pop();
      else if (stack[size - 1] === "(" && s[cIdx] === ")") stack.pop();
      else stack.push(s[cIdx]);
    }
    return stack.length === 0;
  };
  return new Array(len)
    .fill(null)
    .reduce((a, _, i) => a + (isValid(i) ? 1 : 0), 0);
}
