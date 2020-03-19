// (WELL I WAS CLOSE :'|))
let numbers = [0, 1, 2, 3, 4, 5];
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}
function inArray(array) {
    return function (x) {
        return array.includes(x);
    };
}
let filteredInBetween = numbers.filter(inBetween(1, 2));
let filteredInArray = numbers.filter(inArray([1, 3, 10]));
console.log(filteredInArray);
