const fibonacci = function (fib) {
  let a = 0;
  let b = 1;
  let c;

  fib = +fib;
  if (fib < 0) return "OOPS";
  else if (fib === 1) {
    return 1;
  } else if (fib === 0) {
    return 0;
  } else {
    for (let i = 2; i <= fib; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
};

// Do not edit below this line
module.exports = fibonacci;
