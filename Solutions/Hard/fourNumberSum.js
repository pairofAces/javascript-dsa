// Four Number Sum

// Prompt:
// create a function that takes an array of distinct
// integers and an integer representing a target sum.
// The function should find all quadruplets in the array
// that sum up to the target sum and return  two-dimensional
// array of all the quadruplets
    // if no quadruplets -> return an empty array

function fourNumberSum(array, targetSum) {
    // create the containers
    const allPairSums = {};
    const quadruplets = [];
    // initiate for loop
    for (let i = 1; i < array.length - 1; i++) {
        // initiate a nested for loop for the adjacent position
        for (let j = i + 1; j < array.length; j++) {
            // create the currentSum and difference variables
            const currentSum = array[i] + array[j];
            const difference = targetSum - currentSum;
            // use an if statement to check if the difference
            // is in the allPairSums map
            if (difference in allPairSums) {
                // initiate  a for loop for each 'pair' in 
                // allPairSums
                for (const pair of allPairSums[difference]) {
                    quadruplets.push(pair.concat([array[i], array[j]]))
                }
            }
        }
        // create a for loop for a pointer at index 0
        for (let k = 0; k < i; k++) {
            // create a variable for the currentSum for the 
            // elements in the array at index i and k
            const currentSum = array[i] + array[k];
            if (!(currentSum in allPairSums)) {
                
            }
        }
    }
}