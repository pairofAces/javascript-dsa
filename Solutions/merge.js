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