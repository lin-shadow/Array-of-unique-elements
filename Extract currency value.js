function extractCurrencyValue(str) {
    if (!str) return 'Empty string!';
    return +str.slice(1);
}
alert(extractCurrencyValue('$120'));
