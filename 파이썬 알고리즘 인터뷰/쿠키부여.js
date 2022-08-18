var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    // g, s 오름차순 정렬
    let sid = 0 // s의 시작 인덱스
    let cookieCount = 0 // 부여한 쿠키 수
    for(let gid = 0; gid < g.length; gid++){
        if(g[gid] <= s[sid]){ // g값보다 크다면 1씩증가
            sid++
            cookieCount ++
        }else{
            // g값보다 작다면 클때까지 증가시킴
            while(sid < s.length && g[gid] > s[sid])sid++
            sid++
            if(sid >= s.length) return cookieCount
            cookieCount++
        }
    }
    return cookieCount
}