function solution(dartResult) {
    const result = []
    // 숫자가 완성되지 않을수 있음 > 10의 경우
    let prevNum = ''
    dartResult.split('').forEach((dart)=>{
        // 숫자가 완성된경우
        if(isNaN(dart)){
            // 해당 숫자 넣어주기
            if(prevNum){
                result.push(+prevNum)
                prevNum = ''
            }
            const len = result.length
            // S의 경우 1제곱 즉 원본과 같으니 계산 X
            // D, T 처리
            if(dart === 'D') result[len-1] **=2
            else if(dart === 'T') result[len-1] **=3
            // * 의경우 직전값과 자신을 두배로 한다 예외케이스 처리
            else if(dart === '*'){
                for(let s = 0; s < 2; s++){
                    if(len-1-s >= 0) result[len-1-s] *= 2
                }
            }else if(dart === '#') result[len-1] *=-1
        }
        // 숫자가 완성되지 않은 경우
        else prevNum += dart
    })
    
    return result.reduce((acc,cur)=>acc+cur,0)
}