var climbStairs = function(n) {
    // 재귀로 풀기
    if(n <= 2) return n
    let prev = 1
    let current = 2
    for(let i = 2; i < n; i++){
        const tmp = current
        current += prev
        prev = tmp
    }
    return current
}