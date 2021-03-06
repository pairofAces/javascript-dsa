// FIND THREE LARGEST NUMBERS

// PROMPT
// Create a function that takes an array and returns a
// sorted array of the three largest integers in the 
// input array.
    // Don't sort the input array
    // if there are duplicate integers in the input array,
    // the resulting array should contain those integers
    // if they are the largest.


// Complexity
    // Time: O(n) time, where (n) is the length of the input array
    // Space: O(1) space, because at every iteration, we're creating
        // only 1 array.
function findThreeLargestNumbers(array) {
    // create a variable to represent the final output array
    const largeThree = [null, null, null];

    // use a for loop to traverse over each number in the input array
    for (const num of array) {
        // aspirational code
            // this helper method will handle updating the (largeThree)
            // array created above
        updateLargest(largeThree, num);
    }

    // after the for loop, return the (largeThree) array
    return largeThree;
};

// create helper function below
function updateLargest(largeThree, num) {
    // use if/else statement to make comparisons between the element
    // in (largeThree) and the (num)
        // make comparisons at each index of the (largeThree) array
    if (largeThree[2] === null || num > largeThree[2]) {
        // aspirational code
            // create another helper method to handle creating
            // an array with the largest numbers
        shiftAndUpdate(largeThree, num, 2);
    } else if (largeThree[1] === null || num > largeThree[1]) {
        // aspirational code
            // create another helper method to handle creating
            // an array with the largest numbers
        shiftAndUpdate(largeThree, num, 1);
    } else {
        // aspirational code
            // create another helper method to handle creating
            // an array with the largest numbers
        shiftAndUpdate(largeThree, num, 0);
    }
}

// create the shiftAndUpdate helper function below
    // it will take an array, number, and index parameters
function shiftAndUpdate(array, num, idx) {
    // create a for loop to compare the current [i] value
    // to the (idx) paramter
    for (let i = 0; i <= idx; i++ ) {
        // use an if/else statement to check if (i) is equal to
        // (idx)
        if (i === idx) {
            // if it is, set the i'th element in (array) to (num)
            array[i] = num;
        } else {
            // if not, then the i'th elment in (array) will be
            // set to the i'th element plus 1
            array[i] = array[i + 1];
        }
    }
}