// A.E. solution

// write a function that takes in a Binary Search Tree (BST) and a
// target integer value and returns the closest value to that target
// value contained in the BST

// assumption: there can only be one closest value

function findClosestValueInBst(tree, target) {
    // I'll make a helper function outside of this scope
    // then envoke it here
    // (aspirational code)
    return closestVaueBstHelper(tree, target, tree.value);
};

// create the helper function here
function closestVaueBstHelper(tree, target, closest) {
    let presentNode = tree;
    while (presentNode !== null) {
        if (Math.abs(target - closest) > Math.abs(target - presentNode.value)) {
            closest = presentNode.value;
        }
        if (target < presentNode.value) {
            presentNode = presentNode.left;
        } else if (target > presentNode.value) {
            presentNode = presentNode.right;
        } else {
            break;
        }
    }
};