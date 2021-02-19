// Running sum of 1d Array

// Prompt:
    // given an array (nums)-> return a running sum of (nums)

    // running sum: runningSum[i] = sum(nums[0]...nums[i])

const runningSum = function(nums) {
    // since I need to output an array, create an empty
    // array to push elements into
    let result = [];
    // create a variable to represent the sum
    let sum = 0;

    // use a for loop to traverse through the array
    for (let i = 0; i < nums.length; i++) {
        // increment the sum by the element of the current index
        sum += nums[i];
        result.push(sum);
    };
    // return the resulting array
    return result;
};