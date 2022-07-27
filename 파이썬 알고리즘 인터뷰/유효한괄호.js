var isValid = function(s) {
    // 스택구현
    const stack = []
    for(const char of s){
        const len = stack.length
        // 스택이 비었으면 넣어주기
        if(len === 0) stack.push(char)
        // 유효한 괼호들은 바로 빼주기
        else if(stack[len-1] === '(' && char === ')') stack.pop()
        else if(stack[len-1] === '{' && char === '}') stack.pop()
        else if(stack[len-1] === '[' && char === ']') stack.pop()
        // 현재까지 유효하지 않다면 스택에 넣어주기
        else stack.push(char)
    }
    // 스택이 비었다면 유효한 괄호
    return stack.length === 0
};