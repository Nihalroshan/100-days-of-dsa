/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let numMap = new Map();
    for (let i = 0; i <= numbers.length; i++) {
        let complement = target - numbers[i]
        if (numMap.has(complement)) {
            return [numMap.get(complement), i + 1]
        }
        numMap.set(numbers[i], i + 1)
    }
    return []
};