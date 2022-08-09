var largestNumber = function(nums) {
    // 교체 판별 유무 확인
    function swap(n1,n2){
        return `${n1}${n2}` < `${n2}${n1}`
    }
    let i = 1
    // 배열 순회
    while(i < nums.length){
        let j = i
        // 순회한 배열 까지 다시 순회하며 교체 판별 및 교체
        while(j > 0 && swap(nums[j-1],nums[j])){
            [nums[j],nums[j-1]] = [nums[j-1],nums[j]]
            j --
        }
        i ++
    }
    const answer = nums.map((v)=>v).join('')
    // '00', '000' 등의 예외처리
    if(answer[0] === '0') return '0'
    return answer
}