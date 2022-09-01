/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    
    len = height.length
    
    A = height
    
 let l = 0;
	let r = len -1;
	let area = 0;

	while (l < r)
	{
		
		// Calculating the max area
		area = Math.max(area, Math.min(A[l],
						A[r]) * (r - l));
		
		if (A[l] < A[r])
			l += 1;
		else
			r -= 1;
	}
	return area;


    
};