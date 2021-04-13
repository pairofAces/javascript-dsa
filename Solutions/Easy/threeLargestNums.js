// FIND THREE LARGEST NUMBERS

// PROMPT
// Create a function that takes an array and returns a
// sorted array of the three largest integers in the 
// input array.
    // Don't sort the input array
    // if there are duplicate integers in the input array,
    // the resulting array should contain those integers
    // if they are the largest.

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

    } else if (largeThree[1] === null || num > largeThree[1]) {

    } else {

    }
}