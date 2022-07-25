var productExceptSelf = function(nums) {
    // 나눗셈을 사용한 방식
    let maxSum = 1
    // 0 개수 확인
    let isZero = 0
    var answer =[]
    for(const num of nums){
        // 전체 곱해주기
        if(num !== 0) maxSum *= num
        else isZero++
    }
    for(const num of nums){
        if(isZero){
            if(num === 0){
                // 0이 두개 이상이면 모두 0으로 처리
                if(isZero > 1) answer.push(0)
                // 0이 한개라면 전체 곱을 넣어준다
                else answer.push(maxSum)
            }
            // 나머지의 경우 모두 0
            else answer.push(0)
        }
        // 0이 없으면 접체곱을 자기로 나누어준다
        else answer.push(maxSum / num)
    }
    // 나눗셈을 사용하지 않은 방식
    var answer = []
    let sumValue = 1
    // 왼쪽을 먼저 곱해준다
    for(const num of nums){
        answer.push(sumValue)
        sumValue *= num
    }
    sumValue = 1
    // 오른쪽을 곱해준다
    for(let idx = nums.length - 1; idx >=0; idx --){
        answer[idx] *= sumValue
        sumValue *= nums[idx]
    }
    return answer
};