const sumAll = function (num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    if (num1 < 0 || num2 < 0) {
      return `ERROR`;
    } else {
      // Method 1: formula for summation
      //   return ((num1 + num2) * (Math.abs(num1 - num2) + 1)) / 2;
      // Method 2: Loop
      const start = num1 < num2 ? num1 : num2;
      const iterationSteps = Math.abs(num1 - num2);
      const end = start + iterationSteps;
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += i;
      }
      return sum;
    }
  } else {
    return `ERROR`;
  }
};

module.exports = sumAll;
