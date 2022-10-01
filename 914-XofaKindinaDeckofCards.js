/**
 * @param {number[]} deck
 * @return {boolean}
 */
 var hasGroupsSizeX = function(deck) {
    
    //best case is [1,1,2,2,2,2] yields true
 //     Input
 // [1,1,1,1,2,2,2,2,2,2]
 // Output
 // false
 // Expected
 // true
     
     //we know gcd is same as hcf
     
     l = deck.length
     hm = new Map()
     if(deck.length===1){
         return false
     }
     
     deckNew = new Set(deck)
     
     if(deckNew.length === 1){
         return true
     }
     
     minWidth = 100000000000
     
     for(i=0;i<l;i++){
         
         if(hm.get(deck[i])){
             hm.set(deck[i],hm.get(deck[i])+1)
             
         }
         else{
             hm.set(deck[i],1)
           
         }
         
     }
     
     
     
     hm.forEach((value,key)=>{
     
     // console.log('value',value,'key',key)
         
         minWidth = Math.min(minWidth,value)
         
         
         
         
     })
    // console.log(minWidth)
    
     valuesArr = []
      hm.forEach((value,key)=>{
     
      //console.log('value',value,'key',key, 'ans',value%minWidth)
         valuesArr.push(value)
         
         
     })
     // console.log('valuesarr',valuesArr)
     res = valuesArr[0]
     
     function gcd(a,b){
         if(a==0){
             return b
         }
        return gcd(b%a,a)
     }
     
     
    
     for(i=1;i<valuesArr.length;i++){
         
         res = gcd(valuesArr[i],res)
         // console.log('res1',res)
         if(res === 1){
            
             break
         }
         
     }

     // console.log('res value',res)
     
     if(res===1){
        return false
     }
     else{
         return true
     }
     
     
     
    
     
 };
 
 
 
 // console.log('res',hasGroupsSizeX([1,2,3,4,4,3,2,1]))