/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    
    temp = num
    while(!(temp>=0 && temp<=9)){
          
          k = temp
          s = 0
          while(k>0){
           
          r = k % 10
          s = s + r
          k = Math.floor(k / 10)
        
          }
    
          temp = s
          
          
        
        
        
    }

   return temp
    
};