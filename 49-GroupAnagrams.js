/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
    
      
    const map = {}
    
    for(let i=0;i<strs.length;i++){
        
          let strSorted = strs[i].split('').sort().join('');
        
          (!map[strSorted]) ? map[strSorted] = [strs[i]] : map[strSorted].push(strs[i])
          
    }
    
    return Object.values(map)
    
    
};