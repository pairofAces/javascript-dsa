// Node Depth A.E. Solution

// Node Depth: the distance between a node in a Binary
// Tree and the tree's root

// Write a function that takes in a Binary Tree and 
// returns the sum of its nodes' depths.

function nodeDepths(root, depth = 0) {
    if (root === null) {
        return 0;
    }
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
};