var findItinerary = function(tickets) {
    const answer = []
    const ticketObj = {}
    // 어휘순 결과를 위해 티켓 정렬
    tickets.sort()
    // 그래프 초기화
    for(const [start,end] of tickets){
        ticketObj[start] = ticketObj[start] || []
        ticketObj[start].push(end)
    }
    function dfs(node){
        // 티켓이 존재하면 다음 여행지로 이동
        while(ticketObj[node] && ticketObj[node].length){
            dfs(ticketObj[node].shift())
        }
        // 경로를 갱신해줌 > 끝부분부터 넣어준다
        answer.push(node)
    }
    dfs('JFK')
    // 끝부분부터 넣어줬으므로 뒤집어준다
    return answer.reverse()
}

console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]))