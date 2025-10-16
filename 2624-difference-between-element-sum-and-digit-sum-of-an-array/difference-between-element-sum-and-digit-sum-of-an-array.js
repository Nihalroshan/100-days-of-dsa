/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0
    let digitSum = 0
    for (let num of nums){
        elementSum += num
    }
    for (let num of nums.join("")){
        digitSum += Number(num)
    }
    return elementSum - digitSum
};