class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  //append-

  // create a new node- and add it to the end and change the tail
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  //prepend

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));

console.log(myLinkedList.prepend(1));

// 10--->5-->16
