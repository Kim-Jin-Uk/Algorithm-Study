const isStringEqual = function (firstString, secondString) {
    if (firstString !== secondString) return false
    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] !== secondString[i]) return false
    }
    return true
}

const calcHash = function (myText, largePrime, randomNumber) {
    let hash = 0
    for (let i = 0; i < myText.length; i++) {
        hash = (hash * randomNumber + myText.charCodeAt(i)) % largePrime
    }
    return hash
}

const rabinKarp = function (parent, pattern) {
    let largePrime = 337
    let randomNumber = 50
    let stringPositions = []
    let patternHash = calcHash( pattern, largePrime, randomNumber)
    let text
    let parentHash

    for (let i = 0; i <= parent.length - pattern.length; i++) {
        text = parent.slice(i, i + pattern.length)
        parentHash = calcHash(text, largePrime, randomNumber)
        if (isStringEqual(text, pattern)) stringPositions.push(i)
        if (patternHash !== parentHash) continue
    }
    return stringPositions
}

console.log(rabinKarp('aabcdabcdabcdaaa','abcdab'))