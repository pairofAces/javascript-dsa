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

// -----------------------------------------------------------------------

// Queue
    // First in, First out (FiFo)
    // the first item in is the first out
    // similar to a real life line

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