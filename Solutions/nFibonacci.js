// Nth Fibonacci A.E. 

// The Fibonacci sequence: 
    // the first number of the sequence is 0, the second number
    // is 1, and the (nth) number is the sum of the (n - 1)th 
    // and (n - 2)th numbers. 

    // Write a function that takes in an integer (n) and 
    // returns the (nth) Fibonacci number. 

// NOTE: 
// Fibonacci sequence is often defined with its first 2 numbers
// as (F0 = 0) and (F1 = 1).
    // Therefore: 
        // getNthFib(1) = F0
        // getNthFib(2) = F1

// Solution using if/else statement
function getNthFib(n) {
    if (n === 2) {
        return 1;
    } else if (n === 1) {
        return 0;
    } else {
        // the (nth) number is the SUM of the 
        // (n - 1)th & (n - 2)th numbers
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
};