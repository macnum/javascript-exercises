const repeatString = function(string, numberOfRepeat) {
    let stringRepeated ="";
    if(numberOfRepeat < 0) return 'ERROR';
    for(let i = numberOfRepeat; i > 0; i-- ) {
        stringRepeated += string;
    }
    return stringRepeated
};
// Do not edit below this line
module.exports = repeatString;

