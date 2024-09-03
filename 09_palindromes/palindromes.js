const palindromes = function (string) {
  const regExp = /[a-zA-Z0-9]/;
  const newString = string
    .toLowerCase()
    .split("")
    .filter((word) => regExp.test(word))
    .join("");

  const backwards = string
    .toLowerCase()
    .split("")
    .filter((word) => regExp.test(word))
    .reverse()
    .join("");

  return newString === backwards;
};

// Do not edit below this line
module.exports = palindromes;
