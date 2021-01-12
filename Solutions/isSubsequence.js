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
        if (t[tIndex] === s[sIndex]) {
            sIndex += 1;
            tIndex += 1;
        } else {
            tIndex += 1;
        };
    };
    return sIndex === s.length;
};