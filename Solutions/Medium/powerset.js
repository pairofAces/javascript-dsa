// Powerset

// PROMPT

// create a function that takes an array of unique nubers and returns
// its powerset. 
    // the powerset of P(X) of a set X, is the set of all subsets of X
        // example:
            // powerset of [1,2] is [[], [1], [2], [1,2]]
        // NOTE: the sets within the powerset don't need to be in a
        // specific order

// include another parameter, idx, and set it to null
function powerset(array, idx = null) {
    // use an if statement to check if idx is null
    // or less than 0
    if (idx === null) {
        // the idx will be set to the last element in the array
        idx = array.length - 1;
    }
    if (idx < 0) {
        // then return an empty array, within an array
        return [[]];
    }
}