var majorityElement = function(nums) {
    const dict = {} // 숫자를 담을 객체
    for(const num of nums){
        // 각 숫자별 카운팅
        dict[num] = ( dict[num] || 0 ) + 1
    }
    for(const key in dict){
        // 과반수 이상이라면 리턴
        if(dict[key] >= (nums.length / 2)) return +key
    }
}