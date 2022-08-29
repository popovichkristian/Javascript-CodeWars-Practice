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


  function century(year) {
    let x = year / 100;
    
    return Math.ceil(x);
  }
  
  console.log(century(89))


  function arrayPlusArray(arr1, arr2) {
    let a  = 0;
    let b = 0;
    
    for (let i = 0; i < arr1.length; i++) {
      a += arr1[i];
    }
     for (let j = 0; j < arr2.length; j++) {
      b += arr2[j];
    }
    return a + b;
  }
  
  console.log(arrayPlusArray(arr1, arr2))



  function typeOfSum(a, b) {
    if (typeof a !== 'string' && typeof b !== 'string') return 'number';
    else return 'string';
  }