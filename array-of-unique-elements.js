function unique(array) {
   for (let item of array) {
       if (array.includes(item, array.indexOf(item))) array.splice(array.indexOf(item), 1);
         array = array.filter((item, index) =>
          array.indexOf(item) === index);
    }
    return array;
}
unique(strings);
console.log( strings );
