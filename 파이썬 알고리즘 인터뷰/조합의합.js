var combinationSum = function(candidates, target) {
    const answer = []
    function subSum(idx,prev,visited){
        // 타겟과 동일하면 리턴값에 넣어주기
        if(prev === target) return answer.push(visited)
        // 타겟보다 크다면 종료
        if(prev > target) return
        // 타겟보다 작은 경우
        for(let i = idx; i < candidates.length; i++){
            // 현재 넣은 원소의 인덱스보다 크거나 같은 경우만 처리 -> 중복 제거를 위해 (2,2,3) === (2,3,2) 이다
            subSum(i,prev+candidates[i],
                  visited.concat([candidates[i]]))
        }
    }
    subSum(0,0,[])
    return answer
}