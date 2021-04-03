// MAX SUBSET SUM NO ADJACENT

// PROMPT
// Create a function that takes an array of positive integers
// and returns the max sum of non-adjacent elements in the array.
    // if input array is empty, function should return 0
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
}