const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(array) {
	let res = array.reduce(function(sum, elem){
    return sum + elem;
  }, 0)
  return res;
};

const multiply = function(array) {
  let res = array.reduce(function(sum, elem){
    return sum * elem;
  }, 1)
  return res;
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(number) {
	if (number === 0){
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};
// add(2,6);
// subtract(10, 4);
// sum([1, 3, 5, 7, 9]);
// multiply([2, 4, 6, 8, 10, 12, 14]);
// power(4, 3);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
