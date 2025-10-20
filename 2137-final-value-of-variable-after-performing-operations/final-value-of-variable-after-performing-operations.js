/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const os = {
        "++X": 1,
        "X++": 1,
        "X--": -1,
        "--X": -1
    }
    let x= 0;
    for (let operation of operations){
        x += os[operation]
    }
    return x

};