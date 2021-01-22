// adding notes for the simple sorting algorithm that
// creates the final sorted array, or list, one
// element at a time

// Insertion Sort

let unsortedArray = [5, 6, -1, 1, 3];

let sortedArray = [];

// aspirational code 
removeMin(unsortedArray, sortedArray);
sortedArray;
// [-1]
unsortedArray;
// [5, 6, 1, 3]

removeMin(unsortedArray, sortedArray);
sortedArray;
// [-1, 1]
unsortedArray;
// [5, 6, 3]

// create the aspirational function "removeMin"
function removeMin(array) {
    let min = array[0];
    let minI = 0;
};