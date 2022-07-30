var letterCombinations = function(digits) {
    // 번호와 문자를 매핑
    const numHash = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z'],
    }
    const answer = []
    // 인덱스를 하나씩 늘려가며 새로운 문자열 생성
    function makeWord(idx,prevWord){
        // 마지막번호까지 처리했다면 리턴
        if(idx === digits.length){
            // 빈 문자열 처리
            if(prevWord !== '') answer.push(prevWord)
            return
        }
        // 재귀적으로 인덱스를 1씩 늘려감
        for(const char of numHash[digits[idx]]){
            makeWord(idx+1,prevWord+char)
        }
    }
    makeWord(0,'')
    return answer
}