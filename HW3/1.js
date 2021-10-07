Array.prototype.myFilter = function(fn, thisArg){   
  if (typeof fn !== 'function') { 
    throw new Error('Ошибка!') 
  } 
  const arr = this;
  const filteredArray = []; 
  const that = thisArg || this;
  
  for (let i = 0; i < arr.length; i++) { 
    if (fn.call(that, arr[i], i, arr)) { 
      filteredArray.push(arr[i]); 
    } 
  } 
  
  return filteredArray; 
}

function createDebounceFunction(fn, delay) {
  if (typeof fn !== "function" || typeof delay !== "number") {
    throw new Error("Ошибка!");
  }

  let timer = null;

  return function () {
    const context = this;
    const args = arguments;
    const func = function () {
      fn.apply(context, args);
    };

    clearTimeout(timer);

    timer = setTimeout(func, delay);
  };
}