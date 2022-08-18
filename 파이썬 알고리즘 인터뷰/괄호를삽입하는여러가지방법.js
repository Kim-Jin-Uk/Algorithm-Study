var diffWaysToCompute = function(e) {
    // 부분 계산 함수
    function calc(left,right,symbol){
        const results = []
        for(const l of left){
            for(const r of right){
                // 심벌이 - 이고 우측 값이 음수라면 예외처리
                if(symbol === '-' && r.toString()[0] === '-') results.push(eval(l+'+'+r.toString().substring(1)))
                else results.push(eval(l+symbol+r))
            }
        }
        return results
    }
    // 연산자가 없다면 바로 리턴
    if(!e.includes('*') && !e.includes('+') && !e.includes('-')) return [+e]
    let results = []
    e.split('').forEach((char,idx) => {
        if(['*','+','-'].includes(char)){
            // 왼쪽 오른쪽으로 분활계산
            const left = diffWaysToCompute(e.substring(0,idx))
            const right = diffWaysToCompute(e.substring(idx+1))
            results = results.concat(calc(left,right,char))
        }
    })
    return results
}
console.log(diffWaysToCompute("2-1-1-1-1"))