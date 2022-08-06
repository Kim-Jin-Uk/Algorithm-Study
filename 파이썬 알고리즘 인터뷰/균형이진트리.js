var isBalanced = function(root) {
    // 높이 확인을 위한 변수
    let left = 0
    let right = 0
    // 기본값 true설정
    let answer = true
    function dfs(node,depth,type){
        // 노드 없을때 높이 변수 갱신
        if(!node){
            if(type) left = Math.max(depth,left)
            else right = Math.max(depth,right)
            return
        }
        // 한층씩 내려가며 탐색
        dfs(node.left,depth+1,type)
        dfs(node.right,depth+1,type)
    }
    // 노드가 없다면 리턴
    if(!root) return answer
    function check(node){
        // 노드가 없다면 리턴
        if(!node) return
        // 해당 노드의 좌 우측 높이 계산
        dfs(node.left,1,true)
        dfs(node.right,1,false)
        // 기준 충족 못할시 false 리턴
        if(Math.max(left,right) - Math.min(left,right) > 1) return answer = false
        // 한층씩 내려가며 탐색
        left = 0
        right = 0
        check(node.left)
        left = 0
        right = 0
        check(node.right)
    }
    check(root)
    return answer
}