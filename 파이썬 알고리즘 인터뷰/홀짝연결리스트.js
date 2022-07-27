var oddEvenList = function(head) {
    // 연결리스트의 길이가 2 이하면 바로 리턴
    if(!head||!head.next) return head
    // 홀수리스트, 짝수리스트, 짝수헤드 선언 - 홀수헤드는 전체리스트의 헤드
    let [odd,even,evenHead] = [head,head.next,head.next]
    // 남은 길이가 2이상 존재할때
    while(even && even.next){
        // 홀수 연결
        odd.next = odd.next.next
        // 짝수 연결
        even.next = even.next.next
        // 한칸씩 전진
        odd = odd.next
        even = even.next
    }
    // 홀수리스트와 짝수리스트 연결
    odd.next = evenHead
    return head
};