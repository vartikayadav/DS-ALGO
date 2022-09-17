/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSumClosest = function(array,target) {
    array.sort((a,b) => a - b);
  console.log('sorted array',array)
   res=10000000;

   for(let i=0; i < array.length - 2; i++){
       if(i===0 || (i!==0 && (array[i] != array[i-1]))){ // making sure our solution set does not contain duplicate triplets
           let left = i + 1;
         let right = array.length - 1;

           while (left < right){
               const currentSum = array[i] + array[left] + array[right];
               console.log('current sum',currentSum);

               if (currentSum === target){
                   
                   res = Math.min(res,currentSum)
                   while(array[left] == array[left + 1]) left ++
                   while(array[right] == array[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                   left ++;
                   right --;
               } else if(currentSum < target) {
                   res = Math.min(res,Math.abs(target-currentSum))
                   left ++
               } else if(currentSum > target){
                    res = Math.min(res,Math.abs(target-currentSum))
                   right --
               }

               console.log('res',res);
           }
       }
   }
   return res
};

console.log('res',threeSumClosest([-1,2,1,-4],1))