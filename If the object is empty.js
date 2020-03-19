let emptyObject = {};
emptyObject.key1 = 'value1';
function isEmpty(object, key) {
    for (key in object) {
    return false;
    }
    return true;
}
console.log(isEmpty(emptyObject));
