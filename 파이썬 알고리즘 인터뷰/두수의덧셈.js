var addTwoNumbers = function(l1, l2) {
    // 리턴값 초기화
    let answer = null
    // 더한값을 저장할 배열 선언
    const sumArr = []
    // 10 이상 판별
    let isOver = 0

    while(l1 || l2){
        // l1,l2 가 존재하지 않을 경우 처리를 위해 0으로 초기화
        let [num1,num2] = [0,0]
        if(l1){
            num1 = l1.val
            l1 = l1.next
        }
        if(l2){
            num2 = l2.val
            l2 = l2.next
        }
        const value = num1+num2+isOver
        // 10이 넘었을때 처리
        if(value > 9){
            sumArr.push(value-10)
            isOver = 1
        }else{
            sumArr.push(value)
            isOver = 0
        }
    }
    // 마지막 더한값이 10을 넘으면 1 추가로 넣어주기
    if(isOver) sumArr.push(1)
    // 역순으로 연결리스트에 저징
    answer = new ListNode(sumArr[sumArr.length-1])
    for(let idx = sumArr.length-2;idx>-1;idx--){
        answer.next = {...answer}
        answer.val = sumArr[idx]
    }
    return answer
};