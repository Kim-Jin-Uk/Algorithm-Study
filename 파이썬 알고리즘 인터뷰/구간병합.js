var merge = function(intervals) {
    // 시작점을 기준으로 내림차순 정렬
    intervals.sort((a,b)=> b[0]-a[0])
    // 리턴값 초기화
    const answer = [intervals.pop()]
    while(intervals.length){
        // 리턴값과 리스트의 각 마지막 원소 추출
        const [nS,nE] = intervals.pop()
        const [pS,pE] = answer.pop()
        // 겹치는 구간이면 병합
        if(nS<=pE) answer.push([pS,Math.max(pE,nE)])
        // 아니라면 리턴값에 다시 넣어줌
        else{
            answer.push([pS,pE])
            answer.push([nS,nE])
        }
    }
    return answer
}