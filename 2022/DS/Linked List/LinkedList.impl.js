// 10--->5--->16

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
    const newNode = {
      value: value,
      next: null,
    };

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
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));

console.log(myLinkedList.prepend(1));
console.log('My LL', myLinkedList);
