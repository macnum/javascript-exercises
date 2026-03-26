const findTheOldest = function (oldest) {
	let currentYear = new Date().getFullYear();
	oldest.sort((a, b) => {
		const prev = (a.yearOfDeath || currentYear) - a.yearOfBirth;
		const next = (b.yearOfDeath || currentYear) - b.yearOfBirth;
		return prev > next ? -1 : 1;
	});
	return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
