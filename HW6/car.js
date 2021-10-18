class Car {
  #brand = 'Lada';
  #model = '2109';
  #yearOfManufacturing = 1995;
  #maxSpeed = 150;
  #maxFuelVolume = 20;
  #fuelConsumption = 7;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  get brand() {
    return this.#brand;
  }

  set brand(value){
    if (typeof value !== 'string' || (value.length < 1 && value.length > 50)){
      throw new Error('Введите значение от 1 до 50 символов включительно')
    }
    this.#brand = value;
  }

  get model(){
    return this.#model;
  }

  set model(value){
    if (typeof value !== 'string' || (value.length < 1 && value.length > 50)){
      throw new Error('Введите значение от 1 до 50 символов включительно')
    }
    this.#model = value;
  }

  get yearOfManufacturing(){
    return this.#yearOfManufacturing
  }

  set yearOfManufacturing(value){
    const currentYear = new Date().getFullYear()
    if (!Number.isInteger(value) || (value < 1900 && value > currentYear) ){
      throw new Error('Введите значение от 1900 до текущего года включительно')
    }
    this.#yearOfManufacturing = value;
  }

  get maxSpeed(){
    return this.#maxSpeed;
  }

  set maxSpeed(value){
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value) || ( value < 100 && value > 300)){
     throw new Error('Введите значение от 100 до 300')
    }
    this.#maxSpeed = value;
  }

  get maxFuelVolume(){
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value){
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value) || ( value < 5 && value > 20)){
      throw new Error('Введите число от 5 до 20')
    }
    this.#maxFuelVolume = value;
  }

  get fuelConsumption(){
    return this.#fuelConsumption
  }

  set fuelConsumption(value){
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value) || value <= 0 ){
      throw new Error('Введите корректное число')
    }
    this.#fuelConsumption = value
  }

  get currentFuelVolume(){
    return this.#currentFuelVolume
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start(){
    if (this.#isStarted){
      throw new Error('Машина уже заведена')
    } else {
      this.#isStarted = true
    }
  }

  shutDownEngine(){
    if (!this.#isStarted){
      throw new Error('Машина еще не заведена')
    } else {
      this.#isStarted = false
    }
  }

  fillUpGasTank(value){
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value) || value <=0) {
      throw new Error('Неверное количество топлива для заправки')
    }
    if ((value + this.#currentFuelVolume) > this.#maxFuelVolume){
      throw new Error('Топливный бак переполнен')
    } else {
      this.#currentFuelVolume += value
    }
  }

  drive(speed, hours){
    const distance = speed * hours;
    const consumedFuel = (distance / 100) * this.#fuelConsumption

    if (typeof speed !== 'number' || isNaN(speed) || !isFinite(speed) || speed <=0) {
      throw new Error('Неверная скорость')
    }
    if (typeof hours !== 'number' || isNaN(hours) || !isFinite(hours) || hours <=0) {
      throw new Error('Неверное количество часов')
    }
    if(speed > this.#maxSpeed){
      throw new Error('Машина не может ехать так быстро')
    }
    if (!this.#isStarted){
      throw new Error('Машина должна быть заведена, чтобы ехать')
    }
    if (consumedFuel > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива')
    } else {
      this.#currentFuelVolume -= consumedFuel
      this.#mileage += distance
    }
  }
}

module.exports = { Car };

