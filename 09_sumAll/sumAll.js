const sumAll = function (min, max) {
    if (min < 0 || max < 0) return "ERROR";
    else if (Number.isInteger(min) && Number.isInteger(max)) {
        if (min > max) {
            let number = max;
            max = min;
            min = number;

        }

        let number = null;
        for (min; min <= max; min++) {
            number += min;
        }
        return number;

    } else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
