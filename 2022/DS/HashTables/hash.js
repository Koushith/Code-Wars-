class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // we have tp define the adress
    let adress = this._hash(key);

    // check for collusions
    if (!this.data[adress]) {
      // create a space
      this.data[adress] = [];
    }
    this.data[adress].push([key, value]);
    return this.data;
  }

  get(key) {
    const adress = this._hash(key);
    const currentBucket = this.data[adress];
    if (currentBucket) {
      //loop to access the key value- array inside array
      for (let i = 0; i < currentBucket.length; i++) {
        // [[2,3], [4,5]]
        if (currentBucket[i][0] == key) {
          //return both key and value
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keyArrays = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArrays.push(this.data[i][0][0]);
      }
      return keyArrays;
    }
  }
}

const myHashTable = new HashTable(50);

console.log(myHashTable.set('banana', 500));
console.log(myHashTable.set('apple', 10));
console.log(myHashTable.get('apple'));
