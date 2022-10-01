/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
 var maxRepeating = function(sequence, word) {
    
    count = 0
    str = word
    
    while(sequence.includes(word)){
        
        word = word + str
        count = count + 1
    }
    
    return count
    
};