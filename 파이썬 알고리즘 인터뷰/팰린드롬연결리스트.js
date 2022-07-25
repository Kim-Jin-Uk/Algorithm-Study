var isPalindrome = function(head) {
    // 배열로 변경하여 풀기
    const arr = []
    // 연결리스트 배열로 변환
    while(head !== null){
        arr.push(head.val)
        head = head.next
    }
    // 팰린드롬 판별
    for(let idx = 0; idx < arr.length / 2; idx++){
        if(arr[idx] !== arr[arr.length -idx -1]) return false
    }
    return true
};

console.log(isPalindrome([1,2]))