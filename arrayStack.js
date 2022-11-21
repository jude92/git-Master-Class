class node {
  constructor(value) {
    this.value = null;
    this.next = null;
  }
}
class arrStack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop(value) {
    this.array.pop(value);
    return this;
  }
}
const mystack = new arrStack();
console.log(mystack.push("google"));
console.log(mystack.push("Udemy"));
console.log(mystack.push("codecademy"));
console.log(mystack.pop());
console.log(mystack.pop());
