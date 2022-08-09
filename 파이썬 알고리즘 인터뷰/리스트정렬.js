var sortList = function(head) {
    // head가 비었거나 원소가 하나라면 바로리턴
    if(!head || !head.next) return head
    // 연결리스트를 리스트로 변환
    const list = []
    let element = head
    while(element){
        list.push(element.val)
        element = element.next
    }
    // 리스트 내부메서드로 정렬
    list.sort((a,b)=>a-b)
    // 리스트 연결리스트로 변환
    let answer = new ListNode(list.pop())
    while(list.length){
        const element = list.pop()
        answer.next = {...answer}
        answer.val = element
    }
    return answer
};