// Roman to integer, leetcode 13

var romanToInt = function(s) {
    // create a dictionary for reference between roman numerals and numbers
    const legend = {
        I:1,
        v:5,
        x:10, 
        L:50,
        C:100,
        D:500,
        M:1000
    }

    // create variable to reference the total
        // initated to 0
    let total = 0;

    // iterate through the input string
    for (let i = 0; i < s.length; i++) {
        
        if(legend[s[i]] < legend[s[i + 1]]) {
            total += legend[s[i + 1]] - legend[s[i]];
            i++;
        } else {
            total += legend[s[i]];
        }
    }

    return total;
}