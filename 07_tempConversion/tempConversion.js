const convertToCelsius = function (f) {
  const isCelsius = (f - 32) * (5 / 9);
  return +isCelsius.toFixed(1);
};

const convertToFahrenheit = function (c) {
  const isFahrenheit = c * (9 / 5) + 32;
  return +isFahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
