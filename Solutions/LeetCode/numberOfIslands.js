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
            
        }
    }
};