var mergeTrees = function(root1, root2) {
    // 두 트리 모두 비어있을때 리턴
    if(!root1 && !root2) return root1
    // 리턴 트리 생성
    const answer = new TreeNode()
    function dfs(node1,node2,node){
        // 두 노드 비어 있다면 스킵
        if(!node1 && !node2) return
        // 각 노드의 값 추출 없다면 0
        let val1 = node1 ? node1.val : 0
        let val2 = node2 ? node2.val : 0
        // 리턴 노드에 할당
        node.val = val1+val2
        // 우측으로 갈수 있다면
        if((node1 && node1.right) || (node2 && node2.right)){
            // 노드 추가해주기
            node.right = new TreeNode()
            // 노드들 이동 노드가 없다면 null할당
            dfs(node1 ? node1.right : null,
               node2 ? node2.right : null,
               node.right)
        }
        // 좌측으로 갈수 있다면
        if((node1 && node1.left) || (node2 && node2.left)){
            // 노드 추가해주기
            node.left = new TreeNode()
            // 노드들 이동 노드가 없다면 null할당
            dfs(node1 ? node1.left : null,
               node2 ? node2.left : null,
               node.left)
        }
    }
    dfs(root1,root2,answer)
    return answer
}