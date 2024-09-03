const findTheOldest = function (arr) {
  /*  const age = (x) => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
    const oldest = arr.sort((a, b) =>
      age(a) > age(b) ? -1 : 1
    );
    return oldest[0]; */

  const currentYear = new Date().getFullYear();
  const oldest = arr.sort((a, b) => {
    const last = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    const next = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    return next - last;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
