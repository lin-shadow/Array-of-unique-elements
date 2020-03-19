// (MY WAY! :c)
let date = new Date(2020, 2, 8);
function getLocalDay(date) {
    return (date.getDay() === 0) ? 7 : date.getDay();
}
console.log( getLocalDay(date) );
