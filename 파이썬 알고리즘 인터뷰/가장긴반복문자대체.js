var characterReplacement = function(s, k) {
    // 투포이터 응용
    let [i,max,len] = [0,0,0]
    let map = {}
    s.split('').forEach((char,j) => {
        // 사전 갱신
        map[char] = (map[char] || 0) + 1
        // 최대값 갱신
        max = Math.max(map[char],max)
        while(j - i + 1 - max > k) map[s[i++]] --
        len = Math.max(len, j-i+1)
    })
    return len
}