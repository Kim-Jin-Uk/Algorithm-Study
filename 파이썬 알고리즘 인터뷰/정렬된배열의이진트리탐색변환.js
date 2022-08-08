var sortedArrayToBST = function(nums) {
    const answer = new TreeNode()
    // 빈 배열 처리
    if(nums.length === 0) return null
    function dfs(start,end,node){
        // 중위값 추출 및 노드에 할당
        const mid = Math.floor((start+end)/2)
        node.val = nums[mid]
        // 왼쪽 값이 존재할때
        if(start !== mid){
            node.left = new TreeNode()
            dfs(start,mid,node.left)
        }
        // 오른쪽 값이 존재할때
        if(end !== mid+1){
            node.right = new TreeNode()
            dfs(mid+1,end,node.right)
        }
    }
    dfs(0,nums.length,answer)
    return answer
}