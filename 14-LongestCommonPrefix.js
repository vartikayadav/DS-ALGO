/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    l = strs.length
    res = ""
    
    if(strs.length === 1){
        return strs[0]
    }


    
    for(i=0;i<strs[0].length;i++){
       
         k = strs[0][i]
       
          
             for(j=1;j<l;j++){
            if(strs[j][i] !== k){
                return res
            }
            
        }
            
        
        
       
       
            res = res + strs[0][i]
        
        
        
        console.log('res is',res)
        
    }
    
    return res
    
};

console.log(longestCommonPrefix([""]))