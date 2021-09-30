function maths(){
  const firstValue = parseInt(prompt('Введите первое значение'),10);
  if (isNaN(firstValue)) {
    console.log('Некорректный ввод!')
  return
  }
  const secondValue = parseInt(prompt('Введите второе значение'),10);
  if (isNaN(secondValue)) {
    console.log('Некорректный ввод!')
  return
}
  
  console.log(`Ответ: ${firstValue + secondValue},${firstValue / secondValue}`);
}
