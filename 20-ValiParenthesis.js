/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    l = s.length
    st = []
    
    //edge case is length 1 
    
    if(l===1)return false
    
    
    for(i=0;i<l;i++){
        
        if(s[i]==='(' || 
           s[i]==='[' ||
           s[i]==='{'
          ){
            
            st.push(s[i])
            
        }
        
        else if((s[i]===')' && st[st.length-1]!=='(') ||
           (s[i]==='}' && st[st.length-1]!=='{') ||
           (s[i]===']' && st[st.length-1]!=='['))
          return false
          
            
            else{
                st.pop()
            }
        
    }
    
    //for '(('
    
    if(st.length>0){
        return false
    }
    
    return true
    
};