/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    var hm = new Map();
    hm.set('I',1);
    hm.set('V',5);
    hm.set('X',10);
    hm.set('L',50);
    hm.set('C',100);
    hm.set('D',500);
    hm.set('M',1000);

    console.log('hm',hm)
    
    l = s.length;
    
    a = s[l-1]

    console.log('a',a)
    
    res = hm.get(a)
    
    for(i=l-2;i>=0;i--){
        
        b = hm.get(s[i])
        console.log('b',b)
        if(b<(hm.get(a))){
            res = res - b
        }
        else{
            
            res = res + b
            
        }

        a = s[i]
        console.log('result is',res)
        
    }
    
    return res
    
    
    
};

console.log('ans',romanToInt("MCMXCIV"))