var numJewelsInStones = function(jewels, stones) {
    let answer = 0
    const jewelObj = {}
    for(const jewel of jewels){
        jewelObj[jewel] = 0
    }
    for(const stone of stones){
        if(jewelObj[stone] !== undefined){
            jewelObj[stone] ++
        }
    }
    for(const key in jewelObj){
        answer += jewelObj[key]
    }
    return answer
}