let user = {
    name: "Василий Иванович",
    age: 35
  };
let toJSONAndBack = JSON.parse(JSON.stringify(user));
console.log(toJSONAndBack);
