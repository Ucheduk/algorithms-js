class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  /** Checks if binary search tree contain a data and returns
   * the data node else returns null
   */
  isContain(data) {
    if (data === this.data) return this;

    if (data < this.data && this.left) {
      return this.left.isContain(data);
    } else if (data > this.data && this.right) {
      return this.right.isContain(data);
    }

    return null;
  }
}

/** Checks if a binary search tree is valid */
function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;

  if (node.left && !validate(node.left, min, node.data)) return false;
  if (node.right && !validate(node.right, node.data, min)) return false;

  return true;
}
