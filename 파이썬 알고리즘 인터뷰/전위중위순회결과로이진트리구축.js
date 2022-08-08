var buildTree = function(preorder, inorder) {
    // 순회가 존재할떼
    if(inorder.length){
        // 중위 순회 인덱스 추출 - 루트부터 채워가기
        const idx = inorder.indexOf(preorder.shift())
        // 추출된 값을 노드에 넣어주기
        const node = new TreeNode(inorder[idx])
        // 좌측 우측으로 나누어 다시 계산
        const leftIn = inorder.slice(0,idx)
        if(leftIn.length)node.left = buildTree(preorder,leftIn)
        const rightIn = inorder.slice(idx+1)
        if(rightIn.length) node.right = buildTree(preorder,rightIn)
        return node
    }
}