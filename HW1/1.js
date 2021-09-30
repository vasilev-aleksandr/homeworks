function calculate(){
  const firstValue = parseInt(prompt('Введите первое значение'),10);
  const secondValue = parseInt(prompt('Введите второе значение'),10);
  const hasNaN = [firstValue, secondValue].some(isNaN);

  if (hasNaN){
    console.log('Некорректный ввод!')
  } else {
    console.log(firstValue.toString(secondValue))
    }
}



