function getLastDayOfMonth(year, month) {
    let x = new Date(year, month + 1, 0);
    return x.getDate();
}
console.log(getLastDayOfMonth(2016, 2));
