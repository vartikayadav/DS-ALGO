/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    
    rows = matrix.length;
    cols = matrix[0].length;
    
    //TC = O(logm+logn)
    
    top = 0;
    bottom = rows-1;
    
    while(top<=bottom){
        
        row = Math.floor((top + bottom) / 2)
        
        if(target > (matrix[row][matrix[row].length -1])){
            
            top = row - 1
            
        }
        else if(target > matrix[row][matrix[row].length -1]){
            
            bottom = row + 1
                
                }
        else{
            break
            //got case where element is in given array
        }
        
        
    }
    
    if(!(top<=bottom)){
        return false
    }
    
    l = 0
    r = cols - 1
    while(l<=r){
        
        m = (l+r) // 2
        if((target)<matrix[top][m]){
            
            r = m-1
            
            
        }
        else if((target)>matrix[top][m]){
            
            l = m + 1
                
         }
        
        else{
            
            return true
        }
        
    }
    
    return false
      
    
};