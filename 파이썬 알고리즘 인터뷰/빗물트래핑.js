var trap = function(height) {
    // 리턴값, 왼쪽 인덱스, 왼쪽 최대값, 오른쪽 인덱스, 오른쪽 최대값 초기화
    let [answer,left,leftH,right,rightH] = [0,-1,0,height.length,0]
    // 입력값의 최대값
    const maxH = Math.max(...height)
    // 두 방향 모두 최대값 도달시 탈출
    let [checkL,checkR] = [true,true]
    while(checkL || checkR){
        // 왼쪽 케이스
        if(height[left + 1] < maxH){
            // 갱신 높이가 크다면 높이, 인덱스 갱신
            if(height[left + 1] >= leftH){
                leftH = height[left + 1]
                left ++
            }
            // 갱신 높이가 작다면 인덱스, 리턴값 갱신
            else{
                answer += leftH - height[left + 1]
                left ++
            }
        }
        // 최대값 도달시 탈출조건 갱신
        else if(checkL) checkL = false
        
        //오른쪽 케이스
        if(height[right - 1] < maxH){
            // 갱신 높이가 크다면 높이, 인덱스 갱신
            if(height[right - 1] >= rightH){
                rightH = height[right - 1]
                right --
            }
            // 갱신 높이가 작다면 인덱스, 리턴값 갱신
            else{
                answer += rightH - height[right - 1]
                right --
            }
        }
        // 최대값 도달시 탈출조건 갱신
        else if(checkR) checkR = false 
    }
    // 왼쪽, 오른쪽 최대 값 인덱스로 갱신
    left ++
    right --
    // 두 인덱스가 같다면 바로 리턴
    if(left === right) return answer
    // 최대값 인덱스가 여러군데라면 그 사이값으로 리턴값 갱신
    for(let mid = left; mid < right; mid ++){
        answer += maxH - height[mid]
    }
    return answer
};
console.log(trap([4,2,0,3,2,5]))