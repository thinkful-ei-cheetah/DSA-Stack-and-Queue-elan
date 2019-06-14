class _Node {
  constuctor(data, next) {
    this.date = data;
    this.next = next;
  }
}

class Stack {
  constuctor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    // Moving DOWNWARDS; VERTICALLY;
    this.top = node.next;
    return node.data; 
  }
}