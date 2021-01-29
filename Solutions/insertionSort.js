// Part 1, (part 2 at the end)

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

// Big O of this algorithm explained

// (removeMin) helper function has a cost of (n), since the function
// is (n) since we have to call the function by the length of the
// array... which is (n)

// (selectionSort) function costs (n^2)

// ------------------------------------------------------------------

// Part 2 - Another version of the question

// Write a function that takes an array of integers and returns a
// sorted version of the array. Use the insertion sort algorithm.

// sample:
    // input: [8, 5, 2, 9, 5, 6, 3]
    // output: [2, 3, 5, 5, 6, 8, 9]

function insertionSort(array) {
    // use a for loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        // create a variable to "swap" elements
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            // aspirational code (helper function)
            change(j, j - 1, array);
            j -= 1;
        }
    }
    return array;
};

// create the helper function 
function change(i, j, array) {
    // create variable for the element at array[j]
    const temp = array[j];
    // swap the elements in the array
    array[j] = array[i];
    array[i] = temp;
};

// Time Complexity: worst is O(n^2), best is O(n)
// Space Complexity: 0(1)