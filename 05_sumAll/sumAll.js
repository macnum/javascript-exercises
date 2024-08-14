const sumAll = function(firstNumber, lastNumber) {
    let number = 0;
    const largestNumber = Math.max(firstNumber, lastNumber);
    const lowestNumber = Math.min(firstNumber, lastNumber);

    if( (Number.isInteger(firstNumber) && Number.isInteger(lastNumber)) && (Math.sign(firstNumber) == 1 && Math.sign(lastNumber) ==1 ) ){
        for(let i = lowestNumber;i <= largestNumber;i++){
            number += i;
            }
            
            return number; 
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
