let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  const sum = (object => {
    let keySum = 0;  
    for (let key in object) {
        keySum += object[key];
      }
    return keySum;
  });
  console.log(sum(salaries));
