function concatStrings(string, separator){
  return function(newString) {
    if (typeof newString !== "string") {
      return string
    } else {
      if (typeof separator === "string") {
        return concatStrings(string + separator + newString, separator)
      } else {
        return concatStrings(string + newString)
      }
    }
  }
}


class Calculator {
  constructor(x, y) {
    if([x,y].some(el => !Number.isSafeInteger(el))){
      throw new Error('Ошибка!') 
    }
    this.x = x;
    this.y = y;
  }

  setX = (num) => {
    if (!Number.isSafeInteger(num)){
      throw new Error('Параметр не передан или не является валидным числом')
    }
    this.x = num;
  };
  setY = (num) =>{
    if (!Number.isSafeInteger(num)){
      throw new Error('Параметр не передан или не является валидным числом')
    }
    this.y = num;

  };
  logSum = () => {
    console.log(this.x + this.y);
  };

  logMul = () => {
    console.log(this.x * this.y);
  };
  logSub = () => {
    console.log(this.x - this.y);

  };
  logDiv = () => {
    if (this.y === 0){
      throw new Error('Деление на ноль!')
    }
    console.log(this.x / this.y);

  };
}





