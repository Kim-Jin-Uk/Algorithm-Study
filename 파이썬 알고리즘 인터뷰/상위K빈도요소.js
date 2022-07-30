var topKFrequent = function(nums, k) {
    const result = []
    const hashNum = {}
    // 해시맵 초기화
    for(const num of nums){
        hashNum[num] = (hashNum[num] || 0)+1
    }
    // 정렬시킬 result배열 초기화
    for(const key in hashNum){
        result.push([key,hashNum[key]])
    }
    // result 배열 정렬
    result.sort((a,b)=>b[1]-a[1])
    const answer = []
    // k개 까지만 추출
    for(let idx =0; idx<k;idx++){
        answer.push(+result[idx][0])
    }
    return answer
}