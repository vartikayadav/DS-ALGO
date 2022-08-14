/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    
    function swap(a,b){
       
       temp = nums[a]
       nums[a] = nums[b]
       nums[b] = temp

       console.log('inside nums',nums)
   }
   
   l=0
   i=0
   r=nums.length - 1
   
  
   
   
   while(i<=r){
       
       if(nums[i]===0){
           
           swap(l,i)
           l=l+1
           
           
       }
       else if(nums[i]===2){
           swap(i,r)
           r=r-1
           i=i-1
       }

       console.log('outside nums',nums)
       
       i=i+1
   }
   
   return nums
   
};

console.log('output',sortColors([2,0,2,1,1,0]))