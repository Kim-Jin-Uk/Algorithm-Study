var minDiffInBST = function(root) {
    // 초기값을 최대로 할당
    let answer = Number.MAX_VALUE
    // 모든 노드의 값을 넣어줌
    const nums = []
    function makeNums(node){
        if(!node) return
        nums.push(node.val)
        makeNums(node.left)
        makeNums(node.right)
    }
    makeNums(root)
    // 오름차순으로 정렬
    nums.sort((a,b)=>a-b)
    // 예외처리 nums의 길이가 2보다 작을때
    if(nums.length === 0) return null
    if(nums.length === 1) return nums[0]
    // 누산기에 직전값을 넣어주며 차이를 리턴값에 갱신하며 순회, 초기값은 음의 최대값
    nums.reduce((acc,cur)=>{
        answer = Math.min(cur - acc,answer)
        return cur
    },-Number.MAX_VALUE)
    return answer
};