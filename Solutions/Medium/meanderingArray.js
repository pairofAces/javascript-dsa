// function is expected to return an integer array
// the function will take an unsorted array as a parameter

function meanderingArray(array) {
    // set a variable to the array's length and also sort it
    let n = array.length;
    let sorted = array.sort((a, b) => a - b);
    // create an empty array with var's for the smallest and
    // largest number
    let newArray = [];
    let small = 0;
    let large = n - 1;
    // create a variable to represent a boolean
    let checker = true;
    // create a for loop to iterate over the array and pushing
    // into new array
    for (let i = 0; i < n; i++) {
        if (checker) {
            newArray[i] = sorted[large--];
        } else {
            newArray[i] = sorted[small++];
        }
        checker = !checker;
    }
    // return the new array
    return newArray;
}