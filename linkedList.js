class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //   push- fn should accept the value
  // create new node using the value passed to the fn
  // if there is no head property on the list, set the head and tail to newly created node
  // otherwaise set the next property on tail to new node and set the tail property on the list to newly created node
  //increment the length by 1
  // return the linked list

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      // this.tail = newNode;
      this.tail = this.head; //both pointing to new node.
    } else {
      //   this.next = newNode;
      //   this.tail = newNode;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
}

var list = new SinglyLinkedList();

list.push('Hello');
list.push('dood bye');
list.push('wassp');

console.log(list);

// console.log(Node);
