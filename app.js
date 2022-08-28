function between(a, b) {
    const result = [];
    for (i = a; i <= b; i++) {
      result.push(i);
    }
    return result;
  }
  
  console.log(between(1, 5));