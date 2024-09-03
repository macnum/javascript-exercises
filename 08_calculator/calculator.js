const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => total * current);
};

const power = function (a, pow) {
  let toPow = 1;
  for (let i = 1; i <= pow; i++) {
    toPow *= a;
  }
  return toPow;
};

const factorial = function (f) {
  let factorial = 1;
  while (f > 0) {
    factorial *= f;
    --f;
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
