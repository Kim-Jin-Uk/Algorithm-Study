var reverseBetween = function(head, left, right) {
    // 바뀌지 않으면 바로리턴
    if(left===right) return head
    // 역순 리스트 선언 - 키값은 고유값으로 넣어줌
    const reverse = new ListNode(Number.MAX_VALUE)
    // 계속 움직일 노드, left전까지 움직일 노드, right까지 움직일 노드 선언
    let [node,prev,next] = [head,head,head]
    // right까지 순회
    for(let idx = 0; idx < right; idx++){
        // reverse 직전까지 노드 갱신
        if(idx < left-2) prev = prev.next
        // reverse 갱신
        else if(idx === left-1) reverse.val = node.val
        else{
            reverse.next = {...reverse}
            reverse.val = node.val
        }
        // 한칸씩 전진
        node = node.next
        next = next.next
    }
    
    let current = prev
    // 시작지점이 무조건 포함되어 해당 부분 처리
    if(left !== 1){
        prev.next = reverse
    }else{
        current = reverse
    }
    // 순회하며 마지막 노드 찾기
    while(current.next && current.next.val !== Number.MAX_VALUE){
        current = current.next   
    }
    // prev+reverse+next 형태로 리턴
    current.next = next

    if(left !== 1){
        return head
    }else{
        return reverse
    }
};