// NUMBER LINE JUMPS / KANGAROO 

// Question
// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
    // create a variable to represent the max
        // as per the given constraints
    let max = 10000;

    // create a boolean variable set to false
    let complete = false;

    // create a for loop, looping for as long as the
    // [i] variable is less than (max)
    for (let i = 0; i < max; i++){
        // set the x1 and x2 variables
        x1 = x1 + v1;
        x2 = x2 + v2;

        // use an if statement to check if x1 is equal to x2
        if (x1 === x2) {
            // set (complete) to true and break the loop
            complete = true;
            break;
        }
    }
}