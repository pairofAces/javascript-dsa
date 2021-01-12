// Leetcode 392. Is Subsequence 
// Given a string (s) and a string (t), check if (s) is a subsequence
// of (t).

const isSubsequence = (s ,t) => {
    // create variables for the index of the strings
    let sIndex = 0;
    let tIndex = 0;
    // make a while loop that will execute when the indices 
    // are less than the length of the strings
    while (sIndex < s.length && tIndex < t.length) {
        // use an if/else statement to check if the letters that
        // are in the indices of each string, are equal
        if (t[tIndex] === s[sIndex]) {
            sIndex += 1;
            tIndex += 1;
        } else {
            tIndex += 1;
        };
    };
    // upon successful iteration, return the boolean of (sIndex)
    // and (s.length) -> should be equal, returning a 
    // 'true' or 'false'
    return sIndex === s.length;
};

// -----------------------------------------------------------------------

// Validate Subsequene - A.E.
// Given two non-empty arrays of integers, write a function that
// determines if the second array is a subsequene of the first one

// Subsequence -> set of numbers that aren't necessarily adjacent,
// but are in the same order as they are in the array.
    // example: 
        // array = [1,2,3,4]
        // subsequence = [1,3,4]
function isValidSubsequence (array, sequence) {
    let s = 0;
    let a = 0;
    while (s < sequence.length && a < array.length) {
        if (sequence[s] === array[a]) {
            s +=1
        }
        a += 1;
    }
    return s === sequence.length;
};