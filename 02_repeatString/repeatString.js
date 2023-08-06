const repeatString = function(word, item) {
    if (item < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < item; i++){
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
