var twoSum = function(numbers, target) {
    // 투포인터로 풀이
    let start = 0
    let end = numbers.length-1
    while(start < end){
        const number = numbers[end]+numbers[start]
        if(number > target) end --
        else if(number < target) start ++
        else return [start+1,end+1]
    }
}