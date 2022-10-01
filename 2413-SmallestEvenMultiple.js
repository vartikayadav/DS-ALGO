/**
 * @param {number} n
 * @return {number}
 */
 var smallestEvenMultiple = function(n) {
    
    function gcd(a, b)
{
if (b == 0)
    return a;
return gcd(b, a % b);
}
 
// Function to return LCM of two numbers
function lcm(a, b)
{
    return (a / gcd(a, b)) * b;
}
 
    return lcm(2,n)
    
};