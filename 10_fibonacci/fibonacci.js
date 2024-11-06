const fibonacci = function (number) {
  let a = 0;
  let b = 1;
  let c;

  number = parseInt(number);
  if (number < 0) return 'OOPS';
  if (number === 0) return 0;
  if (number === 1 && number === 2) return 1;
  for (let i = 2; i <= number; i++) {
    c = a;
    a = b;
    b = c + a;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
