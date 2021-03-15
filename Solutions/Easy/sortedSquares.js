// SORTED SQUARES - LEETCODE 997
// PROMPT

// Given an integer array (nums) sorted in non-decreasing order,
// return an array of the squares of each number sorted in
// non-decreasing order.

// Complexity
// Time: O(n) time, where (n) is the size of the input array
// Space: O(n) space, where (n) is the size of the new array
// ... the new array is essentially the same size as the 
// input array

function sortedSquares(nums) {
    // create a new array of the same size, filled with 0's
    const sortedResult = new Array(nums.length).fill(0);
    let smallerPointer = 0;
    let largerPointer = nums.length - 1;

    // use a for loop to iterate over the new array, from
    // right to left... filling the last position of the 
    // array first, then decrementing... essentialy putting
    // the larger numbers last -> resulting in final sorted
    // array from least to greatest
    for (let idx = nums.length - 1; idx >= 0; idx--) {
        // create 2 variables, one for smallest value
        // and another for the larger value
        const smaller = nums[smallerPointer];
        const larger = nums[largerPointer];

        // use if/else to compare the absolute values
        // of the elements in the array
        if (Math.abs(smaller) > Math.abs(larger)) {
            // if the smaller number is greater than
            // the larger... insert the square of the 
            // smaller number into the new array at the 
            // current idx & increment the smallerPointer
            sortedResult[idx] = smaller * smaller;
            smallerPointer++;
        } else {
            // ELSE if the smaller number is in fact 
            // smaller than the larger number, insert
            // the square of the larger number into
            // the new array at the position of idx
            // & decrement the largerPointer
            sortedResult[idx] = larger * larger;
            largerPointer--;
        };
    };
    
    // return the sorted array
    return sortedResult;
};