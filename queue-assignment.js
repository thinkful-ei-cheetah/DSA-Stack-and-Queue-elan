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
    this.length = 0
  }

  enqueue(item) {
    const newNode = new _Node(item)
    if(!this.first) {
      this.first = newNode
    }
    else if(this.last) {
      this.last.next = newNode
    }
    this.last = newNode
    this.length++
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
    this.length--
    return node.data;
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

// const queue = new Queue()
// queue.enqueue(3)
// queue.enqueue(4)
// queue.dequeue()
// queue.dequeue()
// peek(queue)
// display(queue)
// console.log(isEmpty(queue))
// console.log(JSON.stringify(queue))

const fQueue = new Queue()
const mQueue = new Queue()

function pairDancers(dancers) {
  dancers.forEach(dancer => {
    if(dancer[0] === 'F') {
      fQueue.enqueue(dancer)
    }
    else {
      mQueue.enqueue(dancer)
    }
    if(fQueue.first && mQueue.first) {
      let maleDancer = mQueue.dequeue()
      let femDancer = fQueue.dequeue()
      console.log(`${femDancer} is paired with ${maleDancer}`)
    }
  })
  if(mQueue.length > 0) {
    console.log(`There are ${mQueue.length} male dancers waiting to dance`)
    } 
    else if (fQueue.length > 0) {
      console.log(`There are ${fQueue.length} female dancers waiting to dance`)
    }
}

// console.log(pairDancers([
//   'F Jane',
//   'M Frank',
//   'M John',
//   'M Sherlock',
//   'F Madonna',
//   'M David',
//   'F Beyonce'
// ]))

//10. Ophidian Bank


const bankQueue = new Queue()
bankQueue.enqueue('Elan')
bankQueue.enqueue('Makua')
bankQueue.enqueue('Teddy')
bankQueue.enqueue('Fred')

function ophidianBank(queue) {
  while(queue.length > 0) {
    if(Math.random() <= .25) {
      let firstPerson = queue.first
      queue.dequeue()
      queue.enqueue(firstPerson.data)
      console.log(`${firstPerson.data} has been moved to the end of the queue.`)
    }
    else {
      console.log(`${queue.first.data} has been served.`)
      queue.dequeue()
    }
  }
}

ophidianBank(bankQueue)