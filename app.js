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


  function otherAngle(a, b) {
    const c = 180 - (a + b);
    return c;
  }


  const reverseSeq = n => {
    const arr = [];
    for (let i = n; i >= 1; i--) {
      arr.push(i);
    }
    return arr;
  }


  const flip=(d, a)=>{
    let x = 0;
    if (d === 'R') {
    for (let i = 0; i < a.length; i++) {
      for (let j = i; j < a.length; j++) {
        if (a[j] < a[i]) {
          x = a[j];
          a[j] = a[i];
          a[i] = x;
        }
      }
    }}
     else if (d === 'L') {
    for (let i = 0; i < a.length; i++) {
      for (let j = i; j < a.length; j++) {
        if (a[j] > a[i]) {
          x = a[j];
          a[j] = a[i];
          a[i] = x;
        }
      }
    }}
    
    return a;
  }


  function findUniq(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] !== arr[j]) return arr[i];
      }
    }
  }


  function findUniq(arr) {
    if (arr[0] !== arr[1] && arr[1] === arr[2]) {return arr[0];}
    else if (arr[0] !== arr[1] && arr[0] === arr[2]) {return arr[1];}
    else {
      for (let i = 0; i < arr.length; i++) {
      for (let k = i + 1; k < arr.length; k++) {
          if (arr[i] !== arr[k]) {
              return arr[k];
          }
      }
      }}
    }


    const arr = [3, 2, 10, 13, 22, 2];
    function sumOfDifferences(arr) {
      let a = 0;
      let result = 0;
      
      for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
          if (arr[j] > arr[i]) {
            a = arr[j];
            arr[j] = arr[i];
            arr[i] = a;
          }
        }
      }
      for (let x = 1; x < arr.length; x++) {
        result += arr[x-1] - arr[x];
      }
      return result;
    }
    
    console.log(sumOfDifferences(arr));