/*
20. Write a JavaScript program to implement a stack that checks if
a given element is present or not in the stack.
*/
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    contains(element) {
        return this.items.includes(element);
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Is 20 present in the stack?", stack.contains(20)); // true
console.log("Is 40 present in the stack?", stack.contains(40)); // false
