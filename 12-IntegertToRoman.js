/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
    map = {
        M: 1000,
        CM:900,
        D: 500,
        CD:400,
        C: 100,
        XC:90,
        L: 50,
        XL:40,
        X: 10,
        IX:9,
        V: 5,
        IV:4,
        I: 1
    }
    
    result = ''
    
    for(key in map){
        
        r = Math.floor(num/map[key]);
        
        if(r!==0){
            result = result + key.repeat(r)
        }
        
        num = num % map[key]
        
        if(num===0){
            return result
        }
        
        
    }
    
    return result
    
};