/**
 * you can use arrays push and shift methods to impliment.
 *
 * Last in last out or first in first out
 *
 * Enquee
 * Dequee
 * peek
 * isempty
 * size
 * print
 * clear
 */

class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * adds the element from the queue
   */
  enQueue(element) {
    return this.items.push(element);
  }

  /**
   * removes the element from the queue
   */
  deQueue() {
    return this.items.shift();
  }

  /**
   * checks the first element in the queue- check for undeflow condition
   */
  peek() {
    if (this.items.length === 0) return 'No elements in Queue';
    return this.items[0];
  }

  /**
   * check if Queue is empty
   */
  isEmpty() {
    if (this.items.length === 0) return 'Queue is Empty';

    return 'Queue is not empty';
  }

  /**
   *
   * @returns the size of the queue
   */
  size() {
    return this.items.length;
  }

  /**
   *
   * prints the items
   */
  print() {
    var str = '';
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
    return str;
  }

  /**
   *
   * clears the Queue.
   */
  clear() {
    return (this.items = []);
  }
}

const cars = new Queue();

cars.enQueue('Honda');
cars.enQueue('BMW');
cars.enQueue('Hyundai');

console.log('Cars', cars);

cars.deQueue();

console.log('Cars after dequeue', cars);

console.log('peek', cars.peek());
console.log('size', cars.size());
console.log('is empty', cars.isEmpty());
