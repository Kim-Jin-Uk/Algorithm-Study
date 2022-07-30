var numIslands = function(grid) {
    let answer = 0
    for(let x = 0; x < grid.length; x++){
        for(let y = 0; y < grid[0].length; y++){
            if(grid[x][y] === '1'){
                island2water(x,y)
                answer ++
            }
        }
    }
    // 발견한 섬의 일부를 물로 채워주기
    function island2water(x,y){
        // 물로 채워주기
        grid[x][y] = '0'
        // 상하좌우 4방향으로 전진
        const candidates = [
            [x+1,y],
            [x-1,y],
            [x,y+1],
            [x,y-1],
        ]
        // 해당 후보중 영역내에 있고 섬의 일부라면 재귀호출
        for(const [nX,nY] of candidates){
            if((nX > -1 && nX < grid.length) &&
              (nY > -1 && nY < grid[0].length) &&
              grid[nX][nY] === '1'){
                island2water(nX,nY)
            }
        }
    }
    return answer
}

console.log(numIslands(
    [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ]
))