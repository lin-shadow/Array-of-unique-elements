// (MY SOLUTION IS A BIT BULKY)
My solution:
function makeCounter() {
    counter.count = 0;
    function counter() {
    return counter.count++;
    }
    counter.set = function(value) {
        counter.count = value;
        return counter.count;
    };
    counter.decrease = function() {
        return counter.count--;
    };
    return counter;
}
Textbook solution:
function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
counter.set(10);
console.log(counter());
counter.decrease();
console.log(counter());
