// Using setInterval:
function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(() => {
        console.log(current);
        if (current == to)
            clearInterval(timerId);
        current++;
        }, 1000);
}
console.log(printNumbers(1, 4));
// Using setTimeout:
function printNumbers(from, to) {
    let current = from;
   setTimeout(function go() {
        console.log(current);
        if (current < to)
        setTimeout(go, 1000); // (*)
        current++;
    }, 1000);
}
console.log(printNumbers(1, 4));
