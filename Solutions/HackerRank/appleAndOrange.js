// Hackerrank Apple and Orange

// https://www.hackerrank.com/challenges/apple-and-orange/problem

// parameters:
    // s: integer, starting point of Sam's house location.
    // t: integer, ending location of Sam's house location.
    // a: integer, location of the Apple tree.
    // b: integer, location of the Orange tree.
    // apples: integer array, distances at which each apple falls from the tree.
    // oranges: integer array, distances at which each orange falls from the tree.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // will need to count
    let countt = [0, 0];
    // loop through the apples
    apples.forEach(apple => {
        // check for the positive values only
        if (apple < 1) return;
        // check the distance from the house
        let distance = apple + a;
        // is the distance within the range?
        if (distance >= s && distance <= t) count[0] += 1;
    })
    
    // loop through oranges
    oranges.forEach(orange => {
        // check for the negative values only
        if (orange > -1) return;
        // check the distance
        let distance = orange + b;
        // is the distance within the range?
        if (distance >= s && distance <= t) count[1] += 1;
    })

    // finally return the count
        // for each count, print it -> console.log
    return count.forEach(count => console.log(count));
};

