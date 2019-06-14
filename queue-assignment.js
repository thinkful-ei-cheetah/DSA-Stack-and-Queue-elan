class _Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(item) {
    const newNode = new _Node(item)
    if(!this.first) {
      this.first = newNode
    }
    if(this.last) {
      this.last.next = newNode
    }
    this.last = newNode
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if(node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  if(!queue.first) return null
  console.log(queue.first)
  return queue.first
}

function isEmpty(queue) {
  if(!queue.first && !queue.last) {
    return true
  }
  return false
}

function display(queue) {
  let results = ''
  let currNode = queue.first
  if(!currNode) return 'Your queue is empty'
  else if(!currNode.next) {
    results += `${currNode.data}->null`
    console.log(results)
    return results
  }
  // if(!currNode.next) {
  //   console.log(`${currNode.data}->null`)
  //   return
  // }
  else {
    while(currNode) {
      results += `${currNode.data}->`
      currNode = currNode.next
    }
    results += 'null'
    console.log(results)
    return results
  }
}

const queue = new Queue()
queue.enqueue(3)
queue.enqueue(4)
// queue.dequeue()
// queue.dequeue()
peek(queue)
display(queue)
console.log(isEmpty(queue))
console.log(JSON.stringify(queue))
