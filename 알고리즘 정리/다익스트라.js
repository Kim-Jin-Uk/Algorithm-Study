function solution (times,n,k) {
    let map = new Map()
    let dp = new Array(n+1).fill(Number.MAX_VALUE)
    let visited = new Array(n+1).fill(0)
    dp[0] = 0
    dp[k] = 0

    for(let i of times){
        if(map.has(i[0])){map.get(i[[0]]).push([i[1],i[2]])}
        else{map.set(i[0],[[i[1],i[2]]])}
    }

    let que = [[k,0]]

    while (que.length > 0) {
        const [prev,prevTime] = que.shift()
        if (visited[prev] > 0){continue}
        visited[prev] = 1
        if (!map.has(prev)){continue}

        for(let [next,nextTime] of map.get(prev)){
            dp[next] = Math.min(dp[next],nextTime+dp[prev])
            if(visited[next] > 0){continue}
            que.push([next,dp[next]])
        }
        que.sort((a,b) => a[1] - b[1])
    }

    const maxTime = Math.max(...dp)
    return maxTime === Number.MAX_VALUE ? -1 : maxTime
}