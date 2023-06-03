const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, arrString] = input;

const arr = arrString.split(" ").map((v) => +v);

const answer = new Array(N).fill(-1);
const stack = [0];
for (let idx = 1; idx < N; idx++) {
  while (stack.length && arr[stack.at(-1)] < arr[idx]) {
    answer[stack.pop()] = arr[idx];
  }
  stack.push(idx);
}
console.log(answer);
