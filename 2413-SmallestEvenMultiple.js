/**
 * @param {number} n
 * @return {number}
 */
 var smallestEvenMultiple = function(n) {
    
    function gcd(a, b)
{
if (a == 0)
    return b;
return gcd(b%a,a)
}
 
// Function to return LCM of two numbers
function lcm(a, b)
{
    return (a / gcd(a, b)) * b;
}
 
    return lcm(2,n)
    
};