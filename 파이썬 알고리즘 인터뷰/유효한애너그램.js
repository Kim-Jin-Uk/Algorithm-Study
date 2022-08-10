var isAnagram = function(s, t) {
    // 길이가 다른경우 바로리턴
    if(s.length !== t.length) return false
    // 문자열을 정렬리스트로 변환
    const sList = s.split('').sort()
    const tList = t.split('').sort()
    // 리스트를 순회하며 다르다면 리턴
    for(let idx = 0; idx < sList.length; idx++){
        if(sList[idx]!==tList[idx]) return false
    }
    return true
}