// adding merge sorting example and solution

// Starting with 2 ordered arrays, combine them into 1 ordered array

let first = [1, 2, 6, 7, 8]
let second = [3, 4, 5, 9, 10]

// Since these 2 subarrays are already ordered, the minimum of each
// must be at the index 0 location

function findMin(first, second) {
    let minFirst = first[0];
    let minSecond = second[0];

    if (minFirst < minSecond) {
        return minFirst;
    } else {
        return minSecond;
    }
};

// create a function that will use the functionality of the 
// 'findMin' function to find
// the minimum of the 2 subarrays, remove it, and then add it into
// a new 'result array'.

function findMinAndRemove(first, second) {
    let minFirst = first[0];
    let minSecond = second[0];

    if (minFirst < minSecond) {
        return first.shift();
    } else {
        return second.shift();
    }
};

// create the merge function
function merge(first, second) {
    let sorted = [];
    while (first.length != 0 && second.length != 0) {
        let currentMin = findMinAndRemove(first, second);
        sorted.push(currentMin);
    }
    return sorted.concat(first).concat(second);
};
// -----------------------------------------------------------------------
// Big O for merge function

// The worst case scenario of the merge function would be going through
// the while loop for each element in each subarray. 

    // Can't go through the while loop more than the total number 
    // of elements in both arrays. Therefore, the cost of (merging)
    // two subarrays is (first.length + second.length)

        // The big O of the merge function is the length of the 
        // two subarrays