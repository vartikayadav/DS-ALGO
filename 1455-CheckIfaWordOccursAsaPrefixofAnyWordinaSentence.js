/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    
    arr = sentence.split(' ')
    for(i=0;i<arr.length;i++){
        if(arr[i].includes(searchWord) && (arr[i].indexOf(searchWord) === 0)){
            
            return i+1
            
        }
    }
    
    return -1
};

console.log('chk',isPrefixOfWord("i love eating burger","burg"))