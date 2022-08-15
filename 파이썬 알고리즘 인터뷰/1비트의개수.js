var hammingWeight = function(n) {
    // 10진수를 2진수로 변환후 누산한다
    return n.toString(2).split('').reduce((acc,cur)=>acc + +cur,0)
}