/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    
    res=[]
    l=nums.length
    prefix = 1

    for(i=0;i<l;i++){
        if(i===0){
            res.push(1)
            prefix = prefix*nums[i]
        }
        else{

            res.push(prefix)
            prefix = prefix * nums[i]

        }

    }

    // console.log('prefix',res)

    postfix = 1

    for(i=l-1;i>=0;i--){

        if(i===(l-1)){

            res[i] = res[i]*1
            postfix = postfix * nums[i]

        }
        else{

            res[i] = res[i]*postfix
            postfix = postfix * nums[i]

        }

    }

    // console.log('postfix',res)
    return res
    
    
};

// console.log('prod executive',productExceptSelf([-1,1,0,-3,3]))
console.log('prod executive',productExceptSelf([1,2,3,4]))
// console.log('prod executive',productExceptSelf([0,0]))
// console.log('prod executive',productExceptSelf([0,0]))
// console.log('prod executive',productExceptSelf([1,0]))