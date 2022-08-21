/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    
    //we can do by hashmap but lets do it in O(1) space complexity
    //but for that case we will need to sort array which will take O(nlogn)
    //hence lets do by hashing ie O(n) and space O(n)
    
    var topK = new Map()
    var res = []
    
    var bucket = []

    for(i=0;i<=nums.length;i++){
        bucket.push([])
    }
    
    for(i=0;i<nums.length;i++){
        
        
        
        if(topK.has(nums[i])){
            topK.set(nums[i],topK.get(nums[i])+1)
        }
        else{
            
            topK.set(nums[i],1)
            
        }
    }
    

    console.log('topk',topK)
    
    topK.forEach((key,value)=>{
        //key is actually value and vice versa
       bucket[key].push(value)
    })
    console.log('bucket',bucket)

    bucketLen = bucket.length

    j = bucketLen-1 
    
    while(j>=0)
    {

        if(k===0){
            break
        }

        if(bucket[j].length>0 && k>0){
            
            res.push(bucket[j].shift())
            k=k-1
            
        }
        else{
            j=j-1
        }
        


    }

  
    console.log('res',res)
    return res
    
};

topKFrequent([1,1,1,2,2,3],2)
// topKFrequent([1,2],2)