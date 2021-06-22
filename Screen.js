class Screen {
  constructor(calcScreenPreviousValue, calcScreenActualValue) {
    this.calcScreenPreviousValue = calcScreenPreviousValue; //what we want to modify
    this.calcScreenActualValue = calcScreenActualValue; //what we want to modify
    this.calculator = new Calculator();
    this.actualValue = ""; //what we save (the value)
    this.previousValue = ""; //what we save (the value) first have to be a string
  }
  addNumber(number) {
    this.actualValue = number;
    this.printValue();
  }
  printValue() {
    this.calcScreenActualValue.textContent = this.actualValue;
    this.calcScreenPreviusValue.textContent = this.previousValue;
  }
}
