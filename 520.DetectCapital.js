
  @param {string} word
  @return {boolean}
 
var detectCapitalUse = function(word) {
    
    capitalCount = 0
    smallCount = 0
    lowerCaseWord = word.toLowerCase();
    upperCaseWord = word.toUpperCase();
    flagStartSet = 0

    if(word[0]){
        if(word[0] === upperCaseWord[0]){
            flagStartSet = 1
        }
    }

    for(i=0;iword.length;i++){

       

      if(word[i] === lowerCaseWord[i]){

          smallCount += 1

      }
      if(word[i] === upperCaseWord[i]){
          if(i!==0){
              flagStartSet = 0
          }
          capitalCount += 1
      }

    }
      if((smallCount === word.length)  (capitalCount === word.length)  (flagStartSet === 1)){
          return true
      }

      
    return false


    

};