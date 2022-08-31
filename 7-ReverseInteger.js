/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    noType = 1
    
    if(x<0){
        
        noType = -1
        x = -x
        
    }
   
    
    k = x
    res = 0
    
    while(k>0){
        
        res = (res*10) + (k%10)
        k = Math.floor(k/10)
         
    }
    
    x = noType * res
    
    if(x>(2**31 - 1) || x<(-(2**31))){
        return 0
    }
    
    
    return x
    
    
    
    
};