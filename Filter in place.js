// (DID IT MY WAY :c)
let arr = [5, 3, 8, 1];
function filterRangeInPlace(array, a, b) {
    let filtered = array.filter(element => element >= a && element <= b);
    arr = filtered;
    return arr;
}
console.log(filterRangeInPlace(arr, 1, 4));
