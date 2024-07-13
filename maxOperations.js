/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b); 
    let pointerOne = 0;
    let pointerTwo = nums.length - 1;
    let counter = 0;

    while (pointerOne < pointerTwo) {
        let value = nums[pointerOne] + nums[pointerTwo];

        if (value > k) {
            pointerTwo--;
        } else if (value < k) {
            pointerOne++;
        } else { 
            counter++;
            nums.splice(pointerTwo, 1);
            nums.splice(pointerOne, 1);
            pointerTwo -= 2; 
        }
    }

    return counter;
};

console.log(maxOperations([3,2,3,4,2], 4));
console.log(maxOperations([3,2,3,4,2], 6));
console.log(maxOperations([1,2,3,4,5], 5));
