const removeFromArray = function(arr, ...itemToRemove) {
    return arr.filter(item => !itemToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
