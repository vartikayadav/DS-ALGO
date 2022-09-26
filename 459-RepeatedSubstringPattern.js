/**
 * @param {string} s
 * @return {boolean}
 //we use repeat function to repeat character in a string
 in js
 */
var repeatedSubstringPattern = function(s) {
    
    l = Math.floor(s.length/2)
    n = s.length
    rep = ""
    for(i=0;i<l;i++){
        
        rep = rep + s[i]
        
        if((n % rep.length)==0){
            
            if(rep.repeat(Math.floor(n/rep.length)) === s){
               return true
               }
            
        }
        
    }
    
    return false
    
};