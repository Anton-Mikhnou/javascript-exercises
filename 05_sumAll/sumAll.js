const sumAll = function(numberOne, numberTwo) {
    let sum = 0;
    if (numberOne <= numberTwo){
        for (numberOne; numberOne <= numberTwo; numberOne++){
        sum += numberOne;
        }
    } else if (numberOne >= numberTwo){
        for (numberTwo; numberTwo <= numberOne; numberTwo++){
        sum += numberTwo;
        }
    }
    return sum;
};
sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
