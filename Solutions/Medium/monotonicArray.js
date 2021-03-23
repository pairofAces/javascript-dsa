// Monotonic Array

// The Prompt

// write a function that takes an array of integers and returns a
// boolean representing whether the array is monotonic.
    // an array is monotonic if its elements are non-increasing
    // or non-decreasing, from left-to-right

    // non-increasing elements aren't just decreasing, they
    // just don't increase.

    // non-decreasing elements aren't just increasing, they
    // just don't decrease.

// Note -> empty arrays and array's of 1 element are monotonic

// Solution 1
    // Complexity Analysis
        // Time Complexity: O(n) time, where (n) is the length of the array
        // Space Complexity: O(1) constant space
        
function isMonotonic(array) {
    // create boolean variables
    let isNonIncreasing = true;
    let isNonDecreasing = true; 

    // use a for loop to iterate through the array
        // In order to compare consecutive elements,
        // initialize the index variable to 1, and then
        // compare to the element at position (index - 1)
    for (let i = 1; i < array.length; i++) {
        // use an if statement to compare the elements
        if (array[i] < array[i - 1]) {
            isNonDecreasing = false;
        }
        if (array[i] > array[i - 1]) {
            isNonIncreasing = false;
        }
    }
    // after the for loop, return the value of either 
    // isNonIncreasing OR isNondecreasing
    return isNonIncreasing || isNonDecreasing;
};