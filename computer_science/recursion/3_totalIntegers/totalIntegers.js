const isObject = (value) => typeof value === 'object' && value !== null;

const totalIntegers = function (obj) {
	if (!isObject(obj)) return;
	let total = 0;

	const element = Object.values(obj);

	for (let el of element) {
		if (Number.isInteger(el)) {
			++total;
		} else if (isObject(el)) {
			total += totalIntegers(el);
		}
	}

	return total;
};

// Do not edit below this line
module.exports = totalIntegers;
