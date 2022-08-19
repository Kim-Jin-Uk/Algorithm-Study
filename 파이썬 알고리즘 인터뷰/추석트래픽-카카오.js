function solution(lines) {
    let answer = 0
    // 트래픽
    const traficArr = []
    // 시간
    const timeRange = []
    for(const word of lines){
        const wordSplit = word.split(' ')
        // 날짜는 버린다
        const startTimeSplit = wordSplit[1].split(':')
        // 초로 변환
        const startTime = +startTimeSplit[0]*3600 + +startTimeSplit[1]*60 + +startTimeSplit[2]
        // 딜레이 타임
        const delay = +wordSplit[2].replace('s','')
        // 트래픽 시간 초기화
        const trafic =  { startTime:+(startTime-delay+0.001).toFixed(3),endTime:startTime }
        traficArr.push(trafic)
        timeRange.push(trafic.startTime)
        timeRange.push(trafic.endTime)
    }

    for(let startTime of timeRange){
        const endTime = +(startTime+0.999).toFixed(3)
        let maxValue = 0
        // 겹치는 경우 1씩 증가시켜줌
        for(let trafic of traficArr){
            if(!(trafic.endTime < startTime) && !(trafic.startTime > endTime))maxValue ++
        }
        answer = Math.max(answer,maxValue)
    }
    
    return answer
}