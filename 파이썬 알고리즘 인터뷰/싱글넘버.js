var singleNumber = function(nums) {
    // // 숫자를 담을 객체 생성
    // const numChecker = {}
    // for(const num of nums){
    //     // 프로퍼티 키로 존재하면 제거
    //     if(num in numChecker) delete numChecker[num]
    //     // 프로퍼티 키로 존재하지 않으면 추가
    //     else numChecker[num] = true
    // }
    // // 최종 객체의 프로퍼티는 단 하나이다
    // // 숫자로 변환하여 리턴
    // return +Object.keys(numChecker)[0]

    // 비트연산을 이용한 풀이
    let answer = 0
    // answer에는 두번씩 반복되는 숫자들, 한번만 등장하는 숫자가 연산되어진다
    // 두번 반복되는 숫자는 xor연산에 의해 두번 연산되면 0으로 평가된다
    // 즉 한번만 등자하는 숫자만이 실제로 할당되게 된다
    for(const num of nums) answer ^= num
    return answer
}