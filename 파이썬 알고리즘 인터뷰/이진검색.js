var search = function(nums, target) {
    // 시작점 끝점 초기화
    let start = 0
    let end = nums.length-1

    while(start < end){
        // 이진탐색하며 중앙값과 타겟의 크기비교에 따라 시작값 및 끝값 갱신
        const mid = Math.ceil((start+end)/2)
        if(nums[mid] > target) end = mid-1
        else if(nums[mid] < target) start = mid
        else return mid
    }
    // 종료시 한번더 확인
    if(target === nums[start]) return start
    // 찾는값이 없다면 리턴
    return -1
}