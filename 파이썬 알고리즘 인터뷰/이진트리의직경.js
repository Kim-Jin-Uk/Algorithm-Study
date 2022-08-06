var diameterOfBinaryTree = function(root) {
    let answer = 0
    function dfs(node){
        // 노드가 더이상 없다면 -1 리턴
        if(!node) return -1
        // 왼쪽과 오른쪽 노드 계산
        let left = dfs(node.left)
        let right = dfs(node.right)
        // 리턴값 갱신
        answer = Math.max(answer,left+right+2)
        // 순회 리턴값
        return Math.max(left,right)+1
    }
    dfs(root)
    return answer
};