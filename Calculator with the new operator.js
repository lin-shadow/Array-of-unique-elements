function Calculator() {
    this.read = function() {
        this.first = +prompt('Enter the first number', 0);
        this.second = +prompt('Enter the second number', 0);
        };
    this.sum = function() {
        return this.first + this.second;
        };
    this.mul = function() {
        return this.first * this.second;
        };
}
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
