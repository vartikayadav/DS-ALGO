/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    maxP = 0
    l = 0
    r = 1
    k = prices.length
    if(k===0 || k===1 || k===undefined){
        return 0
    }

    while((l<r) && (l<k && r<k)){

        if(prices[l] > prices[r]){
          l = r
          
        }

        else if(prices[l] < prices[r]){

           maxP = Math.max(maxP,(prices[r] - prices[l]))
         

        }
         r = r + 1

    }

    return maxP
    
};