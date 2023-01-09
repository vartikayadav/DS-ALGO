/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {

    i = 0
    j = 0
    l1 = s.length
    l2 = t.length
  
    for(j=0;j<l2;j++){
        if(t[j] === s[i]){
            i=i+1
        }
    }
  
    if(i===l1){
        return true
        //if all characters of l1 are traveresed
        
    }
    else{
        return false
    }
      
  };