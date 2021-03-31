// Number Of Islands

// Prompt
// Given an (m X n) 2D binary grid which represents a map of '1's (land)
// and '0's (water), return the number of islands.

    // An Island is surrounded by water and is formed by connecting
    // adjacent lands horizontally or vertically.
        // Assume all four edges of the grid are all surrounded by 
        // water

var numberIslands = function(grid) {
    // initiate an variable set to 0
    let count = 0;

    // create a variable that will hold directional values for reference
    // [-1, 0] = Up
    // [0, -1] = Left
    // [1, 0] = Down
    // [0, 1] = Right
    let compass = [[-1, 0], [0, -1], [1, 0], [0, 1]]

    // Next, we need to loop over the grid input
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // need to check if any of the elements within the
            // grid are (1)'s (or Islands)
            if (grid[i][j] === "1") {
                // at this point, increment the count variable
                count++;
                // also, use a helper function to check the surrounding
                // elements
                helper(i, j);
            }
        }
    }
    
    // create the helper function
    function helper(row, col) {
        // use an if statement to check conditions 
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") {
            return;
        }
    
        // after getting out of the if statement, set the element
        // at grid[row][col] to 0
        grid[row][col] = "0";
    
        // initiate a for loop for the directions of compass
        for (const direction of compass) {
            // use recursion
            helper(row + direction[0], col + direction[1])
        }
    };
};
