var fib = function(n) {
    if(n < 2) return n
    // 재귀보다 일반적으로 구하는것이 성능이 더 좋다
    let prev = 0
    let current = 1
    for(let i = 2; i <= n; i++){
        const tmp = current
        current += prev
        prev = tmp
    }
    return current
}