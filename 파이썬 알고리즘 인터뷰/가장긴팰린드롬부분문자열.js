var longestPalindrome = function(s) {
    let answer = [0,0]
    if(s.length === 1 || s === s.split('').reverse().join('')) return s
    for(let idx = 0; idx < s.length; idx ++){
        const [l1,r1] = checker(idx,idx+1)
        const [l2,r2] = checker(idx,idx+2)
        if(answer[1] - answer[0] < r1 - l1) answer = [l1,r1]
        if(answer[1] - answer[0] < r2 - l2) answer = [l2,r2]
    }
    function checker(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left -= 1
            right += 1
        }
        return [left+1,right]
    }
    return s.slice(answer[0],answer[1])
};