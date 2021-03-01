// Delete and Earn - Leetcode

// Prompt
// Given an array of integers, you an perform operaitons
// In each operation, pick any integer element and delete it
// to earn points equal to that integer. 
    // after deleting that integer, delete all equal elements
    // equal to that integer +/- 1.
// start with 0 points, return the max number of points possible

// Solution 1
// Time complexity: O(n logn) time
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
        // create a variable for the previous keys
        const twoPrevious = keys[i] - keys[i - 1] === 1 ? keys[i - 2] : keys[i - 1];

        // set values in the results object
        results[keys[i]] = Math.max((twoPrevious ? results[twoPrevious] || 0 : 0) + keys[i] * map.get(keys[i]), i > 0 ? results[keys[i - 1]] || 0 : 0);
    }
    // return the max value of the results objects
    return Math.max(results[keys[keys.length - 1]] || 0, results[keys[keys.length - 2]] || 0)
};