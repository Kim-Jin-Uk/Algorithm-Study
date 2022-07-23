var reorderLogFiles = function(logs) {
    //문자로그 숫자로그 구분
    const wordLog = []
    const numLog = []
    for(const logS of logs){
        const [key,...log] = logS.split(' ')
        if(isNaN(log[0])) wordLog.push([log.join(),key,logS])
        else numLog.push(logS)
    }
    //문자로그만 정렬 - 로그 문자순 이후 식별자순
    wordLog.sort(([a,ak],[b,bk])=>{
                if (a > b) return 1
                else if (b > a) return -1
                else{
                    if (ak > bk) return 1
                    else if (bk > ak) return -1
                    else return 0
                }
    })
    //두 로그 합쳐주기
    return wordLog.map((v)=>v[2]).concat(numLog)
};
console.log(reorderLogFiles(
    ["7 96", "d 0 5", "r 439", "1 bw", "6 dkf"]
))