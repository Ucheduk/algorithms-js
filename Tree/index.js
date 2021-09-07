class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    if (!this.root) return;

    const arr = [this.root];

    while (arr.length) {
      const currentNode = arr.shift();
      // for (let node of currentNode.children) {
      //   arr.push(node);
      // }
      arr.push(...currentNode.children);
      fn(currentNode);
    }
  }

  traverseDF(fn) {
    if (!this.root) return;

    const arr = [this.root];

    while (arr.length) {
      const currentNode = arr.shift();
      arr.unshift(...currentNode.children);
      fn(currentNode);
    }
  }
}

function levelWidth(root) {
  if (!root) return [];

  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const currentNode = arr.shift();
    if (currentNode === "s") {
      arr.push(currentNode);
      counters.push(0);
    } else {
      counters[counters.length - 1] += 1;
      arr.push(...currentNode.children);
    }
  }

  return counters;
}
