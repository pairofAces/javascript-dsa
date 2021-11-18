// Smallest Subarray With Given Sum

// Given an array of positive numbers and a positive number ‘S,’ 
// find the length of the smallest contiguous subarray whose sum 
// is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Complexity Analysis
    // Time: O(n), where (n) is the length of the input array

    // Space: O(1), constant time, since no external data structures are
    //        being utilized.
    
const smallest_subarray_with_sum = (s, arr) => {
    // create initial refence variables
    let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

    // traverse the input array by creating a windowEnd variabe
    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // add the next element to (windowSum)
        windowSum += arr[windowEnd];

        // shrink the size of the 'window' as small as possible until
        // (windowSum) is smaller than (s)
        while (windowSum >= s) {
            // the minimum length will become the minimum b/w 
            // the current (minLength) and the value of 
            // (windowEnd - windowStart + 1)
            minLength = Math.min(minLength, windowEnd - windowStart + 1);

            // take the element from the front of the window out
            windowSum -= arr[windowStart];

            // increment the starting position of the window
            windowStart += 1
        }
    }

    if (minLength == Infinity) {
        return 0;
    }

    return minLength;
}