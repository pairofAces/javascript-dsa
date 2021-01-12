// Leetcode 392. Is Subsequence 
// Given a string (s) and a string (t), check if (s) is a subsequence
// of (t).

const isSubsequence = (s ,t) => {
    let sIndex = 0;
    let tIndex = 0;
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