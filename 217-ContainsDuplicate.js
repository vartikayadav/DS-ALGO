/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    l = nums.length
    var hm = new Map()
    for(i=0;i<l;i++){
        if(hm.has(nums[i])){
         return true   
        //  hm.set(nums[i],hm.get(nums[i])+1)   
        }
        else{
            hm.set(nums[i],1)
        }
    }
    
    return false
    
    
    
};