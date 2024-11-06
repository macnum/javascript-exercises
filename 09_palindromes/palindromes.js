const palindromes = function (str) {
  const regexPattern = /[\w\d]/;
  const backWords = str
    .split('')
    .reverse()
    .filter((letter) => regexPattern.test(letter))
    .join('')
    .toLowerCase();
  const word = str
    .match(/[\w\d]/g)
    .join('')
    .toLowerCase();
  return backWords === word;
};

// Do not edit below this line
module.exports = palindromes;
// "str1-1 s".match(/[\w\d]/g).reverse().join("")
