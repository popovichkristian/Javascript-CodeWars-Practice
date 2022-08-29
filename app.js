function between(a, b) {
    const result = [];
    for (i = a; i <= b; i++) {
      result.push(i);
    }
    return result;
  }
  
  console.log(between(1, 5));

  var humanYearsCatYearsDogYears = function(humanYears) {
    let cy = 0;
    let dy = 0;
    let arr = [];
    
    if (humanYears === 1) {
      cy = 15;
      dy = 15;
    } else if (humanYears === 2) {
      cy = 24;
      dy = 24;
    } else if (humanYears > 2) {
      cy = 24 + 4 * (humanYears - 2);
      dy = 24 + 5 * (humanYears - 2);
    }
    
    arr.push(humanYears, cy, dy);
    return arr;
  }

  function howManyEvenNumbers(num) {
    let count = 0;
    const arr = ('' + num).split('').map(Number);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        count++;
      }
    }
      return count;
  }
  
  howManyEvenNumbers(56465456)