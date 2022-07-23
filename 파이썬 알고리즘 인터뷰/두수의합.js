var twoSum = function(nums, target) {
    const t = target.map((v,i) => [v,i])
    t.sort((a,b) => a[0] - b[0])
    console.log(t)
    let start = 0
    let end = nums.length - 1
    while(start < end){
        if(nums[start] + nums[end] > target){
            end --
        }else if(nums[start] + nums[end] < target){
            start ++
        }else{
            return[start,end]
        }
    }
};
console.log(twoSum(
    [2,7,11,15]
))