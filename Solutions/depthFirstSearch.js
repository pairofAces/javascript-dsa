// Depth First Search 

// Given a Node class that has a name and an array of optional
// children nodes. When put together, nodes form an acyclic
// tree-like structure.

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    };
    
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    };

    // In order to work with this function, I can make a
    // helper function -> depthSearchHelper
    depthFirstSearch(array) {
        this.depthSearchHelper(this, array)
        return array;
    };

    // create the helper function
    depthSearchHelper({name, children}, array) {
        array.push(name)
        if (children.length) {
            children.forEach(child => {
                this.depthSearchHelper(child, array);
            });
        };
    };

}


