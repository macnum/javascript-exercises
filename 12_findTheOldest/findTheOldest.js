const findTheOldest = function (arr) {
  const sortedByOldest = arr.sort((a, b) => {
    if (!a.yearOfDeath || !b.yearOfDeath) {
      const currentYear = new Date().getFullYear();
      a.yearOfDeath = b.yearOfDeath = currentYear;
    }
    const prev = a.yearOfDeath - a.yearOfBirth;
    const next = b.yearOfDeath - b.yearOfBirth;
    return next - prev;
  });
  const oldest = sortedByOldest[0];
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
