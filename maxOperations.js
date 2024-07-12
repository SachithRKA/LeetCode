/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort();
    let pointerOne = 0;
    let pointerTwo = nums.length -1;
    let value = pointerOne + pointerTwo;
    let counter = 0;

    while (sort.length > 1) {
        pointerOne = 0;
        pointerTwo = nums.length -1;
        value = pointerOne + pointerTwo;
        counter = 0;

        while (pointerOne < pointerTwo) {
            if (value == k) {
                counter +=1;
                nums.splice(pointerOne, 1);
                nums.splice(pointerTwo, 1);
            }
            else if (value > k) {

            }
            else if (value < k) {
                
            }
        }
    }
    return nums;
};

console.log(maxOperations([3,2,3,4,2], 2));
console.log(maxOperations([3,2,3,4,2], 3));
console.log(maxOperations([1,2,3,4,5], 5));
