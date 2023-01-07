/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    l=nums.length
    prefixSum=[]
    sum = 0
    for(i=0;i<l;i++){

        sum = sum + nums[i]
        prefixSum.push(sum)
    }

    totalSum = prefixSum[l-1]
    for(i=0;i<prefixSum.length;i++){

      

        currentVal = totalSum - (2*prefixSum[i-1])

        if((nums[i] === currentVal) || ((i===0) && (totalSum === nums[i]))){

            return i

        }

    }

    return -1
    
};