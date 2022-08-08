var findKthLargest = function(nums, k) {
    // 내림차순 정렬 이후 K번째 값 도출
    return nums.sort((a,b)=>b-a)[k-1]
}