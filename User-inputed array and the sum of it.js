function sumInput() {
    let userArray = [];
    while (true) {
        let value = prompt('Enter a number', '');
        if (value === '' || value === null || !isFinite(value)) break;
        userArray.push(+value);
    }
    // using reduce method
    let sum = userArray.reduce((a, b) => Number(a) + Number(b));
    // using for-of loop
    let sum = 0;
    for (let i of userArray) {
        sum += Number(i);
    }
    alert(sum);
}
sumInput();
