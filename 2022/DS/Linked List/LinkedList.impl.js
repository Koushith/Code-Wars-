// 10--->5--->16

// use DRY- so create a new node and reuse that.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    // A node has a vaue- can be anything. and pointer to next node.
    this.head = {
      value: value,
      next: null,
    };
    // if there is no element, lail will be head (Last node)
    this.tail = this.head;
    this.length = 1;
  }

  /**
   *
   * add at the end
   */
  append(value) {
    // create a new node and change a pointer
    const newNode = new Node(value);

    // adding next props  - --> x -->xx
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  /**
   * - adding at begining
   */
  prepend(value) {
    /**
     * create new node
     */
    const newNode = {
      value: value,
      next: null,
    };

    // pointing next to first og node.

    newNode.next = this.head;

    // newly created node as head
    this.head = newNode;
    this.length++;
    return this;
  }

  /**
   * helper method to visualize-
   */

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // insert at any index

  insert(index, value) {
    // check for parameters- if index> length- add it at the end.

    if (index > this.length) {
      return this.append(value);
    }
    //create new node

    let newNode = new Node(value);
    //find the previos node to insert.
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  //traverse or lookup
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));

console.log(myLinkedList.prepend(1));
console.log('My LL', myLinkedList.printList());
console.log('get index', myLinkedList.traverseToIndex(2));
console.log('My LL', myLinkedList.printList());

console.log(myLinkedList.insert(2, 20));
