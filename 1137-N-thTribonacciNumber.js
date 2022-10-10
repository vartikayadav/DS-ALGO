/**
 * @param {number} n
 * @return {number}
 0 1 1 2 4 
 */
var tribonacci = function(n) {
    
    x = 0
    y = 1
    z = 1
      if(n==0){
        
        return 0
    }
    
    if(n==1){
        return 1
    }
    if(n==2){
        return 1
    }
    // 0 1 1 2 4
    for(i=0;i<n-2;i++){
        temp = x + y + z
        // temp1 = x
        // temp2 = y
        // temp3 = z
        x = y
        y = z
        z = temp    
    }
    
    return z
    
    
    
    
    
    
    
};