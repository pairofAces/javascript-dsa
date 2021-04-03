// MAX SUBSET SUM NO ADJACENT

// PROMPT
// Create a function that takes an array of positive integers
// and returns the max sum of non-adjacent elements in the array.
    // if input array is empty, function should return 0

// Complexity
    // Time: O(n) time, where (n) is the length of the input array
    // Space: O(n) space, where (n) is the length of the created array

function maxSubsetSumNoAdjacent(array) {
    // use conditional logic
        // if the array is empty, return 0
    if (!array.length) {
        return 0;
    }
    // edge case, if the input only had 1 element
    if (array.length === 1) {
        // then simply return the element
        return array[0];
    }

    // create a variable to represent the max Sum, it will be
    // a copy of the input array
    const maxSums = array.slice();

    // set the element at index [1] of maxSums to the max b/w
    // the first two elements in the input array
    maxSums[1] = Math.max(array[0], array[1]);

    // use a for loop, starting at position [2]
    for (let i = 2; i < array.length; i++) {
        // at index [i] of maxSums, set the value to the max b/w
        // maxSums[i - 1] & maxSums[i - 2] + array[i]
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    }

    // after getting out of the for loop, return the final element
    // of the maxSums array
    return maxSums[maxSums.length - 1];
}