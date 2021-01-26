// Find the 3 largest numbers

// write a function that takes an array of at least three integers
// and returns a sorted array of the three largest integers within
// the array

    // note -> Do not sort the input array

function findThreeLargestNums(array) {
    // initialize with an array of null values
    let threeLargest = [null, null, null];

    // create a for loop for every number in the array
    for (const num of array) {
        // aspirational code - Helper method
        updateLargest(threeLargest, num);
    }
    return threeLargest;
};

// create the updateLargest helper method
function updateLargest(threeLargest, num) {
    // conditional to compare 3rd number in threeLargest array
    // to num
    if (threeLargest[2] === null || num > threeLargest[2]) {
        // another aspirational code to shift the numbers in the 
        // threeLargest array
        shiftAndUpdate() // need to work on this
    } else if (threeLargest[1] === null || num > threeLargest[1]) {
        shiftAndUpdate() // need to work on this
    } else if (threeLargest[0] === null || num > threeLargest[0]) {
        shiftAndUpdate() // need to work on this
    };
};