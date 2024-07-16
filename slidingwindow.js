// Pseudocode for a general sliding window problem
// 1. Initialize start and end pointers to the beginning of the array.
// 2. Initialize a variable to keep track of the current state (e.g., sum, max length).
// 3. Iterate over the array using the end pointer.
//    a. Update the current state based on the element at the end pointer.
//    b. While the current state does not meet the condition (e.g., sum exceeds target, window size exceeds limit):
//       i. Adjust the current state by removing the element at the start pointer.
//       ii. Increment the start pointer to shrink the window.
//    c. Update the result based on the current state and window size.
// 4. Return the result.

// Example in JavaScript: Find the max sum of any contiguous subarray of size k
function maxSumSubarrayOfSizeK(nums, k) {
    let maxSum = 0, currentSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end]; // Add the next element to the current sum

        // When we hit the size k, update maxSum if needed, and slide the window
        if (end >= k - 1) {
            maxSum = Math.max(maxSum, currentSum); // Update maxSum
            currentSum -= nums[start]; // Remove the element going out of the window
            start++; // Slide the window forward
        }
    }

    return maxSum;
}

// Example usage
console.log(maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(maxSumSubarrayOfSizeK([2, 3, 4, 1, 5], 2)); // Output: 7