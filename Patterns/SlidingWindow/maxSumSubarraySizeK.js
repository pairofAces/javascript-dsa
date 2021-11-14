// Given an array of positive integers and a positive number 'K',
// find the maximum sum of any contiguous subarray of size 'K'

// Brute Force
    // Time Complexity: O(N * K), where (N) is the number of elements within
    //                  the array, and (K) is the size of the subarray

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

// Sliding Window Approach
    // Time Complexity: O(N), where (N) is the number of elements in the array

    // Space Complexity: O(1), constant space
    
const maxSumSubarraySizeK = (array, k) => {
    // create the initial variables
    let maxSum = 0,
    windowStart = 0,
    windowSum = 0;

    // iterate through the array as a 'window'
        // to keep the window as size 'k', we'll use an if statement within
    for (let windowEnd = 0; windowEnd <array.length; windowEnd++) {
        // increment the windowSum value with the next element 
        // within the window
        windowSum += array[windowEnd];

        // if logic to check if (windowEnd) is now greater than 
        // the length of the window -> (k - 1)
        if (windowEnd >= k - 1) {
            // the max will be between the current (maxSum) and (windowSum)
            maxSum = Math.max(maxSum, windowSum);

            // subtract the element that's moving out of the window, from
            // (windowSum)
            windowSum -= array[windowStart];

            // change the value of (windowStart) to move the window one place
            // to the right
            windowStart += 1;
        }
    }

    // return the value of of the max
    return maxSum;
};