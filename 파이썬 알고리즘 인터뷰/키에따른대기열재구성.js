var reconstructQueue = function(people) {
    // 키가크고 앞사람이 없는 순으로 정렬
    people.sort((a,b) => (a[0] !== b[0]) ? b[0] - a[0] : a[1] - b[1])
    let answer = []
    for (let i = 0; i < people.length; i++) {
        // 앞사람이 인덱스에 맞춰 삽입
        let insertIdx = people[i][1]
        answer.splice(insertIdx, 0, people[i])
    }
    return answer
}