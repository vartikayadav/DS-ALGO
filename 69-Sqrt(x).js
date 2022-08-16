/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    
    if(x == 0 || x == 1){
        return x
    }
    
    l = 1
    r = x
    ans = 0
    
    while(l<=r){
        
        mid = Math.floor((l+r) / 2)
        
        if(mid*mid < x){
            
            l = mid + 1
            ans = mid
            
        }
        else if(mid*mid>x){
            
            r = mid - 1
            
        }
        else{
            
           return mid 
            
        }
        
    }
    
    return ans
    
};