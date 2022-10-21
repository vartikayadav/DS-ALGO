/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
 var timeRequiredToBuy = function(tickets, k) {
    
    n = tickets.length
    res = 0
    
    for(i=0;i<n;i++){
        
        if(i>k){
              if(tickets[i]>=tickets[k]){
            res = res + tickets[k]-1
            
        }
        else{
            res = res + tickets[i]
        }
        }
        else{
              if(tickets[i]>=tickets[k]){
            res = res + tickets[k]
            
        }
        else{
            res = res + tickets[i]
        }
            
        }
        
      
        
    }
    
    return res 
    
};