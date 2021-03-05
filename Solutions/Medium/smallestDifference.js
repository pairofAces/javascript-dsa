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
        // create variables for the 1st and 2nd numbers
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];
        // if/else conditional
            // if (first is less than second): current is the diff and
            // increment the (first) pointer
            // if (first is greater than second): current is the diff
            // and incremenet the (second) pointer
        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            idxOne++;
        } else if (firstNum > secondNum) {
            current = firstNum - secondNum;
            idxTwo++;
        } else {
            // if first is = second, return the 2 numbers
            return [firstNum, secondNum];
        };
        // conditional for if the smallest > current
        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        }
    };
    // after getting out of the while loop, return
    // the smallestPair array
    return smallestPair;
};