function longestPalindrome(str){

    l  = str.length;
    res = new Array()
    maxlength = 1

    for(i=0;i<l;i++){

        res[i] = new Array(l)

    }

    for(i=0;i<l;i++){

        res[i][i] = 1

    }

   start = 0

    for(i=0;i<l-1;i++){
        if(str[i] === str[i+1]){
            res[i][i+1] = 1
            maxlength = 2
            start = i
        }
        else{
            res[i][i+1] = 0
        }
    }
    

    for(i=3;i<=l;i++){

        //setting starting index
        for(j=0;j<=(l-i);j++){

            low = j
            high = j+i-1

            if((str[low] === str[high]) && (res[low+1][high-1] === 1)){

                res[low][high] = 1
                start = low
                maxlength = Math.max(maxlength,high - low + 1)

            }
          
            //dont put else 0 as there will be cases when low and high are equal and we will be 
            // doing changes of res[low][high] from 1 to 0

        }

    }
 
  return str.substr(start,maxlength)



}
