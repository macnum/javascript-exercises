const palindromes = function (str) {
  const cleanStr = str.toLowerCase().replace(/[^\w\d]/g, '');

  return cleanStr === cleanStr.split('').reduce((rev, char) => char + rev, '');
};

// Do not edit below this line
module.exports = palindromes;
// "str1-1 s".match(/[\w\d]/g).reverse().join("")
