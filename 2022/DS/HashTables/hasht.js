class HashTable {
  constructor(size) {
    this.data = new Array(size);

    // [['banana',500]]
  }

  // this will create a memory address within a length of the array
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // define the address
    let allocatedAddress = this._hash(key);

    // check for collusion
    // if that slot is undefined- create an empty array
    if (!this.data[allocatedAddress]) {
      // create a space.
      this.data[allocatedAddress] = [];
    }
    // remenber- it is stored in buckets
    this.data[allocatedAddress].push([key, value]);

    return this.data;
  }

  get(key) {
    //  get adress for key
    const adress = this._hash(key);

    const currentBucket = this.data[adress]; //   [['xx',52], ['yy',54]] ----> curr[1] --> ['yy',54]

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
    return undefined;
  }
}
// size is just to save mem- in js you can add n times. it will keep on increasing even if you define using size.
const myHashTable = new HashTable(1);

console.log(myHashTable.set('banana', 500));
console.log(myHashTable.set('apple', 10));
console.log(myHashTable.set('apple', 20));
console.log(myHashTable.data.length);
console.log(myHashTable.get('apple'));
