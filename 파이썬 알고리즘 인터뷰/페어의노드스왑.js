var swapPairs = function(head) {
    let current = head
    // 페어가 존재할때까지 반복
    while(current && current.next){
        // 두 노드의 값을 교체해준다
        const origin = current.val
        current.val = current.next.val
        current.next.val = origin
        current = current.next.next
    }
    
    return head
};