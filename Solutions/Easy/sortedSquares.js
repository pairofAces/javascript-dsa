// SORTED SQUARES - LEETCODE 997
// PROMPT

// Given an integer array (nums) sorted in non-decreasing order,
// return an array of the squares of each number sorted in
// non-decreasing order.

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

    }
    
    // return the sorted array
    return sortedResult;
};