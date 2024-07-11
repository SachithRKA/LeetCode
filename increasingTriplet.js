/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let pointerOne = 0;
    let pointerTwo = 1;
    let pointerThree = 2;


    while (pointerOne < nums.length) {
        while (pointerTwo < nums.length) {
            while (pointerThree < nums.length) {
                
            }
        }
    }
};

// testing

console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([5,4,3,2,1]));
console.log(increasingTriplet([2,1,5,0,4,6]));
console.log(increasingTriplet([20,100,10,12,5,13]));