var palindromePairs = function(words) {
    let wordsMap = {}
    let result = []
    // 단어 사전 객체 초기화
    for (let i = 0; i < words.length; i++) {
        wordsMap[words[i]] = { word: words[i], index: i }
    }
    // 각 문자별 판별
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let rsWord = reverseWord(word)
        // 역 문자열 존재시, 자기자신이 펠린드롬이 아닐시
        if (wordsMap[rsWord] && rsWord !== word) {
            result.push([i, wordsMap[rsWord].index])
        }
        // 하나의 문자인지 판별
        if (checkPure(word)) {
            for (let j = i + 1; j < words.length; j++) {
                // 같은 문자로 이루어진 경우 추가
                if (checkPure(words[j], word[0]) && words[j] !== word) {
                    result.push([i, j])
                    result.push([j, i])
                }
            }
            continue
        }
        // 자기자신이 펠린드롬일때
        if (rsWord === word) {
            // 공백 문자열 처리
            if (wordsMap[''] !== undefined) {
                result.push([i, wordsMap[''].index])
                result.push([wordsMap[''].index, i])
            }
        }
        // 부분 팰린드롭이 존재하는 경우 처리
        for (let j = 0; j < word.length - 1; j++) {
            let left = word.slice(0, j + 1)
            let right = word.slice(j + 1)
            let reLeft = reverseWord(left)
            let reRight = reverseWord(right)
            if (checkPali(left) && wordsMap[reRight] !== undefined) result.push([wordsMap[reRight].index, i])
            if (checkPali(right) && wordsMap[reLeft] !== undefined) result.push([i, wordsMap[reLeft].index])
        }
    }
    // 펠린드롬 판별
    function checkPali(word) {
        for (let i = 0; i < word.length / 2; i++) {
            if (word[i] !== word[word.length - 1 - i]) return false
        }
        return true
    }
    // 하나의 문자로 이루어진 문자열 판별 > 'aaaaaaaaaaaaa'
    function checkPure(word, head) {
        let sign = head || word[0]
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== sign) return false
        }
        return true
    }
    // 문자 뒤집기
    function reverseWord(word) {
        let s = ''
            for (let i = word.length - 1; i >= 0; i--) {
                s += word[i]
            }
        return s
    }
    return result
}