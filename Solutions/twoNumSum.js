// Two Number Sum


// constant time
    // O(n) -> b/c there is only 1 for loop and the use of a hash 
// twoSumNum using Hash 
function twoSumNumHash(array, targetSum) {
    const set = new Set(array);
    
    for (let i = 0; i < array.length; i++) {
        // create variable for the first number in array
        let a = array[i];
        // create variable for the difference of the targetSum and 'a'
        let b = targetSum - a;
        
        // create if statement to return the solution
        if (set.has(b) && a !== b) {
            return [a, b];
        }
    }
    return [];
}


// 0(n^2) 
// using for loops
const twoNumSum = (array, targetSum) => {
    const result = [];
    let min, max;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let a = array[i];
            let b = array[j];
            if (a + b === targetSum) {
                min = Math.min(a, b);
                max = Math.max(a, b);
                return [min, max];
            }
        }
    }
    return result;
}

