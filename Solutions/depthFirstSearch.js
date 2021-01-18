// Depth First Search 

// Given a Node class that has a name and an array of optional
// children nodes. When put together, nodes form an acyclic
// tree-like structure.

// Quick explanation of the code: (depthFirstSearch & the helper)
    // when the function hits the node:
        // - add the node's name to the results array
    // Then, check if a node has children
        // If yes:
            //  call depthSearchHelper on each child
    
    // invoke the helper to each node while passing the 
    // results array into each function call

    // array is finally returned after all the recursive
    // calls are made
    
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    };
    
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    };

    depthFirstSearch(array) {
        array.push(this.name);
        // insert for loop for each child in 'this.children'
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    };

}


