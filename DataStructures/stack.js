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

  // POP- POP-remove from TOP- return undefined if stack is empty.
  // return deleted item

  pop() {
    if (this.count === 0) return undefined;
    let deletedItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deletedItem} removed ${this.count} index`);
    return deletedItem;
  }

  // PEEK- Returns the top element- no ,modification

  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  // ISEMPTY- Check if stack is empty

  isEmpty() {
    console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty');
    return this.count == 0;
  }

  //  SIZE- Returns the size of the stack
  size() {}

  // PRINT- Print the elements of stack
  print() {
    let str = '';
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }

  // Clear- clear all
  clear() {
    this.items = [];
    this.count = 0;
    console.log('Stack is cleared');
    return this.items;
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(500);
console.log(stack.print());
console.log(stack.clear());
stack.isEmpty();
