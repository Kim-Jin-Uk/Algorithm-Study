var permute = function(nums) {
    const answer = []
    const visited = new Array(nums.length).fill(0)

    function makePermute(prev,visited){
        // 순열의 길이와 정수배열의 길이가 같다면 모두 채워진 상태
        if(prev.length === nums.length){
            answer.push(prev)
            return
        }
        // 방문하지 않은 인덱스만 추가 방문
        for(let idx = 0; idx < nums.length; idx++){
            if(visited[idx])continue
            const copy = [...visited]
            copy[idx] = 1
            makePermute(prev.concat([nums[idx]]),copy)
        }
    }
    makePermute([],visited)
    return answer
}