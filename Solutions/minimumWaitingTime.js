// Minimum Waiting Time

// Given a non-empty array of positive integers representing
// the amount of time that queries take to execute.
    // Only 1 query can be executed at a time
    // queries can be executed in any order



// Write a function that returns the minimum amount of total waiting
// time for all the queries. 

    // A queries "waiting time" is the time a query needs to
    // wait before starting its execution.
        // Example:
            // If a query is 2nd, then its wait time is the 
            // duration of the 1st query.

            // If a query is 3rd, the its wait time is the 
            // duration of the 1st query.

function minimumWaitingTime(queries) {
    // Sort the Query
    queries.sort((a, b) => a - b);
    
    // create var to represent the total time
    let totalWaitingTime = 0;
    
    // create a for loop to iterate through the queries
    for (let i = 0; i < queries.length; i++) {

    }

    // return the totalWaitingTime variable
};