function fib(n) {
    option 1:
    return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
    option 2:
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib(3)); // 2
console.log(fib(7)); // 13
