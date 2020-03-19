function camelize(str) {
    return str
    .toLowerCase()
    .split('-')
    .map((word, index) =>
    (index === 0) ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}
console.log(camelize('This-is-an-example'));
