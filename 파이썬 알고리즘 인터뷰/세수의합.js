var threeSum = function(nums) {
    const answer = []
    // 투포인터를 사용하기 위해 정렬
    nums.sort((a,b)=>a-b)
    // 첫번째 값은 순회
    for(let idx = 0; idx < nums.length-2; idx++){
        // 직전값과 동일하면 스킵
        if(idx > 0 && nums[idx] === nums[idx-1]) continue
        const key = 0 - nums[idx]
        let start = idx+1
        let end = nums.length - 1
        // 투포인터 사용
        while(start < end){
            // 키값과 계산값이 동일하면 리턴값에 넣어주기
            if(nums[start] + nums[end] === key){
                answer.push([nums[idx],nums[start],nums[end]])
                // 직전값과 동일하면 스킵
                while(start < end && nums[start] === nums[start+1]){
                    start ++
                }
                while(start < end && nums[end] === nums[end-1]){
                    end --
                }
                start ++
                end --
            }
            else if(nums[start] + nums[end] < key) start ++
            else end --
        }
    }
    return answer
};
console.log(threeSum([-1,0,1,2,-1,-4]))