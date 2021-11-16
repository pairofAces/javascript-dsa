// Smallest Subarray With Given Sum

// Given an array of positive numbers and a positive number ‘S,’ 
// find the length of the smallest contiguous subarray whose sum 
// is greater than or equal to ‘S’. Return 0 if no such subarray exists.

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
            
        }
    }
}