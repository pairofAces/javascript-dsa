// Binary Search 

// Write a function that takes an array of integers
// and a target integer.

// The function needs to be able to iterate through the
// array and check for the target integer.
    // If it is:
        // return the index of the element
    // If not:
        // return -1

function binarySearch(array, target) {
    // create helper function 
    // return binarySearchHelper()
};

function binarySearchHelper(array, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2);
    const match = array[middle];
    if (target === match) {
        return middle;
    } else if (target < match) {
        // iterate through the helper
        return binarySearchHelper(array, target, left, middle - 1);
    } else {
        // iterate through the helper
        return binarySearchHelper(array, target, middle + 1, right);
    };
};