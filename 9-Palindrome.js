/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    
    k=parseInt(x.toString().split('').reverse().join(''))
    return x===k
     
 };

 console.log(isPalindrome(121))