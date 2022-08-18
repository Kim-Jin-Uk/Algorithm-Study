var maxSubArray = function(nums) {
    // 누산합으로 처리
    for(let idx = 1; idx < nums.length; idx++){
        const sum = nums[idx-1]+nums[idx]
        nums[idx] = Math.max(nums[idx],sum)
    }
    return Math.max(...nums)
}