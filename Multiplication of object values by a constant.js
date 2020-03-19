let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplyNumeric(object, n) {
    for (let key in object) {
        if (typeof object[key] == 'number')
        object[key] *= n;
    }
}
multiplyNumeric(menu, 2)
console.log(menu);
