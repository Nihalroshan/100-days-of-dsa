/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const frequencyMap = new Map();
    for (let item of s){
        const currentCount = frequencyMap.get(item) || 0
        frequencyMap.set(item, currentCount + 1)
    }

    let largestOdd = 1
    let smallestEven = s.length

    for (const count of frequencyMap.values()) {
       if(count % 2 === 0){
        smallestEven = Math.min(smallestEven, count)
       }else{
        largestOdd = Math.max(largestOdd, count)
       }
    }
    return (largestOdd - smallestEven)
    
};