var leastInterval = function(tasks, n) {
    let [cycle,cycleCount,dict] = [0,0,{}]
    
    tasks.forEach((task) => {
        // 사전 갱신
        dict[task] = (dict[task] || 0) + 1
        // 최대값보다 크다면 최대값 갱신, 사이클수 초기화
        if(dict[task] > cycle) {
            cycle = dict[task]
            cycleCount = 1
        }
        // 최대값과 동일하다면 사이클수 증가
        else if (dict[task] === cycle) cycleCount ++
    })
    // 계산식 > 최대 사이클 길이 * n+1 - n + 사이클수 - 1
    //  n = 0 일때 처리
    return Math.max(cycle*(n+1) - n + cycleCount - 1, tasks.length)
}