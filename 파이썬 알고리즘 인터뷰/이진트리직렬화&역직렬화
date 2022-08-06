var serialize = function(root) {
    // 빈 트리 처리
    if(!root) return []
    const answer = []
    const queue = [root]
    while(queue.length){
        // 큐에서 하나씩 빼주기
        const node = queue.shift()
        // 해당 값 리턴값에 넣어주기
        answer.push(node ? node.val : null)
        // 노드가 추가로 있다면 큐에 넣어주기
        if(node){
            queue.push(node.left)
            queue.push(node.right)
        }
    }
    // 마지막 null값들은 필요없는 값이므로 제거
    while(answer[answer.length-1] === null) answer.pop()
    return answer
}

var deserialize = function(data) {
    // 빈 트리 처리
    if(data.length === 0) return null
    // 리턴값 초기화
    const answer = new TreeNode(data[0])
    const queue = [answer]
    let idx = 1
    while(queue.length){
        // 인덱스 벗어나면 종료
        if(idx >= data.length) break
        const node = queue.shift()
        //좌측 노드 처리
        if(data[idx] !== null){
            node.left = new TreeNode(data[idx])
            queue.push(node.left)
        }
        idx ++
        // 인덱스 벗어나면 종료
        if(idx >= data.length) break
        // 우측 노드 처리
        if(data[idx] !== null){
            node.right = new TreeNode(data[idx])
            queue.push(node.right)
        }
        idx ++
        // 인덱스 벗어나면 종료
        if(idx >= data.length) break
    }
    return answer
}