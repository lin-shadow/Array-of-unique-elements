let arr = [5, 3, 8, 1];
function filterRange(array, a, b) {
    return array.filter(element => element >= a && element <= b);
}
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
