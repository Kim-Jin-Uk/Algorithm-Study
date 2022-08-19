function solution(cacheSize, cities) {
    let answer = 0
    let cache = []
    for(const c of cities){
        // 대소문자 구분을 하지 않는다
        const city = c.toLowerCase()
        //캐시가 다 차지않은 경우
        if(cache.length < cacheSize){
            // 캐시안에 해당 도시가 있으면 순서를 바꿔준다
            if(cache.includes(city)){
                answer ++
                cache = cache.filter(v=>v!==city)
                if(cache.length < cacheSize) cache.push(city)
            }
            // 캐시안에 해당 도시가 없으면 넣어준다
            else{
                answer += 5
                cache.push(city) 
            }
        }
        // 캐시가 다 찬경우
        else{
            // 캐시안에 도시가 존재하면 순서를 바꿔준다
            if(cache.includes(city)){
                answer ++
                cache = cache.filter(v=>v!==city)
                if(cache.length < cacheSize) cache.push(city)
            }
            // 캐시안에 도시가 없으면 맨 앞값을 빼고 넣어준다
            else{
                answer += 5
                cache.shift()
                if(cache.length < cacheSize)cache.push(city)
            }
        }
    }
    return answer
}