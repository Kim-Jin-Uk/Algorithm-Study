var removeDuplicateLetters = function(s) {
    // {문자:빈도} 객체, 문자 중복제거 객체, 스택 초기화
    let [counter, seen, stack] = [{},{},[]]
    // {문자:빈도} 객체 값 할당
    for(const char of s){
        counter[char] = (counter[char]||0)+1
    }
    for(const char of s){
        counter[char] --
        // 빈도수 1씩 줄여주기
        if(seen[char]) continue // 중복 문자라면 건너뛰기
        // 스택의 길이가 1이상, 들어온 문자가 스택의 마지막보다 사전순 빠름, 스택의 마지막문자가 추가로 존재할경우
        while(stack.length && char < stack[stack.length-1] && 
              counter[stack[stack.length-1]]){
            // 스택의 마지막 문자열을 날리고 중복제거 객체에서도 삭제시켜줌
            seen[stack.pop()] = 0
        }
        // 스택에 문자 하나씩 넣기
        stack.push(char)
        // 중복 체크해주기
        seen[char] = 1
    }
    return stack.join('')
};