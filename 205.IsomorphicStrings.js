/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    l1=s.length
    l2=t.length

    if(l1!==l2){

        return false
    }

    hashmap1 = {}
    hashmap2 = {}
    countofUniqueChar1 = 0
    countofUniqueChar2 = 0
    flagMappingCorrect = true

    for(i=0;i<l1;i++){
        if(!hashmap1[s[i]]){
            countofUniqueChar1++;
            hashmap1[s[i]] = 1;

        }
        if(!hashmap2[t[i]]){
            countofUniqueChar2++;

            hashmap2[t[i]] = s[i];

        }
        if(hashmap2[t[i]] && (hashmap2[t[i]] !== s[i])){
            return false
            
        }

        
       
    }

    if(countofUniqueChar1 !== countofUniqueChar2){
        return false
    }

    return true




   

    
};