const convertToCelsius = function(temp) {
  temp = ((temp-32) * 5/9);
  result = Math.round(temp * 10) / 10;
  return result;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 9/5) + 32;
  result = Math.round(temp * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// npm test tempConversion.spec.js