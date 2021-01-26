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
};