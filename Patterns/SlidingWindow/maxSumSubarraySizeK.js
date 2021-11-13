// Given an array of positive integers and a positive number 'K',
// find the maximum sum of any contiguous subarray of size 'K'

// Brute Force
const max_sum_subarray_of_size_k = (array, k) => {
    // create two reference variables to represent the sum of the 
    // current window, and the max sum
    let windowSum = 0,
        maxSum = 0;
    
    // traverse the array
    for (let i = 0; i < array.length - k + 1; i++) {
        // bring the reference of (windowSum)
        windowSum = 0;

        // traverse through the array in a window of size (k)
        for (let j = i; j < i + k; j++) {
            // increment the value of (windowSum) by the (j)th element
            // in the array
            windowSum += array[j];
        }

        // calculate what the maxSum will be
        maxSum = Math.max(maxSum, windowSum);
    }

    // return the the value of (maxSum)
    return maxSum;
}