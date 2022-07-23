var reverseString = function(s) {
    // 가장먼저 생각난 방법 하지만 이러면 공부에 의미가 없다
    s.reverse()
    // 다시 푼 풀이 두 코드의 성능차이는 거의 없다
    for(let idx = 0; idx < s.length/2;idx++){
        const rs = s[idx]
        s[idx] = s[s.length - idx - 1]
        s[s.length - idx - 1] = rs
    }
}