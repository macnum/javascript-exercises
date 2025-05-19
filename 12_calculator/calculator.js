const add = function (operand1, operand2) {
	return operand1 + operand2;
};

const subtract = function (operand1, operand2) {
	return operand1 - operand2;
};

const sum = function (operandArr) {
	return operandArr.reduce((initial, operand) => initial + operand, 0);
};

const multiply = function (operandArr) {
	return operandArr.reduce((initial, operand) => initial * operand, 1);
};

const power = function (operand, pow) {
	return operand ** pow;
};

const factorial = function (factorial) {
	let sum = 1;
	while (factorial > 0) {
		sum *= factorial;
		factorial--;
	}
	return sum;
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
