/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {

    l = nums.length
    arr = []
    sum = 0
    for(i=0;i<l;i++){

      sum+=nums[i]
      arr.push(sum)

    }
    return arr    
};