var networkDelayTime = function(times, n, k) {
    // 경로를 담을 map
    let map = new Map()
    // 시간을 담을 dp
    let dp = new Array(n+1).fill(Number.MAX_VALUE)
    // 방문 노드 초기화
    let visited = new Array(n+1).fill(0)
    // 시작노드 시간 초기화
    dp[0] = 0
    dp[k] = 0
    // map 초기화
    for(let i of times){
        if(map.has(i[0])){map.get(i[[0]]).push([i[1],i[2]])}
        else{map.set(i[0],[[i[1],i[2]]])}
    }
    // 시작노드부터 출발
    let que = [[k,0]]

    while (que.length > 0) {
        const [prev,prevTime] = que.shift()
        // 방문했다면 스킵
        if (visited[prev] > 0){continue}
        visited[prev] = 1
        // 경로가 더이상 없다면 스킵
        if (!map.has(prev)){continue}

        for(let [next,nextTime] of map.get(prev)){
            // 시간 갱신
            dp[next] = Math.min(dp[next],nextTime+dp[prev])
            if(visited[next] > 0){continue}
            que.push([next,dp[next]])
        }
        // 우선순위 큐로 구현
        que.sort((a,b) => a[1] - b[1])
    }

    const maxTime = Math.max(...dp)
    // 모든 노드에 도달하지 못하면 -1 리턴
    return maxTime === Number.MAX_VALUE ? -1 : maxTime
}