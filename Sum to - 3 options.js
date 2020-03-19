// (YAY!)
function sumTo(n) {
    option 1:
    return n * (n + 1)/2;
    option 2:
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    option 3:
    if (n === 1) return n;
    return n + sumTo(n - 1);
}
console.log(sumTo(100));
