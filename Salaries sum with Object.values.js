// (MYSELF)
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(obj) {
    let sum = 0;
    for (let value of Object.values(obj)) {
        sum += value;
    }
    return sum;
  }
  console.log( sumSalaries(salaries) );
