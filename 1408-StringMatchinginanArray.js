/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    
    res = []
    words.sort((a,b)=>a.length-b.length)
    //or words.sort((a,b)=>a-b) 
    //we use this as a-b or a.length-b.length 
    //makes array sorted in length wise way then alphabetically
    //hence correct way as we need first length wise thing so
    //we can have smaller element to search in other bigger ones
    //ex - words = ["leetcoder","leetcode","od","hamlet","am"]
    //words.sort() ['am', 'hamlet', 'leetcode', 'leetcoder', 'od']
    //words.sort((a,b)=>a.length-b.length) gives
  //  ['am', 'od', 'hamlet', 'leetcode', 'leetcoder']
    
    for(i=0;i<words.length;i++){
        
        for(j=i+1;j<words.length;j++){
            
            if(words[j].includes(words[i])){
                res.push(words[i])
                break
                //break needed as we dont want multiple times
                //occurence of word as given in above example
                
            }
            
        }
    }
    
    return res
    
};