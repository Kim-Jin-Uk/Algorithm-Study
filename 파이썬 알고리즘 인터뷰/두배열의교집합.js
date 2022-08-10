var intersection = function(nums1, nums2) {
    const answer = []
    // 배열을 사전의 형태로 변환
    const num1Obj = {}
    const num2Obj = {}
    nums1.forEach((num)=>num1Obj[num] = true)
    nums2.forEach((num)=>num2Obj[num] = true)
    // 사전1을 순회하며 사전2에 포함여부확인, 중복방지를 위해 사전2의 값을 false처리
    for(key in num1Obj){
        if(key in num2Obj && num2Obj[key]){
            answer.push(+key)
            num2Obj[key] = false
        }
    }
    return answer
}