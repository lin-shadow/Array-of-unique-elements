// (SO-SO)
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
function backwardsList(list) {
option 1:
    if (list.next) backwardsList(list.next);
    console.log(list.value);
option 2:
let reverseList = [];
while(list) {
    reverseList.push(list.value);
    list = list.next;
  }
for (let item of reverseList.reverse()) {
    console.log(item);
    }
}
backwardsList(list);
