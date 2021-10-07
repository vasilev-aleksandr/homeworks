function makeObjectDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj 
  }
  let newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    let value = obj[key]
    newObj[key] = makeObjectDeepCopy(value)
  }
  return newObj
} 

function selectFromInterval(array, firstValue, secondValue) { 
  let newArr = [] 
  if (!Array.isArray(array) || (array.some(el => !Number.isInteger(el)))) { 
    throw new Error('Ошибка!') 
  } 
  if ([firstValue,secondValue].some(el => !Number.isInteger(el))) {
    throw new Error('Ошибка!') 
  }
  if (firstValue < secondValue) { 
    newArr = array.filter(el => el >= firstValue && el <= secondValue) 
  } else { 
    newArr = array.filter(el => el >= secondValue && el <= firstValue) 
  } 
  return newArr 
} 
  

const myIterable = {
  from: 11,
  to: 111,

  [Symbol.iterator]() {
    if (this.to < this.from){
      throw new Error('Ошибка!') 
    }
    if ([this.from, this.to].some(el => !Number.isInteger(el))){
      throw new Error('Ошибка!') 
    }
    return this;
  },

  next() {
    if (this.from <= this.to) {
      return { done: false, value: this.from++ };
  
    } else {
      return { done: true };
    }
  }
};

for (let item of myIterable) {
  console.log(item); 
}
 


