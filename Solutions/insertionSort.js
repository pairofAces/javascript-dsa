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
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minI = i;
        }
    }
    array.splice(minI, 1);
    return min;
};

// -----------------------------------

// Selection sort method
function selectionSort(array) {
    let newMin; 
    let sorted = [];
    while (array.length != 0) {
        newMin = removeMin(array);
        sorted.push(newMin);
    }
    return sorted;
};