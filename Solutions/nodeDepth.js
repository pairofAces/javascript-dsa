// Node Depth A.E. Solution

// Node Depth: the distance between a node in a Binary
// Tree and the tree's root

// Write a function that takes in a Binary Tree and 
// returns the sum of its nodes' depths.

// *** Time/Space
    // Average Case: when the tree is balances
    // Time complexity: 0(n) - where n is the # of nodes in Binary Tree
    // Space complexity: 0(h) - where h is the height of Binary Tree

// create a function with 2 parameters
    // the root
    // the depth, initally set to 0
function nodeDepths(root, depth = 0) {
    // if root equals to null, return 0
    if (root === null) {
        return 0;
    }
    // if there's a root, skip the above if statement
    // and return the following
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
};

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}