let bits = 0;
 
// Finding bitwise OR of all elements
for (let i=0; i < n; ++i)
    bits |= arr[i];

let ans = bits * Math.pow(2, n-1);

return ans;

//see pattern to come to solution
