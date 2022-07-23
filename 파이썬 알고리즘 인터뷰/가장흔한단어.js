var mostCommonWord = function(paragraph, banned) {
    let answer = ''
    let maxCount = 0
    //특문제거, 소문자로 치환
    paragraph = paragraph.toLowerCase().replace(/[^a-z\s]/gi,' ').split(' ')
    const pGraph = {}
    for(const word of paragraph){
        //공백 및 금지단어 제거
        if(!banned.includes(word) && word !== '') pGraph[word] = (pGraph[word] || 0) + 1
    }
    for(const key of Object.keys(pGraph)){
        //단어 빈도수 체크
        if(pGraph[key] > maxCount){
            answer = key
            maxCount = pGraph[key]
        }
    }
    return answer
};

console.log(mostCommonWord(

    "a, a, a, a, b,b,b,c, c"
    ,["a"]
))