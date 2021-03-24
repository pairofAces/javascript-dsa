// BREADTH FIRST SEARCH

// The Prompt

// Given a (Node) class that has a (name) and an array of optional
// children nodes.

// Implement the breadthFirstSearch (BFS) method on the (Node) class,
// which will take an empty array, traverses the tree using the 
// BFS approach (Navigating the tree from left-to-right), stores all
// the nodes' names in the input array and then returns it.

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
        
    }
}