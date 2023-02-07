const solution = (expression) => {
  let answer = 0;
  const priorities = [
    ["+", "-"],
    ["+", "*"],
    ["-", "+"],
    ["-", "*"],
    ["*", "-"],
    ["*", "+"],
  ];
  const calc = (symbol, str) => {
    let [full, prev] = ["", ""];
    for (const char of str) {
      if (isNaN(char)) {
        if (char === symbol) prev += char;
        else if (char === "-" && (prev === "" || isNaN(prev[prev.length - 1])))
          prev += char;
        else {
          full += eval(prev) + char;
          prev = "";
        }
      } else prev += char;
    }
    return full + eval(prev);
  };
  for (const symbols of priorities) {
    let str = expression;
    for (const symbol of symbols) str = calc(symbol, str);
    answer = Math.max(answer, Math.abs(eval(str)));
  }
  return answer;
};
