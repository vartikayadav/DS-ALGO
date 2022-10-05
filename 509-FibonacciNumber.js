/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    
    x = 0
    y = 1
    
    if(n==0){
        
        return 0
    }
    
    if(n==1){
        return 1
    }
    
    
    
    for(i=0;i<n-1;i++){
        
        temp = y
        y = x+y
        x = temp
        
    }
    
    return y
    
    
    
    
};