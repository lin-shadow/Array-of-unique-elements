function ucFirst(str) {
    str = prompt('Enter a string');
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst());
