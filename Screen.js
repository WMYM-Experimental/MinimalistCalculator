class Screen {
  constructor(calcScreenPreviousValue, calcScreenActualValue) {
    this.calcScreenPreviousValue = calcScreenPreviousValue; //what we want to modify
    this.calcScreenPreviousValue = calcScreenPreviousValue; //what we want to modify
    this.calc = new Calculator();
    this.operationTy = undefined;
    this.actualValue = "";
    this.previousValue = "";
    this.sign = {
      add: "+",
      divide: "%",
      multiply: "x",
      substract: "-",
    };
  }

  delete() {
    this.actualValue = this.actualValue.toString().slice(0, -1);
    this.printValues();
  }

  deleteAll() {
    this.actualValue = "";
    this.previousValue = "";
    this.operationTy = undefined;
    this.printValues();
  }

  compute(type) {
    this.operationTy !== "equal" && this.calculate();
    this.operationTy = type;
    this.previousValue = this.actualValue || this.previousValue;
    this.actualValue = "";
    this.printValues();
  }

  addNumber(num) {
    if (num === "." && this.actualValue.includes(".")) return;
    this.actualValue = this.actualValue.toString() + num.toString();
    this.printValues();
  }

  printValues() {
    this.displayactualValue.textContent = this.actualValue;
    this.displaypreviousValue.textContent = `${this.previousValue} ${
      this.sign[this.operationTy] || ""
    }`;
  }

  calculate() {
    const previousValue = parseFloat(this.previousValue);
    const actualValue = parseFloat(this.actualValue);

    if (isNaN(actualValue) || isNaN(previousValue)) return;
    this.actualValue = this.calc[this.operationTy](previousValue, actualValue);
  }
}
