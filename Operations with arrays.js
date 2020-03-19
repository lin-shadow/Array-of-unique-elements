let styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
function changeArray(array, index, value) {
    array[index] = value;
}
console.log(styles);
changeArray(styles, 1, 'classic');
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('rap', 'raggy');
console.log(styles);
