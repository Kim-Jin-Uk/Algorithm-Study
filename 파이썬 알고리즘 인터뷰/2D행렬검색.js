var searchMatrix = function(matrix, target) {
    // 배열의 밖으로 나갔는지를 판별할 높이와 너비 추출
    const height = matrix.length
    const width = matrix[0].length
    // 시작점은 좌상단 > 좌상단 설정이유: target이 더크면 아래로 더작으면 왼쪽으로만 이동하면 된다 같은이유로 우하단도 가능
    let searchIndex = [0,width-1]
    // 값의 존재여부 판별 및 값 반환
    function getValue(idx){
        if(idx[0] < 0 || idx[0] >= height) return false
        if(idx[1] < 0 || idx[1] >= width) return false
        return matrix[idx[0]][idx[1]]
    }
    while(true){
        const search = getValue(searchIndex)
        // 배열을 나갔다면 값이 존재하지 않는다
        if(search === false) return false
        // 타겟보다 크다면 왼쪽으로 이동
        if(search > target) searchIndex[1] --
        // 타겟이 더크다면 아래로 이동
        else if(search < target) searchIndex[0] ++
        // 값을 찾으면 리턴
        else return true
    }
}