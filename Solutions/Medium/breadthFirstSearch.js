// BREADTH FIRST SEARCH

// The Prompt

// Given a (Node) class that has a (name) and an array of optional
// children nodes.

// Implement the breadthFirstSearch (BFS) method on the (Node) class,
// which will take an empty array, traverses the tree using the 
// BFS approach (Navigating the tree from left-to-right), stores all
// the nodes' names in the input array and then returns it.

// Complexity Analysis
    // Time: O(n + x) time, where (n) is the size of the input array
    // and (x) is the size of the created queue

    // Space: O(x) space, where (x) is the size of the created queue
class Node {
    // initiate the class with the parameters
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    // create a class method to add a child
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    // create a class methhod for BFS
    breadthFirstSearch(array) {
        // first create a queue variable with "this" Node
        const queue = [this];

        // use a while loop for as long as the length of the queue
        // is greater than 0
        while (queue.length > 0) {
            // create a variable "current" that will be the value of 
            // what's in the queue
                // which is a Node (The Node has a name attribute)
            const current = queue.shift();
            array.push(current.name)

            // use a for loop for every child element of current's
            // children
            for (const child of current.children) {
                // push the child into the queue variable
                queue.push(child);
            }
        }

        // after getting out of the while loop,
        // return the array
        return array;
    }
}