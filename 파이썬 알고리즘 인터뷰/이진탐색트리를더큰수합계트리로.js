var bstToGst = function(root) {
    const nums = []
    // 트리의 모든 노드의 값을 넣어준다
    function makeNums(head){
        if(!head) return
        nums.push(head.val)
        makeNums(head.left)
        makeNums(head.right)
    }
    makeNums(root)
    
    // 해당 노드의 값 + 트리의 모든 노드의 값들중 해당 노드의 값보다 큰 값들
    function calcNode(node){
        if(!node) return
        const value = node.val
        node.val = nums.reduce((acc,cur)=>{
            if(cur > value) acc += cur
            return acc
        },value)
        calcNode(node.left)
        calcNode(node.right)
    }
    calcNode(root)
    return root
}