const sumAll = function(numberOne, numberTwo) {
    let sum = 0;
    let i = numberOne;
    let j = numberTwo;
    if(typeof numberOne == 'string' || typeof numberTwo == 'string' || Array.isArray(numberOne) || Array.isArray(numberTwo) || numberOne < 0 || numberTwo < 0){
        return "ERROR";
    }
    else if (i <= j){
        for (i; i <= j;i++){
        sum += i;
        }
    } else if (i >= j){
        for (j; j <= i; j++){
        sum += j;
        }
    }
    return sum;
};
sumAll([90, 1], 10);

// Do not edit below this line
module.exports = sumAll;
