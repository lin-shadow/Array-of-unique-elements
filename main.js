// Problem - оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:
// function unique(arr) {
//  /* ваш код */
// }
// let strings = ["кришна", "кришна", "харе", "харе",
//  "харе", "харе", "кришна", "кришна", ":-O"
// ];
// alert( unique(strings) ); // кришна, харе, :-O

// My solution - why doesn't it work?
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"];
function unique(array) {
    for (let item of array) {
        if (array.includes(item, array.indexOf(item))) array.splice(array.indexOf(item), 1);
    }
    return array;
}
console.log( unique(strings) ); // Теперь возвращает ['кришна', 'кришна', 'харе', 'харе'] ??? whyyyy ??

// Textbook solution - a NEW array
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"];
function unique(array) {
    let uniqueResult = [];
    for (let item of array) {
        if (!uniqueResult.includes(item)) uniqueResult.push(item);
    }
    return uniqueResult;
}
console.log(unique(strings));
