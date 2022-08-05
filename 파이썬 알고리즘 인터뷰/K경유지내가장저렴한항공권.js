function findCheapestPrice(n, flights, src, dst, k){
    // 경로를 담을 map
    const map = new Array(n)
    // map 초기화
    for(let i = 0; i < n; i ++){
        map[i] = []
    }
    flights.forEach(flight => {
        const [start, end, price] = flight
        map[start].push([end, price])
    })
    // 비용을 담을 dp
    const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER)
    // 시작노드 초기화
    dp[src] = 0
    const queue = [[src, 0, 0]]
    while (queue.length) {
        const [now, totalPrice, move] = queue.shift()
    
        map[now].forEach(([next, price]) => {
            // 비용이 더 싸고 k이하 경유한 경우 처리
            if (move <= k && totalPrice + price < dp[next]) {
                dp[next] = totalPrice + price
                queue.push([next, totalPrice + price, move+1])
            }
        })
    }
    return dp[dst] !== Number.MAX_SAFE_INTEGER ? dp[dst] : -1
}


console.log(findCheapestPrice(
    4
    ,[[0,1,1],[0,2,5],[1,2,1],[2,3,1]]
    ,0
    ,3
    ,1
))