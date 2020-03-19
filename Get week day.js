// (MY SOLUTION)
let date = new Date(2012, 0, 3);
function getWeekDay(date) {
    let x = date.getDay();
    return (x === 0) ? 'Sun' 
    : (x === 1) ? 'Mon' 
    : (x === 2) ? 'Tue'
    : (x === 3) ? 'Wed'
    : (x === 4) ? 'Thu'
    : (x === 5) ? 'Fri'
    : 'Sat';
}
console.log( getWeekDay(date) );


// TEXTBOOK SOLUTION
let date = new Date(2012, 0, 3);
function getWeekDay(date) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}
console.log(getWeekDay(date));
