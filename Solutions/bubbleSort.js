// Bubble Sort

// write a function that takes in an array of integers and returns
// a sorted version. use the bubble sort method.

function bubbleSort(array) {
    // create variables
    let sorted = false;
    let counter = 0;

    // while loop for while sorted is true
    while (!sorted) {
        sorted = true;
        // create for loop for the length of (the array - 1 - counter)
        for (let i = 0; i < array.length - 1 - counter; i++) {
            // create an if statement to check if the array[i]
            // element is greater than the element at 
            // array[i + 1]
            if (array[i] > array[i + 1]) {
                // use the swap function to swap the elements within the array
                swap(i, i + 1, array);
                sorted = false;
            }
        }
        // increment the counter
        counter ++;
    }
};