/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * 
 * var fruits = new Array(4).fill('Lemon');
 * above code used to fill Lemon four times in array fruits
 * arr1.concat(arr2)
 */
 var relativeSortArray = function(arr1, arr2) {
    
    firstArr = [...arr1]
    arr1.sort((a,b)=>a-b)
    l = arr1.length
    res = []
    hm = new Map()
    for(i=0;i<l;i++){
        
        if(hm.has(arr1[i])){
            hm.set(arr1[i],hm.get(arr1[i])+1)
        }
        else{
             hm.set(arr1[i],1)
        }
    }

    // console.log('arr1',arr1)
    // console.log('arr2',arr2)
    // console.log('hmap',hm)
    
    for(i=0;i<arr2.length;i++){

      k = hm.get(arr2[i])
   

      var elements = new Array(k).fill(arr2[i]);
    //   console.log('elements',elements)

      res = res.concat(elements)
     

      hm.set(arr2[i],0)

    }
//     //2 -> 3
// console.log('hm',hm)
//     hm.forEach((key,element) => {

//         console.log('key,element',key,element)
//         if(key){
//             res.push(element)
//         }
        
//     });

//     console.log('res',res)



    
};
relativeSortArray([2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31],[2,42,38,0,43,21])