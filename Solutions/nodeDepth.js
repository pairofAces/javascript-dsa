// Node Depth A.E. Solution

// Node Depth: the distance between a node in a Binary
// Tree and the tree's root

// Write a function that takes in a Binary Tree and 
// returns the sum of its nodes' depths.

// create a function with 2 parameters
    // the root
    // the depth, initally set to 0
function nodeDepths(root, depth = 0) {
    if (root === null) {
        return 0;
    }
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
};

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}