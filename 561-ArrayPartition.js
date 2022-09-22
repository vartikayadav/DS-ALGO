/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    
    sortedArr = nums.sort((a,b)=>a-b)
    res = 0
    l = sortedArr.length 
    for(i=0;i<l;i=i+2){
        
        res = res + nums[i]
        
        
    }
    
    return res
    
};