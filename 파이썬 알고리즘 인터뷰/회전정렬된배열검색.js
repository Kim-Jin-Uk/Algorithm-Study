var search = function(nums, target) {
    // 회전수 찾기
    let start = 0
    let end = nums.length -1
    // 시작점이 끝점이 오는경우까지 순회
    for(let rotate = 0; rotate < nums.length; rotate++){
        if(nums[start]>nums[end]){
            start ++
            end ++
            if(end === nums.length) end = 0
        }else break
    }
    // 회전수 저장
    const rotate = start
    //이진 탐색
    start = 0
    end = nums.length-1
    while(start < end){
        const mid = Math.ceil((start+end)/2)
        // 회전이 계산된 중앙위치
        const rotateMid = (mid+rotate) % nums.length
        if(nums[rotateMid] > target) end = mid-1
        else if(nums[rotateMid] < target) start = mid
        else return rotateMid
    }
    // 최종 확인
    const check = (start+rotate)%nums.length
    if(target === nums[check]) return check
    // 없다면 리턴
    return -1
}