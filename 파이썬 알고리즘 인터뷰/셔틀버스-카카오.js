function solution(n, t, m, timetable) {
    let answer = 0
    // 시간표 숫자로 변환
    timetable = timetable.map((v) => {
        const timeSplit = v.split(':')
        return +timeSplit[0] * 60 + +timeSplit[1]
    })
    // 시간표 정렬
    timetable.sort((a,b)=>b-a)
    // 기준시간 09:00
    let time = 540
 
    for(let idx = 0; idx < n; idx++){
        let crewTime = 0
        let spacious = false
        for(let counter = 0; counter < m; counter++){
            // 마지막 탑승 가능 시간
            if(timetable.length === 0 || timetable[timetable.length-1] > time) {
                spacious = true
                break
            }
            // 탑승 가능 시간 갱신 > js는 pop이 빠르다
            crewTime = timetable.pop()
        }
        if(spacious) answer = time
        else answer = crewTime - 1
        time += t
    }
    // 탑승시간 문자열로 변환
    const min = answer % 60
    const hour = (answer-min)/60
    return `${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}`
}