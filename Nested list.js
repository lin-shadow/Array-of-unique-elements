let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
function printedList(list) {
option 1:
   console.log(list.value);
   if (list.next) printedList(list.next);
option 2:
while(list) {
    console.log(list.value);
    list = list.next;
  }
}
printedList(list);
