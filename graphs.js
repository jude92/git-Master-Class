class graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {}
  showConnections() {}
}

const mygraph = new graph();
console.log(mygraph.addVertex("0"));
console.log(mygraph.addVertex("1"));
console.log(mygraph.addVertex("2"));
console.log(mygraph.addVertex("3"));
console.log(mygraph.addVertex("4"));
console.log(mygraph.addVertex("5"));
console.log(mygraph.addVertex("6"));
console.log(mygraph.addEdge("3", "1"));
console.log(mygraph.addVertex("3", "4"));
console.log(mygraph.addVertex("4", "2"));
console.log(mygraph.addVertex("4", "5"));
console.log(mygraph.addVertex("1", "2"));
console.log(mygraph.addVertex("1", "0"));
console.log(mygraph.addVertex("0", "2"));
console.log(mygraph.addVertex("6", "5"));
console.log(mygraph.addVertex(0));
console.log(mygraph.showConnections());
