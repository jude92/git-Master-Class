class DoublyLinkedlist {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    let preNode = {
      value: value,
      next: null,
      prev: null,
    };

    preNode.next = this.head;
    this.head.prev = preNode;
    this.head = preNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    // console.log(this);
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantednode = leader.next;
    leader.next = unwantednode.next;
    this.length++;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
      //console.log(this);
    }
    this.head.next = null;
    this.head = first;
  }
}
const myLinkedlist = new DoublyLinkedlist(10);
console.log(myLinkedlist);
console.log(myLinkedlist.append(5));
console.log(myLinkedlist.append(16));
console.log(myLinkedlist.prepend(100));
console.log(myLinkedlist.insert(1, 700));
console.log(myLinkedlist.insert(20, 1000));
// console.log(myLinkedlist.insert(2, 99));
// console.log(myLinkedlist.remove(1));
console.log(myLinkedlist.reverse());
console.log(myLinkedlist.printList());
