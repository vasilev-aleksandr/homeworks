const calculator = document.querySelector('.calculator');
const buttons = calculator.querySelector('.calculator__buttons-section');
const display = calculator.querySelector('.calculator__display');

buttons.addEventListener('click', event => {
  if (!event.target.closest('button')) return 
  const button = event.target
  const buttonValue = button.textContent
  const displayValue = display.textContent
  const { type } = button.dataset
  const { previousKeyType } = calculator.dataset

  if(type === 'num'){
    if (displayValue === '0'){
      if (buttonValue === '.'){
        display.textContent = displayValue + buttonValue;
      } else {
        display.textContent = buttonValue
      }
    } else if (previousKeyType === 'fn') {
      display.textContent = buttonValue
    } else {
      if (displayValue.length > 11 ){
        display.textContent = displayValue.slice(0,12)
      } else if (buttonValue === '.' && !displayValue.includes('.')) {
        display.textContent = displayValue + buttonValue
      } else if (buttonValue !== '.') {
        display.textContent = displayValue + buttonValue
      }
    }
  }

  if(type === 'fn'){
    const fnButtons = buttons.querySelectorAll('[data-type = "fn"]')
    fnButtons.forEach(el => el.dataset.state = '')
    if (calculator.dataset.firstValue) {
      const firstValue = calculator.dataset.firstValue
      const secondValue = displayValue
      const fn = calculator.dataset.fn
      const value = calculate(firstValue, fn, secondValue)
      display.textContent = value
      calculator.dataset.firstValue = value
      calculator.dataset.fn = button.dataset.button
    } else {
      calculator.dataset.firstValue = displayValue
      calculator.dataset.fn = button.dataset.button
    }
  }

  if(type === 'equal'){
    const firstValue = calculator.dataset.firstValue
    const secondValue = displayValue
    const fn = calculator.dataset.fn
    display.textContent = calculate(firstValue, fn, secondValue)
  }

  if(type === 'clear'){
    display.textContent = 0;
    calculator.dataset.firstValue = ''
    calculator.dataset.secondValue = ''
    calculator.dataset.fn = ''
  }

  if(type === 'opposite'){
      display.textContent = Number(displayValue) * -1
  }

  calculator.dataset.previousKeyType = type
})


function calculate (firstValue, fn, secondValue) {
  firstValue = Number(firstValue)
  secondValue = Number(secondValue)
  let result = ''
  if (fn === 'plus'){
    result = firstValue + secondValue
  }
  if (fn === 'minus'){
    result = firstValue - secondValue
  }
  if (fn === 'times'){
    result = firstValue * secondValue
  }
  if (fn === 'divide'){
    if(secondValue === 0){
      display.textContent = 'E'
      throw new Error ('Деление на ноль')
    }
    result = firstValue / secondValue
  }

  if(String(result).length > 11){
    result = Number(String(result).slice(0,12))
  }
  if (Number.isInteger(result)){
    return result
  } else {
    return parseFloat(result.toFixed(8))
  }
}
