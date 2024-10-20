const removeFromArray = function (array, ...removeItem) {
  return array.filter((item) => !removeItem.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
