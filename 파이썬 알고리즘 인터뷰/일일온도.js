var dailyTemperatures = function(T) { 
    const answer = new Array(T.length).fill(0)
    const stack = []
    T.forEach((current,idx)=>{
        // 스택이 차있고 스택의 마지막 원소보다 현재값이 더크면 스택의 값을 빼주고 리턴값 갱신
        while(stack.length && current > T[stack[stack.length-1]]){
            const last = stack.pop()
            answer[last] = idx-last
        }
        stack.push(idx)
    })  
    return answer
};