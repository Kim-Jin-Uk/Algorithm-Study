function solution(n, arr1, arr2) {
    const answer = []
    for(let idx = 0; idx < n; idx++){
        // 비트연산으로 계산
        let num = (arr1[idx]|arr2[idx]).toString(2)
        // 문제에 맞는 형식으로 변환
        if(num.length < n) num = '0'.repeat(n-num.length)+num
        answer.push(num.replace(/1/g,'#').replace(/0/g,' '))
    }
    return answer
}