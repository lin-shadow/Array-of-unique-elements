let x = +prompt('Enter a number', '');
let n = +prompt('Enter power', '');
function pow(x, n) {
    if (Number.isInteger(x) && Number.isInteger(n) && x > 0 && n > 0)
    return (x**n);
    return ('Must be integer and greater than 0');
}
alert(pow (x, n));
