let calculator = {
  read() {
    calculator.first = +prompt('Enter the first number', 0);
    calculator.second = +prompt('Enter the second number', 0);
  },
  sum() {
    return this.first + this.second;
  },
  mul() {
    return this.first * this.second;
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
