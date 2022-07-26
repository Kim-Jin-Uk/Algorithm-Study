var reverseList = function(head) {
    // head가 비었을경우 처리
    if(head === null) return head
    // head의 첫번째 값을 넣어줌
    let answer = new ListNode(head.val)
    
    function pushEnd(head){
        if(head !== null){
            // 값이 들어올때마다 기존 answer을 next로 보내면서 역순 정렬함
            answer.next = {...answer}
            answer.val = head.val
            pushEnd(head.next)
        }
    }
    pushEnd(head.next)


    let[node, prev] = [head,null]
    while(node){
        // 넣어줄값을 제외한 연결리스트 생성
        const next = node.next
        // node의 다음값을 prev로 치환 -> 역순으로 정렬됨
        node.next = prev
        // 역순 정렬 리스트를 prev에 할당
        prev = node
        // 값이 빠진 연결리스트를 node에 할당
        node = next
    }
    return prev

    return answer
};