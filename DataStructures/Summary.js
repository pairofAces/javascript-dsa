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