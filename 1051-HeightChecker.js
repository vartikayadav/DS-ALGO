/**
 * @param {number[]} heights
 * @return {number}
 */
//By default, the sort() function sorts values as strings.
//sort() changes all references hence make use of array 
//destructuring 

var heightChecker = function(heights) {
    
    originalArr = [...heights]
    newArr = heights.sort((a,b)=>a-b)
    l = heights.length
    res = 0
    
    for(i=0;i<l;i++){
        if(originalArr[i]!==newArr[i]){
            res = res + 1
        }
    }
    
    return res
    
    
};