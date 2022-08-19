var rob = function(nums) {
    let max = nums[0] // 한칸이상 떨어진 집중 가장 큰돈을 가진집
    if(nums.length <= 2) return Math.max(...nums) // 길이가 2 이하라면 한집만 털수있으니 바로리턴
    let answer = Math.max(nums[0],nums[1]) // 리턴값 초기화 1,2번째 집만 확인
    for(let idx = 2; idx < nums.length; idx++){
        nums[idx] += max // 한칸이상 떨어진 집중 가장 큰돈을 더해준다
        max = Math.max(nums[idx-1],max) // 가장 큰 돈을 가진집 갱신
        answer = Math.max(answer,nums[idx]) // 리턴값 갱신
    }
    return answer
}