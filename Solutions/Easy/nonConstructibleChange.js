// NON-CONSTRUCTIBLE CHANGE
// PROMPT:

// Given an array of positive numbers, representing the values of
// the coins you have, create a function that returns the minimum
// amount of change that you can't make. 
    // the numbers in the array don't have to be unique
    // example: array = [1, 2, 5]
        // The minimum amount of change I can't create is 4.
    // If there are no coins, the minimum is 1.
function nonConstructibleChange(coins) {
    // sort the coins array
    coins.sort((a, b) => a - b);

    // create a variable for the current change
    let currentChange = 0;
    
    // traverse through the array, for each coin
    for (const coin of coins) {

    }

    
};