// Leetcode 14 - Longest Common Prefix

// create a function to find the longest common prefix from an
// array of strings

// note: if there's no common prefix, return an empty string

var longestCommonPrefix = function (strs) {
    let prefix = '';
    
    // edge case if the input array is empty
    if (strs.length === 0) return '';

    // edge case if the input array has only one element
    if (strs.length === 1) return strs[0];

    for(let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];
        if(currentChar && strs.every((s) => s[i] == currentChar)) {
            prefix += currentChar;
        } else {
            return prefix;
        }
    }

    return prefix;
}