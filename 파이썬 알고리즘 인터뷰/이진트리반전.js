var invertTree = function(root) {
    function invert(node){
        if(!node) return
        // 비구조화 할당으로 좌우를 바꿔주기
        [node.right ,node.left] = [node.left, node.right]
        // 각 노드별로 실행
        invert(node.right)
        invert(node.left)
    }
    invert(root)
    return root
}