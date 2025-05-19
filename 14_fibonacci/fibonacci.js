const fibonacci = function (fib) {
	let a = 1;
	let b = 1;
	fib = parseInt(fib);
	let sequence = null;
	if (fib < 0) return 'OOPS';
	if (fib == 0) return 0;
	if (fib == 1) return 1;
	for (let i = 2; i <= fib; i++) {
		sequence = a + b;
		a = b;
		b = sequence;
	}
	return a;
};

// Do not edit below this line
module.exports = fibonacci;
