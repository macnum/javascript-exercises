const add = function (firstOperand, secondOperand) {
  return firstOperand + secondOperand;
};

const subtract = function (firstOperand, secondOperand) {
  return firstOperand - secondOperand;
};

const sum = function (arrOfNumbers) {
  return arrOfNumbers.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function (arrOfNumbers) {
  return arrOfNumbers.reduce((acc, cur) => acc * cur, 1);
};

const power = function (number, pow) {
  return Math.pow(number, pow);
};

const factorial = function (number) {
  if (n === 0) return 1;
  let factorial = 1;
  for (number; number > 0; number--) {
    factorial *= number;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
