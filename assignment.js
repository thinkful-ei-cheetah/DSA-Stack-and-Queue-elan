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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let palindromeStack = new Stack()
  let splitString = s.split('')
  let stackLength = splitString.length
  let forwardResults = ''
  splitString.forEach(char => palindromeStack.push(char))
  for (let i = stackLength; i > 0; i--) {
    forwardResults += palindromeStack.pop()
  }
  console.log(s === forwardResults)
  return s === forwardResults
}

// True, true, true, false
display((is_palindrome("dad")));
// console.log(is_palindrome("A man, a plan, a canal: Panamas"));
// display((is_palindrome("1001"))); 
// console.log(is_palindrome("Tauhida"));
console.log(is_palindrome('Elan'))

// let starTrek = new Stack();
// starTrek.push('Kirk')
// starTrek.push('Spock')
// starTrek.push('McCoy')
// // starTrek.push('Scotty')
// // starTrek.pop()
// // peek(starTrek)
// // isEmpty(starTrek)
// display(starTrek)