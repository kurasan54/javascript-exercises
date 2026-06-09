const convertToCelsius = function(fahrenheit) {
  let temp = fahrenheit;
  fahrenheit = (temp - 32) * (5/9);
  return temp = parseFloat(fahrenheit.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let temp = celsius;
  celsius = (temp * (9/5)) + 32;
  return temp = parseFloat(celsius.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
