var canCompleteCircuit = function(gas, cost) {
    // 가능 여부 판별
    if(gas.reduce((acc,cur)=>acc+cur,0) < cost.reduce((acc,cur)=>acc+cur,0)) return -1
    // 인덱스, 연료 초기화
    let [start, fuel] = [0,0]
    // 가능한 인덱스가 유일하게 존재
    for(let idx = 0; idx < gas.length; idx++){
        // 다음 비용이 더높다면 지금 까지의 인덱스는 불가능한 인덱스임
        if(gas[idx]+fuel < cost[idx]){
            start = idx+1
            fuel = 0
        }else fuel += (gas[idx] - cost[idx])
    }
    return start
}