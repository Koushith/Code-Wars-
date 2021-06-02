class Node {
  //this is a node
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  // this is a property of linked list
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

  // pop- removes from end
  //  -if there are no nodes in the list, return undefined.
  // loop through the list until you reach the tail.
  // set the propertyy of the 2nd last node to null
  // set the tail to be last 2nd node
  // decrement the length by 1
  // retrn the removed

  pop() {
    if (!this.head) {
      return undefined;
    } else {
      var current = this.head;
      var newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  shift() {
    if (!this.head) return undefined;

    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // unshift- adding the node at beginning
  unShift(value) {
    var newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = newNode;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }
  // get- get a node at given index.

  get(index) {
    if (index < 0 || index >= this.length) return null;
  }

  // traverse(){
  //   var current=this.head;
  //   while(current){
  //     console.log(current.val)
  //     current=current.next;
  //   }
  // }
}

var list = new SinglyLinkedList();

list.push('Hello');
list.push('dood bye');
list.push('wassp');

console.log(list);

// console.log(Node);
