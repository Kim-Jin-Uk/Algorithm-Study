var maxProfit = function(prices) {
    let answer = 0
    // 촤소가격을 최대로 초기화
    let minPrice = Number.MAX_VALUE
    for(const price of prices){
        // 최소가격 갱신
        minPrice = Math.min(minPrice,price)
        // 최대수익 갱신
        answer = Math.max(answer,price - minPrice)
    }
    return answer
};