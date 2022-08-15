var minWindow = function(s, t) {
    // 필요한 글자 길이
    let missing = t.length
    // t를 사전형태로 저장
    const need = {}
    t.split("").forEach((char) => (need[char] = (need[char] || 0) + 1))
    // O(n)으로 풀어야 하기때문에 투포인터를 응용
    let [i,left,right] = [0,0,0]
    for (let j = 1; j <= s.length; j++) {
        const char = s[j - 1]
        if (!need[char]) need[char] = 0
        missing -= need[char] > 0
        need[char] --
        // 필요한 문자가 없다면
        if (!missing) {
            // 오버된 글자가 있다면 계속 이동
            while (i < j && need[s[i]] < 0) {
                need[s[i]]++
                i++
            }
            // 처음 갱신되거나 길이가 더 짧을 때 갱신
            if (!right || j - i <= right - left) [left, right] = [i, j]
        }
    }
    return s.substring(left, right)
}