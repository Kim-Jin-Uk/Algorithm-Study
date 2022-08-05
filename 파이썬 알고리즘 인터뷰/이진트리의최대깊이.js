var maxDepth = function(root) {
    // 빈값 처리
    if(!root) return 0
    let len = 0
    function getLength(root,length){
        // 리턴값 갱신
        len = Math.max(len,length)
        // 깊이를 1씩 증가시켜 탐색
        if(root.left)getLength(root.left,length+1)
        if(root.right)getLength(root.right,length+1)
    }
    getLength(root,1)
    return len
}