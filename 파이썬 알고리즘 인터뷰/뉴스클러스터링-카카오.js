function solution(str1, str2) {
    // 특수문자 판별 사전
    const alphabet = {
        a:true,b:true,c:true,d:true,e:true,f:true,g:true,h:true,
        i:true,j:true,k:true,l:true,m:true,n:true,o:true,p:true,
        q:true,r:true,s:true,t:true,u:true,v:true,w:true,x:true,
        y:true,z:true
    }
    // 대소문자 구분 X
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    const subStr1 = {}
    const subStr2 = {}
    const keys = new Set()
    
    for(let idx = 0; idx < str1.length-1;idx++){
        // 연속된 알파벳인 경우
        if(alphabet[str1[idx]] && alphabet[str1[idx+1]]){
            const key = str1[idx]+str1[idx+1]
            subStr1[key] = (subStr1[key] || 0)+1
            keys.add(key)
        }
    }
    for(let idx = 0; idx < str2.length-1;idx++){
        if(alphabet[str2[idx]] && alphabet[str2[idx+1]]){
            const key = str2[idx]+str2[idx+1]
            subStr2[key] = (subStr2[key] || 0)+1
            keys.add(key)
        }
    }
    // 두 문자열 모두 부분 문자열을 만들수 없을 때
    if (Object.keys(subStr1).length === 0 && Object.keys(subStr2).length === 0) return 65536
    let maxStr = 0
    let minStr = 0
    // 합집합, 교집합 원소 수 구하기
    for(const key of keys.keys()){
        const maxValue = Math.max(subStr1[key] || 0,subStr2[key] || 0)
        const minValue = Math.min(subStr1[key] || 0,subStr2[key] || 0)
        maxStr += maxValue
        minStr += minValue
    }
    
    return Math.floor(minStr / maxStr * 65536)
}