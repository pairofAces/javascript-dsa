// Product Sum solution & complexity analysis

// create a function that takes in a "special" array
// and returns the product sum

    // The depth of a "special" array is how far
    // nested it is.

    // Example:
        // The depth of [] = 1
        // The depth of [[]] = 2
        // The depth of [[[]]] = 3

    // Therefore:
        // The Product Sum of:
            // [x, y] = x + y
            
            // [x, [y, z]] = x + 2(y + z)

            // [x, [y, [z]]] = x + 2(y + 3z)

function productSum(array, multiplier = 1) {
    let sum = 0;
    for (const ele of array) {
        if (Array.isArray(ele)) {

        } else {
            
        }
    }
};