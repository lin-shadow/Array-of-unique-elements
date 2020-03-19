// (BAD :/)
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(array) {
    let map = new Map();
    for (let string of array) {
    let sorted = string.toLowerCase()
    .split('')
    .sort()
    .join('');
    map.set(sorted, string);
    }
    return Array.from(map.values());
}
console.log( aclean(arr) );
