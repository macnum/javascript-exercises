const sumAll = function (num1, num2) {
  let max;
  let min;
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
  if (num1 > num2) max = num1;
  if (num2 >= num1) max = num2;
  if (num1 < num2) min = num1;
  if (num2 <= num1) min = num2;

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
