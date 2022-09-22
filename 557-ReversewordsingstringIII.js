/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
   
  
    stringElements = s.split(' ')
    l = stringElements.length
    res = ""
    for(i=0;i<l;i++){
        
        
       res = res + stringElements[i].split('').reverse().join('');
        if(i!=l-1){
            res=res+" "
        }
        
        
    }
    
    return res;
    
    
};