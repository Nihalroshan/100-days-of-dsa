/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let totalDrink = numBottles;
    let remaining = numBottles;

    while(remaining >= numExchange){
        let available = Math.floor(remaining / numExchange);

        totalDrink += available 
        remaining = available + (remaining % numExchange)
    }

    return totalDrink;
};