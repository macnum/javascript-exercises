const factorial = function (n) {
	if (n === 0) return 1;
	if (!Number.isInteger(n) || !(n > 0)) return undefined;

	return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;
