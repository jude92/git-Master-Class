class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  /**
   * @private
   * @param {*} key
   * @returns
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const charCodeAt = key.charCodeAt(i);
      const numerator = hash + charCodeAt * i;
      const result = numerator % this.data.length;
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  // time complexity is O(1) because hash functions are very fast
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  // time complexity is O(1) theres no loop
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        // console.log(this.data[i][0][0]);
        keysArr.push(this.data[i][0][0]);
        // keysArr.push(...this.data[i].map((x) => x[0]));
      }
    }
    return keysArr;
  }
}

// time complexity is O(1)

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("Grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 900);
console.log(myHashTable.keys());
//console.log(myHashTable.get("grapes"));
