// Delete and Earn - Leetcode

// Prompt
// Given an array of integers, you an perform operaitons
// In each operation, pick any integer element and delete it
// to earn points equal to that integer. 
    // after deleting that integer, delete all equal elements
    // equal to that integer +/- 1.
// start with 0 points, return the max number of points possible
const deleteAndEarn = function(nums) {
    // create mew containers
    const map = new Map();
    const results = {};
    // for loop to add integers into the new map
    for (let i = 0; i < nums.length; i++) {
        // insert numbers into the created map
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    // create a keys array from the map container
    const keys = Array.from(map.keys()).sort((a, b) => a < b ? -1 : 1);

    // initiate another for loop to create another variable
    // for the previous keys and to set values in the results
    // object
    for(let i =0; u < keys.length; i++) {
        
    }
};