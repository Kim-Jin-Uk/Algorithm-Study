var isPalindrome = function(s) {
    // 시작 끝 비교

    // s = s.toLowerCase().replace(/[^a-z0-9]/gi,'')
    // let checker = true
    // for(let idx = 0; idx < s.length /2; idx++){
    //     if(s[idx] !== s[s.length-idx-1]){
    //         checker = false
    //         break
    //     }
    // }
    // if(checker) return true
    // return false

    // 역 문자열 생성 및 비교 - 좀더 간결하고 가독성도 좋은것 같다
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'')
    const rs = s.split('').reverse().join('')
    return s === rs
}

// 성능은 크게 차이가 나지 않았다
// 1 -> 86ms 44.2mb
// 2 -> 85ms 46.8mb