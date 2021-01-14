// Branch Sums - A.E. solution

// Write a function that takes in a Binary tree and returns a list
// of its branch sums ordered from leftmost branch sum to rightmost 
// branch sum

// A branch sum is a the sum of all the values in a Binary Tree Branch. 
    // A Binary Tree Branch is a a path of nodes in a tree that starts 
    // at the (root) node and ends at any (leaf) node. 

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root, sum = 0, results = []) {
    const { left, right, value } = root;

    sum += value;

    // work on if statements below
        // why do if/else statements cause errors? 
        // the following only works with if statements
            // (find out more info on if and if/else)
    if (!left && !right) {
        results.push(sum);
    }

    if (left) {
        branchSums(left, sum, results);
    }

    if (right) {
        branchSums(right, sum, results);
    }

    return results;
}