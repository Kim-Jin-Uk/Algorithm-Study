var maxSlidingWindow = function(nums, k) {
    // 슬라이딩 윈도우를 직접 구현시 O(k*n)으로 최악의 경우 n^2이다
    // 최악의 경우는 같으나 일반적인 케이스를 개선한다

    // 최대값 및 해당 인덱스를 도출하는 함수
    function getMaxAndIdx(idx){
        const arr = nums.slice(idx,idx+k)
        let max = - Number.MAX_VALUE
        let index = 0
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= max){
                max = arr[i]
                index = i
            }
        }
        return [max,index]
    }
    // 초기값 설정
    let [max,index] = getMaxAndIdx(0)
    const answer = [max]

    for(let idx = 1; idx < nums.length-k+1; idx++){
        // case1 최대값이 갱신되어질때
        if(nums[idx+k-1] >= max){
            max = nums[idx+k-1]
            index = k-1
        }
        // case2 최대값은 갱신되지 않으나 아직 슬라이딩 윈도우에 최대값이 존재할때
        else if(index > 0){
            index --
        }
        // case3 최악의 경우 최대값이 빠져나가 다시 계산해야될때
        else{
            [max,index] = getMaxAndIdx(idx)
        }
        answer.push(max)
    }
    return answer
}