/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {

    if(s.length === 1){
        return 1
    }
  
    l = s.length
    a = 0
    count = []
  
    for(i=0;i<l;i++){
  
      if(count.indexOf(s[i]) === -1){
       count.push(s[i])
      } 
      else{
  
          a = a+1
          index = count.indexOf(s[i])
          if(index!==-1){
               count.splice(index,1)
          // splice will remove 1 item from index index
  
          }
         
  
      }
  }
  
     if(a === Math.floor(l/2)){
         return l
     }
     else{
         //all pairs with 1 more alphabet
         return 2*a+1
     }
  
    
  
     
              
  
    
      
  };