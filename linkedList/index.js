class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    // this.insertAt(0, data);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
    // return this.getAt(0);
  }

  getLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
    // return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
    // this.removeAt(0);
  }

  removeLast() {
    let node = this.head;

    // For list with one node
    if (node && !node.next) {
      this.head = null;
      return;
    }

    while (node.next) {
      if (!node.next.next) {
        node.next = null;
        return;
      } else node = node.next;
    }

    // this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) lastNode.next = new Node(data);
    else this.head = new Node(data);
    // this.insertAt(this.size() - 1, data);
  }

  getAt(index) {
    if (index < 0) return null;

    let counter = 0;
    let node = this.head;

    while (node) {
      if (index === counter) return node;
      node = node.next;
      counter++;
    }

    return node;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previousNode = this.getAt(index - 1);
    if (previousNode && previousNode.next)
      previousNode.next = previousNode.next.next;
  }

  insertAt(index, data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previousNode = this.getAt(index - 1) || this.getLast();
    if (previousNode) previousNode.next = new Node(data, previousNode.next);
  }

  forEach(fn) {
    if (typeof fn !== "function") return;
    let counter = 0;
    let node = this.head;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function circularList(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

const list = new LinkedList();
list.insertFirst(5);
list.insertFirst(15);
list.insertFirst(25);
// console.log(list.size());
console.log(list.getFirst());
console.log(list.getLast());
// list.clear();
// list.removeFirst();
// list.removeLast();
list.insertLast(35);
console.log(list.getAt(3));
list.removeAt(3);
list.insertAt(3, 7);
list.insertAt(4, 70);
console.log(list.getAt(2));
console.log(list.size());
list.forEach((node, index) => {
  if (index === 2) node.data += 100;
});
console.log(list.getAt(4));
const nodeDataList = [];
for (let node of list) {
  nodeDataList.push(node.data);
}
console.log(nodeDataList);
console.log(midpoint(list));
console.log(fromLast(list, 0));

// Create circularList
console.log("Creating circularList...");
list.getAt(4).next = list.getAt(2);
console.log(list.getAt(4));
console.log(circularList(list));
