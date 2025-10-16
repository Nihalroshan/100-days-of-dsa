/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    //if the number is odd then the smallest interger that is multiple of both n and 2 will be n*2
    if(n % 2 !== 0){
        return n*2
    //if the number is even then the smallest interger that is multiple of both n and 2 will be n
    }else{
        return n
    }
};