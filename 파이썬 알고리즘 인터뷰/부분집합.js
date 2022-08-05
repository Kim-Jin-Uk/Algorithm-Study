var subsets = function(nums) {
    const answer = []
    function makeSubset(visited,idx){
        // 방문 경로를 리턴값에 넣어주기
        answer.push(visited)
        // 방문한 노드보다 작은 노드는 고려하지 않음 > 중복제거
        for(let i = idx+1; i < nums.length; i++){
            makeSubset(visited.concat([nums[i]]),i)
        }
    }
    makeSubset([],-1)
    return answer
}