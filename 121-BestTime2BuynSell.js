/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
    l = 0
    r = 1
    k = prices.length-1
    maxprofit = 0
    while(r<=k){
        //check profitablitiy
        //goal is to buy least and sell max
        if(prices[l]<prices[r]){
            
            maxprofit = Math.max(prices[r]-prices[l],maxprofit)
            
            
        }
        
        else{
            
            l = r
            
            
        }
        
        r=r+1
        
    }
    
    return maxprofit
    
};

//tc = o(n) sc = o(1)