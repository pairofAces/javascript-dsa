// Two Number Sum


// 0(n log(n)) solution -> most optimal
function twoSumOptimal(array, targetSum) {
    // sort the array from small to large
    array.sort((a, b) => a - b);
    // create variables for left and right pointers
    let left = 0;
    let right = array.length - 1;
    // while loop to execute while (left) is < (right)

        // In the while loop, create a variable for
        // currentSum
        
        // include an if statement to compare
        // the (currentSum) to (targetSum)

    // if the code gets skipped, return an empty array
};


// constant time
    // O(n) -> b/c there is only 1 for loop and the use of a hash 
// twoSumNum using Hash 
function twoSumNumHash(array, targetSum) {
    const set = new Set(array);
    
    for (let i = 0; i < array.length; i++) {
        // create variable for the first number in array
        let a = array[i];
        // create variable for the difference of the targetSum and 'a'
        let b = targetSum - a;
        
        // create if statement to return the solution
        if (set.has(b) && a !== b) {
            return [a, b];
        }
    }
    return [];
}

// LeetCode
// Two Sum with the indices of the numbers as the output
    // Given an array of integers (nums) and an integer (target),
    // return the indices of the two numbers such that they
    // add up to the (target).
        // can't use same element twice
        // each input has 1 solution
        // return the output in any order
function twoSumIndices (nums, target) {
    // create an empty obj
    let numberObj = {};

    // use a for loop to interate the (nums) array
    for (let i = 0; i < nums.length; i++) {
        // create a variable for the difference b/w the target and
        // the current number
        let diff = target - nums[i];
        
        // use an if statement to check if the diff is in 
        // the numberObj
        if (diff in numberObj) {
            // if it is, return the value of diff in the object
                // the value will be the index of diff
            return [numberObj[diff], i];
        }
        // if diff isn't in the numberObj then
        // insert a key:value pair of the current number and it's index
        numberObj[nums[i]] = i; 

        // (nums[i]) is the key
        // (i) is the value
    }
};




// 0(n^2) 
// using for loops
const twoNumSum = (array, targetSum) => {
    const result = [];
    let min, max;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let a = array[i];
            let b = array[j];
            if (a + b === targetSum) {
                min = Math.min(a, b);
                max = Math.max(a, b);
                return [min, max];
            }
        }
    }
    return result;
}

