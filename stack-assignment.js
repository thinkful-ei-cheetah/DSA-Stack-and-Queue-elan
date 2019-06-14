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

// input: '(3 + 3'=> 
function matchingParens(str) {
  const stack = new Stack()
  if(!str) return null;
  for(let i=0; i<str.length; i++) {
    if(str[i] === '(')
      stack.push(str[i])
    if(str[i]===')') {
      if (stack.pop() === null)
        return false
    }
  }
  return(stack.top===null)
}

const parensStack = new Stack()
console.log(matchingParens('((3 + 2))'))

// console.log((matchingParens('3 + 3)')))

// input: 3->1->2->4 => 1->2->3->4
function sortStack(stack) {
  if(!stack.top.next) return stack;
  display(stack)
  let sortStack = new Stack()
  while(stack.top) {
    let temp = stack.pop()
    while(sortStack.top && sortStack.top.data > temp) {
      stack.push(sortStack.pop())
    }
    console.log(sortStack)
    sortStack.push(temp)
  }
  display(sortStack)
  return sortStack
}

let numStack = new Stack()
// numStack.push(2)
// numStack.push(4)
// numStack.push(1)
// numStack.push(3)
// console.log(sortStack(numStack))
// True, true, true, false
// display((is_palindrome("dad")));
// console.log(is_palindrome("A man, a plan, a canal: Panamas"));
// display((is_palindrome("1001"))); 
// console.log(is_palindrome("Tauhida"));
// console.log(is_palindrome('Elan'))

// let starTrek = new Stack();
// starTrek.push('Kirk')
// starTrek.push('Spock')
// starTrek.push('McCoy')
// // starTrek.push('Scotty')
// // starTrek.pop()
// // peek(starTrek)
// // isEmpty(starTrek)
// display(starTrek)