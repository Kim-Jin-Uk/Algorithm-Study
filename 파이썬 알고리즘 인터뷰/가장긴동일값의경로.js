var longestUnivaluePath = function(root) {
    let answer = 0
    function dfs(node){
        // 노드가 끝이라면 0 리턴
        if(!node) return 0
        let right = dfs(node.right)
        let left = dfs(node.left)
        // 조건에 부합하면 1증가 아니라면 0
        if(node.left && node.left.val === node.val) left ++   
        else left = 0
        if(node.right && node.right.val === node.val) right ++
        else right = 0
        // 리턴값 갱신
        answer = Math.max(answer,left+right)
        // 더 큰값을 리턴
        return Math.max(left,right)
    }
    dfs(root)
    return answer
}