function solution(nums) {
  const dp = new Array(nums.length).fill(-1);
  const stack = [0];
  for (let i = 1; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i])
      dp[stack.pop()] = nums[i];
    stack.push(i);
  }
  return dp;
}
