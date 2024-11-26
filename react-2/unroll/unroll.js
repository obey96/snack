function unroll(squareArray) {
    if (!squareArray || squareArray.length === 0) return [];
  
    const result = [];
    while (squareArray.length) {
      // Take the first row
      result.push(...squareArray.shift());
  
      // Take the last element of remaining rows
      for (let row of squareArray) {
        if (row.length) result.push(row.pop());
      }
  
      // Take the last row in reverse order
      if (squareArray.length) {
        result.push(...(squareArray.pop().reverse()));
      }
  
      // Take the first element of remaining rows (bottom to top)
      for (let i = squareArray.length - 1; i >= 0; i--) {
        if (squareArray[i].length) result.push(squareArray[i].shift());
      }
    }
    return result;
  }
  
  module.exports = unroll;
  