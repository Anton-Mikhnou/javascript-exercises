const palindromes = function (word) {
    let cleanWord = word.toLowerCase().replace(/[^\w]/g, "");
    if (cleanWord === cleanWord.split("").reverse().join("")){
        return true;
    } return false;
};

palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
