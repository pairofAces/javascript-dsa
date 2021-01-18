// Depth First Search 

// Given a Node class that has a name and an array of optional
// children nodes. When put together, nodes form an acyclic
// tree-like structure.

// Quick explanation of the code: (depthFirstSearch)
    // when the function hits the node:
        // - add the node's name to the results array
    // Then, check if a node has children
        // for each child in (this.children):
            // invoke the (depthFirstSearch) function on each child

    // array is finally returned after all the recursive
    // calls are made

// Time Complexity: O(V + E)
    // where (V) represents each (Node) on the graph as '(V)ertices'
    // on a graph. (E) represents the edges of the lines connecting
    // each (V) vertices. 

// Space Complexity: O(V)
    // where (V) represents each (Node) on the graph.

    // Since the Question was asking to create a function where
    // the names of each (Node) can be stored into an array:
        // The Space-Complexity would be dependant on the 
        // length of the graph (how many Nodes there are)
            // Therefore -> O(V)
    
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


