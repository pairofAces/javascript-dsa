// Selection Sort

// write a function that takes an array of integers and returns
// a sorted version. 

function selectionSort(array) {
    // create a variable for the starting index
    let startIdx = 0;
    
    // use a while loop for while the variable above is
    // less than the array length minus 1, since the first
    // number is at index 0, the last has to be at the 
    // index of (array.length - 1)
    while (startIdx < array.length - 1) {
        // create a variable for the 'smallest' index
        // to be equal to the startIdx
        let smallestIdx = startIdx;

        // use a for loop to compare the startIdx and
        // the smallestIdx. 
        for (let i = startIdx + 1; i < array.length; i++) {
            // use an if statement to compare the i (which is the
            // startIdx)  to the number attached to the smallestIdx
            if (array[smallestIdx] > array[i]) {
                // then the smallestIdx will be i
                smallestIdx = i;
            }
        }
        // helper funciton to swap the elements at startIdx and 
        // smallestIdx
        swap(startIdx, smallestIdx, array); //aspirational code;
        startIdx++;
    }
    // return the final array;
    return array;
};

// create the helper function
function swap(i, j, array) {
    // create a temp variable equal to the element at j
        // so it can be used to successfully swap
    const temp = array[j];

    // swap the elements by making the elements at each index
    // equal to the other
    array[j] = array[i];
    array[i] = temp;
};

// Time Complexity
// Worst case scenario: O(n^2)

// Space Complexity
// Worst case scenario: O(1) - Constant space 