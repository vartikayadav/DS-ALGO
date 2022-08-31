/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    
    l = s.length
    str = ""
    k = 0
    reverse = false
    rows = []
    currentRow = 0
    
    //edge case
    
    if(numRows === 1){
        return s
    }
    
    for(i=0;i<numRows;i++){
        rows.push([])
    }
    
    
    for(i=0;i<l;i++){
        
        rows[currentRow].push(s[i])
       
        if(reverse === false){
            currentRow ++
        }
        else{
            currentRow --
        }
        
        if(currentRow === numRows-1 || currentRow === 0){
            reverse = !reverse
        }
        
        
        
    }
    
    rows.forEach((row) => {
        str = str + row.join('')
    })
                 
    return str
    
};