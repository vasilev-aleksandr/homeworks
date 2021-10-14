class Node { 
  constructor(value, next = null) { 
    this.value = value; 
    this.next = next; 
  } 
} 
  
class Stack { 
  constructor(maxLength = 10){ 
  if(!Number.isSafeInteger(maxLength) || maxLength === 0){ 
  throw new Error('Ошибка!') 
  } 
  this.maxLength = maxLength; 
  this.head = null; 
  this.length = 0; 
  } 
  
  push(value){ 
    if (this.length === this.maxLength){ 
      throw new Error('Ошибка!') 
    } 
    const newValue = new Node(value); 
    if(this.head === null){ 
      this.head = newValue; 
    } else { 
      let currentNode = this.head; 
      while(currentNode.next){ 
        currentNode = currentNode.next; 
    } 
    currentNode.next = newValue; 
    } 
    this.length++; 
  } 
  
  pop() { 
    if (this.length === 0){ 
      throw new Error('Ошибка!') 
    } 
    
    let currentNode = this.head; 
    let deletedNode = null; 
    
    while (currentNode.next) { 
      if (!currentNode.next.next) { 
        deletedNode = currentNode.next; 
        currentNode.next = null 
      } else { 
        currentNode = currentNode.next; 
      } 
    } 
  
    this.length--
    return deletedNode.value 
  } 
  
  peek() { 
    if (this.length === 0){ 
      return null;
    } 
    let currentNode = this.head 
    while (currentNode.next) { 
      currentNode = currentNode.next 
    } 
    return currentNode.value 
  } 
  
  isEmpty(){ 
    return this.length === 0; 
  } 
  
  toArray(){ 
    let newArr = [];
    let currentNode = this.head 
    while (currentNode.next) { 
      newArr.push(currentNode.value) 
      currentNode = currentNode.next 
    } 
    return newArr 
  } 
  
  static fromIterable(iterable){ 
    if(typeof iterable[Symbol.iterator] !== 'function'){
      throw new Error('Ошибка!') 
    } else {
      const stack = new Stack(iterable.length) 
      for( let item of iterable){
        stack.push(item)
      }
      return stack
    }
  } 
} 
  
module.exports = { Stack };

