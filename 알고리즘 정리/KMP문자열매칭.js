function makeTable(str) {
    const table = new Array(str.length)
    let j = 0
    table[0] = 0
    for (var i = 1; i < str.length; i++) {
        while (j > 0 && str.charAt(i) !== str.charAt(j)) j = table[j - 1]
        if (str.charAt(j) === str.charAt(i))  j++
        table[i] = j
    }
    return table
}

function KMP(str, pattern) {
    const prefixes = makeTable(pattern)
    const matches = []

    let j = 0
    let i = 0
    while (i < str.length) {
        if (str[i] === pattern[j]) {
            i++
            j++
        }
        if (j === pattern.length) {
            matches.push(i-j)
            j = prefixes[j-1]
        }
        else if (str[i] !== pattern[j]) {
            if (j !== 0) j = prefixes[j-1]
            else i++
        }
    }
    return matches
}

console.log(KMP('aabcdabcdabcdaaa','abcdab'))