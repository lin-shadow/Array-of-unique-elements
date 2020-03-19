let users = [
    {name: 'John', age: 20, surname: 'Johnson'},
    {name: 'Pete', age: 18, surname: 'Peterson'},
    {name: 'Ann', age: 19, surname: 'Hathaway'}
];
My solution:
function byField(field) {
    if (field === 'name') {
        return function(x, y) {
            return x.name > y.name ? 1 : -1;
        };
    }
    if (field === 'age') {
        return function(x, y) {
            return x.age > y.age ? 1 : -1;
        };
    }
    if (field === 'surname') {
        return function(x, y) {
            return x.surname > y.surname ? 1 : -1;
        };
    }
    console.log('no such field');
}
Textbook solution:
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
let sortedName = users.sort(byField('name'));
console.log(sortedName);
let sortedAge = users.sort(byField('age'));
console.log(sortedAge);
let sortedSurname = users.sort(byField('surname'));
console.log(sortedSurname);
console.log(users.sort(byField('middle name')));
