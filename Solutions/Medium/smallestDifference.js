// SMALLEST DIFFERENCE
// Promt 

// write a function that takes in two non-empty arrays of integers
// and finds the pair of numbers whose absolute difference is 
// closest to zero
    // return an array of the two numbers
        // the number in the 1st array should be in the 1st position
        // the number in the 2nd array should be in the 2nd position
function smallestDifference(arrayOne, arrayTwo) {
    // first sort the arrays
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    // create variables for pointers/smallest number/current number
    let idxOne = 0;
    let idxTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];
    // initiate a while loop for as long as both indices are less
    // than the respected array's length
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {

    };
}