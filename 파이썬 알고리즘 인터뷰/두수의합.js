var twoSum = function(nums, target) {
    // 투포인터 사용
    // 정렬되어있지 않기때문에 인덱스를 추가하여 정렬
    nums = nums.map((v,i) => [v,i])
    nums.sort((a,b) => a[0] - b[0])
    
    let start = 0
    let end = nums.length - 1
    
    while(start < end){
        if(nums[start][0] + nums[end][0] > target){
            end --
        }else if(nums[start][0] + nums[end][0] < target){
            start ++
        }else{
            return[nums[start][1],nums[end][1]]
        }
    }

    // 딕셔너리 사용
    const numsGraph = {}
    // 값에 맞는 인덱스를 벨류로 넣어주기
    for(let idx = 0; idx < nums.length; idx++){
        numsGraph[nums[idx]] = idx
    }
    // 타겟에서 본인을 뺀값이 새로운 타겟 -> 본인이 타겟의 정확이 절반일 수 있으니 예외처리
    for(let idx = 0; idx < nums.length; idx++){
        const key = target - nums[idx]
        if(numsGraph[key] && idx !== numsGraph[key]) return [idx,numsGraph[key]]
    }
};
console.log(twoSum(
    [1,3,4,2],6
))