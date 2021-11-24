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
    // Time: O(2 ^ n) time, where (n) is the size of the input

    // Space: O(n) space
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

// Optimal Solution
    // Time: O(n) time, where (n) is the size of the input
    // Space: O(1) constant space, since no external data structures
    //        are being used.

function getNFib(n) {
    const lastTwo = [0, 1];
    let counter = 3;

    while (counter <= 3) {
        const next = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = next;

        counter++;
    }

    return n > 1 ? lastTwo[1] : lastTwo[0];
}