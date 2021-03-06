// KADANES ALGORITHM

// PROMPT
// Create a function that takes in a non-empty array of integers and
// returns the maxmum sum that can be obtained by summing up all of the
// integers in a non-empty subarray of the input array. 
    // a subarray must only contain adjacent numbers

// Complexity
    // Time: O(n) time, where (n) is the length of the input array
    // Space: O(1) space, constant
function kadanesAlgorithm(array) {
    // create a variable to represent the "counters/pointers"
    let maxEnding = array[0];
    let maxSoFar = array[0];

    // initiate a for loop to traverse the array
    for (let i = 1; i < array.length; i++) {
        // create a number variable to represent the element
        // at index [i]
        const num = array[i];

        // set the maxEnding and maxSoFar variable to the max
        // of two comparisons
            // maxEnding -> num, maxEnding + num
            // maxSoFar -> maxSoFar, maxEnding
        maxEnding = Math.max(num, maxEnding + num);
        maxSoFar = Math.max(maxSoFar, maxEnding);
    }
    // after proceeding from the for loop, return maxSoFar
    return maxSoFar;
}