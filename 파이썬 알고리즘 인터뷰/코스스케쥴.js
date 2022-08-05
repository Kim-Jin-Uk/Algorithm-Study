var canFinish = function(numCourses, prerequisites) {
    const graph = {}
    // 그래프 초기화
    for(const [next, prev] of prerequisites){
        graph[next] = graph[next] || []
        graph[next].push(prev)
    }
    // 순환 판별
    const traced = []
    // 방문 판별
    const visited = []
    function dfs(prev){
        // 순환시 false
        if(traced.includes(prev)) return false
        // 순환없이 재방문시 true
        if(visited.includes(prev)) return true
        traced.push(prev)
        if(graph[prev]){
            // 탐색
            for(next of graph[prev]){
                if(!dfs(next)) return false
            }   
        }
        // 순환구조가 없다면 다시 제거
        const idx = traced.indexOf(prev)
        if (idx > -1) traced.splice(idx, 1)
        // 방문노드에 추가
        visited.push(prev)
        return true
    }
    for(const prev in graph){
        // 각 요소별 확인
        if(!dfs(+prev)) return false
    }
    return true
}

console.log(canFinish(2
    ,[[1,0],[0,1]]))