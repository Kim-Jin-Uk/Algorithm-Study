var rangeSumBST = function(root, low, high) {
    let answer = 0
    // 트리를 순회하며 조건에 맞는 값을 더해준다
    function makeNums(head){
        if(!head) return
        if(head.val >= low && head.val <= high){
            answer += head.val
        }
        makeNums(head.left)
        makeNums(head.right)
    }
    makeNums(root)
   
    return answer
}