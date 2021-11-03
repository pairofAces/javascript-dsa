// Leetcode 20. Valid Parenthesis

// Given a string s containing just the characters 
// '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// Note:
    // An input string is valid if:
        // Open brackets must be closed by the same type of brackets.
        // Open brackets must be closed in the correct order.


var isValid = function(s) {

    var stack = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        
        if (ch === "(" || ch === "[" || ch === "{") {
            // push the correct closing bracket into (stack)
                // use a helper function to take care of the logic
            stack.push(getClosingBracket(ch));
        } else if (stack.length === 0 || stack.pop() !== ch) {
            return false;
        }
    }
    return stack.length === 0;
}

// create a helper function (getClosingBracket)
    // take the (ch) variable as an input
function getClosingBracket(ch) {
    if(ch === "(") {
        return ")";
    } else if (ch === "[") {
        return "]";
    } else if (ch === "{") {
        return "}";
    }
}