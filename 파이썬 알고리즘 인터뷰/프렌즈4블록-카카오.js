function solution(m, n, board) {
    let answer = 0
    // 이중 배열로 변환
    const table = board.map((v)=>v.split(''))
    // 지울 인덱스
    // 지울 인덱스가 겹칠수 있음
    let removeIdx = new Set()
    // 몇번 지울지 알 수 없음
    while(true){
        // 각 원소별로 4개씩 붙어있는지 판별
        for(let x = 0; x < m-1; x++){
            for(let y = 0; y < n-1; y++){
                if(table[x][y] !== '0') check(x,y,table[x][y])
            }
        }
        // 지울 인덱스가 존재하지 않으면 리턴
        if(removeIdx.size === 0) break
        // 하나씩 지워주기
        for(const r of removeIdx){
            const [x,y] = r.split(',')
            remove(x,y)
        }
        // 지울 인덱스 초기화
        removeIdx = new Set()
    }
    
    function remove(x,y){
        // 지운후 0으로 채우기
        for(let i = x; i > 0; i--){
            table[i][y] = table[i-1][y]
        }
        table[0][y] = '0'
        answer ++
    }
    
    function check(x,y,key){
        // 좌, 상, 좌상 같은값인지 판별
        const candidates = [
            [x,y],
            [x+1,y],
            [x,y+1],
            [x+1,y+1]
        ]
        let check = true
        for(const [nX,nY] of candidates){
            if((nX > -1 && nX < table.length) &&
               (nY > -1 && nY < table[0].length) &&
               table[nX][nY] === key
              ) continue
            check = false
            break
        }
        // 같은 값이라면 넣어주기
        if(check){
            for(const candid of candidates){
                removeIdx.add(candid.join())
            }
        }
    }
    return answer
}