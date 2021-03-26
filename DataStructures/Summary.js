// Summaries of the common Data Stuctures 

// Stack
    // Last item in, First item out (LiFo)
    // works similarly like the 'call stack'

class Stack {
    constructor() {
        this.count = 0;
        this.container = {};
    }

    //the following will ADD items to the top of the stack
    add(item) {
        this.container[++this.count] = item;
    }

    //the following will REMOVE items from the top of the stack
    remove() {
        if (!this.count) return;
        let removed = this.container[this.count];
        delete this.container[this.count--];
        return removed;
    }
}

// Array also doubles as a stack
const stack = [];

// methods:
    // push: push(item) -> O(1) time
    // pop: pop() -> O(1) time
    // size: stack.length -> O(1) time
    // top: stack[stack.length - 1] -> O(1) time

// -----------------------------------------------------------------------

// Queue
    // First in, First out (FiFo)
    // the first item in is the first out
    // similar to a real life line


// JS doesn't have built in support for queues, so Array's are used.
const queue = [];

    // Methods:
        // enqueue: push(item) -> O(1) time
        // dequeue: shift() -> O(n) time
        // size: queue.length -> O(1) time

    class Queue {
        constructor() {
            this.queue = {};
            this.head = 0;
            this.tail = 0;
        }

        // the following will ADD items to the end of the queue
        enqueue(item) {
            this.queue[this.tail++] = item;
        }

        //the following will REMOVE items from the head of the queue
        dequeue() {
            if (this.tail === this.head) return;
            let remove = this.queue[this.head];
            delete this.queue[this.head++];
            return remove;
        }

        // the following states how many items are in a queue
        size() {
            return this.tail - this.head;
        }
    }

    // -------------------------------------------------------------------

    // Double Linked List

    class LinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
        }

        //the following adds items to the head of the list
        addToHead(item) {
            let newNode = new Node(item);
            if (!this.tail) this.tail = newNode;
            if (this.head) {
                this.head.previous = newNode;
                newNode.next = this.head;
            }
            this.head = newNode;
        }

        //the following adds items to the tail of the list
        addToTail(item) {
            let newNode = new Node(item);
            if (!this.head) this.head = newNode;
            if (this.tail) {
                this.tail.next = newNode;
                newNode.previous = this.tail;
            }
            this.tail = newNode;
        }

        // the following removes items from the head of the list
        removeHead() {
            if (!this.head) return;
            let remove = this.head;
            if (remove.next) {
                // if the next node exists then
                this.head = null;
                this.tail = null;
            }
            return remove.value;
        }

        // the following removes items from the tail of the list
        removeTail() {
            if (!this.tail) return;
            let remove = this.tail;
            if (remove.previous) {
                // if there is a previous node
                this.tail = remove.previous;
                this.tail.next = null;
            } else {
                // if there are no no other nodes in the list
                this.head = null;
                this.tail = null;
            }
            return remove.value;
        }

        // the following will search for a nodes value using strings/func
            // start with the head:
                // if no node -> end
                // else -> determine if the style is string or function

            // 3 if statements will be the base cases (recurse)
        search(style, searchNode = this.head) {
            if (!this.searchNode) {
                return null;
            }
            else if (typeof style === "string" && searchNode.value === style) {
                return searchNode.value;
            }
            else if (typeof style === "function" && style(searchNode.value)) {
                return searchNode.value;
            }
            return this.search(style, (searchNode = searchNode.next));
        }
    }

    // the following is a class that creates the nodes for list(s)
    class Node {
        constructor(value) {
            this.value = null;
            this.next = null;
            this.previous = null;
        }
    }

// -----------------------------------------------------------------------
    // Binary Search Tree
        // each node is a binary search tree
    
    class BinarySearchTree {
        constructor(val) {
            this.value = val;
            this.mag = 1;
        }

        // the following will insert value into the proper place based
        // on the other nodes value(s)
        insert(val) {
            let direction = val > this.value ? "left" : "right";
            if(![this.direction]) {
                this[direction] = new BinarySearchTree(val);
                this.mag++;
            } else {
                this[direction].insert(val);
            }
        }

        // the following will check to see if the tree has a specific value
        contains(val) {
            if (this.value === val) return true;
            let direction = val < this.value ? "left" : "right";
            return this[direction] ? this[direction].contains(val) : false;
        }

        // the following will search by using queue's to evaluate each
        // node and children nodes
            // first -> add a node to the queue
            // then ->  add a child to the queue
            // repeat
        breadthFirstForEach(cb, queue = [this]) {
            if (queue.length) {
                const node = queue.shift();
                cb(node.value);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                return this.breadthFirstForEach(cb, queue);
            }
        }

        // the following will search by using recursion
        depthFirstForEach(cb, searchType) {
            searchType ? searchType : (searchType = 'in-order');
            if (searchType === 'in-order') {
                // look left, look at the node, look right
                // left/right is recursive
                if (this.left) this.left.depthFirstForEach(cb);
                cb(this.value);
                if (this.right) this.right.depthFirstForEach(cb);
            } else if (searchType === 'pre-order') {
                cb(this.value);
                if (this.left) this.left.depthFirstForEach(cb, 'pre-order');
                if (this.right) this.right.depthFirstForEach(cb, 'pre-order');
            } else if (searchType === 'post-order') {
                if (this.left) this.left.depthFirstForEach(cb, 'post-order');
                if (this.right) this.right.depthFirstForEach(cb, 'post-order');
                cb(this.value);
            }
        }

        // the following will return the magnitude
        // of a tree
        size() {
            return this.mag;
        }

        // the following finds the smallest node value in a tree
        min() {
            return !this.left ? this.value : this.left.min();
        }

        // the following finds the largest node in the tree
        max() {
            return !this.right ? this.value : this.right.max();
        }
        
    }
    // the following is 
    // O (log n) time O(1) space

    const findClosestValueInBst = (currNode = tree, target, closest = Infinity) => {
        while(currNode) {
            // if the difference b/w the closest and the target is > target - tree value
            // the new closest is the tree value
            const {value, left, right} = currNode

            // check if the closest(s) has the least difference
            if (Math.abs(closest - target) > Math.abs(target - value)) {
                closest = value;
            }

            // go left or right depending on the value of the node
            if (target < value) {
                currNode = left;
            } else if (target > value) {
                currNode = right;
            } else {
                // if it's the exact match
                    // stop the iteration
                return value;
            }

            return closest;
        }
    }

// -----------------------------------------------------------------------
