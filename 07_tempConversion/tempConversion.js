const convertToCelsius = function(fahrenheit) {
  let value = (fahrenheit - 32) * 5/9;
  return +value.toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let value = (celsius * 9/5) + 32;
  return +value.toFixed(1);
};
convertToCelsius(-100);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
