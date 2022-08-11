var hammingDistance = function(x, y) {
    // xor 응용 (x^y).toString(2) => 둘이 모두 같지 않은 경우만 1로 나온다
    // reduce를 이용하여 누산합을 리턴
    return (x^y).toString(2).split('').reduce((acc,cur)=>acc + +cur,0)
}