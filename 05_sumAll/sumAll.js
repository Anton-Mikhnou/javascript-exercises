const sumAll = function(numberOne, numberTwo) {
    let sum = 0;
    for (numberOne; numberOne <= numberTwo; numberOne++){
    sum += numberOne;
    }
    return sum
};
sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
