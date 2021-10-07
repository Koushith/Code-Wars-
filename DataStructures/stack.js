/**
 * Stack is a linear Data Structure- Add and remove from Top- also known as LIFO
 *
 * Operations
 *
 * PUSH- Push the element on Top
 * POP- POP-remove from TOP
 * PEEK- Returns the top element- no ,modification
 * ISEMPTY- Check if stack is empty
 * SIZE- Returns the size of the stack
 * PRINT- Print the elements of stack
 * Clear- clear all
 */

class Stack {
  // constructor- initilize the instance-

  constructor() {
    this.items = [];
    this.count = 0;
  }

  // PUSH- Push the element on Top- return the last index.
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count} index`);
    this.count++;
    return this.count - 1;
  }

  // POP- POP-remove from TOP

  // PEEK- Returns the top element- no ,modification

  // ISEMPTY- Check if stack is empty

  //  SIZE- Returns the size of the stack

  // PRINT- Print the elements of stack

  // Clear- clear all
}

const stack = new Stack();

stack.push(100);
stack.push(200);
