const leapYears = function(year) {
    if (year % 100 == 0 && year % 400 !== 0){
        return false
    } else if(year % 4 == 0 || year % 400 == 0){
        return true;
    }
    return false
};
leapYears(1996)

// Do not edit below this line
module.exports = leapYears;
