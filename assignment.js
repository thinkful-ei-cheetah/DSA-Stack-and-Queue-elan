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
    return poppedItem.value;
  }
}

function peek(stack) {
  if(!stack.top) {
    return null
  }
  console.log(stack.top.data)
  return stack.top
}

function isEmpty(stack) {
  console.log(stack.top === null)
  return stack.top === null
}

function display(stack) {
  let results = '';
  let currentNode = stack.top;
  if (!currentNode) {
    console.log('List is empty');
    return;
  }
  if (currentNode.next === null) {
    console.log(`${currentNode.data}->null`);
    return;
  }

  while (currentNode.next !== null) {
    results += `${currentNode.data}->`;
    currentNode = currentNode.next;
  }
  results += `${currentNode.data}->null`;
  console.log(stack);
  console.log(results);
}

let starTrek = new Stack();
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
// starTrek.push('Scotty')
// starTrek.pop()
// peek(starTrek)
// isEmpty(starTrek)
display(starTrek)