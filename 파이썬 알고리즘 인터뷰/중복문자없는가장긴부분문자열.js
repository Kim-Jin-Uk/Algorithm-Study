var lengthOfLongestSubstring = function(s) {
    let answer = 0
    // 문자를 담을 큐선언
    const queue = []
    for(const char of s){
        // 큐가 비어있을땐 넣어주기
        if(queue.length === 0) queue.push(char)
        else{
            // 큐에 문자가 이미 포함되어있다면
            if(queue.includes(char)){
                // 리턴값 먼저 갱신
                answer = Math.max(answer,queue.length)
                // 해당 문자까지 큐에서 빼주기
                while(true){
                    const c = queue.shift()
                    if(c === char) break
                }
            }
            queue.push(char)
        }
    }
    return Math.max(answer,queue.length)
}