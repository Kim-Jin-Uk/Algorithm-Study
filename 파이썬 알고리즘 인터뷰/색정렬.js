var sortColors = function(nums) {
    // 그냥 정렬하면된다
    // return nums.sort((a,b)=>a-b)
    
    // 계수정렬을 이용해 nums의 길이가 길어지는 경우를 개선하자
    // 계수 정렬 사용이유는 색이 3가지밖에 없기 때문 O(kN)이나 k는 3으로 아주작다
    const colorCounter = new Array(3).fill(0)
    // 리스트를 순회하며 색상별 개수를 갱신함
    for(const num of nums){
        colorCounter[num] ++
    }
    // 시작인덱스 및 들어갈 값 초기화
    let element = 0
    let idx = 0
    // 계수 리스트를 기반으로 원소를 최신화해줌
    for(const count of colorCounter){
        for(let i = 0; i < count; i++){
            nums[idx] = element
            idx++
        }
        element ++
    }
}