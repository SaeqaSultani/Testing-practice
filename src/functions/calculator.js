class Calculator {
  constructor() {
    this.num1 = 0;
    this.num2 = 0;
  }

  add(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    const sum = num1 + num2;
    return sum;
  }

  subtract(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    const subt = num1 - num2;
    return subt;
  }

  multiply(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    const mult = num1 * num2;
    return mult;
  }

  divide(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    const divi = num1 / num2;
    return divi;
  }
}

module.exports = Calculator;
