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
                
            }
        }
    }
}