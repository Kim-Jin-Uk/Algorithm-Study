var arrayPairSum = function(nums) {
    let answer = 0
    // 오름차순으로 정렬이후 가능한한 2개씩 묶는게 최대값
    nums.sort((a,b)=>a-b)
    // 두칸씩 건너가기
    for(let idx = 0; idx < nums.length; idx += 2){
        answer += nums[idx]
    }
    return answer
};