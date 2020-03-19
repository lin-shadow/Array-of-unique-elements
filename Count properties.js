// (MYSELF)
let user = {
    name: 'John',
    age: 30
  };
  function countProperties(obj) {
      return Object.keys(obj).length;
  }
  console.log( countProperties(user) );
