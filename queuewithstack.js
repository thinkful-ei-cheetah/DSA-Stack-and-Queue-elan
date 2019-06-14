class _Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    if(!this.top) {
      this.top = new _Node(data)
      return this.top
    }
    
    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    if(!this.top) {
      return null;
    }
    let poppedItem = this.top;
    this.top = this.top.next;
    console.log(`popped: ${poppedItem.data}`)
    return poppedItem.data;
  }
}

const stack1 = new Stack()
const stack2 = new Stack()

function enqueue(item) {
  stack1.push(item)
} 

function dequeue() {
  if(!stack2.top) {
    if(!stack1.top) return 'There is nothing to dequeue!'
    while(stack1.top) {
      let p = stack1.pop()
      stack2.push(p)
    }
  }
  return stack2.pop()
}

enqueue(2)
enqueue(3)
enqueue(4)

dequeue()

console.log(JSON.stringify(stack1))