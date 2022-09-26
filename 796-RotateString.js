/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
    // k = goal[0]
    // i = s.indexOf(k)
    // p = s.substring(i,s.length)
    // t = s.substring(0,i)
    // if((p+t) === goal){
    //     return true
    // }
    // else{
    //     return false
    // }
    
    if(s.length!==goal.length){
        return false
    }
    
    if(s==="" && goal===""){
        return true
    }
    
    k = s+s
    if(k.includes(goal)){
        return true
    }
    else{
        return false
    }
    
    
    
    
};