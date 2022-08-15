var maxProfit = function(prices) {
    let answer = 0
    const inf = Number.MAX_VALUE
    let min = inf
    prices.forEach((value,idx)=>{
        // 다음 벨류가 더크다면 최소값 갱신
        if(value < prices[idx+1]) min = Math.min(min,value)
        // 다음 벨류가 더작고 최소값이 갱신된 상태라면 수익 갱신
        else if(min !== inf){
            answer += value - min
            min = inf   
        }
    })
    return answer
}